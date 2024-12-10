<script lang="ts" setup>
import {ref} from 'vue'
import { useHead } from '#imports';
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

const pdfUrl = ref('/docs/RAFAEL_LEONAN_ABREU_RODRIGUES.pdf')
const pageCount = ref(0)

useHead({
  title: 'Resumo',
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
@import "assets/style/variables.scss";

.vue-pdf-embed__page {
  margin-bottom: 20px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.pdf-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: $rl-app-blue-500;
  margin-bottom: 20px;

  .actions-pdf {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    width: 100%;
    height: 100%;

    .total-pages-pdf {
      color: $rl-app-blue-50;
      font-size: $rl-app-desktop-fs-md;
      font-weight: normal;
    }

    button {
      padding: 8px 16px;
      background-color: $rl-app-blue-500;
      border: 1px solid $rl-app-blue-50;
      color: $rl-app-blue-50;
      border-radius: 5px;
      cursor: pointer;
      transition: color 500ms;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: $rl-app-desktop-fs-md;
      font-weight: normal;
      gap: 10px;

      .icon {
        fill: $rl-app-blue-50;
        transition: fill 500ms;
        width: 10px;
      }

      &:hover {
        color: $rl-app-white;
        border: 1px solid $rl-app-white;

        .icon {
          fill: $rl-app-white;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .pdf-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: $rl-app-blue-500;
    margin-bottom: 20px;

    .actions-pdf {
      padding: 12px;

      .total-pages-pdf {
        font-size: $rl-app-desktop-fs-xs;
      }

      button {
        padding: 4px;
        font-size: $rl-app-desktop-fs-xs;

        .icon {
          fill: $rl-app-blue-50;
          transition: fill 500ms;
          width: 8px;
        }

        &:hover {
          color: $rl-app-white;
          border: 1px solid $rl-app-white;

          .icon {
            fill: $rl-app-white;
          }
        }
      }
    }
  }
}

@media (min-width: 601px) and (max-width: 850px) {
  .pdf-controls {
    margin-bottom: 20px;

    .actions-pdf {
      padding: 12px;

      .total-pages-pdf {
        font-size: $rl-app-desktop-fs-sm;
      }

      button {
        padding: 4px 8px;
        font-size: $rl-app-desktop-fs-sm;

        .icon {
          width: 10px;
        }
      }
    }
  }
}

</style>