export const useSeo = (title: string, description: string, image?: string) => {
	const route = useRoute();
	const basePath = 'https://rafaelleonan.com';
	const fullUrl = `${basePath}${route.fullPath}`;

	const pathArray = route.path.split('/').filter(p => p);
	const breadcrumbList = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": basePath
			},
			...pathArray.map((path, index) => ({
				"@type": "ListItem",
				"position": index + 2,
				"name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
				"item": `${basePath}/${pathArray.slice(0, index + 1).join('/')}`
			}))
		]
	};

	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Rafael Leonan",
		"jobTitle": "Desenvolvedor Full Stack",
		"url": basePath,
		"image": `${basePath}/images/og-image.png`,
		"description": "Sou desenvolvedor full stack em Fortaleza, Ceará, com experiência em aplicações back-end: APIs RESTful, Cron Services, Webhooks e integrações.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Fortaleza",
			"addressRegion": "CE",
			"addressCountry": "Brasil"
		},
		"sameAs": [
			"https://www.linkedin.com/in/rafael-leonan",
			"https://github.com/rafaelleonan"
		],
		"potentialAction": {
			"@type": "SearchAction",
			"target": `${basePath}/projects?q={search_term_string}`,
			"query-input": "required name=search_term_string"
		}
	};

	const schemaRoutes = [
		'/',
		'/resume',
		'/projects',
		'/certifications',
		'/about'
	];

	const navigationSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"itemListElement": [
			{ "@type": "SiteNavigationElement", "position": 1, "name": "Resumo", "url": `${basePath}/resume` },
			{ "@type": "SiteNavigationElement", "position": 2, "name": "Certificações", "url": `${basePath}/certifications` },
			{ "@type": "SiteNavigationElement", "position": 3, "name": "Projetos", "url": `${basePath}/projects` },
			{ "@type": "SiteNavigationElement", "position": 4, "name": "Sobre mim", "url": `${basePath}/about` }
		]
	};

	const shouldIncludeSchema =  schemaRoutes.includes(route.path);

	const scripts = [
		{ type: 'application/ld+json', children: JSON.stringify(breadcrumbList) }
	];

	if (shouldIncludeSchema) {
		scripts.push({ type: 'application/ld+json', children: JSON.stringify(personSchema) });
		scripts.push({ type: 'application/ld+json', children: JSON.stringify(navigationSchema) });
	}

	const defaultImage = `${basePath}/images/og-image.png`;

	// 1. Tags Meta com useSeoMeta (Mais limpo e tipado)
	useSeoMeta({
		title: title,
		description: description,
		author: 'Rafael Leonan',
		themeColor: '#1b2932',
		ogTitle: title,
		ogDescription: description,
		ogUrl: fullUrl,
		ogType: 'website',
		ogImage: image || defaultImage,
		ogSiteName: 'Rafael Leonan',
		twitterCard: 'summary_large_image',
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: image || defaultImage,
		robots: 'index, follow, max-image-preview:large',
		keywords: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend',
		viewport: 'width=device-width, initial-scale=1'
	});

	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk || title ? `${titleChunk ?? title} | Rafael Leonan` : 'Rafael Leonan';
		},
		link: [
			{
				rel: 'canonical',
				href: fullUrl
			}
		],
		script: scripts
	})
}
