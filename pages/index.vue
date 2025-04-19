<script setup lang="ts">
import { useHead } from '#imports'
import {reactive, onMounted} from "vue";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import type {BadgeTech} from "~/interfaces/homepage";

const stackCurrent = reactive<BadgeTech[]>([])

onMounted(() => {
  for (const tech of MockTechnologies) {
    for (const badge of tech.badges) {
      if (badge.current) {
        stackCurrent.push(badge)
      }
    }
  }
})

useHead({
  title: 'Portfólio',
});

</script>

<template>
  <div class="page">
    <section class="section-default">
      <span class="title-section">SOBRE MIM</span>
      <div class="app-card">
        <div class="card-body">
           <span class="text-spacing-1">
             Sou desenvolvedor full stack com experiência em desenvolvimento de aplicações back-end: APIs RESTful,
             serviços agendados (Cron Service), Webhooks e serviços de mensageria Kafka e AWS SQS, aplicações frond-end: mobile, web e desktop. Tenho
             conhecimento em armazenamento e leitura de dados com AWS S3, Firebase Firestore, além de banco de dados relacionais
             como MySQL e PostgreSQL. Possuo experiência com Firebase Authentication e Storage em projetos pessoais.
           </span>
        </div>
      </div>
    </section>
    <section class="section-default app-mt-2">
      <span class="title-section">STACK ATUAL</span>
      <div class="stack">
        <div class="tech-stack" v-for="(stack, sKey) in stackCurrent" :key="`stack_current_${sKey}`">
          <span>{{ stack.title }}</span>
          <img :src="stack.src" :alt="stack.title"/>
        </div>
      </div>
    </section>
    <section class="section-default app-mt-2">
      <span class="title-section">TRAJETÓRIA</span>
      <div class="trajectory">
        <div class="trail"></div>
        <div class="item-trajectory" v-for="(trajectory, tKey) in MockTrajectories" :key="`trajectory-${tKey}`">
          <div class="left-side" :class="{ 'html-side': tKey % 2 != 0 }">
            <span v-if="tKey % 2 === 0">
              {{ trajectory.text }}
            </span>
            <div v-else
                 v-for="(html, hKey) in trajectory.html" :key="`html-${hKey}`"
                 class="resume-year">
              <div class="resume-images" v-if="html.type === 'images'">
                <img v-for="(image, iKey) in html.data"
                     class="resume-image"
                     :key="`image-${iKey}`"
                     :src="image.url"
                     :alt="image.text"
                     width="50px"
                />
              </div>
              <div class="resume-links" v-else-if="html.type === 'links'">
                <div class="links-title">
                  {{ html.text }}
                  <div class="divisor"></div>
                </div>
                <a v-for="(link, lKey) in html.data"
                   :key="`link-${lKey}`"
                   class="resume-link"
                   :href="link.url"
                   target="_blank" rel="noopener noreferrer">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
          <div class="pointer-time" :class="{ 'first-pointer': tKey === 0 }">
            {{ trajectory.year }}
          </div>
          <div class="pointer-end" v-if="tKey === (MockTrajectories.length - 1)">
            ...
          </div>
          <div class="right-side" :class="{ 'html-side': tKey % 2 === 0 }">
            <span v-if="tKey % 2 != 0">
              {{ trajectory.text }}
            </span>
            <div v-else
                 v-for="(html, hKey) in trajectory.html" :key="`html-${hKey}`"
                 class="resume-year">
              <div class="resume-images" v-if="html.type === 'images'">
                <img v-for="(image, iKey) in html.data"
                     :key="`image-${iKey}`"
                     class="resume-image"
                     :src="image.url"
                     :alt="image.text"
                     width="50px"
                />
              </div>
              <div class="resume-links" v-else-if="html.type === 'links'">
                <div class="links-title">
                  {{ html.text }}
                  <div class="divisor"></div>
                </div>
                <a v-for="(link, lKey) in html.data"
                   :key="`link-${lKey}`"
                   class="resume-link"
                   :href="link.url"
                   target="_blank" rel="noopener noreferrer">
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-default app-mt-2">
      <span class="title-section">EXPERIÊNCIA</span>
      <div class="app-flex app-flex-direction-column app-w100">
        <div class="card-experience"
             v-for="(tech, techKey) in MockTechnologies"
             :key="`tech-${techKey}`">
          <span class="title-card-experience"><div class="divisor"></div>{{ tech.title }}<div class="divisor"></div></span>
          <div class="stack">
            <div class="tech-stack all-techs" v-for="(line, lineKey) in tech.badges"
                 :key="`line-${lineKey}`">
              <span>{{ line.title }}</span>
              <img :src="line.src" :alt="line.title"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/homepage" as *;
</style>