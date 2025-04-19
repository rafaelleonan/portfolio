<script setup lang="ts">
import {onMounted, reactive, ref, computed, nextTick} from "vue";
import { useRoute, useRouter } from 'vue-router';
import {useHead} from '#imports';
import type {
  Project,
  ComponentCarousel,
  ComponentInstructions, ComponentMedia
} from "~/interfaces/projects";
import {MockProjects} from "~/data/mock-projects";

useHead({
  title: 'Projetos',
});

const route = useRoute()
const router = useRouter()
const project = ref<Project | null>(null);

interface Notification {
  id: number
  message: string
  fading: boolean
}

const notifications = ref<Notification[]>([])
const modalZoomImage = ref<HTMLDivElement | null>(null)
const imageUrlZoom = ref('')
const valueScaleImgInitial = ref(1)
const imageRef = ref<HTMLImageElement | null>(null);
const lensStyle = reactive({
  display: 'none',
  left: '0px',
  top: '0px',
  width: '100px',
  height: '100px',
});

const closeNotification = (index: number) => {
  notifications.value[index].fading = true;
  setTimeout(() => {
    notifications.value.splice(index, 1);
  }, 1000);
}

const addNotification = (message: string) => {
  const id = Date.now();
  notifications.value.push({ id, message, fading: false });

  setTimeout(() => {
    const notification = notifications.value.find(n => n.id === id);
    if (notification) {
      notification.fading = true;

      setTimeout(() => {
        notifications.value = notifications.value.filter(n => n.id !== id);
      }, 1000);
    }
  }, 2000);
};

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
  addNotification('Texto copiado para a área de transferência!')
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

const openModalZoomImage = (url: string) => {
  imageUrlZoom.value = url
  if (modalZoomImage.value) {
    console.log('IF modalZoomImage.value')
    console.log(modalZoomImage.value)
    valueScaleImgInitial.value = 1
    if (modalZoomImage.value.style.display !== 'none' && modalZoomImage.value.style.display !== '') {
      console.log('NONE')
      console.log(modalZoomImage.value.style.display)
      modalZoomImage.value.style.display = 'none'
    } else {
      console.log('FLEX')
      modalZoomImage.value.style.display = 'flex'
    }
  }
}

const closeModalZoomImage = () => {
  if (modalZoomImage.value) {
    if (modalZoomImage.value.style.display !== 'none' && modalZoomImage.value.style.display !== '') {
      modalZoomImage.value.style.display = 'none'
      imageUrlZoom.value = ''
    }
  }
}

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

const getPointerClass = (currentIndex: number, index: number, last: number): string => {
  if (currentIndex === index) return 'active'
  if ((currentIndex + 1) === index) return 'show'
  if ((currentIndex - 1) === index) return 'show'
  if (currentIndex === 0 && (currentIndex + 2) === index) return 'show'
  if (currentIndex === (last - 1) && (currentIndex - 2) === index) return 'show'
  else return 'hidden'
}

onMounted(() => {
  project.value = MockProjects.find((item: Project) => item.id === Number(route.params.id)) ?? null
  if (!project.value) {
    router.push("/404")
  }
});
</script>

<template>
  <div class="page">
    <div class="notifications" v-if="notifications.length > 0">
      <div v-for="(notification, nKey) in notifications"
           :key="`notification-${nKey}`"
           :class="['notification', { 'fade-out': notification.fading }]"
      >
        {{ notification.message }}
        <div class="material-icons close" @click="closeNotification(nKey)">
          close
        </div>
      </div>
    </div>
    <div class="bg-modal" ref="modalZoomImage">
      <div class="modal">
        <div class="modal-header">
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
          <button class="btn-close material-icons" type="button" @click="closeModalZoomImage">
            close
          </button>
        </div>
        <div class="modal-content">
          <div class="zoom-container"
               @mousemove="onMouseMove"
               @mouseleave="onMouseLeave">
            <img :src="imageUrlZoom" alt="Imagem com zoom" class="zoom-image" ref="imageRef" />
            <div class="zoom-lens" :style="lensStyle"></div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-default">
      <div class="header-section">
        <div class="h-section-1">
          <button class="button-back">
            <i class="material-icons" @click="router.back()">arrow_back_ios</i>
          </button>
          <span class="title-section">{{ project?.title }}</span>
        </div>
        <div class="h-section-2">
          <span class="posted-at"><span>Postado em:</span> {{ project?.post_date }}</span>
          <div class="list-links-externals">
            <span>Links: </span>
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
    <section class="section-default" v-for="(section, sKey) in project?.sections" :key="`section-${sKey}`">
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
                    <i class="material-icons" @click="openModalZoomImage(item.url)">zoom_out_map</i>
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
                  <img :src="inst.content" :id="`img-component-${itKey}-${insKey}`"/>
                  <i class="material-icons" @click="openModalZoomImage(inst.content)">zoom_out_map</i>
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
@import "assets/style/project";

.notifications {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 20px;

  .notification {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 15px 20px;
    border-radius: $rl-app-desktop-br-sm;
    background-color: $rl-app-blue-500;
    color: $rl-app-blue-50;
    font-size: $rl-app-desktop-fs-md;
    font-weight: 600;
    opacity: 1;
    transition: opacity 1s ease-in-out;

    &.fade-out {
      opacity: 0;
    }

    .close {
      cursor: pointer;
      color: $rl-app-blue-300;
      transition: color 250ms ease-in-out;

      &:hover {
        color: $rl-app-blue-50;
      }
    }
  }
}

@media (max-width: 600px) {
  .notifications {
    left: 20px;
    right: 20px;
    transform: translateX(0%);

    .notification {
      box-shadow: 2px 2px 8px $rl-app-brown-900;
      gap: 16px;
      padding: 8px 12px;
      font-size: $rl-app-desktop-fs-xs;
    }
  }
}
</style>