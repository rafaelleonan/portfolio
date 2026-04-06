<template>
  <div class="splash-screen">
    <div class="content-splash-screen">
      <div class="passagem-biblica">
        <div v-html="fraseAtual.html"></div>
        <span>
          — <b class="jesus-cristo">{{ fraseAtual.autor }}</b>
          ({{ fraseAtual.referencia }})
        </span>
      </div>
      <div class="loader-content">
        <div class="loader-text typing-text">
          rafaelleonan.com
        </div>
        <div class="progress-bar-container">
          <div
              class="progress-bar"
              :style="{ width: `${progress}%` }"
          ></div>
          <span class="progress-bar-text">
            Carregando recursos...
            ({{ animatedCount }}%)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCountLoading } from "~/composables/useLoading";
import { ref, watch, onMounted, computed } from "vue";

const count = useCountLoading();
const total = ref(267);
const animatedCount = ref(0);
const progress = ref(0);

// 1. Inicie com um objeto vazio ou a primeira frase para evitar erro de template
const fraseAtual = ref({ html: '', autor: '', referencia: '' });

const frases = [
  {
    html: '<i>"Eu sou o <b class="text--weight-700">caminho</b>, a <b class="text--weight-700">verdade</b>, e a <b class="text--weight-700">vida</b>; ninguém vem ao Pai, senão por mim."</i>',
    autor: 'Jesus Cristo',
    referencia: 'João 14:6'
  },
  {
    html: '<i>"<b class="text--weight-700">Tudo posso</b> naquele que me fortalece."</i>',
    autor: 'Apóstolo Paulo',
    referencia: 'Filipenses 4:13'
  },
  {
    html: '<i>"<b class="text--weight-700">O Senhor</b> é o meu pastor; nada me faltará."</i>',
    autor: 'Rei Davi',
    referencia: 'Salmos 23:1'
  },
  {
    html: '<i>"<b class="text--weight-700">Não fui eu que lhe ordenei?</b> Seja <b class="text--weight-700">forte</b> e <b class="text--weight-700">corajoso</b>! Não se apavore nem desanime."</i>',
    autor: 'Deus',
    referencia: 'Josué 1:9'
  },
  {
    html: '<i>"Busquem, pois, em <b class="text--weight-700">primeiro lugar</b> o <b class="text--weight-700">Reino de Deus</b> e a sua justiça."</i>',
    autor: 'Jesus Cristo',
    referencia: 'Mateus 6:33'
  },
  {
    html: '<i>"O <b class="text--weight-700">amor</b> é paciente, o amor é bondoso. <b class="text--weight-700">Tudo sofre</b>, tudo crê, tudo espera, tudo suporta."</i>',
    autor: 'Apóstolo Paulo',
    referencia: '1 Coríntios 13:4-7'
  },
  {
    html: '<i>"Pois eu bem sei os <b class="text--weight-700">planos</b> que tenho para vocês, planos de fazê-los <b class="text--weight-700">prosperar</b> e não de causar dano."</i>',
    autor: 'Deus',
    referencia: 'Jeremias 29:11'
  },
  {
    html: '<i>"Entregue o seu <b class="text--weight-700">caminho</b> ao Senhor; <b class="text--weight-700">confie nele</b>, e ele agirá."</i>',
    autor: 'Rei Davi',
    referencia: 'Salmos 37:5'
  },
  {
    html: '<i>"Lâmpada para os meus pés é a <b class="text--weight-700">tua palavra</b> e <b class="text--weight-700">luz</b>, para o meu caminho."</i>',
    autor: 'Salmista',
    referencia: 'Salmos 119:105'
  },
  {
    html: '<i>"O coração do homem traça o seu caminho, mas o <b class="text--weight-700">Senhor</b> lhe <b class="text--weight-700">dirige os passos</b>."</i>',
    autor: 'Salomão',
    referencia: 'Provérbios 16:9'
  },
  {
    html: '<i>"Vinde a mim, todos os que estais <b class="text--weight-700">cansados e sobrecarregados</b>, e eu vos <b class="text--weight-700">aliviarei</b>."</i>',
    autor: 'Jesus Cristo',
    referencia: 'Mateus 11:28'
  },
  {
    html: '<i>"A <b class="text--weight-700">alegria</b> do Senhor é a vossa <b class="text--weight-700">força</b>."</i>',
    autor: 'Neemias',
    referencia: 'Neemias 8:10'
  }
];

