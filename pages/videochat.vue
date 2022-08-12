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
        <Dialog header="Share link" footer="" v-model:visible="dialogLinkOpen" class="flex w-50rem">
            <div class="flex-1 p-inputgroup py-2">
                <Textarea v-model="link" disabled rows="2" class="w-[50rem] w-full" />
            </div>
            <div class="flex-1 p-inputgroup py-2">
                <Button label="Copy to clipboard" class="w-full" @click="copyLinkToClipboard" />
            </div>
        </Dialog>
        <div ref="superiorToolBar"
            class="absolute flex flex-row w-full text-right transition-all duration-400 disable-rounded"
            :class="{ 'lg:pr-[400px]': drawerSettingsOpen }">
            <SpeedDial :radius="140" :model="items" showIcon="pi pi-bars text-vanilla-yellow"
                :tooltipOptions="{ event: null, position: 'right' }" hideIcon="pi pi-times text-vanilla-yellow"
                direction="down-right" type="quarter-circle" buttonClass="p-button-text"
                class="up left transform !-translate-x-5 !-translate-y-5 disable-rounded !z-50" />

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
        <div class="flex-1 h-screen flex relative bg-black ">
            <div v-if="isUserInteractionRequiredForVideoRemoteReproduction"
                class="absolute flex justify-center items-center flex-1 h-screen w-screen text-white text-center">
                <div class="w-80">
                    Some browsers require you to interact with the webpage before reproduce video.
                    <br /><br />
                    Please click or tap anywhere on this screen to reproduce remote video.
                </div>
            </div>
            <video autoplay ref="videoRemote" class=" flex-1 max-h-screen w-full"
                :class="{ '!object-cover': videoRemoteFullSize }"></video>

            <div ref="videoLocalContainer" class="absolute flex m-auto h-screen w-full items-center z-30" :class="{
                'w-[unset]': call, 'h-1/4': call,
                'transition-all duration-600': draggable && !draggable.isDragging
            }" style="touch-action:none;"
                :style="call ? videoLocalContainerDraggableStyle && videoLocalContainerDraggableStyle.style : ''">
                <video autoplay ref="videoLocal"
                    class=" flex-1  w-full max-h-screen max-h-full max-w-full <lg:object-cover"
                    :class="{ 'transform  rotate-y-180': frontCamera }"></video>
                <canvas ref="canvasLocal" class="fixed z-50  w-full bg-transparent transform  rotate-y-180 "></canvas>
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
                <div class="field-checkbox m-9">
                    <Checkbox id="video-fullsize" v-model="videoRemoteFullSize" :binary="true" />
                    <label for="video-fullsize" class="mx-3">Fill the screen size</label>
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

        <div ref="lowerToolBar"
            class="absolute bottom-10 <sxl:bottom-3 flex flex-row w-full text-center transition-all duration-400 bottom-0  align-center items-center lower-toolbar"
            :class="{ 'lg:pr-[400px]': (drawerSettingsOpen || drawerChatOpen), 'hidden': lowerToolBarHidden }">
            <!-- <div class="flex-1">sdf</div> -->

            <div class="flex flex-1 items-center justify-start ml-5">
                <Button v-if="!call" :icon="`pi pi-user-plus ${link ? 'pi-spin pi-spinner' : ''} `"
                    @click="generateLink" class=" p-button-rounded p-button-warning lower-toolbar-button" />
            </div>
            <div class="flex flex-1 items-center justify-center">
                <Button icon="pi pi-desktop" class=" p-button-rounded lower-toolbar-button"
                    :class="{ 'button-disabled': !screenSharing }" @click="initializeScreenStream" />
                <Button :disabled="mediaSelectionDisabled" icon="pi pi-bell"
                    class="  p-button-rounded lower-toolbar-button" :class="{ 'button-disabled': !audioEnabled }"
                    @click="enableAudioFunc" />
                <Button :disabled="mediaSelectionDisabled" icon="pi pi-video"
                    class=" p-button-rounded lower-toolbar-button" :class="{ 'button-disabled': !videoEnabled }"
                    @click="enableVideoFunc" />
                <Button v-if="call" icon="pi pi-phone" @click="closeConnection"
                    class="p-button-rounded p-button-danger lower-toolbar-button transform rotate-z-134" />
            </div>

            <div class="flex flex-1 items-center justify-center">

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { MediaPipeHandsMediaPipeModelConfig } from "@tensorflow-models/hand-pose-detection/dist/mediapipe/types.js";
import { MediaPipeHandsTfjsModelConfig } from "@tensorflow-models/hand-pose-detection/dist/tfjs/types.js";
import { useToast } from "primevue/usetoast";
import MediaSourcesHandler from "~~/utils/media-sources-handler";
import VideoBoard from "~~/utils/videoboard.js";
import WebRtcConnection from "~~/utils/webrtc";

