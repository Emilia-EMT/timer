// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/": { prerender: true },
  },
  nitro: {
    static: true,
  },
  pages: false,
});
