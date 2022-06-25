<template>
    <div ref="chatContainer" class="flex flex-1 h-full flex-col p-4 min-w-[300px]">
        <div ref="chatMessagesContainer"
            class="flex-1 w-full overflow-auto font-normal text-base break-words pb-4 flex flex-col">
            <div v-for="message, index of modelValue" class="bg-dark-50 max-w-6/10 p-2 px-4 m-2 rounded-lg self-start"
                :class="{ 'self-message': message.own }" :key="index">
                {{ message.data }}
            </div>
        </div>
        <div  ref="chatInputContainer" class="inline-flex flex-grow-0 w-full align-center pt-5">
            <InputText type="text" class="w-full" v-model="input" @keydown="sendMessageChatEnter" />
            <Button icon="pi pi-chevron-right" class="p-button-rounded p-button-secondary p-button-text"
                @click="sendMessage"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">

const input = ref("")
const chatMessagesContainer = ref(null)


const props = defineProps<{
    modelValue: Array<ChatMessage>,
}>()

const emits = defineEmits(["update:modelValue"])



function sendMessage() {
    if (input.value) {
        emits("update:modelValue", [...props.modelValue, { data: input.value.trim(), own: true }])
        input.value = ""
    }

}
function sendMessageChatEnter(event: any) {
    if (event.key === 'Enter') { sendMessage() }
}

watch(()=>props.modelValue, (value: any) => {
    if (chatMessagesContainer.value.scrollTop + chatMessagesContainer.value.offsetHeight == chatMessagesContainer.value.scrollHeight) {
        setTimeout(() => {
            chatMessagesContainer.value.scrollTop = chatMessagesContainer.value.scrollHeight;
        }, 20);
    }
},{deep:true})

</script>

<style lang="scss" scoped>
.self-message {
    background-color: $vanilla-yellow;
    @apply self-end text-dark-50;
}
</style>