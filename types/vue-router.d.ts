import { Router } from "vue-router"

declare module "vue-router" {
    interface Router {
        prevRoute?: Ref<RouteLocationNormalizedLoaded>
    }
}
export {} 