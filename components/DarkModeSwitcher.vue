<template>
    <div class="up left">
        <i v-if="darkmode" @click="switchDarkMode" class="pi pi-moon text-[2.23rem]"></i>
        <i v-else @click="switchDarkMode" class="pi pi-sun text-[2.23rem]"></i>
    </div>
</template>

<script setup lang="ts">

const darkmode = useState('dark-mode')

function switchDarkMode() {
    darkmode.value?darkmode.value=false:darkmode.value=true;
}

</script>

<style lang="scss" scoped>
.pi {
    font-size: 1.4rem !important;
    color: $vanilla-yellow;
    cursor: pointer;
}
</style>