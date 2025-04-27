<script lang="ts" setup>
import { useHead } from '#imports';
import { useRouter } from 'vue-router';
import { MockProjects } from "~/data/mock-projects";
import {MockTechnologies} from "~/data/mock-homepage";
import type {Project, Technology} from "~/interfaces/projects";
import {onMounted, onUnmounted, nextTick, ref, computed} from "vue";
import type {BadgeCategory} from "~/interfaces/homepage";

useHead({
  title: 'Projetos',
  meta: [
    { name: 'description', content: 'Projetos de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc.' },
    { property: 'og:title', content: 'Projetos - Rafael Leonan' },
    { property: 'og:description', content: 'Projetos de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc..' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rafaelleonan.com/projects' },
    { property: 'og:image', content: 'https://rafaelleonan.com/images/banner.jpg' },
    { property: 'og:site_name', content: 'Rafael Leonan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projetos - Rafael Leonan.' },
    { name: 'twitter:description', content: 'Projetos de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc.' },
    { name: 'twitter:image', content: 'https://rafaelleonan.com/images/banner.jpg' }
  ]
});

const router = useRouter();
const carousels = ref<HTMLDivElement[]>([]);
const isDragging = ref<boolean[]>([]);
const startX = ref<number[]>([]);
const startScrollLeft = ref<number[]>([]);
const filterProjectName = ref('')
const filterProjectTechSelected = ref<string[]>([])
const searchTechnology = ref<string>("")
const filterProjectTypeSelected = ref<string[]>([])
const searchProjectType = ref<string>("")
const isOpen = ref(false);
const isOpenTwo = ref(false);

const goToProject = (projectId: number) => {
  router.push(`/projects/${projectId}`);
};

const showPrevSlide = (project: Project) => {
  let totalSlides: number = project.images.length
  project.current_index = (project.current_index - 1 + totalSlides) % totalSlides
};

const showNextSlide = (project: Project) => {
  let totalSlides: number = project.images.length
  project.current_index = (project.current_index + 1) % totalSlides
};

const getSlideClass = (index: number, project: Project) => {
  if (index === project.current_index) return 'active';
  if (index === (project.current_index + 1)) return 'prev prev-show';
  if (index > project.current_index) return 'prev';
  if (index === (project.current_index - 1)) return 'next next-show';
  if (index < project.current_index) return 'next';
  return '';
};

const getSlideClassImg = (index: number, project: Project) => {
  let classExtraMobile = project.type_project.filter(tech => tech === 'Mobile').length > 0 ? 'mobile' : ''
  if (index === (project.current_index + 1)) return classExtraMobile;
  if (index === (project.current_index - 1)) return classExtraMobile;
  return '';
};

const initCarousels = async () => {
  await nextTick();
  carousels.value.forEach((carousel: HTMLDivElement, index: number) => {
    if (carousel) {
      isDragging.value[index] = false;
      startX.value[index] = 0;
      startScrollLeft.value[index] = 0;
    }
  });

  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchmove", onDrag);
  window.addEventListener("touchend", stopDrag);
  document.addEventListener("click", closeDropdown);
  document.addEventListener("click", closeDropdownTwo);
};

const startDrag = (event: MouseEvent | TouchEvent, index: number) => {
  if (carousels.value[index]) {
    isDragging.value[index] = true;
    startX.value[index] = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    startScrollLeft.value[index] = carousels.value[index].scrollLeft;
    document.body.style.userSelect = "none";
  }
};

const onDrag = (event: MouseEvent | TouchEvent) => {
  carousels.value.forEach((carousel: HTMLDivElement, index: number) => {
    if (isDragging.value[index] && carousel) {
      const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      const distance = x - startX.value[index];
      carousel.scrollLeft = startScrollLeft.value[index] - distance;
    }
  });
};

const stopDrag = () => {
  isDragging.value.fill(false);
  document.body.style.userSelect = "auto";
};

const toggleOptionSelectTypeProject = (option: string) => {
  if (!filterProjectTypeSelected.value.some((o) => o.toUpperCase() === option.toUpperCase())) {
    filterProjectTypeSelected.value.push(option.toUpperCase());
    searchProjectType.value = ""
  } else {
    filterProjectTypeSelected.value = filterProjectTypeSelected.value.filter((opt) => opt.toUpperCase() !== option.toUpperCase());
  }
};

const toggleOptionSelect = (option: string) => {
  if (!filterProjectTechSelected.value.some((o) => o.toUpperCase() === option.toUpperCase())) {
    filterProjectTechSelected.value.push(option.toUpperCase());
    searchTechnology.value = ""
  } else {
    filterProjectTechSelected.value = filterProjectTechSelected.value.filter((opt) => opt.toUpperCase() !== option.toUpperCase());
  }
};

const closeDropdown = (event: Event) => {
  if (!(event.target as HTMLElement).closest(".dropdown-container")) {
    isOpen.value = false;
  }
};

const closeDropdownTwo = (event: Event) => {
  if (!(event.target as HTMLElement).closest(".dropdown-container")) {
    isOpenTwo.value = false;
  }
};

const computedProjects = computed(() => {
  let projects = MockProjects

  if (filterProjectTypeSelected.value.length > 0) {
    projects = projects.filter((project) => project.type_project.some((type: string) => filterProjectTypeSelected.value.includes(type.toUpperCase())))
  }

  if (filterProjectTechSelected.value.length > 0) {
    projects = projects.filter((project) => project.technologies.some((tech: Technology) => filterProjectTechSelected.value.includes(tech.name.toUpperCase())))
  }

  if (filterProjectName.value.trim().length > 0) {
    projects = projects.filter((project) => project.title.toUpperCase().includes(filterProjectName.value.toUpperCase()))
  }

  return projects
})

const placeholderSelectTypeProject = (): string => {
  if (filterProjectTypeSelected.value.length === 0) {
    return 'TAGS'
  } else if (filterProjectTypeSelected.value.length > 0 && filterProjectTypeSelected.value.length < 3) {
    return filterProjectTypeSelected.value.join(", ")
  } else {
    return `${filterProjectTypeSelected.value.length} tags selecionadas...`
  }
}

const clearFilterProjectType = () => {
  filterProjectTypeSelected.value = []
  searchProjectType.value = ""
}

const clearFilterTechnologies = () => {
  filterProjectTechSelected.value = []
  searchTechnology.value = ""
}

const placeholderSelectTechnology = (): string => {
  if (filterProjectTechSelected.value.length === 0) {
    return 'LINGUAGEM/FRAMEWORK'
  } else if (filterProjectTechSelected.value.length > 0 && filterProjectTechSelected.value.length < 3) {
    return filterProjectTechSelected.value.join(", ")
  } else {
    return `${filterProjectTechSelected.value.length} techs selecionadas...`
  }
}

const listProjectTypesSearch = computed((): string[] => {
  let value = searchProjectType.value
  let listProjectTypes = ["Frontend", "Mobile", "Desktop", "Web", "Backend", "API RESTful", "Fullstack", "Design"]
  if (value.trim().length > 0) {
    return listProjectTypes.filter((f) => f.toLowerCase().includes(value.toLowerCase()))
  }

  return listProjectTypes
})

const listTechnologiesSearch = computed((): BadgeCategory[] => {
  let value = searchTechnology.value
  let listTechnologies = MockTechnologies
  if (value.trim().length > 0) {
    return listTechnologies.filter((f) => f.badges.filter((tech) => tech.title.toUpperCase().includes(value.toUpperCase())).length > 0)
  }

  return listTechnologies
})

const toggleSelect = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) isOpenTwo.value = false
}

