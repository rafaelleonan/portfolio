// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "std-env";
import { MockProjects } from './data/mock-projects';
import {undefined} from "zod";
import {routes} from "vue-router/auto-routes";

export default defineNuxtConfig({
	srcDir: "",
	ssr: false,
	target: 'static',
  css: ["material-icons/iconfont/material-icons.css"],
  modules: ['nuxt-gtag', '@nuxtjs/sitemap'],
  gtag: {
    // enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GA_ID || ''
  },
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
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ]
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
	}
})