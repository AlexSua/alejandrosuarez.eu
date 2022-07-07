export default defineNuxtPlugin((app) => {
    app.$router.beforeEach((to: any, from: any) => {
        app.$router.prevRoute = from;
    })

    app.$router.options.scrollBehavior = (to, from, savedPosition) => {

        const { $bus } = useNuxtApp()

        if ((from.name == undefined)
            || to.name == "lang" && from.name.includes("lang-blog")
            || to.name.includes("lang-blog") && from.name == "lang"
            || to.name == "lang-blog-slug" && from.name == "lang-blog-slug"
        ) {
            $bus.off_all("triggerScroll")
            if (savedPosition) return savedPosition
            return
        }

        return new Promise((resolve, reject) => {
            if (savedPosition)
                return resolve(savedPosition)
                
            $bus.on("triggerScroll", function triggerScroll() {
                $bus.off_all("triggerScroll")
                if (savedPosition)
                    return resolve(savedPosition)
                return resolve({ top: 0, left: 0 })
            })
        });
    }
})