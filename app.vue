<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";
import AppFooter from "~/layouts/AppFooter.vue";
</script>

<template>
  <NuxtLayout>
    <main style="overflow-x: hidden">
      <AppHeader/>
      <div class="content">
        <NuxtPage />
      </div>
      <AppFooter/>
    </main>
  </NuxtLayout>
</template>

<style lang="sass" src="assets/style/app.scss"></style>