import LZString from "lz-string"
import MediaSourcesHandler from "./media-sources-handler";

export interface Message {
    sdp: RTCSessionDescription | null,
    candidate: RTCIceCandidate[],
}


export default class WebRtcConnection {

    private pc: RTCPeerConnection;


    private _localCandidates: RTCIceCandidate[] = []
    private _remoteCandidates: RTCIceCandidate[] = []

    private _videoChatSendStream: MediaStream = new MediaStream()
    private _mediaSourcesHandler: MediaSourcesHandler;
    private _videoChatSenders: Record<string, RTCRtpSender> = {}

    private _receiveStreams: Record<string, MediaStream> = {}

    private _dataChannels: Record<string, RTCDataChannel> = {}

    private _onDataChannel: ((connection: WebRtcConnection, channel: RTCDataChannel) => void) | undefined
    private _onTrack: ((connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void) | undefined
    private _writeOnChat?: (message: ChatMessage) => void
    private _writeOnOffer?: (message: string) => void

    private _alfa: boolean = false
    private _temporary_alfa: boolean = false
    private _connected: boolean = false
    private _state: string = ""

    private readonly configuration = {
        iceServers: [{
            urls: 'stun:stun.l.google.com:19302'
        },
        {
            urls: "turn:skynet.sytes.net:5349",
            username: "guest",
            credential: "&!bYELZK$&X^n5Tm#bKu6bQe"
        }]
    };


    constructor(
        mediaSourcesHandler?: MediaSourcesHandler,
        onTrack?: (connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void,
        onDataChannel?: (connection: WebRtcConnection, channel: RTCDataChannel) => void, 
        writeOnChat?: (message: ChatMessage) => void,
        writeOnOffer?: (message: string) => void,

        ) {

        this.pc = new RTCPeerConnection(this.configuration);
        
        this._onTrack = onTrack
        this._onDataChannel = onDataChannel
        this._writeOnChat = writeOnChat
        this._writeOnOffer = writeOnOffer
        this._mediaSourcesHandler = mediaSourcesHandler;


        this.pc.onicecandidate = (event) => {
            if (event.candidate) {
                this._localCandidates.push(event.candidate)
            } 
            else {
                const message: Message = {
                    sdp: this.pc.localDescription,
                    candidate: this._localCandidates
                }
                const compressedString = LZString.compressToEncodedURIComponent(JSON.stringify(message));
                navigator.clipboard.writeText(compressedString)
                writeOnOffer ? writeOnOffer(compressedString) : console.log(compressedString)

            }
        };

        this.pc.ontrack = event => {
            event.streams.forEach((stream) => {
                if (!(stream.id in this._receiveStreams))
                    this._receiveStreams[stream.id] = stream
            })
            this._onTrack && this._onTrack(this, event.track, event.streams)
        };

        this.pc.ondatachannel = event => {
            const channel = event.channel;
            this._dataChannels[channel.label] = channel
            channel.label !== "p2p" ?
                this._onDataChannel && this._onDataChannel(this, this._dataChannels[channel.label]) :
                this.p2pDataChannelInitialization(channel)
        };

        this.pc.oniceconnectionstatechange = event => {
            console.log(this.pc.iceConnectionState)
        }

        this.pc.onnegotiationneeded = async event => {
            if (this._alfa || this._temporary_alfa) {
                this._temporary_alfa = false;
                console.log("create offer")
                if (this.pc.signalingState != "stable") return;
                const offer = await this.pc.createOffer();
                await this.pc.setLocalDescription(offer);
                this._dataChannels["p2p"].send(JSON.stringify({ sdp: this.pc.localDescription }));
            } else {
                setTimeout(() => {
                    if (this.pc.signalingState == "stable") {
                        this._temporary_alfa = true;
                        this.pc.onnegotiationneeded && this.pc.onnegotiationneeded(event)
                    }
                }, 1000)
            }
        }

        this.pc.onsignalingstatechange = event => {
            console.log("signaling state: " + this.pc.signalingState)
            this._state = String(this.pc.signalingState)
        }
    }



    async createOffer() {
        console.log("create offer")
        this._localCandidates = []
        if (!("p2p" in this._dataChannels)) {
            this._alfa = true;
            this.attachDataChannel();
        }

        const offerDesc = await this.pc.createOffer();
        await this.pc.setLocalDescription(offerDesc);


        return offerDesc
    }

    async createAnswerFromString(message: string) {
        const decompressedMessage = LZString.decompressFromEncodedURIComponent(message)
        decompressedMessage && (message = decompressedMessage)
        await this.createAnswer(JSON.parse(message))
    }

    async createAnswer(message: Message): Promise<RTCSessionDescriptionInit | null> {
        let answerDesc = null
        if (message.sdp) {
            const sdpMessage = message.sdp
            try {
                try {
                    await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 100) })
                    // if(this.pc.signalingState != "stable") this.pc.setLocalDescription({ type: "rollback" })
                    await this.pc.setRemoteDescription(message.sdp)
                } catch (err) {
                    console.log(err)
                    // if (!this.alfa){
                    console.log("asdasdsad")
                    // await this.pc.setLocalDescription({ type: "rollback" })
                    await this.pc.setRemoteDescription(message.sdp)

                    // return this.createAnswer(message)
                    // }else{
                    //     return null
                    // }
                }
                if (sdpMessage.type == "offer") {
                    // this.alfa = false;
                    console.log("create answer")
                    answerDesc = await this.pc.createAnswer();
                    await this.pc.setLocalDescription(answerDesc);


                }
                if (message.candidate) {
                    console.log("adding candidate")
                    this._remoteCandidates = message.candidate
                    for (const element of message.candidate) {
                        await this.pc.addIceCandidate(element)
                    }
                }
                return answerDesc
            }
            catch (e: any) {
                console.log(e)
                return null
            }

        }
        return answerDesc
    }

    // attachStream(stream: MediaStream) {
    //     console.log("attach stream:" + stream)
    //     stream.getTracks().forEach(track => this.pc.addTrack(track, stream));
    // }

    attachVideoChatStream(stream: MediaStream = this._mediaSourcesHandler.currentStream) {
        const videochattracks = stream.getTracks()
        console.log(videochattracks)

        Object.entries(this._videoChatSenders).forEach(([key, sender]) => {
            const track = videochattracks.find((track) => track.kind == key)
            if (track) {
                if (track?.label != sender.track?.label) {
                    sender.replaceTrack(track)
                    console.log("replace" + track.label)
                }
            } else {
                this.pc.removeTrack(sender)
                this._videoChatSenders
            }
        })

        videochattracks.forEach((track) => {
            if (!this._videoChatSenders[track.kind])
                this._videoChatSenders[track.kind] = this.pc.addTrack(track, stream)
        })
    }

    attachDataChannel(dataChannelName: string = "p2p", id: number = 0) {
        console.log("attach datachannel:" + dataChannelName)
        const channel = this.pc.createDataChannel(dataChannelName, { negotiated: false, id: id });
        // channel.reli
        this._dataChannels[channel.label] = channel
        if (dataChannelName !== "p2p") {
            this._onDataChannel && this._onDataChannel(this, this._dataChannels[channel.label])
        } else {
            this.p2pDataChannelInitialization(this._dataChannels[channel.label])
        }
    }

    p2pDataChannelInitialization(channel: RTCDataChannel) {
        channel.onopen = async (event) => {
            console.log("p2p is open!");
            this._connected = true;
            this._videoChatSendStream && this.attachVideoChatStream()
            if (this._alfa)
                this.attachDataChannel("chat", 2);
            // (async () => {
            //     console.log("aaaaaaaaaaaaaaaaaaaa")

            //     const offer = await this.createOffer();
            //     this._dataChannels["p2p"].send(JSON.stringify({ sdp: offer }));
            // })();

        };

        channel.onclose = () => {
            console.log("channel close");
            this._connected = false;
        };

        channel.onmessage = async event => {
            const message = JSON.parse(event.data);
            const answer = await this.createAnswer(message)
            answer && channel.send(JSON.stringify({ sdp: answer }))

        };
    }



    public get dataChannels() {
        return this._dataChannels
    }

    public set videochatSendStream(stream: MediaStream) {
        this._videoChatSendStream = stream
    }

    public get videochatSendStream() {
        return this._videoChatSendStream
    }


    public get remoteStreams() {
        return this._receiveStreams
    }
    public get connected() {
        return this._connected
    }

    public get state() {
        return this._state
    }




}