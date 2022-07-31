<template>
    <div class="relative flex flex-col">
         <!-- bg-[#234b53] bg-[#374a51] bg-[#004e4e] bg-[#97845d] -->
        <div class="flex justify-between bg-[#3f382c] bg-[#34312e] text-white  p-4 pt-1 rounded-lg -mb-3">
             <div class="pr-[1rem]">{{description}}</div>
             <div>{{note.toLocaleUpperCase()}}</div>
             </div>

        <slot></slot>
        <!-- <Markdown :use="$slots.default" unwrap="code"></Markdown> -->
    </div>
</template>
<script setup>
const props = defineProps({
    note: {
        type: String,
    },
    description: {
        type: String,
    }
})
</script>

<style>
    
</style>