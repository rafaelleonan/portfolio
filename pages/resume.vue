<script lang="ts" setup>
import {nextTick, onMounted, ref} from 'vue'
import { useHead } from '#imports';
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

const pdfUrl = ref('/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf')
const pageCount = ref(0)

useHead({
  title: 'Resumo',
  meta: [
    { name: 'description', content: 'Resumo/Currículo de Rafael Leonan.' },
    { property: 'og:title', content: 'Resumo - Rafael Leonan' },
    { property: 'og:description', content: 'Resumo/Currículo de Rafael Leonan.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rafaelleonan.com/resume' },
    { property: 'og:image', content: 'https://rafaelleonan.com/images/og-image.png' },
    { property: 'og:site_name', content: 'Rafael Leonan' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Resumo/Currículo - Rafael Leonan.' },
    { name: 'twitter:description', content: 'Resumo/Currículo de Rafael Leonan.' },
    { name: 'twitter:image', content: 'https://rafaelleonan.com/images/og-image.png' }
  ]
});

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

</script>

<template>
  <div class="app-page">
    <section class="section-default">
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
  </div>
</template>

<style lang="scss">
@use "assets/style/resume" as *;
</style>