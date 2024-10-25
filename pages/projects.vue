<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';

export default defineComponent({
  name: "Projects",
  methods: {
    defineHead() {
      useHead({
        title: 'Projetos',
      });
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
  <h1>Projetos - Tela em construção...</h1>
</template>

<style scoped>

</style>