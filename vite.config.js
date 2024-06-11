import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginGhPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rickandmorty/',
  plugins: [
    vue(),
    vueJsx(),
    vitePluginGhPages()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
