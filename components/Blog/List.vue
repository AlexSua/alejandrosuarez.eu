<template>
    <div class="blog-grid col-start-2 col-end-3 row-start-3 row-end-4">
        <BlogEntry v-for="(blog, index) in getBlogList" :key="$i18n.locale + blog._path" :blog="blog" />
    </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { useI18n } from "vue-i18n";

const { t, locale, availableLocales } = useI18n()
let firstTime = true;
let filteredBlogList = ref([] as ParsedContent[]);

const filter = reactive({
    search: "",
    tags: [] as string[],
});

const props = defineProps<{
    title?: string
    likes?: number
}>()

let result = await useAsyncData('blog-content', () => queryContent('/blog/')
    .where({ published: true })
    .sort({ date: -1 })
    .find())

const blogList = ref<ParsedContent[] | null>(result.data.value);

    function filterResult() {
    if (blogList.value)
        filteredBlogList.value = blogList.value.filter(

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
filterResult();

const getBlogList = computed(() => {
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


watch(blogList, _ => {
    filterResult()
})

watch(filter, _ => {
    filterResult()
})
</script>

<style lang="scss">
</style>