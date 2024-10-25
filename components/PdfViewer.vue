<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PdfViewer",
  props: {
    pdfPath: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.loadPdf();
  },
  methods: {
    loadPdf() {
      const canvas = this.$refs.pdfCanvas
      const { $pdfjs } = this.$nuxt // Acessa o pdfjs a partir do plugin

      if (!this.pdfPath) {
        console.error('Caminho do PDF não fornecido.')
        return
      }

      // Carregar o PDF
      $pdfjs.getDocument(this.pdfPath).promise.then((pdf) => {
        console.log('PDF carregado')

        // Exibir a primeira página do PDF
        pdf.getPage(1).then((page) => {
          const scale = 1.5 // Escala do PDF
          const viewport = page.getViewport({ scale })

          // Preparar o canvas com o tamanho correto
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          // Renderizar a página no canvas
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          }
          page.render(renderContext)
        })
      }).catch((error) => {
        console.error('Erro ao carregar o PDF:', error)
      })
    },
  }
})
</script>

<template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>