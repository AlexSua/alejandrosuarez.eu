import { defineNuxtConfig } from 'nuxt'
import viteImagemin from 'vite-plugin-imagemin'

export default defineNuxtConfig({
    components: true,
    buildModules: [
        '@intlify/nuxt3',
        'nuxt-windicss',
    ],

    modules: [
        '@nuxt/content',
        "@vueuse/nuxt"
    ],
    intlify: {
        localeDir: 'locales',
        vueI18n: 'vue-i18n.mjs'
    },

    css: [
        '@/assets/styles/setup/typography.scss',
        '@/assets/styles/global.scss',
        '@/assets/styles/components/profile.scss',
        '@/assets/styles/components/blog.scss',
        '@/assets/styles/components/markdown.scss',
        '@/assets/styles/components/markdown.dark.scss',
        '@/assets/styles/components/comments.scss',
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
        optimizeDeps: {

        },


        plugins: [
            viteImagemin({
                disable: true,
                gifsicle: {
                    optimizationLevel: 2,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 4,
                },
                mozjpeg: {
                    quality: 90,
                },
                pngquant: {
                    quality: [0.9, 1],
                    speed: 4,
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
            })]
    },
    content: {
        highlight: {
            theme: 'material-darker',
            preload: ['css', 'scss', 'js', 'ts', "html", "bash", "json", "yaml"]
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes:["/sitemap.xml"]
        },
        minify: true,
    },
    generate: {
        nojekyll: true,
        fallback: '404.html',
    },

    ssr: true,

    target: "static",
    dev: false

})