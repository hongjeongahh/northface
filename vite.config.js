import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuex from "@vitejs/plugin-vuex";

export default defineConfig({
  plugins: [vue(), vuex()],
});
