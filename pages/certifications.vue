<script setup lang="ts">
import {useHead} from "#imports";
import {MockCertificates} from "~/data/mock-certificates";
import {onMounted, nextTick} from "vue";

useHead({
  title: 'Certificações',
});

</script>

<template>
  <div class="app-page">
    <section class="section-default">
      <span class="title-section">
      Meus certificados
    </span>
    <section class="list-certs">
      <a v-for="(cert, key) in MockCertificates" :key="`cert-${key}`"
         :href="cert.link"
         target="_blank" rel="noopener noreferrer"
         class="card-link">
        <img :src="cert.image" :alt="cert.title">
        <div class="card-l-text">
          <span class="card-l-title">{{ cert.title }}</span><br/>
          <div class="tags">
            <span class="tag"
                  v-for="(tag, tKey) in cert.techs"
                  :class="tag.tag"
                  :key="`tag-${tKey}`">
              {{ tag.name }}
            </span>
          </div>
          <span class="card-l-subtitle">{{ cert.description }}</span>
        </div>
      </a>
    </section>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style/certifications";
</style>