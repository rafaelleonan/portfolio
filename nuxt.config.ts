// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "std-env";
import { MockProjects } from './data/mock-projects';

export default defineNuxtConfig({
	srcDir: "",
	ssr: false,
	target: 'static',
  css: ["material-icons/iconfont/material-icons.css"],
  modules: ['nuxt-gtag', '@nuxtjs/sitemap'],
	runtimeConfig: {
		public: {
			firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
		}
	},
  gtag: {
    // enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GA_ID || ''
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s | Rafael Leonan',
	    meta: [
		    { charset: 'utf-8' },
		    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
		    { name: 'author', content: 'Rafael Leonan' },
		    { name: 'theme-color', content: '#1b2932' },
		    { name: 'keywords', content: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend' },
		    { name: 'robots', content: 'index, follow, max-image-preview:large' },
		    { name: 'description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack.' },
		    { property: 'og:title', content: 'Portfólio - Rafael Leonan' },
		    { property: 'og:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack' },
		    { property: 'og:type', content: 'website' },
		    { property: 'og:url', content: 'https://rafaelleonan.com' },
		    { property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png' },
		    { property: 'og:site_name', content: 'Rafael Leonan' },
		    { name: 'twitter:card', content: 'summary_large_image' },
		    { name: 'twitter:title', content: 'Portfólio de Desenvolvedor - Rafael Leonan.' },
		    { name: 'twitter:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack' },
		    { name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png' }
	    ],
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
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
	site: {
		url: "https://rafaelleonan.com"
	},
	sitemap: {
		hostname: 'https://rafaelleonan.com',
		gzip: true,
		routes: async () => {
			const routes = [
				'/',
				'/resume',
				'/projects',
				'/certifications'
			];
			
			const projectRoutes = MockProjects.map(project => `/projects/${project.id}`);
			
			return [...routes, ...projectRoutes];
		}
	},
	nitro: {
		prerender: {
			routes: MockProjects.map((project) => `/projects/${project.id}`)
		}
	}
})