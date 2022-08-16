export default class MLHandGestureModel {

    private _tf
    private _model
    trainingdataset: Array<Array<any>>

    constructor(tf) {
        this._tf = tf
        this.trainingdataset = [[], []]
    }

    download(data: string, fileName: string, contentType: string = "application/json") {
        var a = document.createElement("a");
        var file = new Blob([data], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    isModelLoaded() {
        return this._model != null
    }

    async loadModel(modelPath: string = "/models/v19/drawing-model.json") {
        this._model = await this._tf.loadLayersModel(modelPath)
    }

    async uploadTrainingData(path: string = "/models/v19/"): Promise<Array<Array<any>>> {
        const uploadDataset = await fetch(path + "training-dataset.json")
        return JSON.parse(await uploadDataset.text())
    }

    async predict(tensor) {
        return this._model.predict(tensor).dataSync()
    }

    async train(trainOptions: {
        download: boolean,
        epochs: number,
        validationSplit: number,
        shuffle: boolean,
        learningRate: number,
        inputShape: number[],
        neurons: number,
        yes_output: number[],
        no_output: number[]
    } = {
            download: true,
            epochs: 50,
            learningRate: 0.01,
            validationSplit: 0.2,
            shuffle: true,
            inputShape: [3, 3],
            neurons: 1,
            yes_output: [1, 0],
            no_output: [0, 1]
        }, 
        previousModelPath: string | null = null, 
        trainingDatasetPath: string | null = null,) {

        const optimizer = this._tf.train.adam(trainOptions.learningRate);

        if (!previousModelPath) {
            this._model = this._tf.sequential();
            this._model.add(
                this._tf.layers.dense({
                    units: trainOptions.neurons,
                    inputShape: trainOptions.inputShape,
                    activation: "relu",
                })
            );

            this._model.add(
                this._tf.layers.flatten()
            );
            this._model.add(
                this._tf.layers.dense({
                    units: 2,
                    activation: "softmax", // "softmax"
                    bias: true // "bias"
                })
            );

        } else {
            await this.loadModel(previousModelPath)
        }

        this._model.compile({
            loss: 'categoricalCrossentropy',
            optimizer: optimizer,
            metrics: ['accuracy']
        });



        if (trainingDatasetPath) {
            const uploadDataset = await this.uploadTrainingData(trainingDatasetPath)
            this.trainingdataset[0] = [...uploadDataset[0], ...this.trainingdataset[0]]
            this.trainingdataset[1] = [...uploadDataset[1], ...this.trainingdataset[1]]
        }




        let min = this.trainingdataset[0].length
        if (this.trainingdataset[1].length < min) min = this.trainingdataset[1].length


        this.trainingdataset[0] = this.trainingdataset[0].slice(0, min)
        this.trainingdataset[1] = this.trainingdataset[1].slice(0, min)

        if (trainOptions.shuffle) {
            this._tf.util.shuffle(this.trainingdataset[0])
            this._tf.util.shuffle(this.trainingdataset[1])
        }


        if (min > 0) {
            trainOptions.download && this.download(JSON.stringify(this.trainingdataset), "training-dataset.json", "application/json")

            const xs = this._tf.tensor3d([...this.trainingdataset[0], ...this.trainingdataset[1]]);
            const ys = this._tf.tensor([...this.trainingdataset[0].map((el) => trainOptions.no_output), ...this.trainingdataset[1].map(el => trainOptions.yes_output)]);

            await this._model.fit(xs, ys, {
                epochs: trainOptions.epochs, callbacks: {
                    onEpochEnd: async (epoch, logs) => {
                        console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
                    }
                }
            });

            await this._model.save('downloads://drawing-model');
        }
    }

}