const setRandomPhrase = () => {
  // Garantimos que o localStorage só seja acessado no cliente (importante para Nuxt SSG)
  const lastIndex = typeof window !== 'undefined' ? localStorage.getItem('lastPhraseIndex') : null;
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * frases.length);
  } while (String(newIndex) === lastIndex && frases.length > 1);

  if (typeof window !== 'undefined') {
    localStorage.setItem('lastPhraseIndex', String(newIndex));
  }

  // CORREÇÃO: Atribuímos o objeto diretamente, sem envolver em outro ref()
  fraseAtual.value = frases[newIndex];
};

watch(
    () => count.value,
    (newValue) => {
      const start = animatedCount.value;
      const end = Math.min((newValue / total.value) * 100, 100);
      const duration = 1000;
      let startTime = null;

      function animate(time) {
        if (!startTime) startTime = time;
        let progressTime = (time - startTime) / duration;

        if (progressTime < 1) {
          animatedCount.value = Math.floor(start + (end - start) * progressTime);
          progress.value = animatedCount.value;
          requestAnimationFrame(animate);
        } else {
          animatedCount.value = Math.floor(end);
          progress.value = animatedCount.value;
        }
      }
      requestAnimationFrame(animate);
    }
);

onMounted(() => {
  setRandomPhrase();
});
</script>

<style scoped lang="scss">
@use 'assets/style/variables' as *;

@keyframes gradientMove {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 220px }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--color-solid-blue-1); }
}

.typing-text {
  display: inline-block;
  border-right: 3px solid;
  padding-right: 2px;
  white-space: nowrap;
  overflow: hidden;
  font-size: $rl-app-desktop-fs-lg !important;
  text-align: center;
  border-right: .15em solid var(--br-solid-blue-2);
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
  font-family: 'Courier New', monospace !important;
}

.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-gradient-1);
  font-size: 1.5rem;
  z-index: 9999;
  background-size: 300% 300%;
  animation: gradientMove 10s ease infinite;
  overflow: hidden;

  .content-splash-screen {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    .passagem-biblica {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 50px;
      color: var(--color-solid-brown-1);
      font-size: 40px;
      font-weight: 300;
      gap: 15px;

      span {
        color: $rl-app-brown-500;
        font-size: $rl-app-desktop-fs-h2;
        font-weight: 400;

        .author {
          font-weight: 700 !important;
        }
      }
    }

    .loader-content {
      position: fixed;
      bottom: 80px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .loader-text {
        font-size: $rl-app-desktop-fs-lg;
        font-weight: bold;
        color: var(--color-solid-blue-1);
      }

      .progress-bar-container {
        width: 80%;
        height: 30px;
        background-color: transparent;
        border-radius: $rl-app-desktop-br-md;
        margin-top: 0;
        border: 1px solid var(--bg-solid-blue-3);
        position: relative;

        .progress-bar {
          height: 100%;
          background-color: var(--bg-solid-blue-3);
          border-radius: $rl-app-desktop-br-md;
          transition: width 200ms ease-out;
        }

        .progress-bar-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99;
          font-size: $rl-app-desktop-fs-md;
          color: var(--color-solid-blue-2);
          text-wrap: nowrap;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .typing-text {
    font-size: $rl-app-desktop-fs-h4 !important;
  }

  .splash-screen {
    .content-splash-screen {
      padding: 0 14px;
      gap: 10px;
      width: 100%;

      .passagem-biblica {
        transform: translateY(-100px);
      }

      .loader-content {
        bottom: 60px;
        gap: 10px;

        .loader-text {
          font-size: $rl-app-desktop-fs-md;
        }

        .progress-bar-container {
          width: 100%;
        }
      }
    }
  }
}

@media (min-height: 380px) and (max-height: 550px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: center;
      gap: 20px;
      padding: 0 20px;

      .passagem-biblica {
        justify-content: center;
        line-height: 50px;
      }

      .loader-content {
        bottom: 20px;
        gap: 8px;

        .loader-text {
          font-size: $rl-app-desktop-fs-sm;
        }

        .progress-bar-container {
          border-radius: 4px;

          .progress-bar {
            border-radius: 4px;
          }
        }
      }
    }
  }
}

@media (min-height: 315px) and (max-height: 379px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: center;
      gap: 20px;
      padding: 0 20px;

      .loader-content {
        bottom: 10px;
        gap: 8px;

        .loader-text {
          font-size: $rl-app-desktop-fs-xxs;
        }

        .progress-bar-container {
          border-radius: 2px;

          .progress-bar {
            border-radius: 2px;
          }
        }
      }
    }
  }
}

@media (max-height: 314px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: center;
      gap: 20px;
      padding: 0 10px;

      .loader-content {
        display: none;
      }
    }
  }
}
</style>