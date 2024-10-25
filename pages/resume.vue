<script lang="ts">
import {defineComponent} from 'vue'
import { useHead } from '#imports';
import PDFViewer from '@/components/PdfViewer.vue';
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

export default defineComponent({
  name: "Resume",
  components: {
    PDFViewer,
  },
  data() {
    return {
      pdfUrl: "/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf",
      currentPage: 1, // Página inicial
      totalPages: 0, // Total de páginas
    };
  },
  methods: {
    defineHead() {
      useHead({
        title: 'Resumo',
      });
    },
    downloadPdf() {
      const pdfUrl = this.pdfUrl;
      const fileName = 'CURRICULO_RAFAEL_LEONAN_ABREU_RODRIGUES.pdf';

      // Verificar se o navegador suporta o atributo download
      const isHtml5DownloadSupported = 'download' in document.createElement('a');

      if (isHtml5DownloadSupported) {
        // Criar um link para download nativo HTML5
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;

        // Adicionar o link ao DOM, clicar nele, e removê-lo em seguida
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Fallback: abrir o PDF em uma nova aba
        window.open(pdfUrl, '_blank');
      }
    },
  },
  mounted() {
    this.defineHead();
  }
})
</script>

<template>
<!--  <PDFViewer pdf-path="/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf"/>-->
  <div class="pdf-controls">
    <button @click="downloadPdf">Baixar currículo</button>
  </div>

  <client-only>
    <PdfEmbed annotation-layer text-layer
              :source="pdfUrl"/>
  </client-only>
</template>

<style scoped lang="sass">
@import "@/assets/style/_variables.sass"

.pdf-controls
  button
    padding: 10px
    background-color: $secondary-color
    color: $tertiary-color
    border: none
    border-radius: 5px
    cursor: pointer
    transition: color 500ms
    margin-bottom: 20px

    &:hover
      color: $primary-color

</style>