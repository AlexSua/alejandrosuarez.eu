<template>
  <router-view  v-slot="{ Component }">
    <transition :name="transitionName" @before-leave="onBeforeLeave" @after-enter="() => onAfterEnter()">
      <component :is="Component" v-model:afterEnter="afterEnter"/>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';


const route = useRoute();
const router = useRouter();
const { locale,  } = useI18n();
const afterEnter = ref(function (): any { });

const transitionName = computed(() => {
  let route_path = route.path;
  return router.prevRoute && router.prevRoute.meta.transition
    ? router.prevRoute.meta.transition[route_path ? route_path : ""]
    : "";
});

// const getLanguage = () => {
//   if (process.client) {
//     let langageStorage = useLocalStorage("language")
//     if (langageStorage) {
//       return langageStorage
//     } else {
//       if (navigator.language.includes("es")) {
//         return "es"
//       } else {
//         return "en"
//       }
//     }
//   } else {
//     return "en"
//   }
// }
const onAfterEnter = computed(() => {
  window.scrollTo(0, 0);
  // languageSet()
  return afterEnter.value;
});

function onBeforeLeave() {
  afterEnter.value = () => { }
}


// function languageSet(){
// if(route.params.lang==="es"){
//   locale.value = "es"
// }

// onRou(() => {
//   console.log(route.params)
//   if (route.params.lang === "es") {
//     locale.value = "es"
//   } else {
//     locale.value = "en"
//   }
// })
// }

// onBeforeMount(() => {
//       locale.value = getLanguage()

// });

// onMounted(()=>{
//     locale.value = getLanguage()
// });

// watch(locale, (value) => {
//   useLocalStorage('language', value)
// })

</script>


<style lang="scss">
@mixin transition($slide) {

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    position: absolute !important;
    transition: all 0.5s ease-out;
    // overflow: hidden !important;
    width: $slide  !important;
  }



  .slide-left-enter-to {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    // right: 0;
    transform: translate3d(0, 0, 0)
  }

  .slide-left-enter-from {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // right: -100vw;
    transform: translate3d($slide, 0, 0)
  }

  .slide-left-leave-to {
    // left: -100vw;
    transform: translate3d(-$slide, 0, 0)
  }

  .slide-left-leave-from {
    // left: 0;
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

@include transition($slide: 100vw);

@media (min-width:1024px) {
  @include transition($slide: 100%);
}
</style>
