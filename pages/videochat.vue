<template>
	<div class="flex w-full h-screen bg-black">

		<Dialog header="Serverless connection" footer="" v-model:visible="dialogServerLessOpen" class="flex">
			<div class="flex-1 p-inputgroup py-2">
				<InputText placeholder="Introduce offer/answer" v-model="sdpMessageInput" />
				<Button label="Go" @click="createOrRecibeAnswer" />
			</div>
			<div class="flex-1 p-inputgroup py-2">
				<Button label="Create offer" class="w-full" @click="createOffer" />
			</div>
			<div class="flex-1 p-inputgroup py-2">
				<Textarea v-model="offerTextArea" disabled rows="5" class="min-w-[17rem] w-full" />

			</div>
		</Dialog>

		<Dialog header="Videochat info" v-model:visible="dialogVideochatInfo" class="flex max-w-4xl w-full"
			:maximizable="true">
			<div class="blog-wrapper !bg-white !m-0 !p-0 !grid-rows-none !grid-cols-none !min-h-0 ">
				<div class="markdown-body !shadow-none !m-0 !p-0 mt-2 ">
					<ContentRenderer :value="dialogVideochatInfoContent.data.value"
						v-if="!dialogVideochatInfoContent.pending.value">
						<template #default>
							<MarkdownRenderer :value="dialogVideochatInfoContent.data.value" />
						</template>
					</ContentRenderer>
				</div>
			</div>
			<template #footer>
				<div class="pt-5">
					<Button label="Ok" icon="pi pi-check" @click="() => dialogVideochatInfo = false" autofocus />
				</div>

			</template>
		</Dialog>

		<Dialog header="Share link" footer="" v-model:visible="dialogLinkOpen" class="flex w-50rem">
			<div class="flex-1 p-inputgroup py-2">
				<Textarea v-model="link" disabled rows="2" class="w-[50rem] w-full" />
			</div>
			<div class="flex-1 p-inputgroup py-2">
				<Button label="Copy to clipboard" class="w-full" @click="copyLinkToClipboard" />
			</div>
		</Dialog>

		<Dialog header="Enter room" footer="" v-model:visible="dialogRoomOpen" class="flex w-30rem">
			<h5>Insert room id:</h5>
			<div class="flex-1 p-inputgroup py-2">
				<InputText v-model="dialogRoomIdInput" rows="1" class="w-[50rem] w-full" />
			</div>
			<div class="flex-1 p-inputgroup py-2">
				<Button label="Enter room" class="w-full" @click="enterRoom" />
			</div>
		</Dialog>


		<div ref="superiorToolBar"
			class="absolute flex flex-row w-full text-right transition-all duration-400 disable-rounded"
			:class="{ 'lg:pr-[400px]': drawerSettingsOpen }">
			<SpeedDial :radius="190" :model="items" showIcon="pi pi-bars text-vanilla-yellow"
				:tooltipOptions="{ event: null, position: 'right' }" hideIcon="pi pi-times text-vanilla-yellow"
				direction="down-right" type="quarter-circle" buttonClass="p-button-text"
				class="video-options-dial up left transform !-translate-x-5 !-translate-y-5 disable-rounded !z-50"
				:class="{
					'pencil-active': pencilEnabled
				}" />

			<!-- <div class="flex-1">sdf</div> -->
			<div class="flex-1">
				<Button icon="pi pi-comments p-text-secondary" v-if="call"
					class="p-button-rounded p-button-text !p-12  up right transform !translate-x-6 !-translate-y-8 "
					@click="drawerChatOpenFun">
					<i class="pi pi-comments mr-2   p-text-secondary  text-vanilla-yellow"
						:class="{ 'hide-badge': nonReadedMessages == 0 }" style="font-size: 2rem"
						v-badge="nonReadedMessages" />
				</Button>
			</div>
		</div>
		<div class="flex-1 overflow-hidden flex relative bg-black">
			<div v-if="isUserInteractionRequiredForVideoRemoteReproduction"
				class="absolute flex justify-center items-center flex-1 h-screen w-screen text-white text-center">
				<div class="w-80">
					Some browsers require you to interact with the webpage before reproducing video.
					<br /><br />
					Please click or tap anywhere on this screen to reproduce remote video.
				</div>
			</div>

			<div ref="videoRemoteContainer"
				class="absolute flex m-auto h-screen w-screen items-center z-30 flex justify-center ">

				<video autoplay ref="videoRemote" class=" flex-1 !max-h-full !max-w-full"
					:class="{ '!object-cover': videoRemoteFullSize }"></video>

				<canvas ref="canvasRemote"
					class="absolute z-31 bg-transparent transform self-center  w-full h-full"></canvas>
			</div>


			<div ref="videoLocalContainer"
				class="absolute flex m-auto resize items-center z-30 flex justify-center h-screen w-screen max-h-screen max-w-screen transition-all duration-600 left-0 top-0"
				:class="{
					'!duration-0': (draggable && draggable.isDragging) || isResizing,
					'!hidden': !videoEnabled,
				
				}" style="touch-action:none;"
				:style="call && !isDrawing ? videoLocalContainerDraggableStyle && videoLocalContainerDraggableStyle.style : ''">
				<video autoplay ref="videoLocal" class="flex-1 max-h-screen max-w-screen" :class="{
					'!max-h-full !max-w-full': call && !isDrawing,
					'!transform  !rotate-y-180': (frontCamera && localVideoMirror)
				}"></video>
				<canvas ref="canvasLocal" class="absolute z-31 bg-transparent transform self-center w-full h-full"
					:class="{ '!transform  !rotate-y-180': (frontCamera && localVideoMirror) }"></canvas>


			</div>
			<div class="absolute flex m-auto h-screen w-full items-center justify-center">
				<Button v-if="getMediaDevices && !call" icon="pi pi-camera" label="Get media devices"
					class=" p-button-danger m-auto flex-grow-0" @click="initializeLocalStream">
				</Button>
			</div>
			<Toast position="bottom-left" group="br" />
		</div>

		<Drawer v-model:open="drawerSettingsOpen" class="w-[400px] disable-rounded" title="Settings">
			<div class="flex flex-1 min-w-[350px] flex-col">
				<VideochatRadioList v-model="videoSelected" :items="devices.video" title="Video devices"
					:disabled="mediaSelectionDisabled">
				</VideochatRadioList>
				<VideochatRadioList v-model="audioSelected" :items="devices.audio" title="Audio devices"
					:disabled="mediaSelectionDisabled">
				</VideochatRadioList>
				<!-- <div class="field-checkbox m-9 mb-0">
					<Checkbox id="video-fullsize" v-model="videoRemoteFullSize" :binary="true" />
					<label for="video-fullsize" class="mx-3">Fill the screen size</label>

				</div> -->
				<div class="field-checkbox m-9 ">
					<Checkbox id="local-video-mirror" v-model="localVideoMirror" :binary="true" />
					<label for="local-video-mirror" class="mx-3">Mirroring local video</label>
				</div>
				<Button icon="pi pi-camera" label="Refresh media devices"
					class=" p-button-danger m-auto flex-grow-0 !absolute bottom-0 right-0 left-0 min-w-[350px] w-full"
					@click="refreshMediaDevices">
				</Button>
			</div>
		</Drawer>
		<Drawer v-model:open="drawerChatOpen" title="Chat" class="w-[470px] disable-rounded">
			<VideochatChat v-model="chatMessages" v-on:update:modelValue="sendChatMessage"></VideochatChat>
		</Drawer>

		<div ref="lowerToolBar "
			class="absolute bottom-10 <sxl:bottom-3  bottom-0  lower-toolbar w-full justify-center transition-all duration-400"
			:class="{ 'lg:pr-[400px]': (drawerSettingsOpen || drawerChatOpen), 'hidden': lowerToolBarHidden }">
			<!-- <div class="flex-1">sdf</div> -->

			<div v-if="!call" class="flex flex-1 items-center justify-start ml-5  !min-w-20">
				<div class="flex flex-col  bottom-0 absolute">
					<Button :icon="`pi pi-sign-in`" @click="openRoomDialog"
						class=" p-button-rounded p-button-warning lower-toolbar-button" />
					<Button :icon="`pi pi-user-plus ${link ? 'pi-spin pi-spinner' : ''} `" @click="generateLink"
						class=" p-button-rounded p-button-warning lower-toolbar-button" />

				</div>

			</div>
			<div class="flex flex-1 items-center justify-center">
				<Button v-if="!smartphone" icon="pi pi-desktop" class=" p-button-rounded lower-toolbar-button"
					:class="{ 'button-disabled': !screenSharing }" @click="initializeScreenStream" />
				<Button :disabled="mediaSelectionDisabled" icon="pi" class="  p-button-rounded lower-toolbar-button"
					:class="{ 'button-disabled': !audioEnabled }" @click="enableAudioFunc">
					<div class="w-[22px] h-[22px] flex justify-center ">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.9 490.9"
							preserveAspectRatio="xMidYMid meet" style="fill:white;stroke:white;stroke-width:10px;">
							<path
								d="M245.5 322.9c53 0 96.2-43.2 96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2 43.2-96.2 96.2v130.5c0 53.1 43.2 96.2 96.2 96.2zM173.8 96.2c0-39.5 32.2-71.7 71.7-71.7s71.7 32.2 71.7 71.7v130.5c0 39.5-32.2 71.7-71.7 71.7s-71.7-32.2-71.7-71.7V96.2z" />
							<path
								d="M94.4 214.5c-6.8 0-12.3 5.5-12.3 12.3 0 85.9 66.7 156.6 151.1 162.8v76.7h-63.9c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3h152.3c6.8 0 12.3-5.5 12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3 151.1-76.9 151.1-162.8 0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3c0 76.6-62.3 138.9-138.9 138.9s-138.9-62.3-138.9-138.9c.2-6.8-5.2-12.3-12-12.3z" />
						</svg>
					</div>
				</Button>
				<Button :disabled="mediaSelectionDisabled" icon="pi pi-video"
					class=" p-button-rounded lower-toolbar-button" :class="{ 'button-disabled': !videoEnabled }"
					@click="enableVideoFunc" />
				<Button v-if="call" icon="pi pi-phone" @click="closeConnection"
					class="p-button-rounded p-button-danger lower-toolbar-button transform rotate-z-134" />
			</div>

			<div class="flex flex-1 items-center justify-center">
				<!-- <Button v-if="!call" :icon="`pi pi-user-plus ${link ? 'pi-spin pi-spinner' : ''} `"
                    @click="generateLink" class=" p-button-rounded p-button-warning lower-toolbar-button" /> -->
			</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import { type } from "os";
