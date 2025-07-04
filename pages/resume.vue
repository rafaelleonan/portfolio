<script lang="ts" setup>
import {ref} from 'vue'
import { useHead } from '#imports';
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'
import {useSeo} from "~/composables/useSeo";

const pdfUrl = ref('/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf')
const pageCount = ref(0)

const handleDocumentLoad = ({numPages}: any) => {
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

useSeo('Resumo', 'Resumo/Currículo de Rafael Leonan.')

</script>

<template>
  <section class="section d-flex d-flex--align-center d-flex--column">
    <div class="pdf-controls">
      <div class="actions-pdf">
        <button @click="downloadPdf">
          <span>BAIXAR</span>
          <svg class="icon" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.166687 14.6667H11.8334V13H0.166687V14.6667ZM11.8334 5.5H8.50002V0.5H3.50002V5.5H0.166687L6.00002 11.3333L11.8334 5.5Z"/>
          </svg>
        </button>
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
  </section>
</template>

<style lang="scss" scoped>
@use "assets/style/resume" as *;
</style>