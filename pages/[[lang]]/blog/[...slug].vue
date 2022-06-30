
<template>
    <template v-if="data">



        <article class="markdown-body col-start-2 col-end-3 row-start-2 row-end-3 relative">
            <div class="flex flex-row py-4 lg:pt-7 <msd:pt-0 justify-between ">
                <div class="flex flex-row ">
                    <div v-for="tag, index in data.tags" class="mr-4">
                        <NuxtLink :to="`/blog?tags=${tag}`">
                            <strong v-if="index == 0">{{ tag }}</strong>
                            <template v-else>{{ tag }}</template>
                        </NuxtLink>
                    </div>
                </div>
                <time :datetime="data.date" >
                    {{ new Date(data.date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) }}
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
        </article>

        <aside ref="toc" class="col-start-3 col-end-4 row-start-2 row-end-3">
            <ul class="m-12 top-12 sticky mx-2rem min-w-44 <sxl:hidden ">
                <!-- <ul class="mt-4 top-4 sticky ml-2rem "> -->
                <li :name="'toc/' + link.id" v-for="link, index of data.body.toc.links" :key="index + link.text">
                    <a :href="`#${link.id}`">{{ link.text }}</a>
                    <ul v-if="link.children">
                        <li :name="'toc/' + link2.id" v-for="link2, index2 of link.children" :key="index2 + link2.text"
                            class="ml-4">
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

const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

const {locale} = useI18n()

if (data && data.value) {
    useSeo({
        title: data.value.title,
        description: data.value.description,
        image: "",
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
</script>

<style lang="scss" scoped>
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

.blog-wrapper.dark {
    li.active {
        color: $vanilla-yellow  !important;
    }
}
</style>