import { useToast } from "primevue/usetoast";
import MediaSourcesHandler from "~~/utils/media-sources-handler";
import VideoBoard from "~~/utils/videoboard.js";
import WebRtcConnection from "~~/utils/webrtc";

let mediaSourcesHandler: MediaSourcesHandler;
let webRtcConnection: WebRtcConnection;
let videoBoard: VideoBoard;
let videoBoardRemote: VideoBoard;

const toast = useToast();
const router = useRouter()
const route = useRoute()
const mouse = reactive([useMouse(), useMousePressed()])
const windowSize = reactive(useWindowSize())
const isResizing = ref(false)

useSeo({
	title: "VideoChat",
	description: "A videochat with one link",
	image: "",
	type: "WebSite",
	location: route.path,
});

// useHead({
//     script: [
//         {
//             src: "https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection"
//         },
//         {
//             src: "https://cdn.jsdelivr.net/npm/@mediapipe/hands"
//         },
//         {
//             src: "https://unpkg.com/@tensorflow/tfjs-core@2.1.0/dist/tf-core.js"
//         },
//         {
//             src: "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.1.0/dist/tf-backend-webgl.js"
//         }
//     ]
// })

const videoLocal = ref<HTMLVideoElement>(null)
const videoLocalContainer = ref<HTMLElement>(null)
const videoRemote = ref<HTMLVideoElement>(null)
const canvasLocal = ref<HTMLCanvasElement>(null)
const canvasRemote = ref<HTMLCanvasElement>(null)
const isUserInteractionRequiredForVideoRemoteReproduction = ref<boolean>(false)
const isDrawing = ref<boolean>(false)

