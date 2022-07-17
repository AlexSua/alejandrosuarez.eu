<template>
    <Button 
         v-bind="$props" :class="`p-button-rounded p-button-warning lower-toolbar-button bg-vanilla-yellow ${props.class}`" :icon="`pi `+props.icon "/>
</template>

<script setup lang="ts">

const props = defineProps<{
    icon?: string,
    class?:string
}>()


</script>

<style lang="scss" scoped>


</style>