

<template>
    <div class="blog-home-title-filter-wrapper col-start-2 col-end-3 row-start-2 row-end-3 ">
        <div class="blog-home-title-filter">
            <div class="blog-home-title">
                <h2>{{ $t(`blog.home.title`) }} </h2>
                <div class="blog-search-box">
                    <input v-model="filter.search" type="text" placeholder="Search">
                </div>
            </div>
            <div v-if="getSections.size > 0" class="blog-sections-box">
                <button v-for="tag, index in getSections" :key="tag + String(index)" class="blog-sections-item"
                    :class="isSelected(String(tag))" @click.prevent="sectionItemSelect">
                    {{ tag }}
                </button>
            </div>
        </div>
    </div>

    <div class="blog-grid col-start-2 col-end-3 row-start-3 row-end-4">
        <BlogEntry v-for="(blog, index) in getBlogList" :key="$i18n.locale + blog._path" :blog="blog" />
    </div>
    <div v-if="filteredBlogList.length <= 0" class="empty-array-message ">
        No articles<span v-if="filter.search">&nbsp;for "{{
                filter.search
        }}"</span>&nbsp;in language "{{ $i18n.locale }}"
    </div>
</template>

<script setup lang="ts">

import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n()


const route = useRoute()
const router = useRouter()
const filter = reactive({
    search: "",
    tags: [] as string[],
});

let firstTime = true;
let filteredBlogList = ref([] as ParsedContent[]);

useSeo({
    title: "Blog",
    description: "List of articles in the blog",
    image: "",
    type: "Series",
    location: route.path,
});


let result = await useAsyncData('blog-content', () => queryContent('/blog/').find())
const blogList = ref<ParsedContent[] | null>(result.data.value);

filter.search = route.query.search as string || "";

if (route.query.tags) {
    if (typeof route.query.tags === 'string' || route.query.tags instanceof String) {
        filter.tags = [route.query.tags] as string[];
    } else {
        filter.tags = route.query.tags as string[];
    }
}

function filterResult() {
    if (blogList.value)
        filteredBlogList.value = blogList.value.filter(

            (blog: ParsedContent) => {
                if (!blog.language) blog.language = "en";
                if (blog.language != locale.value) {
                    return false;
                }
                if (!firstTime)
                    router.push({
                        path: '/blog/',
                        query: {
                            ...filter.tags.length && { tags: filter.tags },
                            ...filter.search.length && { search: filter.search }
                        }

                    });
                if (filter.search.length > 0) {

                    return (JSON.stringify(blog).toLowerCase().includes(filter.search.toLowerCase()));
                }
                return true;
            }
        );
}
filterResult();


const getBlogList = computed(() => {
    if (!firstTime) {
        window.scrollTo(0, 0);
    }
    if (blogList.value)
        firstTime = false;
    return filteredBlogList.value.filter((blog: ParsedContent) => {
        if (filter.tags.length > 0) {
            return (filter.tags.reduce((prev, curr) => {
                return prev || blog.tags.includes(curr);
            }, false));
        }
        return true;
    });

});

const getSections = computed(() => {
    let result = new Set<String>();
    for (let element of filteredBlogList.value) {
        if (element.tags)
            for (let tag of element.tags) {
                result.add(tag);
            }
    }

    return result
});

function sectionItemSelect(e: Event) {
    const selection = e.target as HTMLButtonElement;
    if (filter.tags.includes(selection.innerText)) {
        filter.tags = filter.tags.filter(section => section != selection.innerText);
    } else {
        filter.tags.push(selection.innerText);
    }
}

function isSelected(section: string) {
    return { selected: filter.tags.includes(section) }
}

watch(locale, (value) => {
    filter.tags = []
})
watch(filter, (value) => {
    filterResult()
})
watch(blogList, (value) => {
    filterResult()
})



</script>
<style scoped>
</style>