let videoRemoteStream: MediaStream;

const frontCamera = ref<boolean>(true)
const chatMessages = ref<Array<ChatMessage>>([])
const nonReadedMessages = ref<number>(0)
const screenSharing = ref<boolean>(false)

const drawerChatOpen = ref(false)
const drawerSettingsOpen = ref(false)
const dialogServerLessOpen = ref(false)
const dialogLinkOpen = ref(false)
const dialogRoomOpen = ref(false)
const dialogRoomIdInput = ref<string>(null)
const dialogVideochatInfo = ref(true)

const dialogVideochatInfoContent = useLazyAsyncData('videochat-info', () => queryContent('/videochat-info').findOne());

const generatingLink = ref<boolean>(false)
const link = ref("")


const devices = reactive({
	video: [],
	audio: [],
})
const mediaDevicesAllowed = ref(true)
const getMediaDevices = ref(false)
const audioSelected = ref<string>()
const videoSelected = ref<string>()
const audioEnabled = ref<boolean>(true)
const videoEnabled = ref<boolean>(true)
const pencilEnabled = ref<boolean>(false)
const lowerToolBarHidden = ref<boolean>(false)

const videoRemoteFullSize = ref<boolean>(false)
const call = ref(false)
const mediaSelectionDisabled = ref(false)
let localVideoMirror = ref<boolean>(true);

const sdpMessageInput = ref("")
const offerTextArea = ref("")
const smartphone = ref<boolean>(false)

