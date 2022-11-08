import LZString from "lz-string"
import { Ref } from "nuxt/dist/app/compat/capi";
import MediaSourcesHandler from './media-sources-handler';

export interface Message {
	sdp: RTCSessionDescription | null,
	candidate: RTCIceCandidate[],
}

export enum ConnectionState {
	disconnected,
	connecting,
	connected,
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
	private _websocket_uuid: string = null
	private _signalingFromWebsocket = false

	private _onDataChannel: ((connection: WebRtcConnection, channel: RTCDataChannel) => void) | undefined
	private _onTrack: ((connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void) | undefined
	private _writeOnOffer?: (message: string) => void
	private _onClose?: () => void

	private _connected: boolean = false
	private _state: string = ""
	private _reactive_state: Ref<number>
	private _actions_queue: Function[] = []

	private _polite: boolean = true;
	private _making_offer: boolean = false;

	private _was_connecting: boolean = false

	private readonly websocket_configuration = {
		address: "wss://skynet.sytes.net:5355/",
		// address: "ws://127.0.0.1:8080/",
	}

	private _stun_servers = [
		// {
		// 	urls: 'stun:stun.l.google.com:19302'
		// },
		{
			urls: "stun:openrelay.metered.ca:80",
		},
	]

	private _turn_servers = [
		{
			urls: "turn:openrelay.metered.ca:443?transport=tcp",
			username: "openrelayproject",
			credential: "openrelayproject",
		},
		// {
		// 	urls: "turn:openrelay.metered.ca:80",
		// 	username: "openrelayproject",
		// 	credential: "openrelayproject",
		// },
	]

	private configuration = {
		iceServers: [
			...this._stun_servers
		]
	};


	constructor(
		mediaSourcesHandler?: MediaSourcesHandler,
		onTrack?: (connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) => void,
		onDataChannel?: (connection: WebRtcConnection, channel: RTCDataChannel) => void,
		writeOnOffer?: (message: string) => void,
		onClose?: () => void,
		state: Ref<number> = null,
		turn_server: boolean = true
	) {

		if (turn_server)
			this.configuration.iceServers = [...this.configuration.iceServers, ...this._turn_servers]

		console.log(this.configuration)

		this.pc = new RTCPeerConnection(this.configuration);

		this._onTrack = onTrack
		this._onDataChannel = onDataChannel
		this._writeOnOffer = writeOnOffer
		this._onClose = onClose
		this._mediaSourcesHandler = mediaSourcesHandler;
		this._reactive_state = state
		this._actions_queue = []

		this.pc.onicecandidate = (event) => {
			// console.log(this.pc.canTrickleIceCandidates, event.candidate)
			if (event.candidate && this.pc.canTrickleIceCandidates) {
				this._localCandidates.push(event.candidate)
			} else {
				const compressedString = this._compressMessage({
					sdp: this.pc.localDescription,
					candidate: this._localCandidates
				});
				this._localCandidates = []
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

		this.pc.oniceconnectionstatechange = () => {
			if (this.pc.iceConnectionState === "failed") {
				this._localCandidates = []
				console.log("------------------------------>>>>>>>>>>>>>")
				this.pc.restartIce();
			}
		};

		this.pc.onconnectionstatechange = event => {
			console.log(this.pc.connectionState)
			switch (this.pc.connectionState) {
				case "new":
				case "connected":
					this._was_connecting = false;
					break;
				case "connecting":
					this._was_connecting = true;
					break;
				case "closed":
					break;
				case "failed":
					if (this._was_connecting) {
						this._localCandidates = []
						this.pc.restartIce();
						this._was_connecting = false;
					} else {
						//TODO: has totally failed
					}
				case "disconnected":
					this._onClose && this._onClose()
					this._set_reactive_state(ConnectionState.disconnected)
					break;
				default:
					break;
			}
		}


		this.pc.onnegotiationneeded = async event => {
			try {


				console.log("negotiation needed")
				this._making_offer = true;
				await this.pc.setLocalDescription();

				if ("p2p" in this._dataChannels) {
					if (this._dataChannels["p2p"].readyState != "open") {
						const previousOnOpenFunction = this._dataChannels["p2p"].onopen
						this._dataChannels["p2p"].onopen = function (ev: Event) {
							this._dataChannels["p2p"].send(JSON.stringify({ sdp: this.pc.localDescription }));
							this._dataChannels["p2p"].onopen = previousOnOpenFunction
							this._dataChannels["p2p"].onopen(ev)
						}.bind(this);
					} else {
						this._dataChannels["p2p"].send(JSON.stringify({ sdp: this.pc.localDescription }));
					}
				}


				this._making_offer = false;

			}

			catch (ex: any) {
				console.log("erzxdror")
				// console.log(ex.stack)
			}
		}

		this.pc.onsignalingstatechange = event => {
			this._state = String(this.pc.signalingState)
		}

	}



	async createInitialOffer() {
		this._localCandidates = []
		console.log("creating initial offer", this.pc.signalingState)
		if (!this.pc.signalingState.startsWith("stable") || "p2p" in this._dataChannels) {
			// if (this._websocket && this._websocket.readyState == WebSocket.OPEN) {
			// this._sendWebsocketMessage({
			// 	sdp: this.pc.localDescription,
			// 	candidate: this._localCandidates
			// });
			this.pc.restartIce()
			// }
		} else {
			// this._dataChannels = {}
			this.attachDataChannel("p2p", 1, false);
		}
	}

	async _configure_custom_quality() {
		if ("video" in this._videoChatSenders) {
			console.log("video transport state: ", this._videoChatSenders["video"])
			// if ("connected" == this._videoChatSenders["video"].transport.state) {
			let param = this._videoChatSenders["video"].getParameters()
			this._videoChatSenders["video"].track.contentHint = "motion"
			if (!param.encodings) {
				param.encodings = [{}];
			}
			for (const encodeParam of param.encodings) {
				encodeParam.scaleResolutionDownBy = 1;
			}
			param.degradationPreference = "maintain-framerate"
			// console.log(param)
			// param.encodings = [{ scaleResolutionDownBy: 1 }]
			// params.encodings[0].maxBitrate = 120000000;
			// params.encodings[0].scaleResolutionDownBy = 1;
			// params.degradationPreference = "maintain-framerate"
			// params.encodings[0].
			await this._videoChatSenders["video"].setParameters(param)
			console.log("videochatsenders params", this._videoChatSenders["video"].getParameters())
			console.log("videochatsenders track settings", this._videoChatSenders["video"].track.getSettings())
			// }
		}
		if ("audio" in this._videoChatSenders) {
			// if ("connected" == this._videoChatSenders["audio"].transport.state) {
			this._videoChatSenders["audio"].track.contentHint = "speech"
			// }
		}
	}

	_set_reactive_state(state: number) {
		this._reactive_state && state ? this._reactive_state.value = state : null
	}

	_compressMessage(message: any) {
		const compressedString = LZString.compressToEncodedURIComponent(JSON.stringify(message));
		return compressedString;
	}

	_sendWebsocketMessage(message: Message) {
		const compressedString = this._compressMessage(message);
		if (this._signalingFromWebsocket && this._websocket) {
			this._websocket.send(compressedString);
		}
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

	_createWebsocket(uuid: string = this._websocket_uuid, attempt: number = 0) {
		this._localCandidates = []

		console.log('Creating websocket')
		if (this._websocket && this._websocket.readyState != WebSocket.CLOSED) return null;
		return new Promise(async function (resolve, reject) {
			if (!uuid || uuid == null) {
				uuid = this._generateUUID()
			}
			this._websocket = new WebSocket(this.websocket_configuration.address + uuid)
			this._websocket_uuid = uuid;

			this._websocket.onopen = () => {
				resolve(uuid);
			}
			this._websocket.onmessage = async (msg: MessageEvent<any>) => {
				if (msg.data.startsWith("/")) {
					switch (msg.data) {
						case "/remote:open":
							this._set_reactive_state(ConnectionState.connecting)
							this._signalingFromWebsocket = true;
							this.createInitialOffer();
							this._polite = false;
							break;
					}
				} else {
					this._set_reactive_state(ConnectionState.connecting)
					this._signalingFromWebsocket = true;
					const answer = await this.createAnswerFromCompressedString(msg.data);
					console.log("----------->",answer)
					if (answer)
						this._websocket.send(this._compressMessage({
							sdp: answer,
						}));
				}
			}
			this._websocket.onclose = (msg: CloseEvent) => {
				console.log("websocket closed")
			}
			this._websocket.onerror = (err: ErrorEvent) => {
				console.log("websocket error" + err.message);

				setTimeout(() => this._createWebsocket(this._websocket_uuid), 5000);
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


	close(force_websocket_close: boolean = true) {
		this.pc.close();
		this._websocket && force_websocket_close && this._websocket.close(1000, "close");
	}

	async createAnswerFromCompressedString(message: string) {
		const decompressedMessage = LZString.decompressFromEncodedURIComponent(message)
		decompressedMessage && (message = decompressedMessage)
		const answerDesc = await this.createAnswer(JSON.parse(message))
		return answerDesc;
	}

	async createAnswer(message: Message): Promise<RTCSessionDescriptionInit | null> {
		let answerDesc = null
		const asyncEventsList = []
		let ignoreOffer = false;
		if (message.sdp) {
			const sdpMessage = message.sdp
			console.log(sdpMessage.type, message)

			const offerCollision = (sdpMessage.type === "offer") &&
				(this._making_offer || this.pc.signalingState !== "stable");

			ignoreOffer = !this._polite && offerCollision;

			if (ignoreOffer) return answerDesc;

			try {
				if (sdpMessage.type == "offer") {
					console.log("create answer")
					asyncEventsList.push(...[
						this.pc.setRemoteDescription(message.sdp),
						this.pc.setLocalDescription(),
					])
				} else {
					asyncEventsList.push(...[
						this.pc.setRemoteDescription(message.sdp),
					])
				}

				if (message.candidate) {
					console.log("adding candidate")
					this._remoteCandidates = message.candidate
					for (const element of message.candidate) {
						console.log(element)
						asyncEventsList.push(this.pc.addIceCandidate(element))
					}
				}
				await Promise.all(asyncEventsList)
				if (!this.pc.canTrickleIceCandidates) {
					this.pc.restartIce()
					return null
				}
				if (sdpMessage.type == "offer") answerDesc = this.pc.localDescription
				return answerDesc;
			}

			catch (e: any) {
				console.log("-------ERROR--------", e)
				return answerDesc
			}

		}
		return answerDesc
	}

	async attachVideoChatStream(stream: MediaStream = this._mediaSourcesHandler.currentStream) {
		if (this.pc.connectionState != undefined)
			if (!(["connected", "connecting"].includes(this.pc.connectionState))) return null;
			else
				if (this.pc.iceGatheringState !== "complete")
					return null

		console.log("attach video chat stream", stream.getTracks())
		const videochattracks = stream.getTracks()
		console.log(this._mediaSourcesHandler)

		for (const [key, sender] of Object.entries(this._videoChatSenders)) {
			const track = videochattracks.find((track) => track.kind == key)
			console.log(track)
			if (track && track != undefined) {
				if (track?.label != sender.track?.label) {
					await sender.replaceTrack(track)
					console.log("replace" + track.label)
				}
			} else {
				this.pc.removeTrack(sender)
				delete this._videoChatSenders[key]
			}
		}

		videochattracks.forEach((track) => {
			if (!this._videoChatSenders[track.kind]) {
				this._videoChatSenders[track.kind] = this.pc.addTrack(track, stream)
			}
		})

		console.log(this._videoChatSenders["video"])
		setTimeout(() => this._configure_custom_quality(), 1000);

	}

	attachDataChannel(dataChannelName: string = "p2p", id: number = 1, negotiated = true) {
		if (!(dataChannelName in this._dataChannels)) {
			console.log("attach datachannel:" + dataChannelName)
			const channel = this.pc.createDataChannel(dataChannelName, { negotiated: negotiated, id: id });
			if (dataChannelName !== "p2p") {
				this._onDataChannel && this._onDataChannel(this, channel)
			} else {
				this.p2pDataChannelInitialization(channel)
			}
			this._dataChannels[channel.label] = channel
		}
	}


	addActionToQueue(action: Function) {
		this._actions_queue.push(action)
	}

	p2pDataChannelInitialization(channel: RTCDataChannel) {
		channel.onopen = (event) => {
			console.log("p2p is open!");
			this._set_reactive_state(ConnectionState.connected)
			this._websocket && this._websocket.close(1000, "close")
			this._connected = true;
			this.attachDataChannel("chat", 2, true)
			if (this._mediaSourcesHandler.currentStream) {
				this.attachVideoChatStream();

			}
		};

		channel.onclose = () => {
			console.log("channel close");
			this._set_reactive_state(ConnectionState.disconnected)
			this._connected = false;
		};

		channel.onmessage = async event => {
			const message = JSON.parse(event.data);
			const answer = await this.createAnswer(message)
			answer && channel.send(JSON.stringify({ sdp: this.pc.localDescription }))

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

	public set mediaSourcesHandler(mediaSourcesHandler: MediaSourcesHandler) {
		this._mediaSourcesHandler = mediaSourcesHandler
	}

}