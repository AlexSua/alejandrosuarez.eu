<template>
    <div class="privacy-wrapper">
        <div class="up right text-light-50 !fixed">
            <NuxtLink :to="closeLink"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin slice"
                    fill="#FFFFFF" viewBox="0 0 24 24">
                    <path fill="#f2d492"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg></NuxtLink>
        </div>
        <div class="markdown-body" v-if="data">
            <ContentRenderer :value="data">
                <template #default>
                    <MarkdownRenderer :value="data" />
                </template>
            </ContentRenderer>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const data = ref(null)

useAsyncData('privacy', () => queryContent('/privacy').findOne()).then(value => {
    data.value = value.data.value
})

const closeLink = computed(() => {
    if (router.prevRoute && router.prevRoute.name != route.name) {
        return router.prevRoute.path
    } else {
        return "/"
    }
})

definePageMeta({
    transition: {
        "*": "slide-down",
    }
})
</script>

<style scoped lang="scss">
.up.right {
    svg {
        height: 3rem;
    }
}

.privacy-wrapper {
    height: 100%;
    background-color: $video-dark;
    width: 100%;
    justify-content: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    .markdown-body {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 2.5rem;
    }




    &>.privacy-content {
        color: white;
        width: 40rem;
        max-width: 100%;
        margin-top: 10rem;

        header {
            margin-bottom: 4rem;
            display: flex;
            justify-content: center;
        }

        h1 {
            font-size: 2.3rem;

        }
    }

}

@media (max-width:1024px) {
    .markdown-body {
        padding-top: 25px !important;
    }

}

@media(max-width:700px) {
    .markdown-body {
        padding-top: 35px !important;
    }

    svg {
        height: 2rem !important;
    }
}
</style>