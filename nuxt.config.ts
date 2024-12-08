export default defineNuxtConfig({
  // Compatibility date for Nuxt
  compatibilityDate: '2024-11-01',

  // Enable devtools
  devtools: { enabled: true },

  // Include Tailwind CSS
  css: ['~/styles/tailwind.css'],

  // Configure PostCSS for Tailwind and Autoprefixer
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Add Pinia module
  modules: ['@pinia/nuxt'],
});
