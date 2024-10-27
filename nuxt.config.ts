// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  imports: { autoImport: false },
  primevue: {
    options: { unstyled: true },
    importPT: { from: '@/passthrough/index.ts' },
  },
  tailwindcss: {
    config: {
      content: ['./passthrough/**/*.ts'],
    }
  },
  css: ['@/assets/css/main.css'],
})
