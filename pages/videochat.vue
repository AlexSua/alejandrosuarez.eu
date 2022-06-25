<template>
    <div class="flex w-full h-screen">

        <Dialog header="Serverless connection" footer="" v-model:visible="dialogLinkOpen" class="flex">
            <div class="flex-1 p-inputgroup py-2">
                <InputText placeholder="Introduce offer/answer" v-model="sdpMessageInput"/>
                <Button label="Go" @click="createOrRecibeAnswer"/>
            </div>
            <div class="flex-1 p-inputgroup py-2">
                <Button label="Create offer" class="w-full" @click="createOffer" />
            </div>
            <div class="flex-1 p-inputgroup py-2">
                <Textarea  v-model="offerTextArea" disabled rows="5" class="min-w-[17rem] w-full" />

            </div>
        </Dialog>
        <div ref="superiorToolBar" class="absolute flex flex-row w-full text-right z-30 transition-all duration-400"
            :class="{ 'lg:pr-[400px]': drawerSettingsOpen }">
            <SpeedDial :radius="140" :model="items" showIcon="pi pi-bars text-vanilla-yellow"
                :tooltipOptions="{ event: null, position: 'right' }" hideIcon="pi pi-times text-vanilla-yellow"
                direction="down-right" type="quarter-circle" buttonClass="p-button-text"
                class="up left transform !-translate-x-5 !-translate-y-5" />

            <!-- <div class="flex-1">sdf</div> -->
            <div class="flex-1">
                <Button icon="pi pi-comments p-text-secondary"
                    class="p-button-rounded p-button-text !p-12  up right transform !translate-x-6 !-translate-y-8"
                    @click="drawerChatOpenFun">
                    <i class="pi pi-comments mr-2   p-text-secondary  text-vanilla-yellow" :class="{ 'hide-badge': nonReadedMessages == 0}"
                        style="font-size: 2rem" v-badge="nonReadedMessages" />
                </Button>
            </div>
        </div>
        <div class="flex-1 h-screen flex relative bg-black ">
            <video ref="videoRemote" class=" flex-1 max-h-screen w-full"></video>

            <div ref="videoLocalContainer" class="absolute flex m-auto h-screen w-full items-center right-4 bottom-4 transition-all duration-500">
                <video ref="videoLocal" class=" flex-1  w-full max-h-screen max-h-full max-w-full"
                    :class="{ 'transform  rotate-y-180': frontCamera }"></video>
            </div>
            <div class="absolute flex m-auto h-screen w-full items-center justify-center">
                <Button v-if="!mediaDevicesAllowed" icon="pi pi-camera" label="Get media devices"
                    class=" p-button-danger m-auto flex-grow-0" @click="initializeLocalStream">
                </Button>
            </div>
            <Toast position="bottom-left" group="br" />
        </div>

        <VideochatDrawer v-model:open="drawerSettingsOpen" class="w-[400px]" title="Settings">
            <div class="flex flex-1 min-w-[350px] flex-col">
                <VideochatRadioList v-model="videoSelected" :items="devices.video" title="Video devices"
                    :disabled="mediaSelectionDisabled">
                </VideochatRadioList>
                <VideochatRadioList v-model="audioSelected" :items="devices.audio" title="Audio devices"
                    :disabled="mediaSelectionDisabled">
                </VideochatRadioList>
            </div>
        </VideochatDrawer>
        <VideochatDrawer v-model:open="drawerChatOpen" title="Chat" class="w-[470px]">
            <VideochatChat v-model="chatMessages" v-on:update:modelValue="sendChatMessage"></VideochatChat>
        </VideochatDrawer>

    </div>
</template>

<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import MediaSourcesHandler from "~~/utils/media-sources-handler";
import WebRtcConnection from "~~/utils/webrtc";

let mediaSourcesHandler: MediaSourcesHandler;
let webRtcConnection: WebRtcConnection;

const toast = useToast();
const router = useRouter()

const videoLocal = ref<HTMLVideoElement>(null)
const videoLocalContainer = ref<HTMLElement>(null)
const videoRemote = ref<HTMLVideoElement>(null)

const frontCamera = ref<boolean>(true)
const chatMessages = ref<Array<ChatMessage>>([])
const nonReadedMessages = ref<number>(0)

const drawerChatOpen = ref(false)
const drawerSettingsOpen = ref(false)
const dialogLinkOpen = ref(false)
const mediaDevicesAllowed = ref(true)

const link = ref("http://asdflasdfajsdfh sdlfajsdh fljhsldj hfashl fk")

