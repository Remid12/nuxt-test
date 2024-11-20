import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],
  components: true,
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  css: ["@/assets/styles/app.css"],
  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-custom-media": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: process.env.TMDB_KEY,
  },
});