function isMobile() {
	let check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

if (process.client) {
	const isVideochatInfoDisplayed = useLocalStorage("videochat-info-displayed");
	smartphone.value = isMobile()
	if (isVideochatInfoDisplayed === "true") {
		dialogVideochatInfo.value = false;
	} else {
		useLocalStorage("videochat-info-displayed", "true");
	}

}



let draggable = ref()
let videoLocalContainerDraggableStyle = ref({
	style: "",
	x: 0,
	y: 0,
}
)

const { copy } = useClipboard();


const drawerChatOpenFun = () => {
	if (drawerChatOpen.value)
		drawerChatOpen.value = false
	else {
		nonReadedMessages.value = 0

		// drawerSettingsOpen.value = false
		if (drawerSettingsOpen.value == true) {
			drawerSettingsOpen.value = false
			setTimeout(() => drawerChatOpen.value = true, 100)
		} else {
			drawerChatOpen.value = true

		}
	}
}


const drawerSettingsOpenFun = () => {
	if (drawerSettingsOpen.value)
		drawerSettingsOpen.value = false
	else {
		// refreshMediaDevices()
		if (drawerChatOpen.value == true) {
			drawerChatOpen.value = false
			setTimeout(() => drawerSettingsOpen.value = true, 100)
		} else {
			drawerSettingsOpen.value = true

		}
	}
}

const enableVideoFunc = async () => {
	mediaSelectionDisabled.value = true;
	try {
		if (videoEnabled.value) {
			!screenSharing.value && await mediaSourcesHandler.stopAndRemoveVideo()
			videoEnabled.value = false
		} else if (videoSelected.value) {
			!screenSharing.value && await mediaSourcesHandler.startVideo(videoSelected.value)
			videoEnabled.value = true;
		}
		webRtcConnection && webRtcConnection.attachVideoChatStream()
		resetVideoLocalPosition();
	}
	catch (error) {
		toast.add({ severity: 'error', summary: 'Error', detail: error, group: 'br', life: 3000 });

	}
	mediaSelectionDisabled.value = false;
};

const enableAudioFunc = async () => {
	mediaSelectionDisabled.value = true;
	try {
		if (audioEnabled.value) {
			await mediaSourcesHandler.stopAndRemoveAudio()
			audioEnabled.value = false
		} else if (audioSelected.value) {
			await mediaSourcesHandler.startAudio(audioSelected.value)
			audioEnabled.value = true
			webRtcConnection && webRtcConnection.attachVideoChatStream()
		}
		webRtcConnection && webRtcConnection.attachVideoChatStream()
	}
	catch (error) {
		toast.add({ severity: 'error', summary: 'Error', detail: error, group: 'br', life: 3000 });

	}
	mediaSelectionDisabled.value = false;
};

const enablePencilFunc = async () => {
	if (pencilEnabled.value) {
		await videoBoard.stop()
		pencilEnabled.value = false
		isDrawing.value = false
	} else {
		await videoBoard.start()
		pencilEnabled.value = true
	}
}

const enableVideoLocalDraggable = (width = null, height = null) => {
	width = Number(width || videoLocalContainer.value.style.width.replace("px", "") || videoLocalContainer.value.offsetWidth)
	height = Number(height || videoLocalContainer.value.style.height.replace("px", "") || videoLocalContainer.value.offsetHeight)
	console.log("enablevideolocaldraggable ", { x: window.innerWidth - width, y: window.innerHeight - height })
	draggable.value = useDraggable(videoLocalContainer, {
		initialValue: { x: window.innerWidth - width, y: window.innerHeight - height }
	});
}

const linkDialogOpenFunc = async () => {
	dialogLinkOpen.value ? dialogLinkOpen.value = false : dialogLinkOpen.value = true

};

const items = ref([
	{
		label: 'Exit',
		icon: 'pi pi-angle-left text-vanilla-yellow ',
		command: async () => {
			await closeConnection()
			await router.push("/")
		}
	},
	{
		label: 'Serverless',
		icon: 'pi pi-server',
		command: () => {
			dialogServerLessOpen.value = true;

		}
	},
	{
		label: 'Painting mode',
		icon: 'pi pi-pencil active',
		command: () => {
			enablePencilFunc()
		}
	},
	{
		label: 'Maximize',
		icon: 'pi pi-window-maximize',
		command: () => {
			if (call.value && videoRemote.value) {
				videoRemote.value.requestFullscreen()
			} else {
				videoLocal.value.requestFullscreen()
			}
		}
	},
	{
		label: 'Info',
		icon: 'pi pi-info-circle',
		command: () => {
			dialogVideochatInfo.value = true;
		}
	},
	{
		label: 'Settings',
		icon: 'pi pi-cog',
		command: () => {
			drawerSettingsOpenFun()
		}
	}
])


function writeOnChat(message: ChatMessage) {
	chatMessages.value.push(message)
}
function sendChatMessage(message: ChatMessage[]) {
	webRtcConnection && call.value && webRtcConnection.dataChannels["chat"] && webRtcConnection.dataChannels["chat"].send(message[message.length - 1].data)
}

async function generateLink() {
	if (!link.value && !generatingLink.value) {
		generatingLink.value = true

		console.log(link.value)
		await router.push({
			path: '/videochat',
		});
		webRtcConnection = createWebRTCConnection()

		let result = await webRtcConnection.websocketGenerateLink()
		if (!result) {
			toast.add({ severity: 'error', summary: 'Error', detail: 'Error generating link. Contact the signaling server system administrator.', group: 'br', life: 3000 });
			return
		}
		link.value = document.location.href + "?room=" + result;
		await router.push({
			path: '/videochat',
			query: {
				room: result as string
			}
		});
		generatingLink.value = false

	}
	if(link.value)
		dialogLinkOpen.value = true;
}

async function openRoomDialog() {
	dialogRoomOpen.value = true;
}

async function enterRoom() {
	if (dialogRoomIdInput.value) {
		if (webRtcConnection) {
			webRtcConnection.close()
		}

		link.value = document.location.href + "?room=" + dialogRoomIdInput.value;
		await router.push({
			path: '/videochat',
			query: {
				room: dialogRoomIdInput.value as string
			}
		});
		await initalizeWebRTCfromCurrentRoomParam()
		dialogRoomOpen.value = false;
	} else {
		toast.add({ severity: 'error', summary: 'Error', detail: 'You need to introduce a room ID', group: 'br', life: 3000 });

	}

}

function copyLinkToClipboard() {
	copy(link.value)
	dialogLinkOpen.value = false;
}

function ontrack(connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) {
	if (videoRemote.value) {
		videoRemoteStream = stream[0];
		videoRemote.value.srcObject = videoRemoteStream;
		videoRemote.value.oncanplay = (event) => {
			videoRemote.value.play().catch(() => {
				isUserInteractionRequiredForVideoRemoteReproduction.value = true;
			})
			adjustCanvasToVideo(canvasRemote.value, videoRemote.value)
		}
		videoRemote.value.onchange = () => {
			videoBoardRemote.configureCanvas(videoRemote.value.videoWidth, videoRemote.value.videoHeight)
			adjustCanvasToVideo(canvasRemote.value, videoRemote.value)
		}
	}
	// if (track.kind == "video")
	//     setTimeout(() => adjustRemoteVideoAspectRatio(), 3000);
};

function onDataChannel(connection: WebRtcConnection, channel: RTCDataChannel) {
	switch (channel.label) {
		case "chat":
			channel.onopen = async function (event) {
				console.log(this.label + " is open!");
				dialogServerLessOpen.value = false;
				// channel.send("hello");
				call.value = true;
			};

			channel.onclose = async () => {
				console.log("channel close");
				await onClose()
			};

			channel.onmessage = event => {
				console.log(event.data);
				writeOnChat({ data: event.data, own: false })
				if (!drawerChatOpen.value) {
					nonReadedMessages.value++
				}
			};
			break;
		case "video-board":
			channel.onopen = async function (event) {
				console.log(this.label + " is open!");

			};

			channel.onclose = () => {
				console.log("channel " + this.label + "close");
			};

			channel.onmessage = event => {
				const parsedData = JSON.parse(event.data)
				videoBoardRemote.canvasPencilAction(parsedData.x, parsedData.y, parsedData.px, parsedData.py, parsedData.mode, parsedData.radius, true, null, parsedData.canvasSize.width, parsedData.canvasSize.height)
			};
			break;
	}
}

async function onClose(){
	await closeWebRTCConnection();
	videoRemote.value.srcObject = null;
	call.value = false;
}

function onDraw(x, y, px, py, mode, radius, canvasSize) {

	if (webRtcConnection && call.value) {

		const videoBoardDatachannel = webRtcConnection.dataChannels["video-board"];
		if (videoBoardDatachannel) {
			if (videoBoardDatachannel.readyState == "open")
				videoBoardDatachannel.send(JSON.stringify({
					x, y, px, py, mode, radius, canvasSize
				}))
		} else {
			console.log("no video board datachannel")
			webRtcConnection.attachDataChannel("video-board", 3, false)
		}
	}
}

function onDrawStateChange(drawState) {
	if (isDrawing.value != drawState) {
		isDrawing.value = drawState
		if (isDrawing.value) {
			videoLocalContainer.value.style.width = ""
			videoLocalContainer.value.style.height = ""

		} else {
			call.value && minimizeLocalVideo()
		}
		// adjustAspectRatio(videoLocal.value,videoLocalContainer.value)
	}
}

async function  closeConnection() {
	link.value = ""
	await closeWebRTCConnection()
	await router.push({
		path: '/videochat'
	});
}

async function closeWebRTCConnection() {
	webRtcConnection && await webRtcConnection.close();
}

function writeOnOffer(message: string) {
	offerTextArea.value = message
}

function createWebRTCConnection(){
	webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnOffer,onClose)
	return webRtcConnection
}