const devices = reactive({
    video: [],
    audio: [],
})
const audioSelected = ref<string>()
const videoSelected = ref<string>()
const mediaSelectionDisabled = ref(false)

const sdpMessageInput = ref("")
const offerTextArea = ref("")

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



const items = ref([

    {
        label: 'Exit',
        icon: 'pi pi-angle-left text-vanilla-yellow ',
        command: () => {
            router.push("/")
        }
    },
    {
        label: 'Info',
        icon: 'pi pi-info',
        command: () => {
            dialogLinkOpen.value = true;
            //  toast.add({severity: 'success', summary: 'Link created', detail: 'You have created succesfully a new link and has bee copied into your clipboard', group: 'br', life: 3000});

        }
    },
    {
        label: 'Generate link',
        icon: 'pi pi-upload',
        command: () => {
            // dialogLinkOpen.value = true;
            toast.add({ severity: 'success', summary: 'Link created', detail: 'You have created succesfully a new link and has bee copied into your clipboard', group: 'br', life: 3000 });

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


function ontrack(connection: WebRtcConnection, track: MediaStreamTrack, stream: readonly MediaStream[]) {

    console.log(stream)
    if (videoRemote.value) {
        if (!videoRemote.value.srcObject) {
            videoRemote.value.srcObject = stream[0];
        }
        stream[0].addTrack(track)
        videoRemote.value.oncanplay = () => {
            videoRemote.value.play()
            videoLocalContainer.value.classList.add("w-1/4", "h-1/4");
        }
    }
};

function onDataChannel(connection: WebRtcConnection, channel: RTCDataChannel) {
    channel.onopen = function (event) {
        console.log(this.label + " is open!");
        dialogLinkOpen.value = false;
        channel.send("hello");
    };

    channel.onclose = () => {
        console.log("channel close");
    };

    channel.onmessage = event => {
        console.log(event.data);
     
        writeOnChat({data:event.data,own:false})
        if(!drawerChatOpen.value) {
            nonReadedMessages.value++
        }
    };
}

function writeOnOffer(message: string) {
    offerTextArea.value = message
}


async function createOffer() {
    webRtcConnection = new WebRtcConnection(mediaSourcesHandler,ontrack, onDataChannel, writeOnChat,writeOnOffer)
    await webRtcConnection.createOffer()
}
async function createOrRecibeAnswer() {
    if (!webRtcConnection || webRtcConnection.state != "have-local-offer") {
        webRtcConnection = new WebRtcConnection(mediaSourcesHandler,ontrack, onDataChannel, writeOnChat, writeOnOffer)
    }
    await webRtcConnection.createAnswerFromString(sdpMessageInput.value)
}


function initializeLocalStream() {
    if (process.client) {
        mediaSourcesHandler = new MediaSourcesHandler(videoLocal);
        mediaSourcesHandler.initializeLocalStream().then((value) => {
            if (!value) {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Error while trying to get the camera. Check the permissions for the camera.', group: 'br', life: 3000 });
                mediaDevicesAllowed.value = false
                return null
            }
            mediaDevicesAllowed.value = true
            devices.audio = mediaSourcesHandler.audioDevices;
            devices.video = mediaSourcesHandler.videoDevices;
            audioSelected.value = mediaSourcesHandler.currentDevices.audio;
            videoSelected.value = mediaSourcesHandler.currentDevices.video;
        })
    }
}

const onSourceChange = (type: string) => async (value: string | undefined, oldValue: string | undefined) => {
    console.log(type, value, oldValue)
    if (process.client) {
        if (oldValue) {
            mediaSelectionDisabled.value = true
            await mediaSourcesHandler.changeSourceStream(audioSelected.value, videoSelected.value)
            mediaSelectionDisabled.value = false
            webRtcConnection.attachVideoChatStream()
        }

        if (type == "video" && mediaSourcesHandler.currentVideoCapabilities) {
            frontCamera.value = !JSON.stringify(mediaSourcesHandler.currentVideoCapabilities.facingMode).includes("environment")
        }

    }
}

watch(audioSelected, onSourceChange("audio"))
watch(videoSelected, onSourceChange("video"))

onMounted(() => {
    initializeLocalStream()
})
onBeforeUnmount(() => {
    if (process.client) {
        mediaSourcesHandler.stopLocalStream()
    }
})

</script>

<style lang="scss" >
button,
button:focus-visible,
button:focus-within {
    border: unset !important;
    box-shadow: unset !important;

}

button:enabled:active {
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
</style>