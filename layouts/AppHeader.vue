<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AppHeader",
})
</script>

<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <svg class="svg-icon" width="24" viewBox="0 0 230 177" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 177V0H93C139 0 191.5 75.5 131.5 129L155.5 177H0Z" class="svg-icon-part-1" fill="$secondary-color"/>
          <path d="M211 0H176.5V69H230V34.5H211V0Z" class="svg-icon-part-2" fill="$secondary-color"/>
          <path d="M176 88V83H229.5V88H176Z" class="svg-icon-part-3" fill="$tertiary-color" stroke="$tertiary-color"/>
        </svg>
        <span>Início</span>
      </nuxt-link>
<!--      <nuxt-link to="/projects">-->
<!--        <svg class="svg-icon" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--          <path class="svg-icon-part-1" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6.12,15.5L9.86,19.24L11.28,17.83L8.95,15.5L11.28,13.17L9.86,11.76L6.12,15.5M17.28,15.5L13.54,11.76L12.12,13.17L14.45,15.5L12.12,17.83L13.54,19.24L17.28,15.5Z" />-->
<!--        </svg>-->
<!--        <span>Projetos</span>-->
<!--      </nuxt-link>-->
<!--      <nuxt-link to="/experience">-->
<!--        <svg class="svg-icon" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--          <path class="svg-icon-part-1" d="M21 11.11V7A2 2 0 0 0 19 5H15V3A2 2 0 0 0 13 1H9A2 2 0 0 0 7 3V5H3A2 2 0 0 0 1 7V18A2 2 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M19 20A5 5 0 0 1 13 20A5 5 0 1 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13" />-->
<!--        </svg>-->
<!--        <span>Experiências</span>-->
<!--      </nuxt-link>-->
      <nuxt-link to="/resume">
        <svg class="svg-icon" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path class="svg-icon-part-1" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
        </svg>
        <span>Resumo</span>
      </nuxt-link>
      <nuxt-link to="/certifications">
        <svg class="svg-icon" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>certificate</title>
          <path class="svg-icon-part-1" d="M4,3C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H12V22L15,19L18,22V17H20A2,2 0 0,0 22,15V8L22,6V5A2,2 0 0,0 20,3H16V3H4M12,5L15,7L18,5V8.5L21,10L18,11.5V15L15,13L12,15V11.5L9,10L12,8.5V5M4,5H9V7H4V5M4,9H7V11H4V9M4,13H9V15H4V13Z" />
        </svg>
        <span>Certificações</span>
      </nuxt-link>
<!--      <nuxt-link to="/bitcoin">-->
<!--        <svg class="svg-icon" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--          <path class="svg-icon-part-1" d="M17.06 11.57C17.65 10.88 18 10 18 9C18 7.14 16.73 5.57 15 5.13V3H13V5H11V3H9V5H6V7H8V17H6V19H9V21H11V19H13V21H15V19C17.21 19 19 17.21 19 15C19 13.55 18.22 12.27 17.06 11.57M10 7H14C15.1 7 16 7.9 16 9S15.1 11 14 11H10V7M15 17H10V13H15C16.1 13 17 13.9 17 15S16.1 17 15 17Z" />-->
<!--        </svg>-->
<!--        <span>BTC</span>-->
<!--      </nuxt-link>-->
    </nav>
  </header>
</template>

<style scoped lang="sass">
@import "@/assets/style/_variables.sass"

header
  nav
    background-color: $secondary-color
    display: flex
    justify-content: start
    align-items: center
    padding: 16pt 26pt

    a
      display: flex
      justify-content: center
      align-items: center
      color: $tertiary-color
      font-size: 12px
      height: 42px
      text-decoration: none
      text-transform: uppercase
      border-bottom: 2px solid transparent
      padding: 6pt
      background-color: transparent
      transition: all ease-in-out 300ms

      &:not(:last-child)
        margin-right: 26px

      span
        &.material-icons
          margin-right: 12px

      .svg-icon
        margin-right: 12px

        .svg-icon-part-1, .svg-icon-part-2
          fill: $tertiary-color
          transition: fill ease-in-out 300ms

      &:hover
        color: $primary-color
        fill: $primary-color
        border-bottom: 2px solid $primary-color

        .svg-icon
          .svg-icon-part-1, .svg-icon-part-2
            fill: $primary-color

      &.router-link-active
        color: $primary-color
        fill: $primary-color
        border-bottom: 2px solid $primary-color

        .svg-icon
          .svg-icon-part-1, .svg-icon-part-2
            fill: $primary-color

</style>