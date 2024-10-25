<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';

export default defineComponent({
  name: "Experience",
  methods: {
    defineHead() {
      useHead({
        title: 'Experiências',
      });
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
  <h1>Experiências - Tela em construção...</h1>
</template>

<style scoped>

</style>