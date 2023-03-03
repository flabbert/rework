// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  imports: {
    autoImport: false
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-vitest',
    '@nuxt/image-edge',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    'nuxt-icons',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: './tailwind.config.js'
  },
  alias: {
    '#root': __dirname,
    '#base': path.resolve(__dirname, './src'),
    types: path.resolve(__dirname, './src/types'),
    components: path.resolve(__dirname, './src/components'),
    pages: path.resolve(__dirname, './src/pages'),
    stores: path.resolve(__dirname, './src/stores'),
    utils: path.resolve(__dirname, './src/utils')
  }
});
