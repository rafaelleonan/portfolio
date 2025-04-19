<script setup lang="ts">
import type { NuxtError } from '#app'
import {useHead} from "#imports";

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: 'Ocorreu um erro!',
});
</script>

<template>
  <div class="page-error">
    <div class="content-error">
      <span class="code-error">{{ props.error?.statusCode }} - {{ props.error?.statusMessage }}</span>
      <button class="btn-error-back" @click="handleError">
        <span class="material-icons">reply</span>
        Voltar a tela inicial
      </button>
    </div>
  </div>
</template>


<style scoped lang="scss">
@use "assets/style/variables" as *;

.page-error {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $rl-app-blue-900;

  .content-error {
    background-color: $rl-app-blue-500;
    padding: 16px;
    border-radius: $rl-app-desktop-br-md;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .code-error {
      color: $rl-app-brown-500;
      font-size: $rl-app-desktop-fs-h2;
      font-weight: bold;
    }

    .btn-error-back {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 200px;
      padding: 8px;
      background-color: $rl-app-blue-200;
      color: $rl-app-blue-500;
      border: 1px solid $rl-app-blue-200;
      border-radius: $rl-app-desktop-br-md;
      font-size: $rl-app-desktop-fs-xm;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: $rl-app-blue-500;
        color: $rl-app-blue-50;
      }
    }
  }
}

</style>