import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@intlify/nuxt3',
        'nuxt-windicss',
    ],

    modules: [
        '@nuxt/content'
    ],
    intlify: {
        localeDir: 'locales',
        vueI18n: 'vue-i18n.mjs'
    },

    css: [
        '@/assets/styles/global.scss',
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],

    build: {
        transpile: ["primevue"],
        optimizeCSS: true,
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
            // theme: 'material-darker',
            theme: 'material-darker',
            preload: ['css', 'scss', 'js', 'ts', "html","bash","json","yaml"]
        },
        base: "_content"
    },
    nitro: {
        prerender: {
            crawlLinks: true,
        // routes: ['/sitemap.xml', "/blog", "/", "/videochat", "/blog/example2","/es","/es/blog"],
        },
        minify: true,
    },
    generate:{
        nojekyll: true,
        fallback: '404.html',
    },

    ssr: true,

    target: "static"
    // router: {
    //     base: '/VuePaginaPersonalPublic/'
    //   },
    // app:{
    //     baseURL: '/VuePaginaPersonalPublic/'
    // },
    // dev: false
    //  _legacyGenerate:true,

})
//grep -rnwl "_nuxt" .output/public |xargs sed -i "s,/_nuxt,/VuePaginaPersonalPublic/_nuxt,g"
// git init;
// git add .;
// git checkout -b "nuxt";
// git commit -m "Initial commit";
// git remote add origin "https://github.com/AlexSua/VuePaginaPersonalPublic.git"; 
// git push -u origin nuxt;