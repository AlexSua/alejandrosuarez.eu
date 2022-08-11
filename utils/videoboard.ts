import { MediaPipeHandsMediaPipeModelConfig, MediaPipeHandsTfjsModelConfig } from "@tensorflow-models/hand-pose-detection"
// import HandsPredictionWorker from './hands-prediction.worker.ts?worker'

export default class VideoBoard {

    private _trainingdataset: Array<Array<any>>
    private _handDetector
    private _drawingModel
    private _tf
    private _emptyHand

    private _prediction_frame_rate: number
    private _past_prediction_time: number


    videoSource: HTMLVideoElement
    canvas: HTMLCanvasElement
    trainingState: number

    private _canvas_ctx: CanvasRenderingContext2D
    private _drawing_position = {
        x: 0,
        y: 0
    }

    constructor(videoSource, canvas) {
        this.videoSource = videoSource;
        this.canvas = canvas;
        this.trainingState = -1;

        this._trainingdataset = [[], []]
        this._handDetector = null
        this._drawingModel = null
        this._tf = null
        this._emptyHand = 0

        this._prediction_frame_rate = 200
        this._past_prediction_time = 0



    }


    configureCanvas() {
        this._canvas_ctx = this.canvas.getContext('2d')
        console.log(this.videoSource.videoWidth, this.videoSource.videoHeight)
        this._canvas_ctx.canvas.width = this.videoSource.videoWidth;
        this._canvas_ctx.canvas.height = this.videoSource.videoHeight;

    }

    async configureHandModel() {
        const handPoseDetection = await import("@tensorflow-models/hand-pose-detection")
        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig: MediaPipeHandsMediaPipeModelConfig | MediaPipeHandsTfjsModelConfig = {
            runtime: 'mediapipe',
            solutionPath: '@mediapipe/hands',
            modelType: 'full',
            maxHands: 1,
        }
        this._handDetector = await handPoseDetection.createDetector(model, detectorConfig);
    }



    async predictTrainHandPositions() {

        const now = Date.now()
        const time_between_predictions = now - this._past_prediction_time

        if (true && time_between_predictions > (1000/this._prediction_frame_rate )) {
            this._past_prediction_time = now

            if (!this._handDetector) {
                this._tf = await import("@tensorflow/tfjs/dist/tf")
                await this.configureHandModel()
            }

            const value = await this._handDetector.estimateHands(this.videoSource)
            console.log("hand", value)
            if (value.length > 0) {
                this._emptyHand = 0;
                if (value[0].keypoints3D[3] && value[0].keypoints3D[8]) {
                    let x = value[0].keypoints3D[4].x - value[0].keypoints3D[8].x
                    let y = value[0].keypoints3D[4].y - value[0].keypoints3D[8].y
                    let z = value[0].keypoints3D[4].z - value[0].keypoints3D[8].z
                    let distance = Math.sqrt(x * x + y * y)
                    let midpoint = {
                        x: (value[0].keypoints[4].x + value[0].keypoints[8].x) / 2,
                        y: (value[0].keypoints[4].y + value[0].keypoints[8].y) / 2,
                    }
                    console.log("distance", distance)
                    // console.log(midpoint.x, midpoint.y)

                    value[0].keypoints3D[21] = { x: distance, y: distance, z: distance }
                    const input = []

                    // for (let i of [4, 8, 21,7,6,5,3,2,1,0]) {
                    for (let i of [4, 8, 21]) {
                    // for (let i in value[0].keypoints3D) {
                        // for (let i of [4,8]) {
                        input.push(value[0].keypoints3D[i])
                    }

                    https://image.nuxtjs.org/getting-started/installation
                    if (this._drawingModel) {
                        let prediction = this.predictDrawing(this._tf.tensor3d([input.map((el) => [el.x, el.y, el.z])], [1, 3, 3]))
                        // console.log("model", prediction);



                        if (prediction[0] > 0.5) {
                            // if (distance < 0.02) {
                            this.draw(midpoint.x, midpoint.y)
                        } else {
                            this.setDrawingPosition(midpoint.x, midpoint.y)
                        }

                    } else {
                        if (this.trainingState != -1) {
                            console.log(value[0])
                            this._trainingdataset[this.trainingState].push(input.map((el) => [el.x, el.y, el.z]))
                            console.log("data collection:", this.trainingState)
                        } else {
                            await this.trainDrawingModel()
                        }
                    }
                }
            } else {
                if (this._emptyHand > 100) {
                    if (this.trainingState == 0) {
                        console.log("training state", this.trainingState)
                        await new Promise((resolve) => setTimeout(() => { resolve(true) }, 3000))
                        this.trainingState = 1
                    } else if (this.trainingState == 1) {
                        console.log("training state", this.trainingState)
                        await new Promise((resolve) => setTimeout(() => { resolve(true) }, 3000))
                        this.trainingState = -1
                        await this.trainDrawingModel()
                    }
                }
                this._emptyHand += 1
            }
            // this.predictTrainHandPositions()
        }
        requestAnimationFrame(this.predictTrainHandPositions.bind(this));
    }

