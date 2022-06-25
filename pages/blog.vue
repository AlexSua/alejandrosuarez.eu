<template>
    <div class="blog-wrapper" :class="{ 'dark': darkMode }">
        <header>
            <DarkModeSwitcher />
            <LanguageSwitcher />
            <div class="title">
                <template v-if="$route.path == '/blog'">
                    <h1>
                        {{ $t("blog.header.title") }}
                    </h1>
                    <h2>{{ $t("blog.header.subtitle") }}</h2>
                </template>
                <template v-else>
                    <div class="header-title">
                        <nuxt-link to="/">
                            {{ $t("blog.header.title") }}
                        </nuxt-link>
                    </div>
                    <div class="header-subtitle">
                        {{ $t("blog.header.subtitle") }}
                    </div>
                </template>
            </div>
            <Navegacion navigation-id="blog.navigation" :blacklist="nav_blacklist" />
        </header>
        <main>
            <div class="!relative">
                <div class="load-bar-animation" :class="{ 'loaded': resolved, 'pending': pending }" />

            </div>

            <router-view v-slot="{ Component }">
                <transition @before-enter="after_enter">
                    <keep-alive>
                        <suspense @pending="change_to_pending" @resolve="change_to_resolved">
                            <template #default>
                                <component :is="Component" :key="$route.path" />
                            </template>
                        </suspense>
                    </keep-alive>
                </transition>
            </router-view>
        </main>
        <!-- <footer /> -->
    </div>
</template>

<script setup lang="ts">


import { EventBus } from '~~/plugins/event';
import DarkModeSwitcher from '~~/components/DarkModeSwitcher.vue';


const route = useRoute();
const router = useRouter();

const darkMode = useDarkMode()

const resolved = ref(false)
const pending = ref(false)
const { $bus } = useNuxtApp()

const props = defineProps({
    siteData: Object,
});

definePageMeta({
    transition: {
        "/": "slide-right",
    }
})
const nav_blacklist = computed(function () {
    if (route.path != "/blog") return [];
    else return ["home"];
});

function change_to_resolved() {
    pending.value = false
    resolved.value = true
    setTimeout(() => { $bus.emit('triggerScroll', '') }, 0)
    setTimeout(() => {
        resolved.value = false
        pending.value = false
    }, 600);
}
function change_to_pending() {
    setTimeout(() => { pending.value = true }, 0)
}
function after_enter() {
    $bus.emit('triggerScroll', '')
    setTimeout(() => { $bus.emit('triggerScroll', '') }, 0)
}

watch(darkMode, (value) => {
    useLocalStorage('dark-mode', `${value}`)
})

</script>

<style lang="scss">
@import "@/assets/styles/components/blog.scss";


// .load-bar-animation {
//     background: #eed090 !important;
//     flex: 0;
//     min-height: 10px;
//     /* position: fixed; */
//     top: 0;
//     width: 0;
//     z-index: 20;
//     max-width: 65rem;
//     box-sizing: border-box;
//     margin-left: 2rem;
//     margin-right: 2rem;
// }

</style>
