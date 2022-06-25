

<template>
    <div class="blog-home-title-filter-wrapper">
        <div class="blog-home-title-filter">
            <div class="blog-home-title">
                <h2>{{ $t(`blog.home.title`) }} </h2>
                <div class="blog-search-box">
                    <input v-model="filter.search" type="text" placeholder="Search">
                </div>
            </div>
            <div v-if="getSections.size > 0" class="blog-sections-box">
                <button v-for="section, index in getSections" :key="section + index" class="blog-sections-item"
                    :class="isSelected(section)" @click.prevent="sectionItemSelect">
                    {{ section }}
                </button>
            </div>
        </div>
    </div>

    <div class="blog-grid">
        <BlogEntry v-for="(blog, index) in getBlogList" :key="$i18n.locale+blog._path" :blog="blog" />
    </div>
    <div v-if="getSections.size <= 0" class="empty-array-message">
        No articles for<span v-if="filter.search"> "{{
                filter.search
        }}"</span> in language"{{ $i18n.locale }}"
    </div>
</template>

<!-- <script lang="ts" setup>
const { data } = await useAsyncData('blog-content', () => queryContent('/blog').find())

</script> -->



<script setup lang="ts">

import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n()
let firstTime = false;
const blogList = ref<ParsedContent[] | null>(null);

const filter = reactive({
    search: "",
    section: [] as string[],
});
let searchFilter = ref([] as ParsedContent[]);


function filterResult() {
    if (blogList.value)
        searchFilter.value = blogList.value.filter(

            (blog: ParsedContent) => {
                if (!blog.language) blog.language = "en";
                if (blog.language != locale.value) {
                    return false;
                }
                if (filter.search.length > 0) {
                    return (JSON.stringify(blog).toLowerCase().includes(filter.search.toLowerCase()));
                }
                return true;
            }
        );
}



const getBlogList = computed(() => {
    if (!firstTime) {
        // window.scrollTo(0, 0);
    }
    if (blogList.value)
        firstTime = false;
    return searchFilter.value.filter((blog: ParsedContent) => {
        if (filter.section.length > 0) {
            return (filter.section.includes(blog.section));
        }
        return true;
    });

});

const getSections = computed(() => {
    return new Set(searchFilter.value.map(blog => blog.section))
});

function sectionItemSelect(e: Event) {
    const selection = e.target as HTMLButtonElement;
    if (filter.section.includes(selection.innerText)) {
        filter.section = filter.section.filter(section => section != selection.innerText);
    } else {
        filter.section.push(selection.innerText);
    }
}

function isSelected(section: string) {
    return { selected: filter.section.includes(section) }
}

watch(locale, (value) => {
    filter.section = []
})
watch(filter, (value) => {
    filterResult()
})
watch(blogList, (value) => {
    filterResult()
})

useAsyncData('blog-content', () => queryContent('/blog/').find()).then((result) => {
    blogList.value = result.data.value
})



</script>
<style scoped>
</style>
