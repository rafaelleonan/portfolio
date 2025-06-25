<template>
  <div class="splash-screen">
    <div class="content-splash-screen">
      <div class="passagem-biblica">
        <i>"Eu sou o <b class="text--weight-700">caminho</b>, a <b class="text--weight-700">verdade</b>, e a <b class="text--weight-700">vida </b>; ninguém vem ao Pai, senão por mim."</i>
        <span>— <b class="jesus-cristo">Jesus Cristo</b> (João 14:6)</span>
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
import {useCountLoading, useInfoLoading} from "~/composables/useLoading";
import { ref, watch } from "vue";

const count = useCountLoading()
const infoList = useInfoLoading();
const total = ref(267)
const animatedCount = ref(0);
const progress = ref(0);

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
  50% { border-color: $rl-app-blue-50; }
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

      i {
        color: var(--color-solid-brown-1);
        font-size: $rl-app-desktop-fs-h1;
        font-weight: 300;
      }

      span {
        color: $rl-app-brown-500;
        font-size: $rl-app-desktop-fs-h2;
        font-weight: 400;

        .jesus-cristo {
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
        border: 1px solid var(--br-solid-blue-2);
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

          .progress-bar-text {
            font-size: $rl-app-desktop-fs-sm;
          }
        }
      }
    }
  }
}

@media (min-height: 380px) and (max-height: 550px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: space-between;
      padding: 0 20px;

      .passagem-biblica {
        justify-content: center;
        line-height: 50px;
      }

      .loader-content {
        bottom: 20px;
        gap: 4px;

        .loader-text {
          font-size: $rl-app-desktop-fs-sm;
        }

        .progress-bar-container {
          height: 15px;
          border-radius: 4px;

          .progress-bar {
            border-radius: 4px;
          }

          .progress-bar-text {
            font-size: $rl-app-desktop-fs-xxs;
          }
        }
      }
    }
  }
}

@media (min-height: 315px) and (max-height: 379px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: space-between;
      padding: 0 20px;

      .passagem-biblica {
        padding-top: 40px;
        justify-content: start;
        line-height: 50px;
      }

      .loader-content {
        bottom: 10px;
        gap: 0;

        .loader-text {
          font-size: $rl-app-desktop-fs-xxs;
        }

        .progress-bar-container {
          height: 18px;
          border-radius: 2px;

          .progress-bar {
            border-radius: 2px;
          }

          .progress-bar-text {
            font-size: $rl-app-desktop-fs-xxs;
          }
        }
      }
    }
  }
}

@media (max-height: 314px) {
  .splash-screen {
    .content-splash-screen {
      justify-content: space-between;
      padding: 0 10px;

      .passagem-biblica {
        padding-top: 20px;
        justify-content: center;
        line-height: 30px;
      }

      .loader-content {
        display: none;
      }
    }
  }
}
</style>