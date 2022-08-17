import { MediaPipeHandsMediaPipeModelConfig, MediaPipeHandsTfjsModelConfig } from "@tensorflow-models/hand-pose-detection"
import MLHandGestureModel from "./ml-hand-gesture-model"

export default class VideoBoard {

    private _tf
    private _handDetector
    private _emptyHand: number = 0
    private _prediction_frame_rate: number
    private _past_prediction_time: number
    private _trainingState: number
    private _numberOfTrainingStates = 2
    public onDraw: (x: number, y: number, px: number, py: number, mode: string, radius: number, canvasSize) => void
    private _stopSignal: boolean = false;

    private _gestureModels: {
        drawing: MLHandGestureModel,
        eraser: MLHandGestureModel
    } = {
            drawing: null,
            eraser: null,
        }

    videoSource: HTMLVideoElement
    canvas: HTMLCanvasElement

    private _canvas_ctx: CanvasRenderingContext2D
    private _drawing_position = {
        x: 0,
        y: 0,
        timestamp: 0
    }

    constructor(videoSource: HTMLVideoElement, canvas: HTMLCanvasElement, onDraw: (x: number, y: number, px: number, py: number, mode: string, radius: number, canvasSize) => void = null) {
        this.videoSource = videoSource;
        this.canvas = canvas;
        this.onDraw = onDraw
    }


    configureCanvas( width = this.videoSource.videoWidth,height = this.videoSource.videoHeight) {
        this._canvas_ctx = this.canvas.getContext('2d')
        this._canvas_ctx.canvas.width = width;
        this._canvas_ctx.canvas.height = height;
    }


    async configureVideoboardML() {
        this._prediction_frame_rate = 2000
        this._trainingState = -1;
        this._past_prediction_time = Date.now()

        this._tf = await import("@tensorflow/tfjs/dist/tf")
        const handPoseDetection = await import("@tensorflow-models/hand-pose-detection")


        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig: MediaPipeHandsMediaPipeModelConfig | MediaPipeHandsTfjsModelConfig = {
            runtime: 'mediapipe',
            solutionPath: '/@mediapipe/hands',
            modelType: 'full',
            maxHands: 1,
        }
        this._handDetector = await handPoseDetection.createDetector(model, detectorConfig);

        this._gestureModels.drawing = new MLHandGestureModel(this._tf);
        this._gestureModels.eraser = new MLHandGestureModel(this._tf);

        await this._gestureModels.drawing.loadModel('/models/v19/drawing-model.json');
        await this._gestureModels.eraser.loadModel('/models/eraser/v1/drawing-model.json');
    }



