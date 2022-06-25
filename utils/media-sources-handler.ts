import { Ref } from "vue";

export default class MediaSourcesHandler {


    private _devices: MediaDeviceInfo[] = []
    private _currentStream: MediaStream = new MediaStream()

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

    public get currentVideoCapabilities(){
        return this.currentStream.getVideoTracks()[0]?this.currentStream.getVideoTracks()[0].getCapabilities():null;
    }

    public get currentAudioTracks() {
        return this._currentStream.getAudioTracks()
    }


    public async getMediaDevices() {
        this._devices = await navigator.mediaDevices.enumerateDevices()
        return this._devices
    }

    public getMediaDeviceByName(name: string | null | undefined) {
        if (!name) return null
        return this._devices.find(device => device.label == name)
    }


    public async getMediaDevicesStream(constraints: MediaStreamConstraints = { video: true, audio: true }) {
        if (navigator && navigator.mediaDevices) {
            try {
                await this.getMediaDevices();

                this._currentStream = await navigator.mediaDevices.getUserMedia(constraints)
                return this._currentStream
            } catch (e: any) {
                console.log(e)
                return null
            }
        }
        return null
    }

    public async initializeLocalStream(constraints: MediaStreamConstraints = { audio: { autoGainControl: false, channelCount: 1, echoCancellation: true, latency: 0, noiseSuppression: true, sampleRate: 48000, sampleSize: 16 }, video: true, }) {
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
        const videoDevice = this.getMediaDeviceByName(videoSelected)
        const audioDevice = this.getMediaDeviceByName(audioSelected)

        let stream;
        if (this.currentDevices.audio != audioSelected) {
            this.stopAudio()
            stream = await navigator.mediaDevices.getUserMedia({ audio: audioDevice ? { deviceId: audioDevice.deviceId, autoGainControl: false, channelCount: 1, echoCancellation: true, latency: 0, noiseSuppression: true, sampleRate: 48000, sampleSize: 16 } : false })
            this.currentStream.removeTrack(this.currentAudioTracks[0])
            this.currentStream.addTrack(stream.getAudioTracks()[0])
        }
        if (this.currentDevices.video != videoSelected) {
            this.stopVideo()
            stream = await navigator.mediaDevices.getUserMedia({ video: videoDevice ? { deviceId: videoDevice.deviceId } : false })
            this.currentStream.removeTrack(this.currentVideoTracks[0])
            this.currentStream.addTrack(stream.getVideoTracks()[0])
        }        
        // this.attachStreamToLocalVideo(this.currentStream)
    }

    public attachStreamToLocalVideo(stream: MediaStream | null) {
        
        if (stream) {
            console.log(this._videoLocal)
            this._videoLocal && stream && (this._videoLocal.value.srcObject = stream)
            this._videoLocal.value.muted = true;
            this._videoLocal.value.play()
        }
    }

    public stopVideo() {
        this.currentVideoTracks.forEach(track => track.stop())
    }
    public stopAudio() {
        this.currentAudioTracks.forEach(track => track.stop())
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