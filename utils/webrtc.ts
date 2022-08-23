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
    private _websocket: WebSocket | null = null
    private _signalingFromWebsocket = false

    private _onDataChannel: ((connection: WebRtcConnection, channel: RTCDataChannel) => void) | undefined
    private _onTrack: ((connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void) | undefined
    private _writeOnOffer?: (message: string) => void

    private _connected: boolean = false
    private _state: string = ""
    private _actions_queue: Function[] = []


    private readonly websocket_configuration = {
        address: "wss://skynet.sytes.net:5355/ws/",
        // address: "ws://127.0.0.1:8080/ws/",
    }

    private readonly configuration = {
        iceServers: [
            {
                urls: "stun:openrelay.metered.ca:80",
            },
            // {
            //     urls: 'stun:stun.l.google.com:19302'
            // },
            {
                urls: "turn:openrelay.metered.ca:80",
                username: "openrelayproject",
                credential: "openrelayproject",
            },
            {
                urls: "turn:openrelay.metered.ca:443",
                username: "openrelayproject",
                credential: "openrelayproject",
            },
            {
                urls: "turn:openrelay.metered.ca:443?transport=tcp",
                username: "openrelayproject",
                credential: "openrelayproject",
            },
            // {
            //     urls: "turn:skynet.sytes.net:5349",
            //     username: "guest",
            //     credential: "&!bYELZK$&X^n5Tm#bKu6bQe"
            // }
        ]
    };


    constructor(
        mediaSourcesHandler?: MediaSourcesHandler,
        onTrack?: (connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void,
        onDataChannel?: (connection: WebRtcConnection, channel: RTCDataChannel) => void,
        writeOnOffer?: (message: string) => void,

    ) {

        this.pc = new RTCPeerConnection(this.configuration);

        this._onTrack = onTrack
        this._onDataChannel = onDataChannel
        this._writeOnOffer = writeOnOffer
        this._mediaSourcesHandler = mediaSourcesHandler;

        this._actions_queue = []

        this.pc.onicecandidate = (event) => {
            if (event.candidate) {
                this._localCandidates.push(event.candidate)
            }
            else {
                console.log("localCandidate", this._localCandidates)

                const message: Message = {
                    sdp: this.pc.localDescription,
                    candidate: this._localCandidates
                }
                console.log(message)
                const compressedString = LZString.compressToEncodedURIComponent(JSON.stringify(message));
                if (this._signalingFromWebsocket && this._websocket) {
                    this._websocket.send(compressedString);
                } else {
                    writeOnOffer ? writeOnOffer(compressedString) : console.log(compressedString)
                    navigator.clipboard.writeText(compressedString)
                }


            }
        };
        this.pc.ontrack = event => {
            console.log("got track", event)
            event.streams.forEach((stream) => {
                if (!(stream.id in this._receiveStreams)) {
                    this._receiveStreams[stream.id] = stream
                }
            })
            console.log("got track settings", event.streams[0].getTracks()[0].getSettings())

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

        this.pc.onnegotiationneeded = event => {
            console.log("negotiation needed")
            // if (this.pc.signalingState != "stable") return; 
            this.createOffer().then((offer) => {
                if ("p2p" in this._dataChannels) {
                    if (this._dataChannels["p2p"].readyState != "open") {
                        const previousOnOpenFunction = this._dataChannels["p2p"].onopen
                        this._dataChannels["p2p"].onopen = function (ev: Event) {
                            this._dataChannels["p2p"].send(JSON.stringify({ sdp: offer }));
                            this._dataChannels["p2p"].onopen = previousOnOpenFunction
                            this._dataChannels["p2p"].onopen(ev)
                        }.bind(this);
                    } else {
                        this._dataChannels["p2p"].send(JSON.stringify({ sdp: offer }));
                    }
                }
                if ("video" in this._videoChatSenders) {
                    console.log("video transport state: ", this._videoChatSenders["video"])
                    if ("connected" == this._videoChatSenders["video"].transport.state) {
                        let params = this._videoChatSenders["video"].getParameters()
                        this._videoChatSenders["video"].track.contentHint = "motion"
                        console.log(params)
                        // params.encodings = [{}]
                        // params.encodings[0].maxBitrate = 120000000;
                        // params.encodings[0].scaleResolutionDownBy = 1;
                        params.degradationPreference = "maintain-framerate"
                        // params.encodings[0].
                        this._videoChatSenders["video"].setParameters(params)
                        console.log("videochatsenders params", this._videoChatSenders["video"].getParameters())
                        console.log("videochatsenders track settings", this._videoChatSenders["video"].track.getSettings())

                    }
                }
                if ("audio" in this._videoChatSenders) {
                    if ("connected" == this._videoChatSenders["audio"].transport.state) {
                        this._videoChatSenders["audio"].track.contentHint = "speech"
                    }
                }

            })
        }

        this.pc.onsignalingstatechange = event => {
            console.log("signaling state: " + this.pc.signalingState)
            this._state = String(this.pc.signalingState)
            if (this.pc.signalingState == "stable") {
                if (this._actions_queue.length > 0) {
                    this._actions_queue.shift()()
                }
            }
        }

    }

    async createOffer() {
        console.log("create offer")
        const offer = await this.pc.createOffer();
        await this.pc.setLocalDescription(offer);
        return offer;
    }

    async createInitialOffer() {
        this._localCandidates = []
        this.attachDataChannel("p2p", 1, false);
        // let offer = await this.createOffer();
        // return offer
    }


    _generateUUID() {
        var d = new Date().getTime();
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    _createWebsocket(uuid?: string, attempt: number = 0) {
        return new Promise(async function (resolve, reject) {
            if (!uuid) {
                uuid = this._generateUUID()
            }
            this._websocket = new WebSocket(this.websocket_configuration.address + uuid)

            this._websocket.onopen = () => {
                resolve(uuid);
            }
            this._websocket.onmessage = async (msg: MessageEvent<any>) => {
                if (msg.data.startsWith("/get")) {
                    this._signalingFromWebsocket = true;
                    this.createInitialOffer();
                } else {
                    this._signalingFromWebsocket = true;
                    await this.createAnswerFromString(msg.data);
                }
            }
            this._websocket.onclose = (msg: CloseEvent) => {
                console.log("websocket closed")
            }
            this._websocket.onerror = (err: ErrorEvent) => {
                this._websocket = null;
                resolve(null)
            }
        }.bind(this))

    }

    async websocketGenerateLink() {
        return await this._createWebsocket();
    }

    async websocketConsumeLink(uuid) {
        let result = await this._createWebsocket(uuid)
        return result;
    }


    async close() {
        this.pc.close();
        this._websocket && this._websocket.close(1000, "close");
    }

    async createAnswerFromString(message: string) {
        const decompressedMessage = LZString.decompressFromEncodedURIComponent(message)
        decompressedMessage && (message = decompressedMessage)
        await this.createAnswer(JSON.parse(message))
    }

    async createAnswer(message: Message): Promise<RTCSessionDescriptionInit | null> {
        let answerDesc = null
        this._localCandidates = []
        console.log(message)
        if (message.sdp) {
            const sdpMessage = message.sdp
            try {
                if (sdpMessage.type == "offer") {
                    console.log("create answer")
                    await this.pc.setRemoteDescription(message.sdp)
                    answerDesc = await this.pc.createAnswer();
                    await this.pc.setLocalDescription(answerDesc);
                } else {
                    if (this.pc.signalingState == "have-local-offer" && !message.candidate) {
                        await this.pc.setRemoteDescription(message.sdp)
                    }
                }

                if (message.candidate) {
                    await this.pc.setRemoteDescription(message.sdp)
                    console.log("adding candidate")
                    this._remoteCandidates = message.candidate
                    for (const element of message.candidate) {
                        console.log(element)
                        await this.pc.addIceCandidate(element)
                    }
                }


                return answerDesc
            }

            catch (e: any) {
                console.log("----------------------", e)
                return null
            }

        }
        return answerDesc
    }

    attachVideoChatStream(stream: MediaStream = this._mediaSourcesHandler.currentStream) {
        console.log("attach video chat stream", stream.getTracks())
        const videochattracks = stream.getTracks()
        console.log(this._mediaSourcesHandler)

        Object.entries(this._videoChatSenders).forEach(([key, sender]) => {
            const track = videochattracks.find((track) => track.kind == key)
            console.log(track)
            if (track && track != undefined) {
                if (track?.label != sender.track?.label) {
                    sender.replaceTrack(track)
                    console.log("replace" + track.label)
                }
            } else {
                this.pc.removeTrack(sender)
                delete this._videoChatSenders[key]
            }
        })

        videochattracks.forEach((track) => {
            if (!this._videoChatSenders[track.kind]) {
                this._videoChatSenders[track.kind] = this.pc.addTrack(track, stream)
            }
        })

        console.log(this._videoChatSenders["video"])
    }

    attachDataChannel(dataChannelName: string = "p2p", id: number = 1, negotiated = true) {
        if (!(dataChannelName in this._dataChannels)) {
            console.log("attach datachannel:" + dataChannelName)
            const channel = this.pc.createDataChannel(dataChannelName, { negotiated: negotiated, id: id });
            this._dataChannels[channel.label] = channel
            if (dataChannelName !== "p2p") {
                this._onDataChannel && this._onDataChannel(this, this._dataChannels[channel.label])
            } else {
                this.p2pDataChannelInitialization(this._dataChannels[channel.label])
            }
        }
    }


    executeOrQueue(action: Function) {
        console.log("executeOrQueue", action)
        if (this.pc.signalingState != "stable")
            this._actions_queue.push(action)
        else {
            action()
        }
    }

    p2pDataChannelInitialization(channel: RTCDataChannel) {
        channel.onopen = (event) => {
            console.log("p2p is open!");
            this._websocket && this._websocket.close(1000, "close")
            this._connected = true;
            this.executeOrQueue(function () { this.attachDataChannel("chat", 2, true) }.bind(this));

            if (this._mediaSourcesHandler.currentStream) {
                this.executeOrQueue(function () {
                    this.attachVideoChatStream();
                    this.createOffer().then((offer) => {
                        this._dataChannels["p2p"].send(JSON.stringify({ sdp: offer }));
                    });
                }.bind(this));
            }
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


    public get remoteStreams(): Record<string, MediaStream> {
        return this._receiveStreams
    }
    public get connected() {
        return this._connected
    }

    public get state() {
        return this._state
    }

}