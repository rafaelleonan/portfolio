<script lang="ts" setup>
import {ref} from 'vue'
import { useHead } from '#imports';
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

const pdfUrl = ref('/portfolio/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf')
const pageCount = ref(0)

useHead({
  title: 'Resumo',
});

const handleDocumentLoad = ({numPages}) => {
  pageCount.value = numPages
}

const downloadPdf = () => {
  const fileName = 'CURRICULO_RAFAEL_LEONAN_ABREU_RODRIGUES.pdf';

  // Verificar se o navegador suporta o atributo download
  const isHtml5DownloadSupported = 'download' in document.createElement('a');

  if (isHtml5DownloadSupported) {
    // Criar um link para download nativo HTML5
    const link = document.createElement('a');
    link.href = pdfUrl.value;
    link.download = fileName;

    // Adicionar o link ao DOM, clicar nele, e removê-lo em seguida
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Fallback: abrir o PDF em uma nova aba
    window.open(pdfUrl.value, '_blank');
  }
}

</script>

<template>
  <div class="app-page-resume">
    <div class="pdf-controls">
      <div class="btn-actions-pdf">
        <button @click="downloadPdf">Baixar currículo</button>
        <span class="total-pages-pdf">{{ pageCount }} página(s)</span>
      </div>
    </div>
    <div class="app-vue-pdf-embed">
      <client-only>
        <PdfEmbed :source="pdfUrl"
                  @loaded="handleDocumentLoad"
                  annotation-layer
                  text-layer
        />
      </client-only>
    </div>
  </div>
</template>

<style lang="sass">
@import "@/assets/style/_variables.sass"

.vue-pdf-embed__page
  margin-bottom: 20px
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1)


.app-page-resume
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  background-color: #ccc

  .pdf-controls
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    background-color: $secondary-color
    margin-bottom: 20px

    .btn-actions-pdf
      display: flex
      align-items: center
      justify-content: space-between
      padding: 20px 0
      width: 95%
      height: 100%

      .total-pages-pdf
        color: $tertiary-color
        font-size: 16px
        font-weight: 500

      button
        padding: 10px
        background-color: $secondary-color
        border: 1px solid $tertiary-color
        color: $tertiary-color
        border-radius: 5px
        cursor: pointer
        transition: color 500ms

        &:hover
          color: $primary-color
          border: 1px solid $primary-color

  .app-vue-pdf-embed
    width: 95%

</style>