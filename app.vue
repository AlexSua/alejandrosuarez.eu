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
  let route_name = route.name;
  if (router.prevRoute && router.prevRoute.meta.transition) {
    if (route_name && route_name in router.prevRoute.meta.transition) {
      return router.prevRoute.meta.transition[route_name]
    }
    if ("*" in router.prevRoute.meta.transition) {
      return router.prevRoute.meta.transition["*"]
    }
  }
  return ""
});


const onAfterEnter = () => {
  if (router.prevRoute.name === "lang-privacy") {
    window.scrollTo(0, 1000000000);
  } else
    window.scrollTo(0, 0)
  afterEnter.value()

};

function onBeforeLeave() {
  afterEnter.value = () => { }
}





</script>


<style lang="scss">
@mixin transition($slide, $duration, $transition_delay) {

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    position: absolute !important;
    // position: fixed !important;

    transition: all $duration ease-out;
    width: 100vw !important;
    // max-width: 100vw!important;
    transition-property: all;
    transition-duration: $duration;
    transition-delay: $transition_delay;
  }

  .slide-left-leave-active,
  .slide-right-leave-active {
    z-index: -20;
  }


  .slide-left-enter-to {
    position: fixed !important;
    transition-duration: 0.4s;
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
    transform: translate3d(-50vw, 0, 0)
  }

  .slide-left-leave-from {
    transform: translate3d(0, 0, 0)
  }

  .slide-right-enter-to {
    position: fixed !important;
    transition-duration: 0.4s;

    top: 0;
    // right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(0, 0, 0)
  }

  .slide-right-enter-from {
    position: fixed !important;
    top: 0;
    // right: 0;
    bottom: 0;
    left: 0;
    transform: translate3d(-$slide, 0, 0)
  }

  .slide-right-leave-to {
    transform: translate3d(50vw, 0, 0)
  }

  .slide-right-leave-from {
    transform: translate3d(0, 0, 0)
  }

  .slide-up-enter-active,
  .slide-up-leave-active,
  .slide-down-enter-active,
  .slide-down-leave-active {
    // position: fixed !important;
    transition: all $duration ease-out;

    transition-property: all;
    transition-duration: 0.8s;
    transition-delay: $transition_delay;
  }

  .slide-up-leave-active,
  .slide-down-leave-active {
    z-index: -20;
  }


  .slide-up-enter-to {
    // position: fixed !important;
    position: fixed !important;
    top: 0;
    transition-duration: 0.4s;

    transform: translate3d(0, 0, 0)
  }

  .slide-up-enter-from {
    position: fixed !important;

    transform: translate3d(0, 100vh, 0)
  }

  .slide-up-leave-to {
    transform: translate3d(0, -100vh, 0);
    position: fixed !important;
    bottom: 0;
  }

  .slide-up-leave-from {
    position: fixed !important;
    bottom: 0;
    transform: translate3d(0, 0, 0)
  }




  .slide-down-enter-to {
    position: fixed !important;
    bottom: 0;
    transition-duration: 0.4s;

    transform: translate3d(0, 0, 0)
  }

  .slide-down-enter-from {
    position: fixed !important;
    bottom: 0;
    transform: translate3d(0, -100vh, 0)
  }

  .slide-down-leave-to {
    position: fixed !important;
    top: 0;
    transform: translate3d(0, 100vh, 0)
  }

  .slide-down-leave-from {
    transform: translate3d(0, 0, 0)
  }




}

@include transition($slide: 100vw, $duration: 0.6s, $transition_delay: 0.05s);

@media (min-width:1024px) {
  @include transition($slide: 100%, $duration: 0.6s, $transition_delay: 0.05s);
}
</style>
