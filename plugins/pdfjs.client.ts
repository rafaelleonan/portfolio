import { defineNuxtPlugin } from '#app'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'
import PdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'

export default defineNuxtPlugin((nuxtApp) => {
    // Configurar o worker do PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = PdfWorker

    // Adiciona o pdfjsLib ao contexto da aplicação Nuxt
    nuxtApp.provide('pdfjs', pdfjsLib)
})