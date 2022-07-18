<template>
     <div ref="commentoBox" id="commentoBox"></div>
</template>
<script setup lang="ts">
const commentoBox = ref()
const props = defineProps<{
    pageId:string
}>()

function initializeCommento() {
    if (typeof window !== 'undefined' && !window.commento) {
        // init empty object so commento.js script extends this with global functions
        window.commento = {}
        const script = document.createElement('script')
        // Replace this with the url to your commento instance's commento.js script
        script.src = `https://skynet.sytes.net:3479/js/commento.js`
        script.defer = true
        // Set default attributes for first load
        script.setAttribute('data-auto-init', 'false')
        script.setAttribute('data-page-id', props.pageId)
        script.setAttribute('data-id-root', 'commentoBox')

        script.onload = () => {
            window.commento.main()
        }
        commentoBox.value.appendChild(script)
    } else if (typeof window !== 'undefined' && window.commento) {
        // In-case the commento.js script has already been loaded reInit the widget with a new pageId
        window.commento.reInit({
            pageId: props.pageId
        })
    }
}

function loadIntersectionObserverCommento() {
    useIntersectionObserver(commentoBox.value, (entries, observer) => {
        if (entries[0].isIntersecting) {
            // window.commento.main()
            initializeCommento()
            observer.disconnect()
        }
    })
}
onMounted(() => {
    loadIntersectionObserverCommento()
})
</script>
<style lang="">
    
</style>