async function createOffer() {
	webRtcConnection = createWebRTCConnection()
	await webRtcConnection.createInitialOffer()
}

async function createOrRecibeAnswer() {
	if (!webRtcConnection || webRtcConnection.state != "have-local-offer") {
		// webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnOffer,onClose)
		webRtcConnection = createWebRTCConnection()

	}
	await webRtcConnection.createAnswerFromCompressedString(sdpMessageInput.value)
}

async function refreshMediaDevices() {
	mediaDevicesAllowed.value = false;
	if(mediaSourcesHandler){
		mediaSourcesHandler.stopAndRemoveAudio()
		await mediaSourcesHandler.stopAndRemoveVideo()
	}
	await initializeLocalStream()
	devices.audio = mediaSourcesHandler.audioDevices;
	devices.video = mediaSourcesHandler.videoDevices;
	mediaDevicesAllowed.value = true;

}

async function initializeLocalStream() {
	if (process.client) {
		let defaultParamsFromLocalStorage = true;

		if (!mediaSourcesHandler) {
			mediaSourcesHandler = new MediaSourcesHandler(videoLocal)
		} else {
			defaultParamsFromLocalStorage = false
		}
		const value = await mediaSourcesHandler.initializeLocalStream(undefined, defaultParamsFromLocalStorage)


		if (!value) {
			videoEnabled.value = false;
			audioEnabled.value = false;
			toast.add({ severity: 'error', summary: 'Error', detail: 'Error while trying to get the camera. Check the permissions for the camera.', group: 'br', life: 3000 });
			getMediaDevices.value = true
			return null
		}
		for (const track of value.getTracks()) {
			track.onended = async (event) => {
				await mediaSourcesHandler.stopAndRemoveAudio()
				await mediaSourcesHandler.stopAndRemoveVideo()
				console.log("track ended")
				initializeLocalStream()
			}
		}
		getMediaDevices.value = false
		// await mediaSourcesHandler.getMediaDevices()
		mediaSourcesHandler.currentAudioTracks.length > 0 && (audioEnabled.value = true)
		mediaSourcesHandler.currentVideoTracks.length > 0 && (videoEnabled.value = true)
		devices.audio = mediaSourcesHandler.audioDevices;
		devices.video = mediaSourcesHandler.videoDevices;
		audioSelected.value = mediaSourcesHandler.currentDevices.audio;
		videoSelected.value = mediaSourcesHandler.currentDevices.video;

		if (videoEnabled.value) {
			videoBoard = new VideoBoard(videoLocal.value, canvasLocal.value, onDraw, onDrawStateChange)
			videoLocal.value.oncanplay = () => {
				adjustCanvasToVideo(canvasLocal.value, videoLocal.value)
			}
			videoLocal.value.onchange = () => {
				videoBoardRemote.configureCanvas(videoLocal.value.videoWidth, videoLocal.value.videoHeight)
				adjustCanvasToVideo(canvasLocal.value, videoLocal.value)
			}
			const isLocalVideoMirroring = useLocalStorage("local-video-mirror");

			if (isLocalVideoMirroring === "false") {
				localVideoMirror.value = false;
			} else {
				localVideoMirror.value = true;
			}

		}
		webRtcConnection && webRtcConnection.attachVideoChatStream()

	}
}



