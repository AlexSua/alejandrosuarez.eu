import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@intlify/nuxt3',
        'nuxt-windicss',
    ],
    modules: [
        '@nuxt/content'
    ],



    intlify: {
        localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
        vueI18n: 'vue-i18n.mjs',
    },
    css: [
        '@/assets/styles/global.scss',
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
    build: {
        transpile: ["primevue"]
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/setup/variables.scss";',
                },
            },
        },
    },
    content: {
        highlight: {
            theme: 'material-darker',
            preload: ['css', 'scss', 'js', 'ts', "html"]
        },
        base: "_content"
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/sitemap.xml', "/blog/example", "/blog", "/","videochat"]
        },
    },
    ssr:false,
    target: "static"
    //  _legacyGenerate:true,

})
