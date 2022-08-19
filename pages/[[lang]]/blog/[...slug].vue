
<template>
    <template v-if="data">

        <article ref="article" class="col-start-2 col-end-3 row-start-2 row-end-3 relative ">
            <!-- <div class="flex h-36 border-cool-shadow px-20 p-4 mt-4 bg-videodark">
                <img class="object-cover !max-w-[calc(100%+4rem)] w-[calc(100%+4rem)] -m-1 " :src="data.image" />
            </div> -->
            <div ref="markdownBody" class="markdown-body ">
                <div
                    class="!bg-videodark flex h-26 msd:h-40 -ml-[3%] -mr-[3%] msd:-ml-8 msd:-mr-8  msd:px-10  bg-videodark justify-center">
                    <img loading="lazy" :alt="data.title" class="object-contain max-w-full" :src="getSrc(data.image)" />
                </div>
                <div class="flex flex-row py-4 lg:pt-7 justify-between ">
                    <div class="flex flex-row ">
                        <div v-for="tag, index in data.tags" class="mr-4">
                            <NuxtLink :to="`/blog/?tags=${tag}`">
                                <strong v-if="index == 0">{{ tag }}</strong>
                                <template v-else>{{ tag }}</template>
                            </NuxtLink>
                        </div>
                    </div>
                    <time :datetime="data.date">
                        {{ new Date(data.date).toLocaleDateString(locale, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })
                        }}
                    </time>
                </div>
                <!-- <img :src="data.image" /> -->

                <ContentRenderer :value="data">
                    <template #default>

                        <MarkdownRenderer :value="data" />
                    </template>

                    <template #not-found>
                        <div class="flex  ">
                            <h1>This post doesn't exist</h1>
                        </div>
                    </template>
                    <template #empty>
                        <div class="flex ">
                            <h1>This post doesn't exist</h1>
                        </div>
                    </template>
                </ContentRenderer>
            </div>
            <div id="comments" name="comments">
                <Commento v-if="pageId" :page-id="routeNoLanguage"></Commento>
            </div>
        </article>

        <aside ref="toc"
            class="col-start-3 col-end-4 row-start-2 row-end-3
        <sxl:(z-40 fixed -bottom-[120vh] left-0 justify-self-center w-full bg-white dark:bg-black flex justify-center transition transition-all transform)"
            :class="{ '<sxl:-translate-y-[120vh]': tocDrawerOpen }">

            <ul class="m-12 top-12 sticky mx-2rem min-w-44  max-h-[85vh] overflow-y-auto">
                <!-- <ul class="mt-4 top-4 sticky ml-2rem "> -->
                <li :name="'toc/' + link.id" v-for="link, index of data.body.toc.links" :key="index + link.text">
                    <a @click="tocDrawerClose" :href="`#${link.id}`">{{ link.text }}</a>
                    <ul v-if="link.children">
                        <li :name="'toc/' + link2.id" v-for="link2, index2 of link.children" :key="index2 + link2.text"
                            class="ml-4">
                            <a @click="tocDrawerClose" :href="`#${link2.id}`">{{ link2.text }}</a>
                        </li>
                    </ul>
                </li>
                <li name="toc/comments">
                    <a @click="tocDrawerClose" href="#comments">Comments</a>
                </li>
            </ul>
        </aside>
        <AbsoluteButton ref="tocButton" @click="tocDrawerOpenFunc" :icon="tocDrawerOpen ? 'pi-times' : 'pi-list'"
            class="!fixed !right-1 !bottom-1 !sxl:hidden z-40" />

    </template>
    <template v-else>
        <div class="empty-array-message">
            This post doesn't exist
        </div>
    </template>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';


const route = useRoute()
const toc = ref()
const tocButton = ref()
const tocDrawerOpen = ref(false);
const markdownBody = ref()
const article = ref()

let routeNoLanguage = useRouteNoLanguage()

const { data } = await useAsyncData(routeNoLanguage.value, () => queryContent(routeNoLanguage.value).findOne())
const { locale } = useI18n()
const comments = ref()
const pageId = ref(false)

const getSrc = (path) => {
    const modules = import.meta.globEager("/assets/img/blog/*");
    return modules[path].default;
};


if (data && data.value) {
    useSeo({
        title: data.value.title,
        description: data.value.description,
        image: getSrc(data.value.image),
        type: data.value.section,
        location: route.path,
        lang: data.value.language,
        publishedAt: data.value.date,
        tags: data.value.tags
    });
    pageId.value = data.value.title
} else {
    useSeo({
        title: "Not found",
        description: "This blog couldn't be found",
        image: "",
        type: "Article",
        location: route.path,
    });
}

function handleScroll() {
    if (data.value) {
        let tocLis: Array<HTMLElement> = Array.from(toc.value.querySelectorAll("li"))

        for (const [index, link] of tocLis.entries()) {
            let id = link.getAttribute("name").split("/")[1]
            let el = document.getElementById(id)
            if (el) {
                let rect = el.getBoundingClientRect()
                let nextLink = tocLis[index + 1];
                let nextLinkUntilTop = null;
                if (nextLink) {
                    let nextId = nextLink.getAttribute("name").split("/")[1]
                    let nextEl = document.getElementById(nextId);
                    let nextRect = null;
                    if (nextEl) {
                        nextRect = nextEl.getBoundingClientRect()
                        nextLinkUntilTop = nextRect.top
                    }
                    else {
                        nextLinkUntilTop = null;
                    }
                } else {
                    nextLinkUntilTop = article.value.getBoundingClientRect().bottom
                }
                if ((rect.top >= 100 && innerHeight - rect.bottom > 0) || (rect.top <= 100 && nextLinkUntilTop && (nextLinkUntilTop > 100))) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            }
        }
    }

}

onClickOutside(toc, () => tocDrawerClose(), {
    ignore: [tocButton]
})

function tocDrawerClose() {
    tocDrawerOpen.value = false
}

function tocDrawerOpenFunc() {
    tocDrawerOpen.value ? tocDrawerOpen.value = false : tocDrawerOpen.value = true
}



onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll()
    // initializeCommento()
})


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})



</script>

<style lang="scss" scoped>
aside li {
    line-height: 1.2rem;
    margin-top: 0.5rem;
}

aside>ul>li:not(:first-child) {
    margin-top: 1rem;
}

aside {
    li {
        font-size: 1rem !important;
        // color: #737373 !important;
        color: #8383839c !important;
        font-weight: 600;
    }

    ul {
        scrollbar-width: none;
    }

    ul::-webkit-scrollbar {
        display: none;
    }
}

li.active {
    color: rgb(0, 0, 0) !important;
    font-weight: 600;
}

.dark {
    li.active {
        color: $vanilla-yellow  !important;
    }
}

// .cool-shadow {
//    box-shadow: 0 6px 24px 0 rgb(218 218 218 / 7%), 0 0 0 1px rgb(242 212 146 / 33%) !important;
// }

.background-video-dark {
    color: $video-dark  !important;
}

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {

    // position: fixed !important;
    aside {
        display: none;
    }
}
</style>
