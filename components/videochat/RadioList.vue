<template>
    <div class="flex flex-col w-full px-5 ">
        <h3 class="text-vanilla-yellow  border-b-light-50 border-solid border-b-[2.5px]"> {{title}}</h3>
        <div class="field-radiobutton m-2 mt-2" v-for="item,index in items" :key="index+item.label">
            <RadioButton v-model="radioValue" :id="item.label" :name="title" :value="item.label" :disabled="disabled" class="mx-2" />
            <label :for="item.label">{{item.label}}</label>
        </div>
    </div>

</template>

<script setup lang="ts">

const props = defineProps<{
    title?: string,
    items?: Array<Record<string,string>>,
    modelValue?:string,
    disabled?:boolean,
}>()

const emits = defineEmits(["update:modelValue"])

const radioValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

</script>

<style lang="scss">
.bg-videodark {
    background-color: $video-dark;
}
</style>