<template>
    <div class="blog-wrapper" :class="{ 'dark': darkMode }">
        <header>
            <div class="header-wrapper">
                <DarkModeSwitcher />
                <LanguageSwitcher />
                <div class="title">
                    <slot name="title" />
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
        <footer class="h-[60vh] flex-1 col-start-1 col-end-3 mt-10 z-50 ">
            <Footer :text-class="!darkMode?'!text-black':''" :svg-props="!darkMode?{fill:'black'}:{}" ></Footer>
        </footer>

        <!-- <footer /> -->
    </div>

</template>
<script setup lang="ts">

const darkMode = useDarkMode();
const route= useRoute();
const routeNoLanguage = useRouteNoLanguage()

const nav_blacklist = computed(function () {
    if (routeNoLanguage.value != "/blog/") return [];
    else return ["home"];
});



</script>