<template>
  <Transition name="fade">
    <div v-if="visualizeConsent" class="cookie-consent">
      <div class="options-consent" v-if="showSettings">
        <h3>Preferências de Cookies</h3>
        <p>
          Para mais informações dos dados utilizados, acesse a política de privacidade:<br/>
          <a href="/docs/politica-de-privacidade.pdf" rel="noopener noreferrer" target="_blank">Política de Privacidade</a>.
        </p>
        <form @submit.prevent="handleAcceptOptions">
          <label class="switch-checkbox">
            <input type="checkbox" disabled checked />
            <span class="slider">
              <span class="check-ball"></span>
            </span>
            Cookies Essenciais (Cookies de tema)
          </label>
          <label class="switch-checkbox">
            <input type="checkbox" v-model="analytics" />
            <span class="slider">
              <span class="check-ball"></span>
            </span>
            Cookies de Análise (Google Analytics)
          </label>
          <label class="switch-checkbox">
            <input type="checkbox" v-model="feedback" />
            <span class="slider">
              <span class="check-ball"></span>
            </span>
            Envio de feedbacks e formulários
          </label>

          <div class="d-flex d-flex--align-center d-flex--justify-center d-flex--gap-12px w-100">
            <button type="submit">Salvar Preferências</button>
            <button @click="showSettings = false">Voltar</button>
          </div>
        </form>
      </div>
      <div class="d-flex d-flex--column d-flex--align-center d-flex--justify-center d-flex--gap-20px" v-else>
        <p>
          Este site utiliza cookies e coleta dados para melhorar sua experiência.<br/>
          <a href="/docs/politica-de-privacidade.pdf" rel="noopener noreferrer" target="_blank">Política de Privacidade</a>.
        </p>
        <div class="button-actions">
          <button @click="handleAcceptAll">Aceitar e Prosseguir</button>
          <button @click="showConfigureCookies">Configurar</button>
          <button @click="handleDecline">Recusar todos</button>
          <button @click="onlyClose" v-if="consent.analytics || consent.feedback">Fechar</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useConsent } from '~/composables/useConsent'
import { ref } from 'vue'
import {useGtag, useNotifications} from '#imports'

const showSettings = ref(false)
const { consent, visualizeConsent, setConsent, resetConsent, toggleConsent } = useConsent()
const analytics = ref(consent.value.analytics)
const feedback = ref(consent.value.feedback)

const { gtag } = useGtag()
const { addNotification } = useNotifications()

const handleAcceptAll = () => {
  setConsent({
    essential: true,
    analytics: analytics.value,
    feedback: feedback.value
  })
  gtag('consent', 'update', {
    analytics_storage: 'granted'
  })
  showSettings.value = false
  addNotification("Preferências atualizadas com sucesso!", 'success', 8000)
}

const handleAcceptOptions = () => {
  setConsent({
    essential: true,
    analytics: analytics.value,
    feedback: feedback.value
  })
  if (analytics.value) {
    gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
  } else {
    gtag('consent', 'update', {
      analytics_storage: 'denied'
    })
  }
  showSettings.value = false
  addNotification("Preferências atualizadas com sucesso!", 'success', 8000)
}

const handleDecline = () => {
  resetConsent()
  analytics.value = false
  feedback.value = false
  addNotification("Preferências atualizadas com sucesso! Cookies bloqueados.", 'success', 8000)
}

const onlyClose = () => toggleConsent(false)

const showConfigureCookies = () => {
  showSettings.value = true
  analytics.value = consent.value.analytics
  feedback.value = consent.value.feedback
}
</script>

<style scoped lang="scss">
@use "assets/style/policy_and_privacy" as *;
</style>