let mediaSourcesHandler: MediaSourcesHandler;
let webRtcConnection: WebRtcConnection;

const toast = useToast();
const router = useRouter()
const route = useRoute()
const mouse = reactive([useMouse(), useMousePressed()])
const windowSize = reactive(useWindowSize())

useSeo({
    title: "VideoChat",
    description: "One click videochat",
    image: "",
    type: "WebSite",
    location: route.path,
});

const videoLocal = ref<HTMLVideoElement>(null)
const videoLocalContainer = ref<HTMLElement>(null)
const videoRemote = ref<HTMLVideoElement>(null)
const canvasLocal = ref<HTMLCanvasElement>(null)
const isUserInteractionRequiredForVideoRemoteReproduction = ref<boolean>(false)

let videoRemoteStream: MediaStream;

const frontCamera = ref<boolean>(true)
const chatMessages = ref<Array<ChatMessage>>([])
const nonReadedMessages = ref<number>(0)
const screenSharing = ref<boolean>(false)

const drawerChatOpen = ref(false)
const drawerSettingsOpen = ref(false)
const dialogServerLessOpen = ref(false)
const dialogLinkOpen = ref(false)
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
const lowerToolBarHidden = ref<boolean>(false)

const videoRemoteFullSize = ref<boolean>(false)
const call = ref(false)
const mediaSelectionDisabled = ref(false)

const sdpMessageInput = ref("")
const offerTextArea = ref("")

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
    if (videoEnabled.value) {
        !screenSharing.value && await mediaSourcesHandler.stopAndRemoveVideo()
        videoEnabled.value = false
    } else if (videoSelected.value) {
        !screenSharing.value && await mediaSourcesHandler.startVideo(videoSelected.value)
        videoEnabled.value = true;
    }
    webRtcConnection && webRtcConnection.attachVideoChatStream()
    mediaSelectionDisabled.value = false;
};

const enableAudioFunc = async () => {
    mediaSelectionDisabled.value = true;

    if (audioEnabled.value) {
        await mediaSourcesHandler.stopAndRemoveAudio()
        audioEnabled.value = false
    } else if (audioSelected.value) {
        await mediaSourcesHandler.startAudio(audioSelected.value)
        audioEnabled.value = true
        webRtcConnection && webRtcConnection.attachVideoChatStream()
    }
    webRtcConnection && webRtcConnection.attachVideoChatStream()
    mediaSelectionDisabled.value = false;
};

const enableVideoLocalDraggable = () => {
    draggable.value = useDraggable(videoLocalContainer, {
        initialValue: { x: window.innerWidth - videoLocalContainer.value.offsetWidth, y: window.innerHeight - videoLocalContainer.value.offsetWidth }
    });
}

const linkDialogOpenFunc = async () => {
    dialogLinkOpen.value ? dialogLinkOpen.value = false : dialogLinkOpen.value = true

};

const items = ref([
    {
        label: 'Exit',
        icon: 'pi pi-angle-left text-vanilla-yellow ',
        command: () => {
            closeConnection()
            router.push("/")
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
        label: 'Settings',
        icon: 'pi pi-cog',
        class: 'p-button-raised',
        command: () => {
            drawerSettingsOpenFun()
        }
    }
])


function writeOnChat(message: ChatMessage) {
    chatMessages.value.push(message)
}
function sendChatMessage(message: ChatMessage[]) {
    webRtcConnection && webRtcConnection.dataChannels["chat"] && webRtcConnection.dataChannels["chat"].send(message[message.length - 1].data)
}

async function generateLink() {
    if (!link.value && !generatingLink.value) {
        generatingLink.value = true

        console.log(link.value)
        router.push({
            path: '/videochat',
        });
        webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnChat, writeOnOffer)
        let result = await webRtcConnection.websocketGenerateLink()
        if (!result) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error generating link. Contact the signaling server system administrator.', group: 'br', life: 3000 });
            return
        }
        let roomid = await webRtcConnection.websocketGenerateLink();
        link.value = document.location.href + "?room=" + roomid;
        router.push({
            path: '/videochat',
            query: {
                room: roomid as string
            }
        });
        generatingLink.value = false

    }
    dialogLinkOpen.value = true;
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
        }

    }
    if (track.kind == "video")
        setTimeout(() => adjustRemoteVideoAspectRatio(), 3000);
};

