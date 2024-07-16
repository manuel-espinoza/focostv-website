// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      wpBaseUrl: "http://localhost:8080/wp-json",
    },
  },
  devtools: { enabled: true },
  css: ["normalize.css", "~/assets/css/main.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
          Inter: true
        },
      },
    ],
    "@vesp/nuxt-fontawesome",
  ],
});
