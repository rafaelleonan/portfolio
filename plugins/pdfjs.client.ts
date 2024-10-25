import { defineNuxtPlugin } from '#app'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'

export default defineNuxtPlugin((nuxtApp) => {
    // Configurar o worker do PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'

    // Adiciona o pdfjsLib ao contexto da aplicação Nuxt
    nuxtApp.provide('pdfjs', pdfjsLib)
})