function onDataChannel(connection: WebRtcConnection, channel: RTCDataChannel) {
    channel.onopen = async function (event) {
        console.log(this.label + " is open!");
        dialogServerLessOpen.value = false;
        channel.send("hello");
        call.value = true;
        setTimeout(() => !draggable.value && enableVideoLocalDraggable(), 0)
    };

    channel.onclose = () => {
        console.log("channel close");
        videoRemote.value.srcObject = null;
        call.value = false;
        closeWebRTCConnection()
        initalizeWebRTCfromCurrentRoomParam()
    };

    channel.onmessage = event => {
        console.log(event.data);
        writeOnChat({ data: event.data, own: false })
        if (!drawerChatOpen.value) {
            nonReadedMessages.value++
        }
    };
}

function closeConnection() {
    link.value = ""
    router.push({
        path: '/videochat'
    });
    closeWebRTCConnection()
}

function closeWebRTCConnection() {
    webRtcConnection && webRtcConnection.close();
}

function writeOnOffer(message: string) {
    offerTextArea.value = message
}

async function createOffer() {
    webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnChat, writeOnOffer)
    await webRtcConnection.createInitialOffer()
}

async function createOrRecibeAnswer() {
    if (!webRtcConnection || webRtcConnection.state != "have-local-offer") {
        webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnChat, writeOnOffer)
    }
    await webRtcConnection.createAnswerFromString(sdpMessageInput.value)
}

async function refreshMediaDevices() {
    mediaDevicesAllowed.value = false;
    await initializeLocalStream()
    devices.audio = mediaSourcesHandler.audioDevices;
    devices.video = mediaSourcesHandler.videoDevices;
    mediaDevicesAllowed.value = true;

}

async function initializeLocalStream() {
    if (process.client) {
        mediaSourcesHandler = new MediaSourcesHandler(videoLocal);
        const value = await mediaSourcesHandler.initializeLocalStream()
        if (!value) {
            videoEnabled.value = false;
            audioEnabled.value = false;
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error while trying to get the camera. Check the permissions for the camera.', group: 'br', life: 3000 });
            getMediaDevices.value = true
            return null
        }
        getMediaDevices.value = false
        await mediaSourcesHandler.getMediaDevices()
        mediaSourcesHandler.currentAudioTracks.length > 0 && (audioEnabled.value = true)
        mediaSourcesHandler.currentVideoTracks.length > 0 && (videoEnabled.value = true)
        devices.audio = mediaSourcesHandler.audioDevices;
        devices.video = mediaSourcesHandler.videoDevices;
        audioSelected.value = mediaSourcesHandler.currentDevices.audio;
        videoSelected.value = mediaSourcesHandler.currentDevices.video;

        if (videoEnabled.value) {
            setTimeout(() => {
                const videoBoard = new VideoBoard(videoLocal.value,canvasLocal.value)
                videoBoard.start()
            }, 3000);
        }

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
    if (link.value) {
        webRtcConnection = new WebRtcConnection(mediaSourcesHandler, ontrack, onDataChannel, writeOnChat, writeOnOffer);
        let result = await webRtcConnection.websocketConsumeLink(route.query.room)
        if (!result) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error while trying to connnect to the signaling server', group: 'br', life: 3000 });
        }
    }
}

const onSourceChange = (type: string) => async (value: string | undefined, oldValue: string | undefined) => {
    if (process.client) {
        if ((type === "audio" && !audioEnabled.value) || (type === "video" && !videoEnabled.value)) return null;
        if (oldValue) {
            mediaSelectionDisabled.value = true
            await mediaSourcesHandler.changeSourceStream(audioSelected.value, videoSelected.value)
            mediaSelectionDisabled.value = false
            webRtcConnection && webRtcConnection.attachVideoChatStream()
        }
        if (type == "video" && mediaSourcesHandler.currentVideoCapabilities) {
            frontCamera.value = !JSON.stringify(mediaSourcesHandler.currentVideoCapabilities.facingMode).includes("environment")
        }

    }
}

watch(audioSelected, onSourceChange("audio"))
watch(videoSelected, onSourceChange("video"))
watch(call, async (value: boolean) => {
    if (value === true) {
        setTimeout(() => {
            lowerToolBarHidden.value = true;
        }, 5000)
    } else {
        lowerToolBarHidden.value = false;
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

watch(draggable, () => {
    videoLocalContainerDrag(draggable.value.x, draggable.value.y)

}, { deep: true })

watch(windowSize, () => {
    if ((videoLocalContainerDraggableStyle.value.x + videoLocalContainer.value.offsetWidth) >= windowSize.width) {
        videoLocalContainerDrag(windowSize.width - videoLocalContainer.value.offsetWidth)
    }
    adjustRemoteVideoAspectRatio()

}, { deep: true })

onMounted(() => {
    (async () => {
        await initializeLocalStream()
        if (route.query.room && route.query.room.length > 0) {
            link.value = document.location.href;
            initalizeWebRTCfromCurrentRoomParam()
        }
    })();
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