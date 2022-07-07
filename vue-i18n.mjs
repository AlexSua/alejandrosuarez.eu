

function getLocale() {
  const route = useRoute()
  const localesSubroutes = ["es"]
  let locale = "en"
  if (route.params.lang && localesSubroutes.includes(route.params.lang)) {
    locale = route.params.lang
  }
  return locale
}

export default  () => ({
  legacy: false,
  globalInjection: true,
  fallbackLocale: "en",
  fallbackWarn: false,
  missingWarn: false,
  locale: getLocale() || "en",
})