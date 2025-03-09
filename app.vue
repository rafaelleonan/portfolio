<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
import SplashScreen from "~/components/SplashScreen.vue";
import {useCountLoading, useLoading, useInfoLoading} from "~/composables/useLoading";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import {MockProjects} from "~/data/mock-projects";
import {MockCertificates} from "~/data/mock-certificates";
import {onMounted} from "vue";

const loading = useLoading();
const counting = useCountLoading();
const info = useInfoLoading();

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
            img.src = data.src;
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
        if (component.type === "carousel_image_with_text") {
          for (const item of component.content.items) {
            promises.push(new Promise(resolve => {
              counting.value++
              info.value.push({"local": "Project -> Sections -> Component", "value": item.title})
              const img = new Image();
              img.src = item.image_url;
              img.onload = resolve;
              img.onerror = resolve;
            }))
          }
        } else if (component.type === "code_or_instructions") {
          for (const instruction of component.content) {
            if (instruction.type === "image") {
              promises.push(new Promise(resolve => {
                counting.value++
                info.value.push({"local": "Project -> Sections -> Component", "value": instruction.title})
                const img = new Image();
                img.src = instruction.content;
                img.onload = resolve;
                img.onerror = resolve;
              }))
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

onMounted(async () => {
  counting.value = 0
  loading.value = true;
  info.value = []
  await preloadTechnologiesImages();
  await preloadTrajectoriesImages();
  await preloadProjectsImages();
  await preloadCertificatesImages();
  setTimeout(() => {
    loading.value = false;
    counting.value = 0
    info.value = []
  }, 800)
});
</script>

<template>
  <NuxtLayout>
    <SplashScreen v-if="loading"/>
    <main v-else style="overflow-x: hidden">
      <AppHeader/>
      <div class="content">
        <NuxtPage />
      </div>
      <AppFooter/>
    </main>
  </NuxtLayout>
</template>

<style lang="sass" src="assets/style/app.scss"></style>