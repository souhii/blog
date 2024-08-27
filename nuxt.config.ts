// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-27',

  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],

  routeRules: {
    '/': { prerender: true },
  },

  css: ['~/assets/css/main.css'],

  ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


})
