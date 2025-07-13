<script lang="ts" setup>
import {useConsent} from "~/composables/useConsent";

const { visualizeConsent, toggleConsent } = useConsent()

</script>

<template>
  <footer>
    <div class="footer">
      <span>© 2024 - 2025 Rafael Leonan</span>
      <div class="d-flex d-flex--align-center d-flex--gap-12px">
        <nuxt-link to="/policy-and-privacy">
          Política de Privacidade
        </nuxt-link>
        •
        <a @click="toggleConsent(!visualizeConsent)" class="cursor--pointer">Gerenciar Privacidade</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "assets/style/variables" as *;

footer {
  width: 100%;

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 30px 10px;
    text-align: center;
    background-color: var(--bg-solid-blue-2);
    color: $rl-app-blue-50;
    font-size: $rl-app-desktop-fs-sm;
  }
}
</style>