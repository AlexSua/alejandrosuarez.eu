
class HandsPrediction {

    _trainingdataset
    _handDetector
    _drawingModel
    _tf
    _emptyHand

    trainingState


    constructor() {
        this.trainingState = 0;
        this._trainingdataset = [[], []]
        this._handDetector = null
        this._drawingModel = null
        this._tf = null
        this._emptyHand = 0
    }


    async configureHandModel() {
        const handPoseDetection = await import("@tensorflow-models/hand-pose-detection")
        const model = handPoseDetection.SupportedModels.MediaPipeHands;
        const detectorConfig = {
            runtime: 'mediapipe',
            solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
            modelType: 'full',
            maxHands: 1,
        }

        this._handDetector = await handPoseDetection.createDetector(model, detectorConfig);
    }

    async trainDrawingModel(newModel = false) {
        const learningRate = .01;
        const numberOfEpochs = 100;
        const optimizer = this._tf.train.adam(learningRate);

        if (newModel) {
            this._drawingModel = this._tf.sequential();
            this._drawingModel.add(
                this._tf.layers.dense({
                    units: 1,
                    inputShape: [3, 3],
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
            this._drawingModel = await this._tf.loadLayersModel("/models/v2/drawing-model.json")
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

    async predictTrainHandPositions(image) {
        if (!this._handDetector) {
            this._tf = await import("@tensorflow/tfjs/dist/tf")
            await this.configureHandModel()
        }

        const value = await this._handDetector.estimateHands(image)

        console.log("hand", value)
        if (value.length > 0) {
            this._emptyHand = 0;
            if (value[0].keypoints3D[3] && value[0].keypoints3D[8]) {
                let x = value[0].keypoints3D[4].x - value[0].keypoints3D[8].x
                let y = value[0].keypoints3D[4].y - value[0].keypoints3D[8].y
                let z = value[0].keypoints3D[4].z - value[0].keypoints3D[8].z
                let distance = Math.sqrt(x * x + y * y + z * z)
                let midpoint = {
                    x: (value[0].keypoints[4].x + value[0].keypoints[8].x) / 2,
                    y: (value[0].keypoints[4].y + value[0].keypoints[8].y) / 2,
                }
                // console.log(midpoint.x, midpoint.y)
    
                value[0].keypoints3D[21] = { x: distance, y: distance, z: distance }
                const input = []
    
                for (let i of [4, 8, 21]) {
                    // for (let i of [4,8]) {
                    input.push(value[0].keypoints3D[i])
                }
                https://image.nuxtjs.org/getting-started/installation
                if (this._drawingModel) {
                    let prediction = this.predictDrawing(this._tf.tensor3d([input.map((el) => [el.x, el.y, el.z])], [1, 3, 3]))
                    // console.log("model", prediction);
    
                    if (prediction[0] > 0.5) {
                        return(midpoint.x, midpoint.y,1)
                    } else {
                        return(midpoint.x, midpoint.y,0)
                    }
    
                } else {
                    console.log(value[0])
                    this._trainingdataset[this.trainingState].push(input.map((el) => [el.x, el.y, el.z]))
                    console.log("data collection:", this.trainingState)
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
    }

    predictDrawing(tensor) {
        return this._drawingModel.predict(tensor).dataSync()
    }

}

const handsPrediction = new HandsPrediction()

console.log("loading model")
handsPrediction.predictTrainHandPositions("")
// addEventListener('message', async (message) => {
//     // const result = await handsPrediction.predictTrainHandPositions(message.data)
//     console.log("reciver", message.data)
//     // postMessage(result);
// });