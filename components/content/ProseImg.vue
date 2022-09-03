<template>
	<img :src="getSrc(src)" :alt="alt" :width="width" :height="height" loading="lazy" />
</template>
  
<script setup lang="ts">
  const props = defineProps({
  	src: {
  		type: String,
  		default: ''
  	},
  	alt: {
  		type: String,
  		default: ''
  	},
  	width: {
  		type: [String, Number],
  		default: undefined
  	},
  	height: {
  		type: [String, Number],
  		default: undefined
  	}
  });
const getSrc = (path) => {
  const modules = import.meta.globEager("/assets/img/blog/**");
  return modules[path].default;
};
  </script>