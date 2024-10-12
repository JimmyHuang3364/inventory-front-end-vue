import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@':path.resolve(__dirname, './src'), // @ 代表 src 路徑
    },
  },
  server: {
    host: true,
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
