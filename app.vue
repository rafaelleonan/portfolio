<script setup lang="ts">
import AppHeader from "~/layouts/AppHeader.vue";
import AppLeftSidebar from "~/layouts/AppLeftSidebar.vue";
</script>

<template>
  <NuxtLayout>
    <AppLeftSidebar/>
    <main>
      <AppHeader/>
      <div class="content">
        <NuxtPage />
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="sass" src="assets/style/app.sass"></style>