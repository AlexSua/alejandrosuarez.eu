export default async () => ({
  legacy: false,
  globalInjection: true,
  // allowComposition: true,
  fallbackLocale: "en",
  fallbackWarn: false,
  missingWarn: false,
  locale: (process.client && navigator.language.includes("es")) ? useLocalStorage("language") ? useLocalStorage("language") : "es" : "en" || "en",
})