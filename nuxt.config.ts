// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["material-icons/iconfont/material-icons.css"],
  //target: 'static',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s - Rafael Leonan',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Fira+Code:wght@300..700&display=swap'
        },
      ]
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NODE_ENV === 'production'
                ? 'https://backoffice.fly.dev/api/v1'
                : 'http://localhost:3000/api/v1'
    }
  }
})
