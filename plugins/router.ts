export default defineNuxtPlugin((app) => {
    app.$router.beforeEach((to: any, from: any) => {
        app.$router.prevRoute = from;
    })

    app.$router.options.scrollBehavior = (to, from, savedPosition) => {
        const { $bus } = useNuxtApp()
        if ((from.name == undefined)
            || to.name == "lang" && from.name.includes("lang-blog")
            || to.name.includes("lang-blog") && from.name == "lang"
            || to.name == from.name
            || from.name == "lang-privacy"
        ) {
            $bus.off_all("triggerScroll")
            if (from.name == "lang-privacy") return { x: 0, y: 20000000000 }
            if (savedPosition) return savedPosition
            if (to.hash) return { el: to.hash }
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