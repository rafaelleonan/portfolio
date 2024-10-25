<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';

export default defineComponent({
  name: "bitcoin",
  methods: {
    defineHead() {
      useHead({
        title: 'Bitcoin',
      });
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
  <h1>Bitcoin - Tela em construção...</h1>
</template>

<style scoped>

</style>