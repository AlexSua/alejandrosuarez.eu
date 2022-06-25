
<template>
    <div class="w-full grid grid-cols-[100%,1fr] grid-rows-1">
        <article class="markdown-body">
            <ContentRenderer :value="data">
                <template #not-found>
                    <div class="error-message">
                        This post doesn't exist
                    </div>
                </template>
                <template #empty>
                    <div class="error-message">
                        This post doesn't exist
                    </div>
                </template>
            </ContentRenderer>
        </article>
        <aside ref="toc">
            <ul class="mt-4 top-4 sticky ml-2rem <laptop:hidden  max-w-[9rem]">
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
    </div>
</template>
<script setup lang="ts">

const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
console.log(data)
const toc = ref(null)

if (data.value) {
    // data.value.body.children.forEach((child, index) => {
    //     if(["h2","h3"].includes(child.tag))
    //     data.value.body.children[index].props= {...data.value.body.children[index].props,name:child.props["id"]}
    // })
    useSeo({
        title: data.value.title,
        description: data.value.description,
        image: "",
        type: data.value.section,
        location: "",
        lang: data.value.language,
    });
}

function handleScroll() {
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
