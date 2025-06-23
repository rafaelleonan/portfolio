<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useHead } from '#imports';
import type {BadgeCategory} from "~/interfaces/homepage";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'
import { useNotifications } from '@/composables/useNotifications'
import {useOptionsImage} from "~/composables/useOptionsImage";

const useOptImage = useOptionsImage()
const formacoes = reactive([
  {
    "title": "TÉCNICO EM INFORMÁTICA",
    "duration": "2017 - 2019",
    "issuer": "EEEP DONA CREUSA DO CARMO ROCHA",
    "image": "/images/TI-DIPLOMA.jpg"
  },
  {
    "title": "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    "duration": "2020.2 - 2024.2",
    "issuer": "UNIFAMETRO",
    "image": "/images/ADS-DIPLOMA-1.jpg"
  }
])

const stackCurrent = ref<BadgeCategory[]>(MockTechnologies.map(category => ({
      ...category,
      badges: category.badges.filter(badge => badge.current === true)
    }))
    .filter(category => category.badges.length > 0))

const { addNotification } = useNotifications()

const copyText = (message: string, label: string) => {
  const tempInput = document.createElement("textarea");
  tempInput.value = message;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  addNotification(`${label} copiado para área de transferência!`, 'success', 8000)
}

const callPhone = () => window.open('tel:85984491127', '_blank');

const sendWhatsapp = () => window.open('https://wa.me/5585984491127', 'blank')

const sendEmail = () => window.open('mailto:faelleonan@gmail.com', 'blank')

