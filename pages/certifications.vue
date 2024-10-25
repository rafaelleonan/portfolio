<script setup lang="ts">
import {useHead} from "#imports";

useHead({
  title: 'Certificações',
});

const certs = ref([
  {
    link: 'https://www.udemy.com/certificate/UC-9429735b-c612-4387-88e2-92cfe0b6878d/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9429735b-c612-4387-88e2-92cfe0b6878d.jpg?v=1635332885000',
    title: 'Desenvolvimento Android e iOS com flutter',
    description: 'Udemy, 2021 - 67.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-87bd7a34-7c0e-47a4-91fc-c8583628fe42/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-87bd7a34-7c0e-47a4-91fc-c8583628fe42.jpg?v=1672532342000',
    title: 'Elixir e programação funcional na prática',
    description: 'Udemy, 2022 - 1.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-9ad3b702-32f2-4e9f-a1a1-55b05dba5596.jpg?v=1672616902000',
    title: 'Programação Funcional com Elixir',
    description: 'Udemy, 2023 - 9.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-275a3c3e-14c0-4e45-bb9c-9566f441ae31/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-275a3c3e-14c0-4e45-bb9c-9566f441ae31.jpg?v=1675401410000',
    title: 'Linux para Desenvolvedores (c/ terminal, Shell, Apache e +)',
    description: 'Udemy, 2023 - 7.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-277a8a2d-a235-48aa-8ff3-6b14692b4ad0.jpg?v=1717718570000',
    title: 'Docker para Desenvolvedores (com Docker Swarm e Kubernetes)',
    description: 'Udemy, 2024 - 12 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-c6480bed-681d-4998-aeb6-4eb0048870d4/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-c6480bed-681d-4998-aeb6-4eb0048870d4.jpg?v=1719764225000',
    title: 'Programação Shell Script - Automatizando Rotinas no Linux',
    description: 'Udemy, 2024 - 9.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-bb81955d-6f98-4fbc-9b5d-3602bc849d0d.jpg?v=1720183900000',
    title: 'UI & UX Design de aplicativos e sites - Adobe XD e PSD 2024',
    description: 'Udemy, 2024 - 16.5 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-50a90aec-6e77-48d4-9e13-f263c8014798/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-50a90aec-6e77-48d4-9e13-f263c8014798.jpg?v=1720383145000',
    title: 'PRO FIGMA | UI Design com Figma do Zero ao especialista 2024',
    description: 'Udemy, 2024 - 18 horas'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa/',
    image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-89e500c7-7a6c-4f76-8922-9df58fcfc3aa.jpg?v=1720480697000',
    title: 'Desenvolvimento de aplicativos iOS - Do básico às vendas!',
    description: 'Udemy, 2024 - 7 horas'
  },
  {
    link: 'https://drive.google.com/file/d/1QUKAcKbgH8OeyeVm6LdGp1WXj8FB263e/view',
    image: '/images/GopherCon2022.png',
    title: 'GopherCon Brasil 2022',
    description: 'Entre os dias 30/09/2022 - 01/10/2022'
  },
  {
    link: 'https://drive.google.com/file/d/12GSDLJHYbYuTUg2T_wFHm7ooKdIHwwHR/view?usp=drive_link',
    image: '/images/html_avancado.png',
    title: 'HTML - Avançado',
    description: 'Fundação Bradesco, 2017 - 6 horas'
  },
  {
    link: 'https://drive.google.com/file/d/1bDJHnbezaj7JVvH_FoABUUBnCNftrIsE/view?usp=drive_link',
    image: '/images/css.png',
    title: 'Inovando com CSS',
    description: 'Fundação Bradesco, 2017 - 26 horas'
  },
  {
    link: 'https://drive.google.com/file/d/10gM-_DNJdcjp5XaB64COdVrBQVqkHA2E/view?usp=drive_link',
    image: '/images/html_basico.png',
    title: 'HTML - Básico',
    description: 'Fundação Bradesco, 2017 - 11 horas'
  },
]);

</script>

<template>
  <span class="title-page">
    Meus certificados
  </span>
  <section class="list-certs">
    <a v-for="(cert, key) in certs" :key="`cert-${key}`"
       :href="cert.link"
       target="_blank" rel="noopener noreferrer"
       class="card-link">
      <img :src="cert.image" :alt="cert.title">
      <div class="card-l-text">
        <span class="card-l-title">{{ cert.title }}</span><br/>
        <span class="card-l-subtitle">{{ cert.description }}</span>
      </div>
    </a>
  </section>
</template>

<style scoped lang="sass">
@import "@/assets/style/_variables.sass"

.title-page
  display: block
  color: $secondary-color
  border-left: 4px solid $secondary-color
  width: 100%
  font-size: 18px
  font-weight: 600
  padding-left: 8px
  margin-bottom: 26px

.list-certs
  width: 100%
  display: flex
  flex-wrap: wrap
  gap: 36px

  .card-link
    position: relative
    display: block
    flex: 1 1 280px
    border: 1px solid $secondary-color
    border-radius: 10px
    cursor: pointer
    box-shadow: 0 4px 8px rgba(27, 41, 50, 0.1)
    transition: all 250ms linear
    text-decoration: none
    background-color: $app-white
    color: $secondary-color
    flex-grow: 0

    img
      width: 100%
      border-radius: 10px 10px 0 0

    .card-l-text
      padding: 10px

      .card-l-title
        font-size: 14px
        font-weight: 500

      .card-l-subtitle
        font-size: 12px
        font-weight: 300

    &:hover
      transform: scale(1.02)
      box-shadow: 0 10px 20px rgba(27, 41, 50, 0.1)
      background-color: $secondary-color
      color: $tertiary-color


</style>