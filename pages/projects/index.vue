<script lang="ts" setup>
import { useHead } from '#imports';
import { useRouter } from 'vue-router';
import { MockProjects } from "~/data/mock-projects";
import type {Project} from "~/interfaces/projects";

useHead({
  title: 'Projetos',
});

const router = useRouter();

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

</script>

<template>
  <div class="page">
    <section class="section-default">
      <span class="title-section">MEUS PROJETOS</span>
      <div class="card-project"
           v-for="(project, pKey) in MockProjects"
           :key="`key_project_${pKey}`"
            @click="goToProject(project.id)">
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
                <img :src="slide.src" :alt="slide.alt" />
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
          <div class="text-resume">
            {{ project.description }}
          </div>
        </div>
      </div>
      <div class="text-more-projects-after">
        Em breve mais projetos serão adicionados...
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style/projects";
</style>