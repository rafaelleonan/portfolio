export const useSeo = (title: string, description: string, image?: string) => {
	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk || title ? `${titleChunk ?? title} | Rafael Leonan` : 'Rafael Leonan';
		},
		title: title,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'author', content: 'Rafael Leonan' },
			{ name: 'theme-color', content: '#1b2932' },
			{ name: 'keywords', content: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend' },
			{ name: 'robots', content: 'index, follow, max-image-preview:large' },
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: 'https://rafaelleonan.com/about' },
			{ property: 'og:image', content: image || 'https://rafaelleonan.com/images/og-image.png' },
			{ property: 'og:site_name', content: 'Rafael Leonan' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:image', content: image || 'https://rafaelleonan.com/images/og-image.png' }
		]
	})
}
