import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-TXNG5XE6W3'
        },
        appName: 'alejandrosuarez.eu',
        enabled: true,
        pageTrackerScreenviewEnabled: true
    }, nuxtApp.vueApp.router);
});