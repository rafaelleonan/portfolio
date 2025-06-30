<script setup lang="ts">

import AppHeader from "~/layouts/AppHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
import SplashScreen from "~/components/SplashScreen.vue";
import Notification from "~/components/Notification.vue";
import {useCountLoading, useLoading, useInfoLoading} from "~/composables/useLoading";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import {MockProjects} from "~/data/mock-projects";
import {MockCertificates} from "~/data/mock-certificates";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useHead} from "#imports";
import { useTheme } from '~/composables/useTheme';
import {useRouter} from "vue-router";
import type {ComponentCarousel, ComponentInstructions} from "~/interfaces/projects";
import Modal from "~/components/Modal.vue";
import {useOptionsImage} from "~/composables/useOptionsImage";

const loading = useLoading();
const counting = useCountLoading();
const info = useInfoLoading();
const router = useRouter()
const { isOpen, srcImage, altImage, closeModal } = useOptionsImage()

const valueScaleImgInitial = ref(1)
const imageRef = ref<HTMLImageElement | null>(null);
const lensStyle = reactive({
  display: 'none',
  left: '0px',
  top: '0px',
  width: '100px',
  height: '100px',
});

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

const onMouseMove = (event: MouseEvent) => {
  if (imageRef.value) {
    const container = imageRef.value.parentElement as HTMLElement
    const containerRect = container.getBoundingClientRect()
    const lensSize = parseInt(lensStyle.width) / 2
    let x = event.clientX - containerRect.left - lensSize
    let y = event.clientY - containerRect.top - lensSize
    const scaleX = imageRef.value.offsetWidth / container.offsetWidth
    const scaleY = imageRef.value.offsetHeight / container.offsetHeight

    x = Math.max(0, Math.min(x, containerRect.width - lensSize * 2))
    y = Math.max(0, Math.min(y, containerRect.height - lensSize * 2))

    lensStyle.left = `${x}px`
    lensStyle.top = `${y}px`
    lensStyle.display = 'block'

    imageRef.value.style.transformOrigin = `${(x + lensSize) * scaleX}px ${(y + lensSize) * scaleY}px`
    imageRef.value.style.transform = `scale(${valueScaleImgInitial.value})`
  }
};

const onMouseLeave = () => {
  lensStyle.display = 'none';
  if (imageRef.value) {
    imageRef.value.style.transform = 'scale(1)';
  }
};

const toggleZoom = (value: string) => {
  if (value === '+') {
    if (valueScaleImgInitial.value < 2) valueScaleImgInitial.value = parseFloat((valueScaleImgInitial.value + 0.1).toFixed(1))
  } else {
    if (valueScaleImgInitial.value > 1) valueScaleImgInitial.value = parseFloat((valueScaleImgInitial.value - 0.1).toFixed(1))
  }
}

const computedValue = computed((): string => {
  return valueScaleImgInitial.value === 1 ? '100%' : `${parseFloat((valueScaleImgInitial.value * 100).toFixed(1))}%`
})

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
  document.body.classList.add('overflow--hidden');
  info.value = []
  await preloadTechnologiesImages();
  await preloadTrajectoriesImages();
  await preloadProjectsImages();
  await preloadCertificatesImages();
  useTheme();
  setTimeout(() => {
    document.body.classList.remove('overflow--hidden');
    loading.value = false;
    counting.value = 0
    info.value = []
  }, 800)
});
</script>

<template>
  <Notification />
  <Modal
    :show="isOpen"
    :hidden-footer="true"
    :onCancel="closeModal"
    @update:show="(val) => isOpen = val"
  >
    <template #header>
      <div class="options-zoom-image">
        <button type="button"
                :disabled="valueScaleImgInitial <= 1"
                class="btn-action material-icons"
                @click="toggleZoom('-')">
          zoom_out
        </button>
        <span>{{ computedValue }}</span>
        <button type="button"
                :disabled="valueScaleImgInitial === 2"
                class="btn-action material-icons"
                @click="toggleZoom('+')">
          zoom_in
        </button>
      </div>
    </template>
    <template #default>
      <div class="zoom-container"
           @mousemove="onMouseMove"
           @mouseleave="onMouseLeave">
        <img :src="srcImage" :alt="altImage" class="zoom-image" ref="imageRef" />
        <div class="zoom-lens" :style="lensStyle"></div>
      </div>
    </template>
  </Modal>

  <SplashScreen v-if="loading" />
  <AppHeader/>
  <main>
    <NuxtPage />
  </main>
  <AppFooter/>
</template>

<style scoped lang="scss">

</style>