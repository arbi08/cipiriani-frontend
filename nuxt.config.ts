
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'assets/css/main.css'
  ],
  modules: ['@unocss/nuxt'],
  unocss: {
    // Optional: you can configure presets or rules
    uno: true, // enable default preset
    icons: true, // enable @unocss/preset-icons
    attributify: true, // enable attributify mode
    inspector: true,
  },
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },

})
