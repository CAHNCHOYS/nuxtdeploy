// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  serverDir: './',
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  //debug: true,

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
  css: ["~/assets/main.scss", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  devServer: {
    port: 5000,
  },
  app: {
    head: {
      title: "Learn Nuxt",
    },
  },
  nitro: {
    _config: {
      preset: 'vercel'
    }
  }

});
