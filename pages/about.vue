<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { useHead } from '#imports';
import type {BadgeCategory} from "~/interfaces/homepage";
import {MockTechnologies, MockTrajectories} from "~/data/mock-homepage";
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'
import { useNotifications } from '@/composables/useNotifications'
import {useOptionsImage} from "~/composables/useOptionsImage";
import Modal from "~/components/Modal.vue";
import type {SoftSkill, SoftSkillFeedback} from "~/interfaces/about";
const { createDocument, getCollection, auth } = useFirebase()

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

const loadingSoftSkills = ref(false)
const sendingForm = ref(false)
const sendingFormSoftSkill = ref(false)
const openModal = ref(false)
const modalChoiceView = ref<"choice" | "form_feedback" | "view_feedbacks">("choice")
const openModalSoftSkills = ref(false)
const formName = ref("")
const formCargo = ref("")
const formContact = ref("")
const formDescription = ref("")
const hoverRating = ref(0)
const selectedRating = ref(0)
const softSkill = ref<SoftSkill>()
const softSkills = ref<SoftSkill[]>([])
const softSkillFeedbacks = ref<SoftSkillFeedback[]>([])
const feedbacksBySoftSkill = ref<SoftSkillFeedback[]>([])

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

const sendMessage = async () => {
  if (formName.value === null || formName.value.trim().length === 0) {
    addNotification("Informe o campo de nome!", 'error', 8000)
    return
  }

  if (formContact.value === null || formContact.value.trim().length === 0) {
    addNotification("Informe o campo de contato!", 'error', 8000)
    return
  }

  if (formDescription.value === null || formDescription.value.trim().length === 0) {
    addNotification("Informe o campo de motivo!", 'error', 8000)
    return
  }

  let userIP = '';
  let dataIP = '';
  sendingForm.value = true

  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    userIP = data.ip;
    dataIP = data;
  } catch (ipError) {
    userIP = 'Não disponível';
    dataIP = 'Não disponível';
  }

  const userAgent = navigator.userAgent;
  let browser = '';
  let so = '';

  if (userAgent.includes('Chrome')) {
    browser = 'Google Chrome'
  } else if (userAgent.includes('Firefox')) {
    browser = 'Mozilla Firefox'
  } else if (userAgent.includes('Safari')) {
    browser = 'Apple Safari'
  } else if (userAgent.includes('Edge')) {
    browser = 'Microsoft Edge'
  } else {
    browser = userAgent
  }

  if (userAgent.includes('Windows')) {
    so = 'Windows'
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
    so = 'MacOS'
  } else if (userAgent.includes('Linux')) {
    so = 'Linux'
  } else if (userAgent.includes('Android')) {
    so = 'Android'
  } else if (userAgent.includes('iOS')) {
    so = 'iOS'
  } else {
    so = userAgent
  }

  const deviceType = (window.matchMedia("(pointer:coarse)").matches || window.matchMedia("(hover:none)").matches) ? "Mobile" : "Desktop"

  try {
    await createDocument('messages_contact', {
      name: formName.value,
      contact: formContact.value,
      message: formDescription.value,
      sendingIn: new Date(),
      browser: browser,
      so: so,
      userAgent: userAgent,
      deviceType: deviceType,
      language: navigator.language,
      dataIP: dataIP,
      userIP: userIP,
      uid: auth.currentUser?.uid || null,
    });

    addNotification("Mensagem recebida com sucesso!", 'success', 8000);
    toggleModalContact();
  } catch (error) {
    addNotification("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.", 'error', 10000);
  } finally {
    sendingForm.value = false;
  }
}

const clearForm = () => {
  formName.value = ""
  formCargo.value = ""
  formContact.value = ""
  formDescription.value = ""
  selectedRating.value = 0
}

const toggleModalContact = () => {
  openModal.value = !openModal.value
  clearForm()
}

const trackButtonClick = (event: any, accordion: string) => {
  useTrackEvent(`view_accordion_${accordion}`, {
    event_label: `Visualizar da seção: ${accordion}`,
    event_value: event.target.checked
  })
};

const viewDetails = (choice: "choice" | "form_feedback" | "view_feedbacks" = "choice") => {
  clearForm()
  modalChoiceView.value = choice
}

const openModalSoftSkillsAndFeedbacks = (soft_skill: SoftSkill) => {
  softSkill.value = soft_skill
  openModalSoftSkills.value = true
  feedbacksBySoftSkill.value = []
  feedbacksBySoftSkill.value = softSkillFeedbacks.value?.filter((feed) => feed.soft_skill_id === soft_skill.id)
  modalChoiceView.value = "choice"
  clearForm()
}

