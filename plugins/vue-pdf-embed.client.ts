import { defineNuxtPlugin } from '#app'
import VuePdfEmbed from 'vue-pdf-embed'
import { GlobalWorkerOptions } from 'vue-pdf-embed/dist/index.essential.mjs'
import PdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'

export default defineNuxtPlugin((nuxtApp) => {
    GlobalWorkerOptions.workerSrc = PdfWorker
    nuxtApp.vueApp.component('PdfEmbed', VuePdfEmbed)
})

