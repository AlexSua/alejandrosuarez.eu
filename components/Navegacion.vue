<template>
  <nav class="secciones-navegacion">
    <ul>
      <li
        v-for="(navigation_attribute, index) in Object.keys(
          $tm(navigationId)
        ).filter((el) => {
          if (!blacklist.includes(el)) return true;
          else return false;
        })"
        :key="index"
        @click="navegarA($t(`${navigationId}.${navigation_attribute}.path`))"
      >
        <!-- <span> -->
          <!-- <NuxtLink :to="$t(`${navigationId}.${navigation_attribute}.path`) ">{{ $t(`${navigationId}.${navigation_attribute}.title`) }}</NuxtLink></span> -->
              <span><NuxtLink :to="($route.params.lang?'/'+$route.params.lang:'')+$t(`${navigationId}.${navigation_attribute}.path`) " >{{ $t(`${navigationId}.${navigation_attribute}.title`) }}</NuxtLink></span>

      </li>
    </ul>
    <div
      v-if="loadAnimation"
      class="load-animation"
    >
      <div />
      <div />
    </div>
  </nav>
</template>


<script setup lang="ts">

defineProps({
  loadAnimation: Boolean,
  navigationId: {
    type: String,
    default: "profile.navigation",
  },
  blacklist: {
    type: Array,
    default: () => [],
  },
});

function navegarA(localization: string) {
  if (localization && localization.startsWith("#"))
    (document.querySelector(localization.replace("#",".")) as HTMLElement).scrollIntoView({ behavior: "smooth" });
}
</script>

<style>
</style>
