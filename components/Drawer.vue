<template>
    <div class="flex-grow-0 w-md z-50 flex-col overflow-hidden transition-all duration-[400ms] text-light-50 box-content max-w-full <sxl:fixed <sxl:right-0 <sxl:top-0 <sxl:bottom-0 bottom-0 <sm:w-full"
        :class="{ '!w-0': !open }">
        <div class="flex flex-col  h-full w-full">
            <div class="basis-[4.5rem] flex-grow-0 flex flex-row bg-dark-400  cool-shadow overflow-hidden">
                <div class="flex-1 flex align-middle justify-start items-center pl-5 ">
                    <h2>{{ title }}</h2>
                </div>
                <div class="flex-0  w-20 items-center flex justify-center">
                    <Button icon="pi pi-times" class="p-button-rounded  p-button-text !text-light-50"
                        @click="closeFun" />
                </div>
            </div>
            <div class="flex-1 flex flex-col relative bg-dark-400  cool-shadow overflow-hidden">
                <div class="absolute left-0 right-0 bottom-0 top-2  ">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

const props = defineProps<{
    title?: string
    open?: boolean
}>()

const emit = defineEmits(["update:open"])

const closeFun = () => {
    emit('update:open', false)
}

</script>

<style lang="scss" scoped>
.cool-shadow {
   box-shadow: 0 6px 24px 0 rgb(218 218 218 / 7%), 0 0 0 1px rgb(242 212 146 / 33%) !important;
}
</style>