    download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    async trainDrawingModel(newModel: boolean = false) {
        const learningRate = .01;
        const numberOfEpochs = 200;
        const optimizer = this._tf.train.adam(learningRate);

        if (newModel) {
            this._drawingModel = this._tf.sequential();
            this._drawingModel.add(
                this._tf.layers.dense({
                    units: 10,
                    inputShape: [22, 3],
                    activation: "relu",
                })
            );

            this._drawingModel.add(
                this._tf.layers.flatten()
            );
            this._drawingModel.add(
                this._tf.layers.dense({
                    units: 2,
                    activation: "softmax",
                    bias: true
                })
            );


        } else {
            const path = "/models/v9/"
            this._drawingModel = await this._tf.loadLayersModel(path+"drawing-model.json")
            // let uploadDataset =  await fetch(path+"training-dataset.json")
            // uploadDataset = JSON.parse(await uploadDataset.text())
            // console.log(uploadDataset)
            // this._trainingdataset[0] = [...uploadDataset[0],...this._trainingdataset[0]]
            // this._trainingdataset[1] = [...uploadDataset[1],...this._trainingdataset[1]]
        }


        this._drawingModel.compile({
            loss: 'categoricalCrossentropy',
            optimizer: optimizer,
            metrics: ['accuracy']
        });

        let min = this._trainingdataset[0].length
        if (this._trainingdataset[1].length < min) {
            min = this._trainingdataset[1].length
        }
        this._trainingdataset[0] = this._trainingdataset[0].slice(0, min)
        this._trainingdataset[1] = this._trainingdataset[1].slice(0, min)

        

        this._tf.util.shuffle(this._trainingdataset[0])
        this._tf.util.shuffle(this._trainingdataset[1])

        console.log(this._trainingdataset[0])
        console.log(this._trainingdataset[1])
        if (min > 0) {
            this.download(JSON.stringify(this._trainingdataset),"training-dataset.json","application/json")
            const xs = this._tf.tensor3d([...this._trainingdataset[0], ...this._trainingdataset[1]]);
            const ys = this._tf.tensor([...this._trainingdataset[0].map((el) => [0, 1]), ...this._trainingdataset[1].map(el => [1, 0])]);



            await this._drawingModel.fit(xs, ys, {
                epochs: numberOfEpochs, callbacks: {
                    onEpochEnd: async (epoch, logs) => {
                        console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
                    }
                }
            });
            await this._drawingModel.save('downloads://drawing-model');
        }

    }

    predictDrawing(tensor) {
        return this._drawingModel.predict(tensor).dataSync()
    }




    getImgFromSourceVideo() {
        const canvas = document.createElement('canvas');
        // ofc we have to set width and height equal to video sizes ...
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this.videoSource, 0, 0, this.videoSource.videoWidth, this.videoSource.videoHeight);
        const img = ctx.getImageData(0, 0, this.videoSource.videoWidth, this.videoSource.videoHeight);
        canvas.remove()
        return img;
    }

    async start() {
        this._past_prediction_time = Date.now()
        this.predictTrainHandPositions()
        // const worker = new Worker(new URL('../workers/hands-detection/hands-prediction.worker.ts', import.meta.url))
        this.configureCanvas()

        // const img = this.getImgFromSourceVideo()
        // worker.postMessage(img)
        // worker.onmessage = (e) => {
        //     console.log(e.data)
        //     worker.postMessage(this.getImgFromSourceVideo())
        // }
        // const getSrc = (path) => {
        //     const modules = import.meta.globEager("/utils/*")
        //     return modules["/utils/" + path].default;
        // };
        // const { data, post, terminate } = useWebWorker('./hands-prediction.worker.js')


        // const worker = new HandsPredictionWorker()
    }

    setDrawingPosition(x, y) {
        this._drawing_position.x = x;
        this._drawing_position.y = y;
    }

    counter = 0;

    draw(x, y) {
        this._canvas_ctx.beginPath();

        this._canvas_ctx.strokeStyle = '#c0392b';
        this._canvas_ctx.lineWidth = 5;
        this._canvas_ctx.lineCap = "round";

        this._canvas_ctx.moveTo(this._drawing_position.x, this._drawing_position.y);
        this.setDrawingPosition(x, y)
        this._canvas_ctx.lineTo(this._drawing_position.x, this._drawing_position.y);

        this._canvas_ctx.stroke();
        console.log("draw", x, y)
        this.counter += 1;


    }

}