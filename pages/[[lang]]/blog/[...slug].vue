
<template>
    <template v-if="data">
        <article class="col-start-2 col-end-3 row-start-2 row-end-3 relative ">
            <!-- <div class="flex h-36 border-cool-shadow px-20 p-4 mt-4 bg-videodark">
                <img class="object-cover !max-w-[calc(100%+4rem)] w-[calc(100%+4rem)] -m-1 " :src="data.image" />
            </div> -->
            <div class="markdown-body ">
                <div class="!bg-videodark flex h-26 msd:h-40 -ml-[3%] -mr-[3%] msd:-ml-8 msd:-mr-8  msd:px-10  bg-videodark justify-center">
                    <img class="object-contain max-w-full" :src="getSrc(data.image)" />
                </div>
                <div class="flex flex-row py-4 lg:pt-7 justify-between ">
                    <div class="flex flex-row ">
                        <div v-for="tag, index in data.tags" class="mr-4">
                            <NuxtLink :to="`/blog?tags=${tag}`">
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
        </article>

        <aside ref="toc" class="col-start-3 col-end-4 row-start-2 row-end-3">
            <ul class="m-12 top-12 sticky mx-2rem min-w-44 <sxl:hidden ">
                <!-- <ul class="mt-4 top-4 sticky ml-2rem "> -->
                <li :name="'toc/' + link.id" v-for="link, index of data.body.toc.links" :key="index + link.text">
                    <a :href="`#${link.id}`">{{ link.text }}</a>
                    <ul v-if="link.children" class="">
                        <li :name="'toc/' + link2.id" v-for="link2, index2 of link.children" :key="index2 + link2.text"
                            class="ml-4 tet-siz">
                            <a :href="`#${link2.id}`">{{ link2.text }}</a>
                        </li>
                    </ul>

                </li>
            </ul>
        </aside>
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
const toc = ref(null)

let routeNoLanguage = route.path.replace("/"+route.params.lang,"");

const { data } = await useAsyncData(routeNoLanguage, () => queryContent(routeNoLanguage).findOne())

const { locale } = useI18n()
// console.log(data.value.image)
if (data && data.value) {
    useSeo({
        title: data.value.title,
        description: data.value.description,
        image: data.value.image,
        type: data.value.section,
        location: route.path,
        lang: data.value.language,
        publishedAt: data.value.date,
        tags: data.value.tags
    });
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
                }
                if ((rect.top >= 0 && innerHeight - rect.bottom > 0) || (rect.top <= 0 && nextLinkUntilTop && (nextLinkUntilTop > 0))) {
                    link.classList.add("active")
                } else {
                    link.classList.remove("active")
                }
            }
        }
    }

}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll()

})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})


const getSrc = (path) => {
  const modules = import.meta.globEager("/assets/img/blog/*");
  return modules[path].default;
};

</script>

<style lang="scss" scoped>

aside li{
    line-height: 1.2rem;
    margin-top:0.5rem;
}
aside>ul>li:not(:first-child){
    margin-top: 1rem;
}

aside {
    li {
        font-size: 1rem !important;
        color: #737373 !important;
        font-weight: 100;
    }
}

li.active {
    color: rgb(0, 0, 0) !important;
    font-weight: bold;
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
</style>