async function initializeScreenStream() {
	if (process.client) {
		mediaDevicesAllowed.value = false;
		if (screenSharing.value) {
			await mediaSourcesHandler.stopAndRemoveVideo()
			if (videoEnabled.value) {
				await mediaSourcesHandler.startVideo(videoSelected.value)
			}
			webRtcConnection && webRtcConnection.attachVideoChatStream()
			frontCamera.value = true;
			screenSharing.value = false;
		} else {
			let result = await mediaSourcesHandler.getScreenStream();
			result.getVideoTracks()[0].onended = () => {
				screenSharing.value = true;
				initializeScreenStream()
			}
			if (!result) return;
			webRtcConnection && webRtcConnection.attachVideoChatStream()
			frontCamera.value = false;
			screenSharing.value = true;
		}
	}
	mediaDevicesAllowed.value = true;
}

function adjustRemoteVideoAspectRatio() {
	if (webRtcConnection) {
		const aspectRatio = windowSize.width / windowSize.height;
		for (const key in webRtcConnection.remoteStreams) {
			webRtcConnection.remoteStreams[key].getVideoTracks().forEach(track => {
				const tracksettings = track.getSettings();
				if (aspectRatio < 0.7 && tracksettings.width / tracksettings.height > 0.9)
					track.applyConstraints({
						aspectRatio: { ideal: 0.9 }
					})
				else
					track.applyConstraints({
						aspectRatio: { ideal: null }
					})
			}
			)
		}
	}
}

async function initalizeWebRTCfromCurrentRoomParam() {
	if (route.query.room && route.query.room!=undefined) {
		// webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnOffer, onClose);
		webRtcConnection = createWebRTCConnection()
		let result = await webRtcConnection.websocketConsumeLink(route.query.room)
		if (!result) {
			toast.add({ severity: 'error', summary: 'Error', detail: 'Error while trying to connnect to the signaling server', group: 'br', life: 3000 });
		}
	}
}