const closeModalSoftSkillsAndFeedbacks = () => {
  openModalSoftSkills.value = false
  modalChoiceView.value = "choice"
  clearForm()
}

const getStarValue = (event: any, starIndex: number) => {
  const { offsetX, target } = event
  const width = target.offsetWidth
  const isHalf = offsetX < width / 2
  return isHalf ? starIndex - 0.5 : starIndex
}

const handleMouseMove = (event: any, starIndex: number) => {
  hoverRating.value = getStarValue(event, starIndex)
}

const getStarIcon = (starIndex: number) => {
  const value = hoverRating.value || selectedRating.value
  if (starIndex <= Math.floor(value)) {
    return 'star'
  } else if (starIndex - 0.5 === value) {
    return 'star_half'
  } else {
    return 'star_outline'
  }
}

const getSoftSkills = async () => {
  const snapshot = await getCollection("/soft_skills");
  softSkills.value = snapshot.docs.map(doc => ({
    id: doc.id,
    label: doc.data()["label"],
    description: doc.data()["description"],
    icon: doc.data()["icon"],
    level: doc.data()["level"],
    // ...doc.data(),
  }))
}

const getSoftSkillFeedbacks = async () => {
  const snapshot = await getCollection("/soft_skill_feedback");
  softSkillFeedbacks.value = snapshot.docs.map(doc => ({
    id: doc.id,
    soft_skill_id: doc.data()["softSkillId"],
    name: doc.data()["name"],
    cargo: doc.data()["cargo"],
    feedback : doc.data()["feedback"],
    levelSelected: doc.data()["levelSelected"],
  }))
}

const sendFeedbackSoftSkill = async () => {

  if (formName.value === null || formName.value.trim().length === 0) {
    addNotification("Informe o campo de nome!", 'error', 8000)
    return
  }

  if (formContact.value === null || formContact.value.trim().length === 0) {
    addNotification("Informe o campo de contato!", 'error', 8000)
    return
  }

  let userIP = '';
  let dataIP = '';
  sendingFormSoftSkill.value = true

  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    userIP = data.ip;
    dataIP = data;
  } catch (ipError) {
    userIP = 'Não disponível';
    dataIP = 'Não disponível';
  }

  const userAgent = navigator.userAgent;
  let browser = '';
  let so = '';

  if (userAgent.includes('Chrome')) {
    browser = 'Google Chrome'
  } else if (userAgent.includes('Firefox')) {
    browser = 'Mozilla Firefox'
  } else if (userAgent.includes('Safari')) {
    browser = 'Apple Safari'
  } else if (userAgent.includes('Edge')) {
    browser = 'Microsoft Edge'
  } else {
    browser = userAgent
  }

  if (userAgent.includes('Windows')) {
    so = 'Windows'
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
    so = 'MacOS'
  } else if (userAgent.includes('Linux')) {
    so = 'Linux'
  } else if (userAgent.includes('Android')) {
    so = 'Android'
  } else if (userAgent.includes('iOS')) {
    so = 'iOS'
  } else {
    so = userAgent
  }

  const deviceType = (window.matchMedia("(pointer:coarse)").matches || window.matchMedia("(hover:none)").matches) ? "Mobile" : "Desktop"

  try {
    await createDocument('soft_skill_feedback', {
      name: formName.value,
      cargo: formCargo.value,
      contact: formContact.value,
      feedback: formDescription.value,
      levelSelected: selectedRating.value,
      labelFeedback: softSkill.value?.label,
      softSkillId: softSkill.value?.id,
      sendingIn: new Date(),
      browser: browser,
      so: so,
      userAgent: userAgent,
      deviceType: deviceType,
      language: navigator.language,
      dataIP: dataIP,
      userIP: userIP,
      uid: auth.currentUser?.uid || null,
    });

    await getSoftSkillFeedbacks()

    addNotification("Feedback recebido com sucesso!", 'success', 8000);
    closeModalSoftSkillsAndFeedbacks()
  } catch (error) {
    addNotification("Ocorreu um erro ao enviar seu feedback. Por favor, tente novamente.", 'error', 10000);
  } finally {
    sendingFormSoftSkill.value = false;
  }
}

