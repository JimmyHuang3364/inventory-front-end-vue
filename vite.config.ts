import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // host: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? '/inventory-front-end-vue/'
    : '/',
})
