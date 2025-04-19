<template>
  <div class="splash-screen">
    <div class="content-splash-screen">
      <div class="loader-content">
        <div class="loader-text typing-text">
          rafaelleonan.com
        </div>
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
      <div class="info">
        <div class="item-info" v-for="(info, infoKey) in infoList" :key="`info-${infoKey}`">
          <b>>_</b>
          <b>[{{ info.local }}]</b>
          <span>{{ info.value }}</span>
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
const total = ref(205)
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

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: $rl-app-brown-500; }
}

.typing-text {
  display: inline-block;
  border-right: 3px solid;
  padding-right: 2px;
  white-space: nowrap;
  overflow: hidden;
  font-size: $rl-app-desktop-fs-h2 !important;
  text-align: center;
  border-right: .15em solid $rl-app-brown-500;
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
  background-color: $rl-app-blue-900;
  font-size: 1.5rem;
  z-index: 9999;

  .content-splash-screen {
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .loader-content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .loader {
        width: 50px;
        height: 50px;
        border: 5px solid $rl-app-blue-500;
        border-top-color: $rl-app-brown-500;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .loader-text {
        font-size: $rl-app-desktop-fs-lg;
        font-weight: bold;
        color: $rl-app-brown-500;
      }
    }

    .progress-bar-container {
      width: 100%;
      height: 30px;
      background-color: $rl-app-blue-900;
      border-radius: $rl-app-desktop-br-md;
      margin-top: 20px;
      border: 1px solid $rl-app-brown-500;
      position: relative;

      .progress-bar {
        height: 100%;
        background-color: $rl-app-blue-500;
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
        font-weight: bold;
        color: $rl-app-brown-500;
        text-wrap: nowrap;
      }
    }

    .info {
      background-color: $rl-app-blue-500;
      border-radius: $rl-app-desktop-br-sm;
      padding: 10px;
      width: 100%;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: end;
      overflow: hidden;

      .item-info {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;

        b {
          color: $rl-app-brown-500;
          font-size: $rl-app-desktop-fs-xxs;
        }
        span {
          font-size: $rl-app-desktop-fs-xxs;
          font-weight: lighter;
          color: $rl-app-blue-50;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .typing-text {
    font-size: $rl-app-desktop-fs-h4 !important;
  }

  .splash-screen {
    .content-splash-screen {
      width: 300px;
      gap: 10px;

      .loader-content {
        gap: 10px;

        .loader {
          width: 30px;
          height: 30px;
          border: 4px solid $rl-app-blue-500;
        }

        .loader-text {
          font-size: $rl-app-desktop-fs-md;
        }
      }

      .progress-bar-container {
        .progress-bar-text {
          font-size: $rl-app-desktop-fs-sm;
        }
      }
    }
  }
}
</style>