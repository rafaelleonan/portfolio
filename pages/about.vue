<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';

export default defineComponent({
  name: "About",
  methods: {
    defineHead() {
      useHead({
        title: 'Sobre mim',
      });
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
  <h1>Tela Sobre</h1>
</template>

<style scoped>

</style>