const onSourceChange = (type: string) => async (value: string | undefined, oldValue: string | undefined) => {
	console.log(value, oldValue)
	mediaSelectionDisabled.value = true

	if (process.client && value) {
		if ((type === "audio" && !audioEnabled.value) || (type === "video" && !videoEnabled.value)) return null;
		try {
			videoBoard.stop()
			isDrawing.value = false;
			await mediaSourcesHandler.changeSourceStream(audioSelected.value, videoSelected.value)
			webRtcConnection && webRtcConnection.attachVideoChatStream()
		} catch (error) {
			console.log(error.message);
			type === "audio" ? audioSelected.value = oldValue : videoSelected.value = oldValue
			toast.add({ severity: 'error', summary: 'Error', detail: value + ": " + error, group: 'br', life: 3000 });
			mediaSelectionDisabled.value = false
			return;
		}

		// }
		if (type == "video" && mediaSourcesHandler.currentVideoCapabilities) {
			frontCamera.value = !JSON.stringify(mediaSourcesHandler.currentVideoCapabilities.facingMode).includes("environment")
		}

	}else{
		type === "audio" ? audioSelected.value = null : videoSelected.value = null

	}
	mediaSelectionDisabled.value = false

}

function minimizeLocalVideo(translate: boolean = false) {
	videoLocalContainer.value.style.height = window.innerHeight / 4 + "px"
	const result = adjustAspectRatio(videoLocal.value, videoLocalContainer.value)
	translate && (videoLocalContainer.value.style.transform = "translate3d(" + (window.innerWidth - result.width) + "px," + (window.innerHeight - result.height) + "px,0)")
}
watch(audioSelected, onSourceChange("audio"))
watch(videoSelected, onSourceChange("video"))
watch(call, async (value: boolean) => {
	if (value === true) {
		videoBoardRemote = new VideoBoard(videoRemote.value, canvasRemote.value, null);
		setTimeout(() => {
			lowerToolBarHidden.value = true;
		}, 5000)
		minimizeLocalVideo(true)

		// videoLocalContainer.value.style.left = (window.innerWidth - Number(videoLocalContainer.value.style.width.replace("px",""))) + "px"
		// videoLocalContainer.value.style.top = (window.innerHeight - Number(videoLocalContainer.value.style.height.replace("px",""))) + "px"
		// setTimeout(()=>adjustAspectRatio(videoLocal.value, videoLocalContainer.value),0)
		// setTimeout(() => {
		//     !draggable.value && enableVideoLocalDraggable()
		// }, 200)

	} else {
		lowerToolBarHidden.value = false;
		videoLocalContainer.value.style.width = ""
		videoLocalContainer.value.style.height = ""
		initalizeWebRTCfromCurrentRoomParam()
	}
})
let lastTimeoutId = null;
watch(mouse, () => {
	if (call.value === true) {
		lowerToolBarHidden.value = false;
		clearTimeout(lastTimeoutId)
		lastTimeoutId = setTimeout(() => {
			lowerToolBarHidden.value = true;
		}, 5000)
	} else {
		lowerToolBarHidden.value = false;
		clearTimeout(lastTimeoutId)
	}
})

watch(mouse[1], () => {
	if (isUserInteractionRequiredForVideoRemoteReproduction.value === true) {
		videoRemote.value.play().then(() => {
			isUserInteractionRequiredForVideoRemoteReproduction.value = false
		})
	}
})

function videoLocalContainerDrag(x: number = videoLocalContainerDraggableStyle.value.x, y: number = videoLocalContainerDraggableStyle.value.y) {



	const xmaxbound = (windowSize.width - videoLocalContainer.value.offsetWidth)
	const ymaxbound = (windowSize.height - videoLocalContainer.value.offsetHeight)
	const xminbound = 0
	const yminbound = 0

	if (x > xmaxbound) {
		x = xmaxbound
	}
	if (y > ymaxbound) {
		y = ymaxbound
	}
	if (x < xminbound) {
		x = xminbound
	}
	if (y < yminbound) {
		y = yminbound
	}
	if (x <= xmaxbound &&
		y <= ymaxbound &&
		x >= 0 && y >= 0
	) {
		videoLocalContainerDraggableStyle.value = {
			style: "transform: translate3d(" + x + "px, " + y + "px, 0px);",
			x: x,
			y: y,
		}
	}



}


function adjustCanvasToVideo(canvas, video) {
	const aspectRatio = video.videoWidth / video.videoHeight;

	canvas.style.maxWidth = (window.innerHeight * aspectRatio) + "px";
	canvas.style.maxHeight = (window.innerWidth / aspectRatio) + "px";
}
function clearAdjustCanvasToVideo(canvas) {
	canvas.style.maxWidth = "";
	canvas.style.maxHeight = "";
}


