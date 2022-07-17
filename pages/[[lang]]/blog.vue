<template>
    <div class="blog-wrapper" :class="{ 'dark': darkMode }">
        <header>
            <div class="header-wrapper">
                <DarkModeSwitcher />
                <LanguageSwitcher />
                <div class="title">
                    <template v-if="routePathNoLanguage == '/blog/'">
                        <h1>
                            {{ $t("blog.header.title") }}
                        </h1>
                        <h2 class="<msd:hidden">{{ $t("blog.header.subtitle") }}</h2>
                    </template>
                    <template v-else>
                        <div class="header-title ">
                            <nuxt-link to="/blog/">
                                {{ $t("blog.header.title") }}
                            </nuxt-link>
                        </div>
                        <div class="header-subtitle <msd:hidden">
                            {{ $t("blog.header.subtitle") }}
                        </div>
                    </template>
                </div>
                <Navegacion navigation-id="blog.navigation" :blacklist="nav_blacklist" />
            </div>
        </header>
        <main class="grid grid-cols-[auto,minmax(0,58rem),1fr]  <2xl:grid-cols-[1fr,minmax(0,56rem),1fr]">

            <router-view v-slot="{ Component }">
                <transition>
                    <!-- <keep-alive> -->
                    <div
                        class="row-start-2 row-end-3 col-start-1 col-end-4 grid grid-cols-[auto,minmax(0,58rem),1fr] <2xl:grid-cols-[1fr,minmax(0,56rem),1fr] ">
                        <div class="!relative col-start-2 col-end-3 row-start-1 row-end-2">
                            <div class="load-bar-animation"
                                :class="{ 'loaded': resolved, 'pending': pending, 'white-bar': route.path.match(/\/blog\/.+/g) }" />

                        </div>
                        <suspense @pending="change_to_pending" @resolve="change_to_resolved">
                            <template #default>
                                <component :is="Component" :key="$route.path" />
                            </template>
                        </suspense>
                    </div>
                    <!-- </keep-alive> -->
                </transition>
            </router-view>
        </main>
        <footer class="h-[60vh] flex-1 col-start-1 col-end-3 mt-10 z-30 ">
            <Footer :text-class="!darkMode?'!text-black':''" :svg-props="!darkMode?{fill:'black'}:{}" ></Footer>
        </footer>

        <!-- <footer /> -->
    </div>
</template>

<script setup lang="ts">


import { EventBus } from '~~/plugins/event';
import DarkModeSwitcher from '~~/components/DarkModeSwitcher.vue';


const route = useRoute();
const router = useRouter();
const darkMode = useDarkMode();
const resolved = ref(false)
const pending = ref(false)
const { $bus } = useNuxtApp()


const routePathNoLanguage = useRouteNoLanguage()
const props = defineProps({
    siteData: Object,
    // afterEnter: Function
});
// const emit = defineEmits(["update:afterEnter"]);

// emit("update:afterEnter", function () {
//     if (router.prevRoute && router.prevRoute.name=="lang-privacy")
// 	    window.scrollTo(0, 10000000);
// });

definePageMeta({
    transition: {
        "lang": "slide-right",
        "lang-privacy":"slide-up"
    }
})

const nav_blacklist = computed(function () {
    if (route.name != "lang-blog") return [];
    else return ["home"];
});

function change_to_resolved() {
    pending.value = false
    resolved.value = true
    $bus.emit('triggerScroll', '');
    setTimeout(() => {
        resolved.value = false
        pending.value = false
    }, 600);
}
function change_to_pending() {
    setTimeout(() => { pending.value = true }, 0)
}

watch(darkMode, (value) => {
    useLocalStorage('dark-mode', `${value}`)
})



</script>

<style lang="scss">
// @import "@/assets/styles/components/blog.scss";
:not(.dark) .white-bar {
    background-color: #fff;
    min-height: 3px;
}

</style>
