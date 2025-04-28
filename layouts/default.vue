<script setup lang="ts">

import AppHeader from "~/layouts/AppHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
import SplashScreen from "~/components/SplashScreen.vue";
import {useCountLoading, useLoading, useInfoLoading} from "~/composables/useLoading";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import {MockProjects} from "~/data/mock-projects";
import {MockCertificates} from "~/data/mock-certificates";
import {onMounted, watch} from "vue";
import {useHead} from "#imports";
import { useTheme } from '~/composables/useTheme';
import {useRouter} from "vue-router";
import type {ComponentCarousel, ComponentInstructions, ComponentMedia} from "~/interfaces/projects";

const loading = useLoading();
const counting = useCountLoading();
const info = useInfoLoading();
const router = useRouter()

watch(() => router.currentRoute.value, () => {
  let main: HTMLElement | null  = document.querySelector("main")
  if (main !== null) main.scrollTo({ top: 0, behavior: 'smooth' })
})

const isComponentCarousel = (obj: any): obj is ComponentCarousel => {
  return obj && typeof obj === 'object' && 'current_index' in obj && 'items' in obj
}

const isComponentInstructions = (obj: any): obj is ComponentInstructions[] => {
  return obj && typeof obj === 'object' && 'title' in obj[0] && 'instructions' in obj[0]
}

const preloadTrajectoriesImages = async () => {
  const promises = []
  for (const trajectory of MockTrajectories) {
    for (const html of trajectory.html) {
      if (html.type === "images") {
        for (const data of html.data) {
          counting.value++
          promises.push(new Promise(resolve => {
            info.value.push({"local": "Trajectory", "value": data.text})
            const img = new Image();
            img.src = data.url;
            img.onload = resolve;
            img.onerror = resolve;
          }))
        }
      }
    }
  }

  await Promise.all(promises);
};

const preloadTechnologiesImages = async () => {
  const promises = []
  for (const technology of MockTechnologies) {
    for (const badge of technology.badges) {
      counting.value++
      promises.push(new Promise(resolve => {
        info.value.push({"local": "Technology", "value": badge.title})
        const img = new Image();
        img.src = badge.src;
        img.onload = resolve;
        img.onerror = resolve;
      }))
    }
  }

  await Promise.all(promises);
};

const preloadProjectsImages = async () => {
  const promises = []
  for (const project of MockProjects) {
    for (const image of project.images) {
      counting.value++
      promises.push(new Promise(resolve => {
        info.value.push({"local": "Project -> Image", "value": image.alt})
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = resolve;
      }))
    }
    for (const technology of project.technologies) {
      promises.push(new Promise(resolve => {
        counting.value++
        info.value.push({"local": "Project -> Technology", "value": technology.name})
        const img = new Image();
        img.src = technology.icon_url;
        img.onload = resolve;
        img.onerror = resolve;
      }))
    }
    for (const section of project.sections) {
      for (const component of section.components) {
        if (component.type === "carousel_image_with_text" && isComponentCarousel(component.content)) {
          for (const item of component.content.items) {
            promises.push(new Promise(resolve => {
              counting.value++
              info.value.push({"local": "Project -> Sections -> Component", "value": item.title})
              const img = new Image();
              img.src = item.url;
              img.onload = resolve;
              img.onerror = resolve;
            }))
          }
        } else if (component.type === "code_or_instructions" && isComponentInstructions(component.content)) {
          for (const instruction of component.content) {
            for (const ins of instruction.instructions) {
              if (ins.type === "image") {
                promises.push(new Promise(resolve => {
                  counting.value++
                  info.value.push({"local": "Project -> Sections -> Component", "value": ins.title})
                  const img = new Image();
                  img.src = ins.content;
                  img.onload = resolve;
                  img.onerror = resolve;
                }))
              }
            }
          }
        }
      }
    }
  }

  await Promise.all(promises);
};

const preloadCertificatesImages = async () => {
  const promises = []
  for (const cert of MockCertificates) {
    promises.push(new Promise(resolve => {
      counting.value++
      info.value.push({"local": "Certificate", "value": cert.title})
      const img = new Image();
      img.src = cert.image;
      img.onload = resolve;
      img.onerror = resolve;
    }))
  }

  await Promise.all(promises);
};

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Rafael Leonan` : 'Rafael Leonan';
  },
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Rafael Leonan' },
    { name: 'theme-color', content: '#1b2932' },
    { name: 'keywords', content: 'Rafael Leonan, Portfólio, Projetos, Desenvolvedor Fullstack, Fullstack, Software, Web Developer, Flutter, Vue.js, Go, Ruby, Rails, JavaScript, TypeScript, PostgreSQL, MySQL, Frontend, Backend' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' }
  ]
});

onMounted(async () => {
  counting.value = 0
  loading.value = true;
  info.value = []
  await preloadTechnologiesImages();
  await preloadTrajectoriesImages();
  await preloadProjectsImages();
  await preloadCertificatesImages();
  useTheme();
  setTimeout(() => {
    loading.value = false;
    counting.value = 0
    info.value = []
  }, 800)
});
</script>

<template>
<!--  <SplashScreen v-if="loading" />-->
  <main style="overflow-x: hidden;">
    <AppHeader/>
    <div class="content">
      <NuxtPage />
    </div>
    <AppFooter/>
  </main>
</template>

<style scoped lang="scss">

</style>