    async predictTrainHandPositions() {
        const now = Date.now()
        const time_between_predictions = now - this._past_prediction_time

        if (true && time_between_predictions > (1000 / this._prediction_frame_rate)) {
            this._past_prediction_time = now

            const value = await this._handDetector.estimateHands(this.videoSource)
            if (value.length > 0 && value[0].score > 0.94) {
                this._emptyHand = 0;
                if (value[0].keypoints3D[3] && value[0].keypoints3D[8]) {
                    let x = value[0].keypoints3D[4].x - value[0].keypoints3D[8].x
                    let y = value[0].keypoints3D[4].y - value[0].keypoints3D[8].y
                    let z = value[0].keypoints3D[4].z - value[0].keypoints3D[8].z

                    const distance = Math.sqrt(x * x + y * y)
                    const distance3d = Math.sqrt(x * x + y * y + z * z)

                    const midpointIndexThumb = {
                        x: (value[0].keypoints[4].x + value[0].keypoints[8].x) / 2,
                        y: (value[0].keypoints[4].y + value[0].keypoints[8].y) / 2,
                    }

                    const midpointIndexMiddle = {
                        x: (value[0].keypoints[8].x + value[0].keypoints[12].x) / 2,
                        y: (value[0].keypoints[8].y + value[0].keypoints[12].y) / 2,
                    }

                    x = value[0].keypoints[8].x - value[0].keypoints[7].x,
                        y = value[0].keypoints[8].y - value[0].keypoints[7].y

                    let eraseRadius = Math.sqrt(x * x + y * y)

                    x = value[0].keypoints3D[8].x - value[0].keypoints3D[12].x,
                        y = value[0].keypoints3D[8].y - value[0].keypoints3D[12].y
                    z = value[0].keypoints3D[8].z - value[0].keypoints3D[12].z

                    const distanceIndexMiddle = Math.sqrt(x * x + y * y + z * z)
                    if (Math.sqrt(x * x + y * y) > 0.03)
                        eraseRadius = Math.sqrt(x * x + y * y) * 1000 + eraseRadius

                    // value[0].keypoints3D[21] = { x: distance, y: distance, z: distance }
                    // value[0].keypoints3D[22] = { x: distance3d, y: distance3d, z: distance3d }

                    const drawingModelInput = []
                    const eraserModelInput = []

                    for (let i of [4, 8]) {
                        drawingModelInput.push(value[0].keypoints3D[i])
                    }
                    drawingModelInput.push({ x: distance, y: distance, z: distance })

                    for (let i in value[0].keypoints3D) {
                        eraserModelInput.push(value[0].keypoints3D[i])
                    }

                    if (this._gestureModels.drawing.isModelLoaded()) {
                        let drawingPrediction = null;
                        let eraserPrediction = null;

                        if (distance < 0.03) {
                            drawingPrediction = await this._gestureModels.drawing.predict(this._tf.tensor3d([drawingModelInput.map((el) => [el.x, el.y, el.z])], [1, 3, 3]))
                        } else {
                            if (this._gestureModels.eraser.isModelLoaded()) {
                                eraserPrediction = await this._gestureModels.eraser.predict(this._tf.tensor3d([eraserModelInput.map((el) => [el.x, el.y, el.z])], [1, 21, 3]))
                            } else {
                                if (this._trainingState in [...Array(this._numberOfTrainingStates).keys()]) {
                                    this._numberOfTrainingStates = 3
                                    console.log("Training state is " + this._trainingState, eraserModelInput)
                                    this._gestureModels.eraser.trainingdataset[this._trainingState].push(eraserModelInput.map((el) => [el.x, el.y, el.z]))
                                } else if (this._trainingState == 2) {
                                    console.log("Training")
                                    this._trainingState = -1
                                    await this._gestureModels.eraser.train({
                                        download: true,
                                        epochs: 50,
                                        learningRate: 0.01,
                                        validationSplit: 0.2,
                                        shuffle: true,
                                        inputShape: [21, 3],
                                        neurons: 1,
                                        yes_output: [1, 0],
                                        no_output: [0, 1]
                                    })
                                }
                            }
                        }

                        if (drawingPrediction && drawingPrediction[0] > 0.5) {
                            this.canvasPencilAction(midpointIndexThumb.x, midpointIndexThumb.y)
                        } else if (eraserPrediction && eraserPrediction[0] > 0.5) {
                            this.canvasPencilAction(midpointIndexMiddle.x, midpointIndexMiddle.y, undefined, undefined, "eraser", eraseRadius)
                        } else {
                            this.setDrawingPosition(midpointIndexThumb.x, midpointIndexThumb.y)
                        }



                    } else {
                        if (this._trainingState in [...Array(this._numberOfTrainingStates).keys()]) {
                            this._gestureModels.drawing.trainingdataset[this._trainingState].push(drawingModelInput.map((el) => [el.x, el.y, el.z]))
                        } else if (this._trainingState == this._numberOfTrainingStates) {
                            this._trainingState = -1
                            await this._gestureModels.drawing.train({
                                download: true,
                                epochs: 50,
                                learningRate: 0.01,
                                validationSplit: 0.2,
                                shuffle: true,
                                inputShape: [3, 3],
                                neurons: 1,
                                yes_output: [1, 0],
                                no_output: [0, 1]
                            })
                        }
                    }
                }
            } else {
                if (this._emptyHand > 100) {
                    if (this._trainingState in [...Array(this._numberOfTrainingStates).keys()]) {
                        console.log("training state", this._trainingState)
                        await new Promise((resolve) => setTimeout(() => { resolve(true) }, 3000))
                        this._trainingState += 1
                    }
                }
                this._emptyHand += 1
            }
            // this.predictTrainHandPositions()
        }
        if (!this._stopSignal) {
            requestAnimationFrame(this.predictTrainHandPositions.bind(this));
        } else {
            this._stopSignal = false
        }
    }


    async start() {
        !this._tf && await this.configureVideoboardML()
        this._stopSignal = false
        this.predictTrainHandPositions()
    }

    stop() {
        this._stopSignal = true
    }


    setDrawingPosition(x, y) {
        this._drawing_position.x = x;
        this._drawing_position.y = y;
        this._drawing_position.timestamp = Date.now()
    }

    canvasPencilAction(
        x,
        y,
        px = this._drawing_position.x,
        py = this._drawing_position.y,
        mode = "draw",
        radius = 10,
        isRemote = false,
        onDraw = (x, y, px, py, mode, radius, canvasSize) => this.onDraw(x, y, px, py, mode, radius, canvasSize),
        canvasWidth = this.videoSource.videoWidth,
        canvasHeight = this.videoSource.videoHeight
    ) {
        (!this._canvas_ctx || this._canvas_ctx.canvas.width!=canvasWidth || this._canvas_ctx.canvas.height!=canvasHeight ) && this.configureCanvas(canvasWidth, canvasHeight)

        if (!isRemote && Date.now() - this._drawing_position.timestamp > 1000) {
            this.setDrawingPosition(x, y)
        } else {

            this._canvas_ctx.beginPath();
            if (mode == "draw") {
                this._canvas_ctx.globalCompositeOperation = "source-over";

                this._canvas_ctx.strokeStyle = '#c0392b';
                this._canvas_ctx.lineWidth = 5;
                this._canvas_ctx.lineCap = "round";

                this._canvas_ctx.moveTo(px, py);
                !isRemote && this.setDrawingPosition(x, y)
                this._canvas_ctx.lineTo(x, y);
                this._canvas_ctx.stroke();
            }
            else {
                this._canvas_ctx.globalCompositeOperation = "destination-out";
                this._canvas_ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                this._canvas_ctx.fill();
            }

            if (onDraw != null) {
                onDraw(x, y, px, py, mode, radius, {
                    width: this._canvas_ctx.canvas.width, height: this._canvas_ctx.canvas.height
                });
            }
        }

    }

}