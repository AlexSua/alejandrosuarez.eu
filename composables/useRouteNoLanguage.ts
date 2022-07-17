export const useRouteNoLanguage = () => {
    const route = useRoute()
    return computed(() => route.params.lang ? route.path.replace("/" + route.params.lang, "") : route.path)
}


