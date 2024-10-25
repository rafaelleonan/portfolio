<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';

export default defineComponent({
  name: "Contacts",
  methods: {
    defineHead() {
      useHead({
        title: 'Contatos',
      });
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
  <h1>Tela de Contatos</h1>
</template>

<style scoped>

</style>