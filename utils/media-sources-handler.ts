import { Ref } from "vue";

export default class MediaSourcesHandler {


    private _devices: MediaDeviceInfo[] = []
    private _currentStream: MediaStream = new MediaStream()
    private _currentScreenStream: MediaStream = new MediaStream()
    private defaultConstraints: MediaStreamConstraints = {
        audio: {
            autoGainControl: false,
            channelCount: 1,
            echoCancellation: true,
            latency: 0,
            noiseSuppression: true,
            sampleRate: 48000,
            sampleSize: 16
        },

        video: {
            // width: { min: 640 },
            // height: { min: 400 },
            // aspectRatio: { min: 0, ideal: 16 / 9 },
            frameRate: { min: 10, ideal: 60, max: 240 },
        },
    };

    private _videoLocal: Ref<HTMLVideoElement>;

    constructor(videoLocal: Ref<HTMLVideoElement>) {
        this._videoLocal = videoLocal
    }

    public get currentDevices() {
        const videoTracks = this.currentVideoTracks
        const audioTracks = this.currentAudioTracks
        return this._currentStream ? {
            audio: audioTracks[0] && audioTracks[0].label,
            video: videoTracks[0] && videoTracks[0].label,
        } : null
    }

    public get mediaDevices() {
        return this._devices
    }
    public get audioDevices() {
        return this._devices.filter(device =>
            device.kind == "audioinput"
        )
    }
    public get videoDevices() {
        return this._devices.filter(device =>
            device.kind == "videoinput"
        )
    }

    public get currentStream() {
        return this._currentStream
    }

    public get currentVideoTracks() {
        return this._currentStream.getVideoTracks()
    }

    public get currentVideoCapabilities() {
        return this.currentStream.getVideoTracks()[0] ? this.currentStream.getVideoTracks()[0].getCapabilities() : null;
    }

    public get currentAudioTracks() {
        return this._currentStream.getAudioTracks()
    };

    public async getMediaDevices() {
        this._devices = await navigator.mediaDevices.enumerateDevices()
        console.log(this._devices)
        return this._devices
    }

    public getMediaDeviceByName(name: string | null | undefined) {
        if (!name) return null
        return this._devices.find(device => device.label == name)
    }


    public async getMediaDevicesStream(constraints: MediaStreamConstraints = this.defaultConstraints, defaultParamsFromLocalStorage: boolean = true) {
        if (navigator && navigator.mediaDevices) {
            try {
                await this.getMediaDevices();
                this.audioDevices.length <= 0 && (constraints.audio = false)
                this.videoDevices.length <= 0 && (constraints.video = false)

                if (defaultParamsFromLocalStorage) {
                    const defaultLocalStorage = this.getMediaSourcesInfoFromLocalStorage()


                    const audioDevice = this.getMediaDeviceByName(defaultLocalStorage.audio)
                    const videoDevice = this.getMediaDeviceByName(defaultLocalStorage.video)

                    if (audioDevice) {
                        if (typeof constraints.audio === "boolean") {
                            constraints.audio = { deviceId: audioDevice.deviceId }
                        } else {
                            constraints.audio = (constraints.audio as MediaTrackConstraints)
                            !constraints.audio.deviceId && (constraints.audio.deviceId = audioDevice.deviceId)
                        }
                    }
                    if (videoDevice) {
                        if (typeof constraints.video === "boolean") {
                            constraints.video = { deviceId: videoDevice.deviceId }
                        } else {
                            constraints.video = (constraints.video as MediaTrackConstraints)
                            !constraints.video.deviceId && (constraints.video.deviceId = videoDevice.deviceId)
                        }
                    }
                }
                console.log("constraints", constraints)
                try {
                    this._currentStream = await navigator.mediaDevices.getUserMedia(constraints)
                } catch (e: any) {
                    this.defaultConstraints.video = true
                    constraints.video = { deviceId: constraints.video["deviceId"] }
                    this._currentStream = await navigator.mediaDevices.getUserMedia(constraints)
                }
                // await this._currentStream.getVideoTracks()[0].applyConstraints(constraints.video)
                console.log("current stream", this._currentStream.getVideoTracks()[0].getSettings())

                return this._currentStream
            } catch (e: any) {
                console.log(e)
                return null
            }
        }
        return null
    }

