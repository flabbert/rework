import { defineConfig, defaultColors } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { HstNuxt } from '@histoire/plugin-nuxt';

export default defineConfig({
  setupFile: './histoire.setup.ts',
  routerMode: 'hash',
  plugins: [HstVue(), HstNuxt()],
  vite: {
    server: {
      port: 6006
    }
  },
  theme: {
    logoHref: '/',
    colors: {
      gray: defaultColors.stone,
      primary: defaultColors.gray
    }
  }
});
