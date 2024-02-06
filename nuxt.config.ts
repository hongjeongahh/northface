// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["nuxt-swiper"],
  css: ["~/assets/scss/base/reset.scss", "~/assets/scss/base/font.scss"],
});