onMounted(async () => {
  loadingSoftSkills.value = true
  try {
    await getSoftSkills()
    await getSoftSkillFeedbacks()
  } finally {
    loadingSoftSkills.value = false
  }
})

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
          <input type="checkbox" id="accordion-formacao" class="accordion__input" @change="trackButtonClick($event, 'Formação')" />
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
          <input type="checkbox" id="accordion-stack-current" class="accordion__input" @change="trackButtonClick($event, 'Hard Skills')" />
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
          <input type="checkbox" id="accordion-soft-skills" class="accordion__input" @change="trackButtonClick($event, 'Soft Skills')" />
          <label for="accordion-soft-skills" class="accordion__label">
            <span class="title-sm">
              SOFT SKILLS
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <Modal
              :show="openModalSoftSkills"
              :no-close-modal-click-backdrop="true"
              size="sm"
              :hidden-footer="true"
              @update:show="(val) => openModalSoftSkills = val"
            >
              <template #header>
                <div class="d-flex d-flex--align-center d-flex--justify-start d-flex--gap-10px w-100">
                  <div class="material-icons text--size-30px">{{ softSkill?.icon }}</div>
                  <div class="text--bolder text---size-16px overflow--hidden text--ellipsis text--nowrap">
                    {{ softSkill?.label }}<br/>
                    <div v-if="softSkill" class="overflow--hidden text--ellipsis text--nowrap">
                    <span v-for="star in 5" :key="`star-${star}`" class="material-icons text--size-12px">
                        {{
                        star <= Math.floor(softSkill.level)
                            ? 'star'
                            : star === Math.ceil(softSkill.level) && softSkill.level % 1 >= 0.5
                                ? 'star_half'
                                : 'star_outline'
                      }}
                      </span>
                    </div>
                  </div>
                </div>
              </template>
              <template #default>
                <div v-if="modalChoiceView === 'form_feedback'">
                  <form class="form-contact" @submit.prevent="sendFeedbackSoftSkill">
                    <div class="avaliar overflow--hidden text--nowrap text--ellipsis" @mouseleave="hoverRating = 0">
                      <span
                        v-for="star in 5"
                        :key="star"
                        class="material-icons"
                        @mousemove="handleMouseMove($event, star)"
                        @click="selectedRating = getStarValue($event, star)"
                      >
                        {{ getStarIcon(star) }}
                      </span>
                    </div>
                    <div class="inputs">
                      <label for="name">
                        <span>NOME</span>
                        <input type="text" name="name" id="name" v-model="formName" required/>
                      </label>
                      <label for="name">
                        <span>CARGO (opcional)</span>
                        <input type="text" name="name" id="name" placeholder="Ex: Project Owner, Tech Lead, Dev..." v-model="formCargo"/>
                      </label>
                      <label for="contact">
                        <span>CONTATO(EMAIL/TELEFONE/LINK)</span>
                        <input type="text" name="contact" id="contact" v-model="formContact" required/>
                      </label>
                      <label for="description">
                        <span>FEEDBACK (opcional)</span>
                        <textarea rows="2" name="description" id="description" v-model="formDescription"/>
                      </label>
                    </div>
                    <div class="actions-form">
                      <button type="button" class="btn btn--sm w-100" :disabled="sendingFormSoftSkill" @click="viewDetails()">
                        VOLTAR
                      </button>
                      <button type="submit" class="btn btn--sm w-100" :disabled="sendingFormSoftSkill">
                        {{ sendingFormSoftSkill ? 'ENVIANDO...' : 'ENVIAR'}}
                      </button>
                    </div>
                  </form>
                </div>
                <div v-else-if="modalChoiceView === 'view_feedbacks'">
                  <i class="text--bolder text--size-12px">"{{ softSkill?.description }}"</i>
                  <div class="feedbacks">
                    <div class="feedback" v-for="(feed, feedIndex) in feedbacksBySoftSkill" :key="`feedback-${feedIndex}`">
                      <div class="header-feedback">
                        <span class="title-feedback">
                          {{ feed.name }}<br/>
                          <i>{{ feed.cargo }}</i>
                        </span>
                        <div class="rating-feedback">
                          <span v-for="star in 5" :key="`star-${star}`" class="material-icons text--size-12px">
                          {{
                            star <= Math.floor(feed.levelSelected)
                                ? 'star'
                                : star === Math.ceil(feed.levelSelected) && feed.levelSelected % 1 >= 0.5
                                    ? 'star_half'
                                    : 'star_outline'
                          }}
                        </span>
                        </div>
                      </div>
                      <div class="description-feedback">
                        "{{ feed.feedback }}"
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn--sm w-100" @click="viewDetails()">
                    VOLTAR
                  </button>
                </div>
                <div v-else>
                  <i class="text--bolder text--size-12px">"{{ softSkill?.description }}"</i>
                  <hr/>
                  <div class="ptb-1">Trabalha ou já trabalhou comigo? Se puder, pode me dar um feedback sobre essa soft skill</div>
                  <div class="d-flex d-flex--justify-between d-flex--align-center d-flex--gap-12px">
                    <button type="button" class="btn btn--sm w-100" @click="viewDetails('form_feedback')">
                      ENVIAR FEEDBACK
                    </button>
                    <button type="button" v-if="feedbacksBySoftSkill?.length > 0" class="btn btn--sm w-100" @click="viewDetails('view_feedbacks')">
                      VER FEEDBACKS
                    </button>
                  </div>
                </div>
              </template>
            </Modal>
            <div class="d-flex w-100 d-flex--align-center d-flex--justify-center" v-if="loadingSoftSkills">
              <span class="text--ellipsis text--nowrap overflow--hidden"> Carregando Soft Skills... </span>
            </div>
            <div class="soft-skills" v-else-if="!loadingSoftSkills && softSkills.length > 0">
              <div class="soft-skill" v-for="(soft, softKey) in softSkills"
                   :key="`soft-skill-${softKey}`" @click="openModalSoftSkillsAndFeedbacks(soft)">
                <div class="header-skill">
                  <span class="material-icons">{{ soft.icon }}</span>
                  <span class="label-skill">{{ soft.label }}</span>
                </div>
                <span class="description-skill">{{ soft.description }}</span>
                <div class="level-skill">
                    <span v-for="star in 5" :key="`star-${star}`" class="material-icons">
                      {{
                        star <= Math.floor(soft.level)
                            ? 'star'
                            : star === Math.ceil(soft.level) && soft.level % 1 >= 0.5
                                ? 'star_half'
                                : 'star_outline'
                      }}
                    </span>
                </div>
              </div>
            </div>
            <div class="d-flex w-100 d-flex--align-center d-flex--justify-center" v-else>
              <span class="text--ellipsis text--nowrap overflow--hidden"> Nenhuma Soft Skills encontrada! </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-techs" class="accordion__input" @change="trackButtonClick($event,'Tecnologias')" />
          <label for="accordion-techs" class="accordion__label">
            <span class="title-sm">
              HARD SKILLS
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
    <section class="section bg-solid-blue-1">
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-trajectory" class="accordion__input" @change="trackButtonClick($event,'Trajetória')" />
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
    <section class="section">
      <Modal
        :show="openModal"
        :no-close-modal-click-backdrop="sendingForm"
        title="Entrar em contato"
        size="sm"
        :hidden-footer="true"
        @update:show="(val) => openModal = val"
      >
        <template #default>
          <form class="form-contact" @submit.prevent="sendMessage">
            <div class="inputs">
              <label for="name">
                <span>NOME</span>
                <input type="text" name="name" id="name" v-model="formName" required/>
              </label>
              <label for="contact">
                <span>CONTATO(EMAIL/TELEFONE/LINK)</span>
                <input type="text" name="contact" id="contact" v-model="formContact" required/>
              </label>
              <label for="description">
                <span>MOTIVO DO CONTATO</span>
                <textarea rows="5" name="description" id="description" v-model="formDescription" required/>
              </label>
            </div>
            <div class="actions-form">
              <button type="button" class="btn btn--sm w-100" :disabled="sendingForm" @click="toggleModalContact">
                CANCELAR
              </button>
              <button type="submit" class="btn btn--sm w-100" :disabled="sendingForm">
                {{ sendingForm ? 'ENVIANDO...' : 'ENVIAR'}}
              </button>
            </div>
          </form>
        </template>
      </Modal>
      <div class="accordion">
        <div class="accordion__item">
          <input type="checkbox" id="accordion-send-message" class="accordion__input" @change="trackButtonClick($event,'Entrar em contato/freelancer')" />
          <label for="accordion-send-message" class="accordion__label">
            <span class="title-sm">
              ENTRAR EM CONTATO/FREELANCER
            </span>

            <span class="material-icons title-sm">
              keyboard_arrow_down
            </span>
          </label>
          <div class="accordion__content">
            <div class="contact-freelancer">
              <img src="/gifs/glootie.gif" @click="toggleModalContact"/>
              <div class="text-contact">
                <p>Tem uma proposta de projeto, trabalho freelancer ou deseja iniciar uma colaboração? Fico à disposição para conversar!</p>
                <button class="btn btn--lg w-100" @click="toggleModalContact">Entrar em contato</button>
              </div>
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