const toggleSelectTwo = () => {
  isOpenTwo.value = !isOpenTwo.value
  if (isOpenTwo.value) isOpen.value = false
}

onMounted(initCarousels);

onUnmounted(() => {
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("touchend", stopDrag);
  document.removeEventListener("click", closeDropdown);
  document.removeEventListener("click", closeDropdownTwo);
});

</script>

<template>
  <div class="page">
    <section class="section-default">
      <span class="title-section">MEUS PROJETOS</span>
      <div class="form-filters">
        <div class="form-filter col-4">
          <input type="text" class="form-input" v-model="filterProjectName" placeholder="NOME PROJETO"/>
        </div>
        <div class="form-filter col-4">
          <div class="dropdown-container" @click.stop>
            <div class="input-box" @click="toggleSelect">
              <input
                  type="text"
                  v-model="searchProjectType"
                  :placeholder="placeholderSelectTypeProject()"
                  class="input"
              />
              <span class="material-icons clear-all"
                    @click="clearFilterProjectType()"
                    v-if="(filterProjectTypeSelected.length > 0 || searchProjectType.length > 0) && !isOpen"
              >
                close
              </span>
              <span class="material-icons icon-dropdown"
                    v-else
              >
                {{ isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
              </span>
            </div>

            <ul v-if="isOpen" class="dropdown">
              <li
                  v-if="listProjectTypesSearch.length > 0"
                  v-for="(option, key) in listProjectTypesSearch"
                  :key="`option-${key}`"
              >
                <div class="option"
                     @click="toggleOptionSelectTypeProject(option)"
                     :class="{
                       'selected': filterProjectTypeSelected.some((o) => o.toUpperCase() === option.toUpperCase()),
                       'searched': searchProjectType.toUpperCase() === option.toUpperCase()
                     }"
                >
                  {{ option }}
                  <span class="material-icons remove">close</span>
                </div>
              </li>
              <div class="not-found-results" v-else>
                Nenhum resultado encontrado
              </div>
            </ul>
          </div>
        </div>
        <div class="form-filter col-4">
          <div class="dropdown-container" @click.stop>
            <div class="input-box" @click="toggleSelectTwo">
              <input
                  type="text"
                  v-model="searchTechnology"
                  :placeholder="placeholderSelectTechnology()"
                  class="input"
              />
              <span class="material-icons clear-all"
                    @click="clearFilterTechnologies()"
                    v-if="(filterProjectTechSelected.length > 0 || searchTechnology.length > 0) && !isOpenTwo"
              >
                close
              </span>
              <span class="material-icons icon-dropdown"
                    v-else
              >
                {{ isOpenTwo ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
              </span>
            </div>

            <ul v-if="isOpenTwo" class="dropdown">
              <li
                  v-if="listTechnologiesSearch.length > 0"
                  v-for="(option, key) in listTechnologiesSearch"
                  :key="`option-${key}`"
              >
                <div class="select-group">
                  <span class="title-group">{{ option.title }}</span>
                  <div class="option-group"
                     v-for="(tech, techKey) in option.badges"
                     :key="`option-key-tech-${techKey}`"
                     :class="{
                       'selected': filterProjectTechSelected.some((o) => o.toUpperCase() === tech.title.toUpperCase()),
                       'searched': searchTechnology.toUpperCase() === tech.title.toUpperCase()
                     }"
                     @click="toggleOptionSelect(tech.title)"
                  >
                    {{ tech.title }}
                    <span class="material-icons remove">close</span>
                  </div>
                </div>
              </li>
              <div class="not-found-results" v-else>
                Nenhum resultado encontrado
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-project"
         v-if="computedProjects.length > 0"
         v-for="(project, pKey) in computedProjects"
         :key="`key_project_${pKey}`"
         @click="goToProject(project.id)"
      >
        <div class="images-project">
          <div class="background-blur">
            <img class="background-image" :src="project.images[project.current_index].src" :alt="project.images[project.current_index].alt"/>
            <div class="background-filter"></div>
          </div>
          <div class="slider">
            <div class="slides">
              <div
                  v-for="(slide, iKey) in project.images"
                  :key="`key_image_${iKey}`"
                  :class="getSlideClass(iKey, project)"
              >
                <img :src="slide.src" :alt="slide.alt" :class="getSlideClassImg(iKey, project)" />
              </div>
            </div>
            <i class="btn-prev material-icons" @click.stop="showPrevSlide(project)">arrow_back_ios</i>
            <i class="btn-next material-icons" @click.stop="showNextSlide(project)">arrow_forward_ios</i>
          </div>
        </div>

        <div class="resume-project">
          <div class="header">
            <span class="title">{{ project.title }}</span>
            <i class="material-icons">open_in_new</i>
          </div>
          <div ref="carousel"
               class="carousel-techs"
               @mousedown.passive="(event: MouseEvent | TouchEvent) => startDrag(event, pKey)"
               @touchstart.passive="(event: MouseEvent | TouchEvent) => startDrag(event, pKey)">
            <div class="badge-xs slide-techs" v-for="(tech, techKey) in project.technologies" :key="`tech-key-${techKey}`">
              <img :src="tech.icon_url" width="12px" :alt="tech.name" />
              <div class="badge-title">{{ tech.name }}</div>
              <div class="badge-version">{{ tech.version }}</div>
            </div>
          </div>
          <div class="text-resume">
            {{ project.description }}
          </div>
        </div>
      </div>
      <div class="not-found-projects" v-else-if="filterProjectName.length > 0 || filterProjectTechSelected.length > 0 || filterProjectTypeSelected.length > 0">
        Nenhum resultado encontrado para os filtros aplicados
        <div v-if="filterProjectName.length > 0" class="item-not-found">
          NOME DO PROJETO: {{ filterProjectName }}
        </div>
        <div v-if="filterProjectTechSelected.length > 0" class="item-not-found">
          TECNOLOGIAS: {{ filterProjectTechSelected.join(", ") }}
        </div>
        <div v-if="filterProjectTypeSelected.length > 0" class="item-not-found">
          TAGS: {{ filterProjectTypeSelected.join(", ") }}
        </div>
      </div>
      <div class="not-found-projects" v-else>
        Nenhum projeto encontrado...
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/projects" as *;
</style>