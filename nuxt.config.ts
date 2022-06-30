import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: true,
    target: 'static',

    buildModules: [
        '@intlify/nuxt3',
        'nuxt-windicss',
    ],
    // srcDir:"/VuePaginaPersonalPublic/",
    // rootDir: "/VuePaginaPersonalPublic/",
    modules: [
        '@nuxt/content'
    ],
    intlify: {
        // localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
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
        // publicPath: '/VuePaginaPersonalPublic/',
        optimizeCSS: true,
    },


    // components:{
    //     global:false
    // },

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
        // serveStatic:true,
        prerender: {
        crawlLinks: true,
        // routes: ['/sitemap.xml', "/blog", "/", "/videochat", "/blog/example2","/es","/es/blog"],
        },
        // inlineDynamicImports: true,
        minify: true,
        // routes: {
        //     "/blog/*": {swr:true}
        // }
    },
    generate:{
        nojekyll: true,
        fallback: '404.html',
        // Hybdrid mode only for /about
        // exclude: [
        //   /\/.+?\/blog\/.*/
        // ],

    },
    // router: {
    //     prefetchLinks: false,
    // },
    // render: {
    //     bundleRenderer: {
    //         shouldPrefetch: (file, type) => {
    //            return false
    //         },
    //         shouldPreload: (file, type) => {
    //             return false
    //          },
            
    //     },
    //     resourceHints:false
    // },

    // render:{
    //     resourceHints: false
    // },

    ssr: true,
    // target: "static",
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