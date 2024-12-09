<script setup lang="ts">
import { useHead, ref } from '#imports'

useHead({
  title: 'Portfólio',
});

const list = ref([
    { src: "/images/svg/html.svg", title: "HTML" },
    { src: "/images/svg/css.svg", title: "CSS" },
    { src: "/images/svg/sass.svg", title: "SASS" },
    { src: "/images/svg/js.svg", title: "JAVASCRIPT" },
    { src: "/images/svg/ts.svg", title: "TYPESCRIPT" },
    { src: "/images/svg/py.svg", title: "PYTHON" },
    { src: "/images/svg/dart.svg", title: "DART" },
    { src: "/images/svg/ruby.svg", title: "RUBY" },
    { src: "/images/svg/swift.svg", title: "SWIFT" },
    { src: "/images/svg/elixir.svg", title: "ELIXIR" },
    { src: "/images/svg/kotlin.svg", title: "KOTLIN" },
    { src: "/images/svg/shellscript.svg", title: "SHELLSCRIPT" },
    { src: "/images/svg/go.svg", title: "GO" },
    { src: "/images/svg/vue.svg", title: "VUE JS" },
    { src: "/images/svg/flutter.svg", title: "FLUTTER" },
    { src: "/images/svg/rails.svg", title: "RUBY ON RAILS" },
    { src: "/images/svg/django.svg", title: "DJANGO" },
    { src: "/images/svg/mysql.svg", title: "MYSQL" },
    { src: "/images/svg/postgresql.svg", title: "POSTGRESQL" },
    { src: "/images/svg/sqs.svg", title: "AWS SQS" },
    { src: "/images/svg/s3.svg", title: "AWS S3" },
    { src: "/images/svg/docker.svg", title: "DOCKER" },
    { src: "/images/svg/figma.svg", title: "FIGMA" },
    { src: "/images/svg/kafka.svg", title: "KAFKA" },
    { src: "/images/svg/git.svg", title: "GIT & GIT FLOW" },
]);

</script>

<template>
  <div class="page">
    <section class="section-default">
      <span class="title-section">SOBRE MIM</span>
      <div class="app-card">
        <div class="card-body">
          <span class="font-color-brown-900">
            Olá, sou Rafael Leonan, desenvolvedor Full Stack com experiência em uma variedade de tecnologias.
            Minha jornada no desenvolvimento de software começou em 2017, durante o ensino médio, quando fiz um curso
            técnico em informática e construí uma base em programação com linguagens como Python, Java, SQL,
            PHP, JavaScript, HTML e CSS. No final de 2019, tive a oportunidade de realizar um estágio, onde
            ganhei experiência prática com Django 2 e Vue.js.
          </span>

          <p class="font-color-brown-900">
            Desde 2020, tenho atuado em diferentes frentes como MEI, estagiário e CLT, o que me permitiu expandir minhas
            habilidades em tecnologias como Go, Flutter, TypeScript, Ruby on Rails, AWS (SQS e S3), Kafka, PostgreSQL,
            Git (incluindo Git Flow) e SASS. Tenho vasta experiência tanto em frontend (Web e Mobile) quanto em backend,
            desenvolvendo APIs REST, JOBs e integração de filas SQS e Kafka.
          </p>

          <p class="font-color-brown-900">
            Além disso, entre 2021 e 2022, participei de diversos projetos freelancers, consolidando ainda mais minhas
            competências em desenvolvimento de software.
          </p>

          <p class="font-color-brown-900">
            Estudo regularmente as tecnologias com as quais já tenho familiaridade e procuro sempre me manter
            atualizado com novas ferramentas e linguagens.
            Esse ciclo constante de aprendizado me permite aplicar o que aprendo em projetos pessoais,
            sempre com foco em manter o código o mais limpo e organizado possível, buscando boas práticas
            e melhorias contínuas.
          </p>

        </div>
      </div>
    </section>
    <section class="section-default">
      <span class="title-section">EXPERIÊNCIA EM</span>
      <div class="app-flex app-flex-wrap app-justify-content-space-between app-w100">
        <div class="badge-xxl default" v-for="(item, key) in list" :key="`${item.title}-${key}`">
          <div class="icon">
            <img :src="item.src" :alt="item.title"/>
          </div>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style/variables.scss";



@media (max-width: 520px) {

}
</style>