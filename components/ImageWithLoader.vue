<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
  alt?: string
  classImage?: string
  fallback?: string
}>()

const isLoading = ref(true)
const hasError = ref(false)

const onLoad = () => {
  isLoading.value = false
}

const onError = () => {
  isLoading.value = false
  hasError.value = true
}

const fallbackImage = props.fallback || '/images/default.png'
</script>

<template>
  <div class="image-component">
    <div v-if="isLoading" class="spinner"></div>
    <img
      :src="hasError ? fallbackImage : props.src"
      :alt="hasError ? 'Imagem não carregada' : props.alt"
      :class="props.classImage"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<style scoped>

.image-component {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
}

.spinner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