    public async getScreenStream() {
        if (navigator && navigator.mediaDevices) {
            try {
                this._currentScreenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
                console.log(this._currentScreenStream)
                await this.stopAndRemoveVideo()
                this.currentStream.addTrack(this._currentScreenStream.getVideoTracks()[0])

                return this._currentScreenStream
            } catch (e: any) {
                console.log(e)
                return null
            }
        }
        return null
    }

    public async initializeLocalStream(constraints: MediaStreamConstraints = this.defaultConstraints) {
        const stream = await this.getMediaDevicesStream(constraints)
        if (stream) {
            this.attachStreamToLocalVideo(stream)
            return stream
        }
        return null

    }

    public async stopLocalStream() {
        this.currentStream.getTracks().forEach(track => track.stop())
    }

    public async changeSourceStream(audioSelected?: string, videoSelected?: string) {

        let stream;
        if (this.currentDevices.audio != audioSelected) {
            await this.stopAndRemoveAudio()
            stream = await this.startAudio(audioSelected)
        }
        if (this.currentDevices.video != videoSelected) {
            await this.stopAndRemoveVideo()
            stream = await this.startVideo(videoSelected)
        }
        this.setMediaSourcesInfoFromLocalStorage(audioSelected, videoSelected)
        // this.attachStreamToLocalVideo(stream)
    }

    public attachStreamToLocalVideo(stream: MediaStream | null) {

        if (stream) {
            console.log(this._videoLocal)
            this._videoLocal && stream && (this._videoLocal.value.srcObject = stream)
            this._videoLocal.value.muted = true;
            this._videoLocal.value.play()
        }
    }


    public async stopAndRemoveVideo() {
        this.currentVideoTracks.forEach(track => track.enabled = false)
        await new Promise(resolve => setTimeout(resolve, 100));
        this.currentVideoTracks.forEach(track => { track.stop(); this._currentStream.removeTrack(track) })
    }

    public stopAndRemoveAudio() {
        this.currentAudioTracks.forEach(track => { track.stop(); this._currentStream.removeTrack(track) })
    }
    public stopAudio() {
        this.currentVideoTracks.forEach(track => track.stop())
    }
    public stopVideo() {
        this.currentAudioTracks.forEach(track => track.stop())
    }


    public async startVideo(videoDeviceStr: string) {
        const videoDevice = this.getMediaDeviceByName(videoDeviceStr)
        let videoConstraint: boolean | MediaTrackConstraints = false;
        if (videoDevice) {
            videoConstraint = { ...this.defaultConstraints.video as MediaTrackConstraints, ...{ deviceId: videoDevice.deviceId } }
        }
        console.log("videoConstraint startvideo", videoDeviceStr, videoConstraint)
        let stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraint })
        this.currentVideoTracks[0] && this.currentStream.removeTrack(this.currentVideoTracks[0])
        this.currentStream.addTrack(stream.getVideoTracks()[0])
        return stream
    }
    public async startAudio(audioDeviceStr: string) {
        const audioDevice = this.getMediaDeviceByName(audioDeviceStr)
        let audioConstraint: boolean | MediaTrackConstraints = false;
        if (audioDevice) {
            audioConstraint = { ...this.defaultConstraints.audio as MediaTrackConstraints, ...{ deviceId: audioDevice.deviceId } }
        }
        let stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraint })
        this.currentAudioTracks[0] && this.currentStream.removeTrack(this.currentAudioTracks[0])
        this.currentStream.addTrack(stream.getAudioTracks()[0])
        return stream
    }

    getMediaSourcesInfoFromLocalStorage() {
        return JSON.parse(localStorage.getItem("mediaSources") || "{\"audio\":null,\"video\":null}");

    }

    setMediaSourcesInfoFromLocalStorage(audioSelected?: string, videoSelected?: string) {
        let mediaSourcesInfo = this.getMediaSourcesInfoFromLocalStorage()
        let newMediaSourcesInfo = {}
        audioSelected && (newMediaSourcesInfo["audio"] = audioSelected)
        videoSelected && (newMediaSourcesInfo["video"] = videoSelected)
        localStorage.setItem("mediaSources", JSON.stringify({ ...mediaSourcesInfo, ...newMediaSourcesInfo }));

    }

    public disableVideo() {
        this.currentVideoTracks.forEach(track => track.enabled = false)
    }

    public enableVideo() {
        this.currentAudioTracks.forEach(track => track.enabled = true)
    }

    public disableAudio() {
        this.currentAudioTracks.forEach(track => track.enabled = false)
    }

    public enableAudio() {
        this.currentAudioTracks.forEach(track => track.enabled = true)
    }

}