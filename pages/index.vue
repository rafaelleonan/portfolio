<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Portfólio',
});

</script>

<template>
  <div class="app-home">
    <section class="app-home-section-1">
      <div class="app-card">
        <span class="card-title">Sobre mim</span>
        <div class="card-body">
          <p>
            Olá, sou Rafael Leonan, desenvolvedor Full Stack com experiência em uma variedade de tecnologias.
            Minha jornada no desenvolvimento de software começou em 2017, durante o ensino médio, quando fiz um curso
            técnico em informática e construí uma base em programação com linguagens como Python, Java, SQL,
            PHP, JavaScript, HTML e CSS. No final de 2019, tive a oportunidade de realizar um estágio, onde
            ganhei experiência prática com Django 2 e Vue.js.
          </p>

          <p>
            Desde 2020, tenho atuado em diferentes frentes como MEI, estagiário e CLT, o que me permitiu expandir minhas
            habilidades em tecnologias como Go, Flutter, TypeScript, Ruby on Rails, AWS (SQS e S3), Kafka, PostgreSQL,
            Git (incluindo Git Flow) e SASS. Tenho vasta experiência tanto em frontend (Web e Mobile) quanto em backend,
            desenvolvendo APIs REST, JOBs e integração de filas SQS e Kafka.
          </p>

          <p>
            Além disso, entre 2021 e 2022, participei de diversos projetos freelancers, consolidando ainda mais minhas
            competências em desenvolvimento de software.
          </p>

          <p>
            Estudo regularmente as tecnologias com as quais já tenho familiaridade e procuro sempre me manter
            atualizado com novas ferramentas e linguagens.
            Esse ciclo constante de aprendizado me permite aplicar o que aprendo em projetos pessoais,
            sempre com foco em manter o código o mais limpo e organizado possível, buscando boas práticas
            e melhorias contínuas.
          </p>

        </div>
      </div>
    </section>
    <section class="app-home-section-2">
      <div class="app-card">
        <span class="card-title">Tecnologias ⚡</span>
        <div class="card-body mt-10px">
          <img src="https://img.shields.io/badge/-HTML5-333333?style=flat&logo=html5&logoColor=E34F26" alt="HTML"/>
          <img src="https://img.shields.io/badge/-CSS-333333?style=flat&logo=css3&logoColor=1572B6" alt="CSS"/>
          <img src="https://img.shields.io/badge/-SASS-333333?style=flat&logo=sass&logoColor=CC6699" alt="SASS"/>
          <img src="https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript&logoColor=F7E01A" alt="JavaScript"/>
          <img src="https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript&logoColor=3178C6" alt="TypeScript" />
          <img src="https://img.shields.io/badge/-Python-333333?style=flat&logo=python&logoColor=3776AB" alt="Python" />
          <img src="https://img.shields.io/badge/-GO-333333?style=flat&logo=go&logoColor=00ADD8" alt="GOlang"/>
          <img src="https://img.shields.io/badge/-ShellScript-333333?style=flat&logo=gnubash&logoColor=4EAA25" alt="ShellScript">
          <img src="https://img.shields.io/badge/-Kotlin-333333?style=flat&logo=kotlin&logoColor=7F52FF" alt="Kotlin"/>
          <img src="https://img.shields.io/badge/-Elixir-333333?style=flat&logo=elixir&logoColor=4B275F" alt="Elixir"/>
          <img src="https://img.shields.io/badge/-Swift-333333?style=flat&logo=swift&logoColor=F05138" alt="Swift"/>
          <img src="https://img.shields.io/badge/-Ruby-333333?style=flat&logo=ruby&logoColor=CC342D" alt="Ruby"/>
          <img src="https://img.shields.io/badge/-Dart-333333?style=flat&logo=dart&logoColor=0175C2" alt="Dart"/>
          <img src="https://img.shields.io/badge/-Vue.js-333333?style=flat&logo=vue.js&logoColor=4FC08D" alt="VueJS"/>
          <img src="https://img.shields.io/badge/-Flutter-333333?style=flat&logo=flutter&logoColor=02569B" alt="Flutter"/>
          <img src="https://img.shields.io/badge/-Ruby%20On%20Rails-333333?style=flat&logo=ruby-on-rails&logoColor=CC0000" alt="Ruby On Rails"/>
          <img src="https://img.shields.io/badge/-Django%202-333333?style=flat&logo=django&logoColor=092E20" alt="Django"/>

          <!-- Banco de dados -->
          <img src="https://img.shields.io/badge/-MySQL-333333?style=flat&logo=mysql&logoColor=4479A1" alt="MySQL"/>
          <img src="https://img.shields.io/badge/-PostgreSQL-333333?style=flat&logo=postgresql&logoColor=336791" alt="PostgreSQL"/>

          <!-- Ferramentas de Desenvolvimento -->
          <img src="https://img.shields.io/badge/-Android%20Studio-333333?style=flat&logo=android-studio&logoColor=3DDC84" alt="Android Studio"/>
          <img src="https://img.shields.io/badge/-IntelliJ%20IDEA%20Ultimate-333333?style=flat&logo=intellij-idea&logoColor=white" alt="IntelliJ IDEA Ultimate"/>
          <img src="https://img.shields.io/badge/-Goland-333333?style=flat&logo=goland&logoColor=00ADD8" alt="Goland"/>
          <img src="https://img.shields.io/badge/-WebStorm-333333?style=flat&logo=webstorm&logoColor=00ADD8" alt="WebStorm"/>
          <img src="https://img.shields.io/badge/-DataGrip-333333?style=flat&logo=datagrip&logoColor=00ADD8" alt="DataGrip"/>
          <img src="https://img.shields.io/badge/-RubyMine-333333?style=flat&logo=rubymine&logoColor=CC342D" alt="RubyMine"/>
          <img src="https://img.shields.io/badge/-PGAdmin-333333?style=flat&logo=postgresql&logoColor=336791" alt="PGAdmin"/>
          <img src="https://img.shields.io/badge/-MySQL%20Workbench-333333?style=flat&logo=mysql&logoColor=4479A1" alt="MySQL Workbench"/>
          <img src="https://img.shields.io/badge/-Sublime%20Text-333333?style=flat&logo=sublime-text&logoColor=FF9800" alt="Sublime Text"/>
          <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iSGpCVUZIeU50Y3NEY0JnblpCWjJTYSIgeDE9IjM3LjgiIHgyPSIzNy44IiB5MT0iNDMuMzciIHkyPSI3LjQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjliNmY2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTNiMmY2Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI0hqQlVGSHlOdGNzRGNCZ25aQloyU2EpIiBkPSJNMzQuMTc2LDQuMjQ5YzAuMTg4LDAuMDkyLDUuNjg4LDIuNzE2LDguMzc0LDMuOTk4QzQzLjQzNyw4LjY3LDQ0LDkuNTY0LDQ0LDEwLjU0NnYyNi44NgljMCwwLjk4MS0wLjU1OSwxLjg3NC0xLjQ0MywyLjI5OWMtMi41NDgsMS4yMjgtNy42MTEsMy42NjYtNy45NDgsMy44MjZDMzQuMzYxLDQzLjY0OSwzMy43MDksNDQsMzMuMTgxLDQ0CWMtMC42NzgsMC0xLjEzMy0wLjMxNi0xLjU4LTAuNzNMMzQsMzUuNzExVjUuNzE1bC0yLjI1NC0xLjEzNUMzMi4yMjgsNC4xMDksMzIuODk2LDQsMzMuMjkxLDRDMzMuNjUzLDQsMzMuOTQ4LDQuMTM4LDM0LjE3Niw0LjI0OXoiLz48bGluZWFyR3JhZGllbnQgaWQ9IkhqQlVGSHlOdGNzRGNCZ25aQloyU2IiIHgxPSI2LjA4NSIgeDI9IjM0Ljc5MyIgeTE9IjM0LjgwMSIgeTI9IjcuMTczIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMTE1IiBzdG9wLWNvbG9yPSIjMDA3NmJiIi8+PHN0b3Agb2Zmc2V0PSIuMjU3IiBzdG9wLWNvbG9yPSIjMDA2OWIwIi8+PHN0b3Agb2Zmc2V0PSIuMjgiIHN0b3AtY29sb3I9IiMwMDY5YjAiLz48c3RvcCBvZmZzZXQ9Ii40MjQiIHN0b3AtY29sb3I9IiMwMDY5YjAiLz48c3RvcCBvZmZzZXQ9Ii40OTEiIHN0b3AtY29sb3I9IiMwMDcyYjciLz48c3RvcCBvZmZzZXQ9Ii41NzciIHN0b3AtY29sb3I9IiMwMDc2YmIiLz48c3RvcCBvZmZzZXQ9Ii43OTUiIHN0b3AtY29sb3I9IiMwMDc2YmIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZlYjkiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSGpCVUZIeU50Y3NEY0JnblpCWjJTYikiIGQ9Ik05LDMzLjg5NmwyNS0xOS4wMjNWNS44M2MwLTEuMjk5LTEuNjYyLTEuODA4LTIuMzM3LTEuMTg0CUMzMS4wMDgsNS4yNSw0LjY1OCwyOS4yMzksNC42NTgsMjkuMjM5Yy0wLjksMC44My0wLjg0OSwyLjI2NywwLjEwNywzLjAzMmMwLDAsMS4zMjQsMS4yMzIsMS44MDMsMS41NzQJQzcuMzA0LDM0LjM3LDguMjcxLDM0LjQzLDksMzMuODk2eiIvPjxwYXRoIGZpbGw9IiMwMjg4ZDEiIGQ9Ik05LDE0LjEwNGwyNSwxOS4wNTR2OC43NzFjMCwxLjE5OC0xLjQyLDIuMTkzLTIuMzk5LDEuMzQxTDQuNjU4LDE4Ljc2MQljLTAuOS0wLjgzLTAuODQ5LTIuMjY3LDAuMTA3LTMuMDMyYzAsMCwxLjMyNC0xLjIzMiwxLjgwMy0xLjU3NEM3LjMwNCwxMy42Myw4LjI3MSwxMy41Nyw5LDE0LjEwNHoiLz48L3N2Zz4=" alt="Visual Studio Code"/>
          <img src="https://img.shields.io/badge/-Figma-333333?style=flat&logo=figma&logoColor=F24E1E" alt="Figma"/>
          <img src="https://img.shields.io/badge/-Adobe%20XD-333333?style=flat&logo=adobe-xd&logoColor=FF61F6" alt="Adobe XD"/>

          <!-- Ferramentas de Colaboração e Gestão -->
          <img src="https://img.shields.io/badge/-Git-333333?style=flat&logo=git" alt="Git"/>
          <img src="https://img.shields.io/badge/-GitFlow-333333?style=flat&logo=git" alt="GitFlow"/>
          <img src="https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github" alt="Github"/>
          <img src="https://img.shields.io/badge/-ClickUp-333333?style=flat&logo=clickup&logoColor=7B68EE" alt="ClickUp"/>
          <img src="https://img.shields.io/badge/-Trello-333333?style=flat&logo=trello&logoColor=007ACC" alt="Trello"/>
          <img src="https://img.shields.io/badge/-Slack-333333?style=flat&logo=slack&logoColor=4A154B" alt="Slack"/>

          <!-- Serviços e APIs -->
          <img src="https://img.shields.io/badge/-Postman-333333?style=flat&logo=postman" alt="Postman"/>
          <img src="https://img.shields.io/badge/-Kafka%20Conduktor-333333?style=flat&logo=apache-kafka&logoColor=white" alt="Kafka Conduktor"/>
          <img src="https://img.shields.io/badge/-Amazon%20S3-333333?style=flat&logo=amazon-s3&logoColor=569A31" alt="Amazon S3"/>
          <img src="https://img.shields.io/badge/-Amazon%20SQS-333333?style=flat&logo=amazon-sqs&logoColor=FF9900" alt="Amazon SQS"/>
          <img src="https://img.shields.io/badge/-Docker-333333?style=flat&logo=docker" alt="Docker"/>
          <img src="https://img.shields.io/badge/-DockerHub-333333?style=flat&logo=docker&logoColor=2496ED" alt="Dockerhub"/>

          <!-- Sistemas Operacionais -->
          <img src="https://img.shields.io/badge/-Windows-333333?style=flat&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJJY29ucyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgDQoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6IzNBNTU5Rjt9DQoJLnN0MntmaWxsOiNGNEY0RjQ7fQ0KCS5zdDN7ZmlsbDojRkYwMDg0O30NCgkuc3Q0e2ZpbGw6IzAwNjNEQjt9DQoJLnN0NXtmaWxsOiMwMEFDRUQ7fQ0KCS5zdDZ7ZmlsbDojRkZFQzA2O30NCgkuc3Q3e2ZpbGw6I0ZGMDAwMDt9DQoJLnN0OHtmaWxsOiMyNUQzNjY7fQ0KCS5zdDl7ZmlsbDojMDA4OEZGO30NCgkuc3QxMHtmaWxsOiMzMTQzNTg7fQ0KCS5zdDExe2ZpbGw6I0VFNjk5Njt9DQoJLnN0MTJ7ZmlsbDojMDFBRUYzO30NCgkuc3QxM3tmaWxsOiNGRkZFRkY7fQ0KCS5zdDE0e2ZpbGw6I0YwNkEzNTt9DQoJLnN0MTV7ZmlsbDojMDBBREVGO30NCgkuc3QxNntmaWxsOiMxNzY5RkY7fQ0KCS5zdDE3e2ZpbGw6IzFBQjdFQTt9DQoJLnN0MTh7ZmlsbDojNjAwMUQxO30NCgkuc3QxOXtmaWxsOiNFNDEyMTQ7fQ0KCS5zdDIwe2ZpbGw6IzA1Q0U3ODt9DQoJLnN0MjF7ZmlsbDojN0I1MTlDO30NCgkuc3QyMntmaWxsOiNGRjQ1MDA7fQ0KCS5zdDIze2ZpbGw6IzAwRjA3Njt9DQoJLnN0MjR7ZmlsbDojRkZDOTAwO30NCgkuc3QyNXtmaWxsOiMwMEQ2RkY7fQ0KCS5zdDI2e2ZpbGw6I0ZGM0E0NDt9DQoJLnN0Mjd7ZmlsbDojRkY2QTM2O30NCgkuc3QyOHtmaWxsOiMwMDYxRkU7fQ0KCS5zdDI5e2ZpbGw6I0Y3OTgxQzt9DQoJLnN0MzB7ZmlsbDojRUUxQjIyO30NCgkuc3QzMXtmaWxsOiNFRjM1NjE7fQ0KCS5zdDMye2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MzN7ZmlsbDojMDA5N0QzO30NCgkuc3QzNHtmaWxsOiMwMTMwOEE7fQ0KCS5zdDM1e2ZpbGw6IzAxOUNERTt9DQoJLnN0MzZ7ZmlsbDojRkZEMDQ5O30NCgkuc3QzN3tmaWxsOiMxNkEwNUQ7fQ0KCS5zdDM4e2ZpbGw6IzQ0ODZGNDt9DQoJLnN0Mzl7ZmlsbDpub25lO30NCgkuc3Q0MHtmaWxsOiMzNEE4NTM7fQ0KCS5zdDQxe2ZpbGw6IzQyODVGNDt9DQoJLnN0NDJ7ZmlsbDojRkJCQzA1O30NCgkuc3Q0M3tmaWxsOiNFQTQzMzU7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDE1IiBkPSJNMzAsMTVIMTdjLTAuNiwwLTEtMC40LTEtMVYzLjNjMC0wLjUsMC40LTAuOSwwLjgtMWwxMy0yLjNjMC4zLDAsMC42LDAsMC44LDAuMkMzMC45LDAuNCwzMSwwLjcsMzEsMXYxMw0KCQkJCUMzMSwxNC42LDMwLjYsMTUsMzAsMTV6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBjbGFzcz0ic3QxNSIgZD0iTTEzLDE1SDFjLTAuNiwwLTEtMC40LTEtMVY2YzAtMC41LDAuNC0wLjksMC44LTFsMTItMmMwLjMsMCwwLjYsMCwwLjgsMC4yQzEzLjksMy40LDE0LDMuNywxNCw0djEwDQoJCQkJQzE0LDE0LjYsMTMuNiwxNSwxMywxNXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDE1IiBkPSJNMzAsMzJjLTAuMSwwLTAuMSwwLTAuMiwwbC0xMy0yLjNjLTAuNS0wLjEtMC44LTAuNS0wLjgtMVYxOGMwLTAuNiwwLjQtMSwxLTFoMTNjMC42LDAsMSwwLjQsMSwxdjEzDQoJCQkJYzAsMC4zLTAuMSwwLjYtMC40LDAuOEMzMC41LDMxLjksMzAuMiwzMiwzMCwzMnoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGNsYXNzPSJzdDE1IiBkPSJNMTMsMjljLTAuMSwwLTAuMSwwLTAuMiwwbC0xMi0yQzAuNCwyNi45LDAsMjYuNSwwLDI2di04YzAtMC42LDAuNC0xLDEtMWgxMmMwLjYsMCwxLDAuNCwxLDF2MTANCgkJCQljMCwwLjMtMC4xLDAuNi0wLjQsMC44QzEzLjUsMjguOSwxMy4yLDI5LDEzLDI5eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+" alt="Windows"/>
          <img src="https://img.shields.io/badge/-Linux-333333?style=flat&logo=linux&logoColor=FCC624" alt="Linux"/>
          <img src="https://img.shields.io/badge/-Mac%20OS-333333?style=flat&logo=apple&logoColor=000000" alt="Mac OS"/>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/style/_variables.sass"

.app-home
  display: flex
  justify-content: space-between
  align-items: start
  height: 100%
  width: 100%

  .app-home-section-1, .app-home-section-2
    display: flex
    flex-direction: column

    .app-card
      width: 100%

      .card-title
        display: block
        color: $secondary-color
        border-left: 4px solid $secondary-color
        width: 100%
        font-size: 18px
        font-weight: 600
        padding-left: 8px

      .card-body
        font-size: 14px
        text-align: justify

        &.mt-10px
          margin-top: 10px

        img
          margin: 5px 5px 5px 0

  .app-home-section-1
    width: 60%

  .app-home-section-2
    width: 35%



@media (max-width: 520px)
  .app-home
    flex-direction: column

    .app-home-section-1, .app-home-section-2
      width: 100%

      .app-card
        .card-title
          font-size: 14px

        .card-body
          font-size: 12px
          text-align: justify

    .app-home-section-2
      margin-top: 20px

</style>