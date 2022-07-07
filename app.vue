<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" @before-leave="onBeforeLeave" @after-enter="() => onAfterEnter()">
      <component :is="Component" v-model:afterEnter="afterEnter" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const afterEnter = ref(function (): any { });

setTimeout(() => {
  if (process.client) {
    let localStorageDarkMode = useLocalStorage("dark-mode");
    useDarkMode().value = localStorageDarkMode !== "false";
  }
}, 0);


const transitionName = computed(() => {
  let route_path = route.params.lang ? route.path.replace("/" + route.params.lang, '') : route.path;
  return router.prevRoute && router.prevRoute.meta.transition
    ? router.prevRoute.meta.transition[route_path ? route_path : ""]
    : "";
});


const onAfterEnter = computed(() => {
  window.scrollTo(0, 0);
  return afterEnter.value;
});

function onBeforeLeave() {
  afterEnter.value = () => { }
}





</script>


<style lang="scss">
@mixin transition($slide, $duration) {

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    position: absolute !important;
    transition: all $duration ease-out;
    width: $slide  !important;
  }



  .slide-left-enter-to {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(0, 0, 0)
  }

  .slide-left-enter-from {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d($slide, 0, 0)
  }

  .slide-left-leave-to {
    transform: translate3d(-$slide, 0, 0)
  }

  .slide-left-leave-from {
    transform: translate3d(0, 0, 0)
  }

  .slide-right-enter-to {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(0, 0, 0)
  }

  .slide-right-enter-from {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(-$slide, 0, 0)
  }

  .slide-right-leave-to {
    transform: translate3d($slide, 0, 0)
  }

  .slide-right-leave-from {
    transform: translate3d(0, 0, 0)
  }
}

@include transition($slide: 100vw, $duration: 0.4s);

@media (min-width:1024px) {
  @include transition($slide: 100%, $duration: 0.5s);
}
</style>