function adjustAspectRatio(video: HTMLVideoElement, container: HTMLElement) {
	const containerWidth = Number(10000000)
	const containerHeight = Number(container.style.height.replace("px", "") || container.offsetHeight)
	const videoFrameAspectRatio = containerWidth / containerHeight;
	const aspectRatio = video.videoWidth / video.videoHeight;
	const result = { width: containerWidth, height: containerHeight }
	if (videoFrameAspectRatio > aspectRatio) {
		container.style.width = (containerHeight * aspectRatio) + "px";
		result.width = (containerHeight * aspectRatio)
		// container.style.height = container.offsetHeight + "px"
	} else if (videoFrameAspectRatio < aspectRatio) {
		container.style.height = (containerWidth / aspectRatio) + "px";
		result.height = (containerWidth / aspectRatio)
		// container.style.width = container.offsetWidth + "px"
	}
	return result
}


function resetVideoLocalPosition() {
	call.value && !isDrawing.value && minimizeLocalVideo()
	if ((videoLocalContainerDraggableStyle.value.x + videoLocalContainer.value.offsetWidth) >= windowSize.width) {
		videoLocalContainerDrag(windowSize.width - videoLocalContainer.value.offsetWidth, videoLocalContainerDraggableStyle.value.y)
		draggable.value && (draggable.value.x = videoLocalContainerDraggableStyle.value.x);

	}
	if ((videoLocalContainerDraggableStyle.value.y + videoLocalContainer.value.offsetHeight) >= windowSize.height) {
		videoLocalContainerDrag(videoLocalContainerDraggableStyle.value.x, windowSize.height - videoLocalContainer.value.offsetHeight)
		draggable.value && (draggable.value.y = videoLocalContainerDraggableStyle.value.y);

	}
	adjustCanvasToVideo(canvasLocal.value, videoLocal.value)
	adjustCanvasToVideo(canvasRemote.value, videoRemote.value)
}

watch(draggable, () => {
	videoLocalContainerDrag(draggable.value.x, draggable.value.y)

}, { deep: true })

let windowSizeTimeout = null;


watch(windowSize, () => {
	isResizing.value = true;
	windowSizeTimeout && clearTimeout(windowSizeTimeout);
	resetVideoLocalPosition()

	// adjustRemoteVideoAspectRatio()
	// isResizing.value =false;
	windowSizeTimeout = setTimeout(function () {
		isResizing.value = false;
	}, 1000);

}, { deep: true })

watch(localVideoMirror, (value) => {
	useLocalStorage("local-video-mirror", String(value));
})

onMounted(() => {
	(async () => {
		await initializeLocalStream()
		if (route.query.room && route.query.room.length > 0) {
			link.value = document.location.href;
			initalizeWebRTCfromCurrentRoomParam()
		}
	})();
	videoLocalContainer.value.ontransitionend = () => {
		// adjustAspectRatio(videoLocal.value, canvasLocal.value,)
		if (call.value && !isDrawing.value) {
			!draggable.value && enableVideoLocalDraggable()
		}
		adjustCanvasToVideo(canvasLocal.value, videoLocal.value)
		// !draggable.value && enableVideoLocalDraggable()
		// adjustAspectRatio(videoLocal.value, videoLocalContainer.value)




	}
	videoLocalContainer.value.ontransitionstart = () => {
		if (call.value && !isDrawing.value) {
			clearAdjustCanvasToVideo(canvasLocal.value)
		}
		// adjustAspectRatio(videoLocal.value, videoLocalContainer.value)
		// !draggable.value && enableVideoLocalDraggable()
		// videoLocalContainer.value.style.width = ""
		// videoLocalContainer.value.style.width = ""
	}
	// if (process.client) {

	// }


})
onBeforeUnmount(() => {
	if (process.client) {
		mediaSourcesHandler.stopLocalStream()
	}
})

</script>

<style lang="scss" >
.disable-rounded button,
.disable-rounded button:focus-visible,
.disable-rounded button:focus-within {
	border: unset !important;
	box-shadow: unset !important;
}

button {
	// border: unset !important;
	border: unset !important;
	box-shadow: unset !important;
	z-index: 40;
}

.button-disabled {
	@apply  !bg-[#515154] !text-white;
}

.lower-toolbar-button {
	@apply  !m-4 !h-15 !w-15 !<lg: h-12 !<lg:w-12
}

.disable-rounded button:enabled:active {
	background: rgb(242 212 146 / 5%) !important;
}

.p-badge {
	transition: all 200ms;
	color: #f58608 !important;
	font-weight: bold;
	// transform: scale(1)!important;
}

.hide-badge {
	.p-badge {
		@apply text-dark-50;
		transform: scale(0.00002) !important;
	}
}

.pencil-active {
	.p-speeddial-item:nth-child(3) {
		.p-speeddial-action {
			background: #2196F3 !important;
		}
	}
}

video::-webkit-media-controls-play-button,
video::-webkit-media-controls-timeline,
video::-webkit-media-controls-current-time-display,
video::-webkit-media-controls-time-remaining-display,
video::-webkit-media-controls-mute-button,
video::-webkit-media-controls-toggle-closed-captions-button,
video::-webkit-media-controls-volume-slider {
	display: none;

}
</style>