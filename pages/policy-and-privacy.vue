<script lang="ts" setup>
import {ref} from 'vue'
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'
import {useSeo} from "~/composables/useSeo";
import {useTheme} from "~/composables/useTheme";

const pdfUrlDark = ref('/docs/politica-de-privacidade-dark.pdf')
const pdfUrlLight = ref('/docs/politica-de-privacidade-light.pdf')
const pageCount = ref(0)
const {theme} = useTheme()

const handleDocumentLoad = ({numPages}: any) => {
  pageCount.value = numPages
  setTimeout(() => {
    const pages = document.querySelectorAll('.vue-pdf-embed__page');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    pages.forEach(page => {
      page.classList.add('vue-pdf-embed__page');
      observer.observe(page);
    });
  }, 200);
}

const downloadPdf = () => {
  const fileName = 'politica-de-privacidade-rafaelleonan.pdf';
  const pdfUrl = theme.value === 'dark' ? pdfUrlDark : pdfUrlLight

  const isHtml5DownloadSupported = 'download' in document.createElement('a');

  if (isHtml5DownloadSupported) {
    const link = document.createElement('a');
    link.href = pdfUrl.value;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(pdfUrl.value, '_blank');
  }
}

useSeo('Política e privacidade', 'Política e privacidade.')

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
        <PdfEmbed :source="theme === 'dark' ? pdfUrlDark : pdfUrlLight"
                  @loaded="handleDocumentLoad"
                  annotation-layer
                  text-layer
        />
      </client-only>
    </div>
  </section>
</template>

<style lang="scss">
@use "assets/style/resume" as *;
</style>