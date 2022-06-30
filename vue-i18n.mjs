

function getLocale() {
  const route = useRoute()
  // console.log(route)
  const localesSubroutes = ["es"]
  let locale = "en"
  if (!route.params.lang) { }
  else if (localesSubroutes.includes(route.params.lang)) {
    locale = route.params.lang
  }
  return locale

}

// const getLanguage = () => {
//   if (process.client) {
//     let langageStorage = useLocalStorage("language")
//     if (langageStorage) {
//       return langageStorage
//     } else {
//       if (navigator.language.includes("es")) {
//         return "es"
//       } else {
//         return "en"
//       }
//     }
//   } else {
//     return "en"
//   }
// }
export default  () => ({
  legacy: false,
  globalInjection: true,
  // localeDir: 'locales',
  // allowComposition: true,
  fallbackLocale: "en",
  fallbackWarn: false,
  missingWarn: false,
  // locale: (process.client) ? ( useLocalStorage("language") ? useLocalStorage("language") :  navigator.language.includes("es")?"es":"en") : "en" || "en",
  // locale: "es",
  locale: getLocale() || "en",


  // if (process.client) {
  //   let langageStorage = useLocalStorage("language")
  //   if (langageStorage) {
  //     return langageStorage
  //   } else {
  //     if (navigator.language.includes("es")) {
  //       return "es"
  //     } else {
  //       return "en"
  //     }
  //   }
  // } else {
  //   return "en"
  // }
})