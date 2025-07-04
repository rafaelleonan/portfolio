<script setup lang="ts">
import { useHead } from '#imports'
import {reactive, onMounted} from "vue";
import {MockTechnologies} from "~/data/mock-homepage";
import {MockCertificates} from "~/data/mock-certificates";
import type {BadgeTech} from "~/interfaces/homepage";
import {useRouter} from "vue-router";
import {useSeo} from "~/composables/useSeo";

const stackCurrent = reactive<BadgeTech[]>([])
const router = useRouter()

onMounted(() => {
  for (const tech of MockTechnologies) {
    for (const badge of tech.badges) {
      if (badge.current) {
        stackCurrent.push(badge)
      }
    }
  }
})

useSeo('Portfólio de Desenvolvedor', 'Portfólio de Rafael Leonan desenvolvedor fullstack.')

</script>

<template>
  <div class="w-100 d-flex d-flex--column d-flex--justify-center overflow--hidden">
    <section class="section ptb-5">
      <div class="about-me">
        <span class="title-about-me"> Rafael Leonan </span>
        <span class="subtitle-about-me"> DESENVOLVEDOR FULL STACK </span>
        <div class="text-about-me mt-2">
          Sou desenvolvedor full stack com experiência em desenvolvimento de aplicações back-end: <b class="text--weight-700">APIs RESTful</b>,
          <b class="text--weight-700">serviços agendados (Cron Service)</b>, <b class="text--weight-700">Webhooks</b> e serviços de mensageria <b class="text--weight-700">Kafka</b> e <b class="text--weight-700">AWS SQS</b>, aplicações frond-end: mobile, web e desktop. Tenho
          conhecimento em armazenamento e leitura de dados com AWS S3, Firebase Firestore, além de banco de dados relacionais
          como <b class="text--weight-700">MySQL</b> e <b class="text--weight-700">PostgreSQL</b>. Possuo experiência com <b class="text--weight-700">Firebase Authentication</b> e <b class="text--weight-700">Storage</b> em projetos pessoais.
        </div>
      </div>
    </section>
    <section class="section ptb-5 bg-solid-blue-1">
      <div class="hard-skills">
        <div class="d-flex d-flex--justify-between">
          <span class="title-sm">HARD SKILLS</span>
          <a class="d-flex d-flex--align-center d-flex--justify-between d-flex--gap-4px cursor--pointer" @click="router.push('/about')">
            <span class="text--uppercase text--size-12px">Ver todos</span>
            <span class="material-icons text--size-16px">open_in_new</span>
          </a>
        </div>
        <div class="list-hs">
          <div class="item-hs" v-for="(line, lineKey) in stackCurrent"
               :key="`line-${lineKey}`">
            <img :src="line.src" :alt="line.title"/>
            <div class="text-hs">
              <span class="title-hs">{{ line.title }}</span> <br/>
              <span class="subtitle-hs">
              <span v-for="star in 5" :key="`star-${star}`">
                <span class="material-icons" v-if="line.proficiency_level && star <= line.proficiency_level">star</span>
                <span class="material-icons" v-else>star_outline</span>
              </span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section ptb-5">
      <div class="certifications">
        <div class="d-flex d-flex--justify-between">
          <span class="title-sm">CERTIFICADOS</span>
          <a class="d-flex d-flex--align-center d-flex--justify-between d-flex--gap-4px cursor--pointer" @click="router.push('/certifications')">
            <span class="text--uppercase text--size-12px">Ver todos</span>
            <span class="material-icons text--size-16px">open_in_new</span>
          </a>
        </div>
        <div class="list-certificates">
          <div v-for="(cert, certKey) in MockCertificates"
               class="item-certificate"
               :key="`certificate-key-${certKey}`">
            <img :src="cert.image" :alt="cert.title"/>
            <div class="footer-certificate">
              <span class="title-certificate">{{ cert.title }}</span><br/>
              <b class="subtitle-certificate">{{ cert.issuer_date }}</b>
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