useHead({
  title: 'Sobre mim',
  meta: [
    { name: 'description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack.' },
    { property: 'og:title', content: 'Portfólio - Rafael Leonan' },
    { property: 'og:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rafaelleonan.com/about' },
    { property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png' },
    { property: 'og:site_name', content: 'Rafael Leonan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Portfólio de Desenvolvedor - Rafael Leonan.' },
    { name: 'twitter:description', content: 'Portfólio de Rafael Leonan desenvolvedor fullstack' },
    { name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png' }
  ]
});

</script>

<template>
  <div class="w-100 d-flex d-flex--column d-flex--justify-center overflow--hidden">
    <section class="section">
      <div class="about-me">
        <div class="header-about-me">
          <img src="/images/1629036542049_2.jpg" alt="Foto perfil" />
          <div class="d-flex d-flex--column d-flex--justify-center d-flex--gap-8px">
            <span class="title-about-me"> Rafael Leonan </span>
            <span class="subtitle-about-me"> DESENVOLVEDOR FULL STACK </span>
          </div>
        </div>
        <div class="contacts">
          <a class="item-contact" tabindex="0">
            <span class="material-icons">call</span>
            <span>(85) 9 8449-1127</span>
            <ul class="item-options">
              <li class="item-option" @click="copyText('(85) 9 8449-1127', 'Celular')">
                <span class="material-icons">content_copy</span>
                COPIAR
              </li>
              <li class="item-option" @click="callPhone">
                <span class="material-icons">phone_in_talk</span>
                LIGAR
              </li>
              <li class="item-option" @click="sendWhatsapp">
                <span class="material-icons">sms</span>
                MSG. WHATSAPP
              </li>
            </ul>
          </a>
          <a class="item-contact" tabindex="0">
            <span class="material-icons">alternate_email</span>
            <span>faelleonan@gmail.com</span>
            <ul class="item-options">
              <li class="item-option" @click="copyText('faelleonan@gmail.com', 'Email')">
                <span class="material-icons">content_copy</span>
                COPIAR
              </li>
              <li class="item-option" @click="sendEmail">
                <span class="material-icons">send</span>
                MENSAGEM
              </li>
            </ul>
          </a>
          <a class="item-contact link" href="https://www.linkedin.com/in/rafael-leonan" rel="noopener noreferrer" target="_blank">
            <span>LinkedIn</span>
            <span class="material-icons">open_in_new</span>
          </a>
          <a class="item-contact link" href="https://github.com/rafaelleonan" rel="noopener noreferrer" target="_blank">
            <span>Github</span>
            <span class="material-icons">open_in_new</span>
          </a>
          <a class="item-contact link" href="https://hub.docker.com/u/rafaelleonan" rel="noopener noreferrer" target="_blank">
            <span>Dockerhub</span>
            <span class="material-icons">open_in_new</span>
          </a>
        </div>
        <div class="text-about-me mt-2">
          Sou desenvolvedor full stack com experiência em desenvolvimento de aplicações back-end: <b class="text--weight-700">APIs RESTful</b>,
          <b class="text--weight-700">serviços agendados (Cron Service)</b>, <b class="text--weight-700">Webhooks</b> e serviços de mensageria <b class="text--weight-700">Kafka</b> e <b class="text--weight-700">AWS SQS</b>, aplicações frond-end: mobile, web e desktop. Tenho
          conhecimento em armazenamento e leitura de dados com AWS S3, Firebase Firestore, além de banco de dados relacionais
          como <b class="text--weight-700">MySQL</b> e <b class="text--weight-700">PostgreSQL</b>. Possuo experiência com <b class="text--weight-700">Firebase Authentication</b> e <b class="text--weight-700">Storage</b> em projetos pessoais.
        </div>
      </div>
    </section>
    <section class="section bg-solid-blue-1">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-formacao" class="accordion__input" />
          <label for="accordion-formacao" class="accordion__label">
            <span class="title-sm">
              FORMAÇÃO
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <div class="formacoes">
              <div class="formacao" v-for="(form, i) in formacoes" :key="`formacao-${i}`">
                <div class="formacao-pdf">
                  <img :src="form.image" :alt="form.title" width="100%"/>
                  <i class="material-icons zoom-image-click" @click="useOptImage.openModal(form.image, form.title)">zoom_out_map</i>
                </div>
                <div class="formacao-info">
                  <span class="formacao-title">{{ form.title }}</span>
                  <span class="formacao-issuer">{{ form.issuer }}</span>
                  <span class="formacao-duration">{{ form.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-stack-current" class="accordion__input" />
          <label for="accordion-stack-current" class="accordion__label">
            <span class="title-sm">
              STACK ATUAL
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <div class="hard-skills">
              <div class="stack-current" v-for="(stack, stackKey) in stackCurrent" :key="`stack-${stackKey}`">
                <span class="stack-title">{{ stack.title }}</span><br/>
                <div class="list-hs">
                  <div class="item-hs" v-for="(badge, badgeKey) in stack.badges"
                       :key="`badge-${badgeKey}`">
                    <img :src="badge.src" :alt="badge.title"/>
                    <div class="text-hs">
                      <span class="title-hs">{{ badge.title }}</span> <br/>
                      <span class="subtitle-hs">
              <span v-for="star in 5" :key="`star-${star}`">
                <span class="material-icons" v-if="badge.proficiency_level && star <= badge.proficiency_level">star</span>
                <span class="material-icons" v-else>star_outline</span>
              </span>
            </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-solid-blue-1">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-techs" class="accordion__input" />
          <label for="accordion-techs" class="accordion__label">
            <span class="title-sm">
              TECNOLOGIAS
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <div class="hard-skills">
              <div class="stack-current" v-for="(stack, stackKey) in MockTechnologies" :key="`stack-${stackKey}`">
                <span class="stack-title">{{ stack.title }}</span><br/>
                <div class="list-hs">
                  <div class="item-hs" v-for="(badge, badgeKey) in stack.badges"
                       :key="`badge-${badgeKey}`">
                    <img :src="badge.src" :alt="badge.title"/>
                    <div class="text-hs">
                      <span class="title-hs">{{ badge.title }}</span> <br/>
                      <div class="subtitle-hs">
                        <span v-for="star in 5" :key="`star-${star}`">
                          <span class="material-icons" v-if="badge.proficiency_level && star <= badge.proficiency_level">star</span>
                          <span class="material-icons" v-else>star_outline</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-trajectory" class="accordion__input" />
          <label for="accordion-trajectory" class="accordion__label">
            <span class="title-sm">
              TRAJETÓRIA
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <div class="trajectory">
              <div class="item-trajectory" v-for="(trajectory, tKey) in MockTrajectories" :key="`trajectory-${tKey}`">
                <div class="year-trajectory">
                  {{ trajectory.year }}
                </div>
                <div class="text-trajectory">
                  {{ trajectory.text }}
                </div>
                <div class="resume-trajectory">
                  <div v-for="(html, hKey) in trajectory.html" :key="`html-${hKey}`" class="resume-trajectory-item">
                    <div class="resume-images" v-if="html.type === 'images'">
                      <img v-for="(image, iKey) in html.data"
                           class="resume-image"
                           :key="`image-${iKey}`"
                           :src="image.url"
                           :alt="image.text"
                      />
                    </div>
                    <div class="resume-links" v-else-if="html.type === 'links'">
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
              <div class="trail"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/about" as *;
</style>