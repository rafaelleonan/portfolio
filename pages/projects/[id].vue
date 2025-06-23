<script setup lang="ts">
import {reactive, ref, computed} from "vue";
import { useRoute, useRouter } from 'vue-router';
import {useHead} from '#imports';
import { useNotifications } from '@/composables/useNotifications'
import type {
  Project,
  ComponentCarousel,
  ComponentInstructions, ComponentMedia
} from "~/interfaces/projects";
import {MockProjects} from "~/data/mock-projects";import {useOptionsImage} from "~/composables/useOptionsImage";

const useOptImage = useOptionsImage()
const route = useRoute()
const router = useRouter()
const project = ref<Project | null>(null);

const idURL = Number(route.params.id);
project.value = MockProjects.find((item: Project) => item.id === idURL) ?? null
if (!project.value) {
  router.push("/404")
}

useHead({
  title: project.value?.title ?? 'Projeto',
  meta: [
    { name: 'description', content: project.value?.description },
    { property: 'og:title', content: project.value?.title },
    { property: 'og:description', content: project.value?.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://rafaelleonan.com/projects/${project.value?.id}` },
    { property: 'og:image', content: project.value?.card_banner ?? 'https://rafaelleonan.com/images/og-image.png' },
    { property: 'og:site_name', content: 'Rafael Leonan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: project.value?.title ?? 'Projetos - Rafael Leonan' },
    { name: 'twitter:description', content: project.value?.description },
    { name: 'twitter:image', content: project.value?.card_banner ?? 'https://rafaelleonan.com/images/og-image.png' }
  ]
});

const { addNotification } = useNotifications()

const isComponentCarousel = (obj: any): obj is ComponentCarousel => {
  return obj && typeof obj === 'object' && 'current_index' in obj && 'items' in obj
}

const isComponentInstructions = (obj: any): obj is ComponentInstructions[] => {
  return obj && typeof obj === 'object' && 'title' in obj[0] && 'instructions' in obj[0]
}

const isComponentMedia = (obj: any): obj is ComponentMedia[] => {
  return obj && typeof obj === 'object' && 'id' in obj[0] && 'title' in obj[0] && 'text' in obj[0] && 'url' in obj[0]
}

const copyText = (copyContent: string) => {
  const texto = document.createElement('textarea')
  texto.value = copyContent
  document.body.appendChild(texto)

  texto.select();
  texto.setSelectionRange(0, 99999) // Para dispositivos móveis
  document.execCommand('copy')
  document.body.removeChild(texto)
  addNotification(`Texto copiado para área de transferência!`, 'success', 5000)
}

const goToSlide = (carousel: string | ComponentMedia[] | ComponentCarousel, index: number) => {
  if (isComponentCarousel(carousel)) {
    carousel.current_index = index
  }
}

const showPrevSlide = (carousel: string | ComponentMedia[] | ComponentCarousel) => {
  if (isComponentCarousel(carousel)) {
    let totalSlides: number = carousel.items.length
    carousel.current_index = (carousel.current_index - 1 + totalSlides) % totalSlides
  }
};

const showNextSlide = (carousel: string | ComponentMedia[] | ComponentCarousel) => {
  if (isComponentCarousel(carousel)) {
    let totalSlides: number = carousel.items.length
    carousel.current_index = (carousel.current_index + 1) % totalSlides
  }
};

const getPointerClass = (currentIndex: number, index: number, last: number): string => {
  if (currentIndex === index) return 'active'
  if ((currentIndex + 1) === index) return 'show'
  if ((currentIndex - 1) === index) return 'show'
  if (currentIndex === 0 && (currentIndex + 2) === index) return 'show'
  if (currentIndex === (last - 1) && (currentIndex - 2) === index) return 'show'
  else return 'hidden'
}

</script>

<template>
  <div class="w-100 d-flex d-flex--column">
    <section class="section">
      <div class="header-section">
        <div class="h-section-1">
          <button class="button-back">
            <i class="material-icons" @click="router.back()">arrow_back_ios</i>
          </button>
          <span class="text--uppercase text--bold text--size-28px text--brown-500">{{ project?.title }}</span>
        </div>
        <div class="h-section-2">
          <div class="list-links-externals">
            <a v-for="(link, lKey) in project?.external_links" :key="`link-external-${lKey}`" :href="link.url" rel="noopener noreferrer" target="_blank">
              {{ link.label }}
            </a>
          </div>
          <div class="list-technologies">
            <div class="badge-xs" v-for="(tech, tKey) in project?.technologies" :key="`tech-${tKey}`">
              <img :src="tech.icon_url" width="12px" :alt="tech.name" />
              <div class="badge-title">{{ tech.name }}</div>
              <div class="badge-version">{{ tech.version }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" v-for="(section, sKey) in project?.sections" :key="`section-${sKey}`">
      <span class="title-content"># {{ section.title }}</span>
      <div v-for="(component, cKey) in section.components" :key="`component-${cKey}`">
        <div v-if="component.type === 'text'" class="component-text">
          <span v-html="component.content"></span>
        </div>
        <div v-else-if="component.type === 'carousel_image_with_text' && isComponentCarousel(component.content)" class="slide-card-resume">
          <div class="card-list">
            <div class="card-resume"
                 v-for="(item, iKey) in component.content.items"
                 :key="`item-carousel-${iKey}`"
                 :class="{ 'active': component.content.current_index === iKey }">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-body">
                <div class="resume-project">{{ item.text }}</div>
                <div class="image-card">
                  <div class="image">
                    <i class="material-icons zoom-image-click" @click="useOptImage.openModal(item.url, item.title)">zoom_out_map</i>
                    <img :src="item.url" :alt="item.title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slide-pointers">
            <button class="btn-prev" @click="showPrevSlide(component.content)">
              <i class="material-icons">arrow_left</i>
            </button>
            <button class="pointer"
                    v-for="(_, pKey) in component.content.items"
                    :key="`pointer-carousel-${pKey}`"
                    :class="getPointerClass(component.content.current_index, pKey, component.content.items.length)"
                    @click="goToSlide(component.content, pKey)"
            ></button>
            <button class="btn-next" @click="showNextSlide(component.content)">
              <i class="material-icons">arrow_right</i>
            </button>
          </div>
        </div>
        <div v-else-if="component.type === 'code_or_instructions' && isComponentInstructions(component.content)">
          <div v-for="(instruction, itKey) in component.content" :key="`instruction-${itKey}`" class="component-instructions">
            <span class="title-instructions">{{ instruction.title }}</span>
            <div class="list-instructions">
              <div class="item-instruction" v-for="(inst, insKey) in instruction.instructions" :key="`ins-${insKey}`">
                <span>{{ insKey + 1 }}. </span><span v-html="inst.title"></span>
                <div v-if="inst.type === 'code'"
                     class="instruction-code"
                     @click="copyText(inst.content)">
                  <span class="material-icons">terminal</span>
                  <pre class="code-content">{{ inst.content }}</pre>
                  <span class="material-icons">
                    content_copy
                  </span>
                </div>
                <div v-else-if="inst.type === 'image'" class="instruction-image">
                  <img :src="inst.content" :alt="inst.title" :id="`img-component-${itKey}-${insKey}`"/>
                  <i class="material-icons zoom-image-click" @click="useOptImage.openModal(inst.content, inst.title)">zoom_out_map</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="component.type === 'image_with_text' && isComponentMedia(component.content)">
          <div v-for="(item, iKey) in component.content" :key="`image_with_text_${iKey}`" class="component-text-with-image">
            <div class="text">{{ item.text }}</div>
            <div class="content-image">
              <img :src="item.url" :alt="item.title"/>
            </div>
          </div>
        </div>
        <div v-else-if="component.type === 'video_with_text' && isComponentMedia(component.content)">
          <div v-for="(item, iKey) in component.content" :key="`video_with_text_${iKey}`" class="component-text-with-video">
            <div class="text">{{ item.text }}</div>
            <div class="content-video">
              <iframe
                  :src="item.url"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/project" as *;
</style>