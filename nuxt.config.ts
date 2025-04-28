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
      ],
	    // meta: [
		  //   { name: 'keywords', content: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend' },
		  //   { name: 'description', content: 'Rafael Leonan - Desenvolvedor Fullstack com tecnologias como Vue, Nuxt, Flutter, Ruby, Ruby On Rails, Python, Django, JavaScript, TypeScript, Go e etc..' },
		  //   { property: 'og:title', content: 'Portfólio - Rafael Leonan' },
		  //   { property: 'og:description', content: 'Rafael Leonan - Desenvolvedor Fullstack com tecnologias como Vue, Nuxt, Flutter, Ruby, Ruby On Rails, Python, Django, JavaScript, TypeScript, Go e etc..' },
		  //   { property: 'og:type', content: 'website' },
		  //   { property: 'og:url', content: 'https://rafaelleonan.com' },
		  //   { property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png' },
		  //   { property: 'og:site_name', content: 'Rafael Leonan' },
		  //   { name: 'twitter:card', content: 'summary_large_image' },
		  //   { name: 'twitter:title', content: 'Portfólio - Rafael Leonan' },
		  //   { name: 'twitter:description', content: 'Rafael Leonan - Desenvolvedor Fullstack com tecnologias como Vue, Nuxt, Flutter, Ruby, Ruby On Rails, Python, Django, JavaScript, TypeScript, Go e etc..' },
		  //   { name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png' },
		  //   { name: 'robots', content: 'index, follow, max-image-preview:large' }
	    // ]
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