<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>Error: {{ props.error?.statusCode }}</h2>
    <button @click="handleError">Voltar a tela inicial</button>
  </div>
</template>


<style scoped lang="scss">
</style>