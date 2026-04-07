// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "std-env";
import {MockProjects} from './data/mock-projects';
import {MockCertificates} from "./data/mock-certificates";
import {MockTechnologies} from "./data/mock-homepage";

export default defineNuxtConfig({
    srcDir: "",
    ssr: false,
    target: 'static',
    css: ["material-icons/iconfont/material-icons.css"],
    modules: ['nuxt-gtag', '@nuxtjs/sitemap', '@nuxtjs/color-mode'],
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
        id: process.env.NUXT_PUBLIC_GA_ID || '',
        initCommands: [
            ['consent', 'default', {
                analytics_storage: 'denied',
                wait_for_update: 500
            }]
        ]
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            titleTemplate: ((titleChunk: string | undefined) => {
                return titleChunk ? `${titleChunk} | Rafael Leonan` : 'Rafael Leonan - Desenvolvedor Full Stack';
            }) as any,
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'author', content: 'Rafael Leonan'},
                {name: 'theme-color', content: '#1b2932'},
                {
                    name: 'keywords',
                    content: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend'
                },
                {name: 'robots', content: 'index, follow, max-image-preview:large'},
                {name: 'description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack.', tagPriority: 'critical'},
                {property: 'og:title', content: 'Portfólio - Rafael Leonan', tagPriority: 'critical'},
                {property: 'og:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack', tagPriority: 'critical'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://rafaelleonan.com'},
                {property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png', tagPriority: 'critical'},
                {property: 'og:site_name', content: 'Rafael Leonan', tagPriority: 'critical'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'Portfólio de Desenvolvedor - Rafael Leonan.', tagPriority: 'critical'},
                {name: 'twitter:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack', tagPriority: 'critical'},
                {name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png', tagPriority: 'critical'}
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
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
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    site: {
        url: "https://rafaelleonan.com"
    },
    sitemap: {
        hostname: 'https://rafaelleonan.com',
        gzip: true,
        urls: async () => {
            const formatImage = (loc: string | undefined, title: string, caption?: string) => ({
                loc: loc || '',
                title: title || 'Imagem - Rafael Leonan',
                caption: caption || title || 'Desenvolvedor Full Stack'
            });

            const allProjectBanners = MockProjects
                .filter(p => p.card_banner)
                .map(p => formatImage(p.card_banner, p.title, `Projeto: ${p.title}`));

            const homeImages = [
                ...MockCertificates.map(c => formatImage(c.image, c.title)),
                ...MockTechnologies.flatMap(cat =>
                    cat.badges.filter(b => b.current === true).map(b => formatImage(b.src, b.title))
                )
            ];

            const aboutImages = MockTechnologies.flatMap(cat =>
                cat.badges.map(b => formatImage(b.src, b.title))
            );

            const certImages = MockCertificates.map(c =>
                formatImage(c.image, c.title, `Certificado emitido por ${c.issuer}`)
            );

            const projectRoutes = MockProjects.map(project => {
                const projectImages = [];
                if (project.card_banner) {
                    projectImages.push(formatImage(project.card_banner, project.title));
                }
                if (project.images) {
                    project.images.forEach(img => {
                        projectImages.push(formatImage(img.src, img.alt || project.title));
                    });
                }

                return {
                    loc: `/projects/${project.slug_hash}`,
                    lastmod: project.updated_at ? new Date(project.updated_at) : (project.post_date ? new Date(project.post_date) : new Date()),
                    images: projectImages
                };
            });

            const staticRoutes = [
                { loc: '/', lastmod: new Date(), images: homeImages },
                { loc: '/about', lastmod: new Date(), images: aboutImages },
                { loc: '/certifications', lastmod: new Date(), images: certImages },
                { loc: '/resume', lastmod: new Date(), images: [] },
                { loc: '/projects', lastmod: new Date(), images: allProjectBanners },
                { loc: '/policy-and-privacy', lastmod: new Date(), images: [] }
            ];

            return [...staticRoutes, ...projectRoutes].map(route => {
                const images = (route.images || []).map(img => {
                    let finalLoc = img.loc;
                    if (finalLoc && !finalLoc.startsWith('http')) {
                        const separator = finalLoc.startsWith('/') ? '' : '/';
                        finalLoc = `https://rafaelleonan.com${separator}${finalLoc}`;
                    }
                    return {
                        ...img,
                        loc: finalLoc
                    };
                });

                return {
                    ...route,
                    images: images.length > 0 ? images : undefined
                };
            });
        }
    },
    nitro: {
        prerender: {
            routes: MockProjects.map((project) => `/projects/${project.slug_hash}`)
        }
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        dataValue: 'theme',
        classSuffix: ''
    }
})