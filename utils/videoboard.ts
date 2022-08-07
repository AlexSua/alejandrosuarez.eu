import { MediaPipeHandsMediaPipeModelConfig, MediaPipeHandsTfjsModelConfig } from "@tensorflow-models/hand-pose-detection"

export default class VideoBoard {
    trainingState: number = 0

    private _trainingdataset: Array<Array<any>>
    private _handDetector
    private _drawingModel
    private _tf
    private _emptyHand = 0
    videoSource

    constructor(videoSource) {
        this.videoSource = videoSource;
        this._trainingdataset = [[], []]

    }

    async configureHandModel() {
        const handPoseDetection = await import("@tensorflow-models/hand-pose-detection")
        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig: MediaPipeHandsMediaPipeModelConfig | MediaPipeHandsTfjsModelConfig = {
            runtime: 'mediapipe', // or 'tfjs',
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
            modelType: 'full',
            maxHands: 1,
        }
        this._handDetector = await handPoseDetection.createDetector(model, detectorConfig);
    }



    async predictTrainHandPositions() {
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
                let distance = Math.sqrt(x * x + y * y + z * z)
                value[0].keypoints3D[21] = {x:distance,y:distance,z:distance}
                const input = []

                for (let i of [4,8,21]) {
                // for (let i of [4,8]) {
                    input.push(value[0].keypoints3D[i])
                }
                https://image.nuxtjs.org/getting-started/installation
                if (this._drawingModel) {
                    let prediction = this.predictDrawing(this._tf.tensor3d([input.map((el) => [el.x, el.y, el.z])], [1, 3, 3]))
                    console.log("model", prediction);
                    if (prediction[0] > 0.5) {
                        console.log("draw")
                    }

                } else {
                    console.log(value[0])
                    this._trainingdataset[this.trainingState].push(input.map((el) => [el.x, el.y, el.z]))
                    console.log("data collection:", this.trainingState)
                }
            }
        } else {
            if (this._emptyHand > 20) {
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
    }

    async trainDrawingModel() {
        const tf = await import("@tensorflow/tfjs/dist/tf")
        this._drawingModel = tf.sequential();

        this._drawingModel.add(
            tf.layers.dense({
                units: 1,
                inputShape: [3, 3],
                activation: "relu",
                bias: true
            })
        );

        this._drawingModel.add(
            tf.layers.flatten()
        );

        this._drawingModel.add(
            tf.layers.dense({
                units: 1,
                activation: "relu",
                bias: true
            })
        );

        const optimizer = tf.train.adam(0.001);

        this._drawingModel.compile({
            loss: 'meanSquaredError',
            optimizer: optimizer,
            metrics: ['mse']
        });

        let min = this._trainingdataset[0].length
        if (this._trainingdataset[1].length < min) {
            min = this._trainingdataset[1].length
        }
        this._trainingdataset[0] = this._trainingdataset[0].slice(0, min)
        this._trainingdataset[1] = this._trainingdataset[1].slice(0, min)

        tf.util.shuffle(this._trainingdataset[0])
        tf.util.shuffle(this._trainingdataset[1])

        console.log(this._trainingdataset[0])
        console.log(this._trainingdataset[1])

        const xs = tf.tensor3d([...this._trainingdataset[0], ...this._trainingdataset[1]]);
        const ys = tf.tensor1d([...this._trainingdataset[0].map((el) => false), ...this._trainingdataset[1].map(el => true)]);

        await this._drawingModel.fit(xs, ys, { epochs: 100, });
        await this._drawingModel.save('downloads://drawing-model');


    }

    predictDrawing(tensor) {
        return this._drawingModel.predict(tensor).dataSync()
    }

    async start() {
        while (true) {
            await this.predictTrainHandPositions()
        }
    }

    draw() {


    }

}