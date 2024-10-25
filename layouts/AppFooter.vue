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

<style scoped lang="sass">
@import "@/assets/style/_variables.sass"

footer
  width: 100%
  padding: 10px
  text-align: center
  color: $tertiary-color

  p
    font-size: 12px
</style>