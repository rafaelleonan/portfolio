<script setup lang="ts">
import {useHead} from "#imports";
import {MockCertificates} from "~/data/mock-certificates";
import {onMounted, ref, computed, onUnmounted} from "vue";
import type {BadgeCategory} from "~/interfaces/homepage";
import type {Tech} from "~/interfaces/certificates";
import {MockTechnologies} from "~/data/mock-homepage";

const filterCertificateName = ref('')
const filterCertificateTechSelected = ref<string[]>([])
const searchTechnology = ref<string>("")
const filterCertificateTypeSelected = ref<string[]>([])
const searchProjectType = ref<string>("")
const isOpen = ref(false);
const isOpenTwo = ref(false);

const toggleOptionSelectTypeProject = (option: string) => {
  if (!filterCertificateTypeSelected.value.some((o) => o.toUpperCase() === option.toUpperCase())) {
    filterCertificateTypeSelected.value.push(option.toUpperCase());
    searchProjectType.value = ""
  } else {
    filterCertificateTypeSelected.value = filterCertificateTypeSelected.value.filter((opt) => opt.toUpperCase() !== option.toUpperCase());
  }
};

const toggleOptionSelect = (option: string) => {
  if (!filterCertificateTechSelected.value.some((o) => o.toUpperCase() === option.toUpperCase())) {
    filterCertificateTechSelected.value.push(option.toUpperCase());
    searchTechnology.value = ""
  } else {
    filterCertificateTechSelected.value = filterCertificateTechSelected.value.filter((opt) => opt.toUpperCase() !== option.toUpperCase());
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

const placeholderSelectTypeProject = (): string => {
  if (filterCertificateTypeSelected.value.length === 0) {
    return 'TAGS'
  } else if (filterCertificateTypeSelected.value.length > 0 && filterCertificateTypeSelected.value.length < 3) {
    return filterCertificateTypeSelected.value.join(", ")
  } else {
    return `${filterCertificateTypeSelected.value.length} tags selecionadas...`
  }
}

const clearFilterProjectType = () => {
  filterCertificateTypeSelected.value = []
  searchProjectType.value = ""
}

const clearFilterTechnologies = () => {
  filterCertificateTechSelected.value = []
  searchTechnology.value = ""
}

const placeholderSelectTechnology = (): string => {
  if (filterCertificateTechSelected.value.length === 0) {
    return 'LINGUAGEM/FRAMEWORK'
  } else if (filterCertificateTechSelected.value.length > 0 && filterCertificateTechSelected.value.length < 3) {
    return filterCertificateTechSelected.value.join(", ")
  } else {
    return `${filterCertificateTechSelected.value.length} techs selecionadas...`
  }
}

const listProjectTypesSearch = computed((): string[] => {
  let value = searchProjectType.value
  let listProjectTypes = ["Frontend", "Mobile", "iOS", "Android", "Lógica", "Terminal", "DevOps", "POO", "Programação Funcional", "Desktop", "Web", "Backend", "API RESTful", "Fullstack", "Design"]
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

const computedCertifications = computed(() => {
  let certificates = MockCertificates

  if (filterCertificateTypeSelected.value.length > 0) {
    certificates = certificates.filter((cert) => cert.tags.some((type: string) => filterCertificateTypeSelected.value.includes(type.toUpperCase())))
  }

  if (filterCertificateTechSelected.value.length > 0) {
    certificates = certificates.filter((cert) => cert.techs.some((tech: Tech) => filterCertificateTechSelected.value.includes(tech.name.toUpperCase())))
  }

  if (filterCertificateName.value.trim().length > 0) {
    certificates = certificates.filter((cert) => cert.title.toUpperCase().includes(filterCertificateName.value.toUpperCase()))
  }

  return certificates
})

const toggleSelect = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) isOpenTwo.value = false
}

const toggleSelectTwo = () => {
  isOpenTwo.value = !isOpenTwo.value
  if (isOpenTwo.value) isOpen.value = false
}

onMounted(() => {
  document.addEventListener("click", closeDropdown);
  document.addEventListener("click", closeDropdownTwo);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
  document.removeEventListener("click", closeDropdownTwo);
});

useHead({
  title: 'Certificações',
  meta: [
    { name: 'description', content: 'Certificados de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc.' },
    { property: 'og:title', content: 'Certificações - Rafael Leonan' },
    { property: 'og:description', content: 'Certificados de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rafaelleonan.com/certifications' },
    { property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png' },
    { property: 'og:site_name', content: 'Rafael Leonan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Certificações - Rafael Leonan' },
    { name: 'twitter:description', content: 'Certificados de Rafael Leonan com tecnologias como Vue, Nuxt, Flutter, Rails, Python, Go e etc.' },
    { name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png' }
  ]
});

</script>

<template>
  <div class="app-page">
    <section class="section-default">
      <span class="title-section">
        Meus certificados
      </span>
      <div class="form-filters">
        <div class="form-filter col-4">
          <input type="text" class="form-input" v-model="filterCertificateName" placeholder="CERTIFICADO"/>
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
                    v-if="(filterCertificateTypeSelected.length > 0 || searchProjectType.length > 0) && !isOpen"
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
                       'selected': filterCertificateTypeSelected.some((o) => o.toUpperCase() === option.toUpperCase()),
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
                    v-if="(filterCertificateTechSelected.length > 0 || searchTechnology.length > 0) && !isOpenTwo"
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
                       'selected': filterCertificateTechSelected.some((o) => o.toUpperCase() === tech.title.toUpperCase()),
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
      <section class="list-certs app-mt-2" v-if="computedCertifications.length > 0">
        <a v-for="(cert, key) in computedCertifications" :key="`cert-${key}`"
           :href="cert.link"
           target="_blank" rel="noopener noreferrer"
           class="card-link">
          <img :src="cert.image" :alt="cert.title">
          <div class="card-l-text">
            <span class="card-l-title">{{ cert.title }}</span><br/>
            <div class="tags">
              <span class="tag"
                    v-for="(tag, tKey) in cert.techs"
                    :class="tag.tag"
                    :key="`tag-${tKey}`">
                {{ tag.name }}
              </span>
            </div>
            <span class="card-l-subtitle">{{ cert.description }}</span>
          </div>
        </a>
      </section>
      <div class="not-found-projects" v-else-if="filterCertificateName.length > 0 || filterCertificateTechSelected.length > 0 || filterCertificateTypeSelected.length > 0">
        Nenhum resultado encontrado para os filtros aplicados
        <div v-if="filterCertificateName.length > 0" class="item-not-found">
          CERTIFICADO: {{ filterCertificateName }}
        </div>
        <div v-if="filterCertificateTechSelected.length > 0" class="item-not-found">
          TECNOLOGIAS: {{ filterCertificateTechSelected.join(", ") }}
        </div>
        <div v-if="filterCertificateTypeSelected.length > 0" class="item-not-found">
          TAGS: {{ filterCertificateTypeSelected.join(", ") }}
        </div>
      </div>
      <div class="not-found-projects" v-else>
        Nenhum certificado encontrado...
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/certifications" as *;
</style>