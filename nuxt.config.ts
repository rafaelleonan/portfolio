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