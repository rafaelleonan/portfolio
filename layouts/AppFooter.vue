<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AppFooter"
})
</script>

<template>
  <footer>
    <p>© 2024 Rafael Leonan</p>
  </footer>
</template>

<style lang="sass" scoped>
@import "@/assets/style/_variables.sass"

footer
  width: 100%
  padding: 10px
  text-align: center
  color: $tertiary-color

  p
    font-size: 12px
    transition: font-size 250ms ease-out

.toggle-menu-left-sidebar
  footer
    padding: 6px

    p
      font-size: 6pt

@media (max-width: 520px)
  footer
    p
      font-size: 6pt
</style>