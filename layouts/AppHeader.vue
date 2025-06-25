<script lang="ts" setup>
import { useSidebar } from '~/composables/useSidebar';
import { useTheme } from '~/composables/useTheme';
import {onBeforeUnmount, watch} from "vue";

const isSidebarVisible = useSidebar();
const { theme, toggleTheme } = useTheme();

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

function closeSidebar() {
  isSidebarVisible.value = false;
}

watch(() => isSidebarVisible.value, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove('modal-open');
});
</script>

<template>
  <header :class="{'show-menu': isSidebarVisible}">
    <nav>
      <div class="mobile-nav">
        <div class="menu-mobile" @click="toggleSidebar">
        <span class="material-icons">
          menu
        </span>
        </div>
        <nuxt-link to="/" class="homepage-logo" @click="closeSidebar">
          <div class="vertical-left"></div>
          <div class="vertical-right"></div>
          <div class="triangle-up"></div>
          <div class="l-vertical-left"></div>
          <div class="l-horizontal-bottom"></div>
        </nuxt-link>
        <button @click="toggleTheme" class="switch-theme" :class="{'light': theme === 'light' }">
          <span class="material-icons">{{ theme === "light" ? "dark_mode" : "light_mode" }}</span>
        </button>
      </div>
      <nuxt-link to="/" class="homepage-logo" @click="closeSidebar">
        <div class="vertical-left"></div>
        <div class="vertical-right"></div>
        <div class="triangle-up"></div>
        <div class="l-vertical-left"></div>
        <div class="l-horizontal-bottom"></div>
      </nuxt-link>
      <div class="nav-links">
        <nuxt-link to="/resume" @click="closeSidebar">
          <span class="material-icons">wysiwyg</span>
          <span>Resumo</span>
        </nuxt-link>
        <nuxt-link to="/certifications" @click="closeSidebar">
          <span class="material-icons">card_membership</span>
          <span>Certificações</span>
        </nuxt-link>
        <nuxt-link to="/projects" @click="closeSidebar">
          <span class="material-icons">code</span>
          <span>Projetos</span>
        </nuxt-link>
        <nuxt-link to="/about" @click="closeSidebar">
          <span class="material-icons">folder_shared</span>
          <span>Sobre mim</span>
        </nuxt-link>
      </div>
      <button @click="toggleTheme" class="switch-theme" :class="{'light': theme === 'light' }">
        <span class="material-icons">{{ theme === "light" ? "dark_mode" : "light_mode" }}</span>
      </button>
    </nav>
    <div class="click-to-close-menu-mobile" @click="toggleSidebar">
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "assets/style/variables" as *;

header {
  padding: 25px;
  background-color: transparent;
  width: 100%;

  nav {
    position: relative;
    background: var(--bg-solid-blue-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: $rl-app-desktop-br-lg;

    .mobile-nav {
      display: none;
    }

    .homepage-logo {
      position: relative;
      display: block;
      width: 45px;
      height: 50px;

      .triangle-up {
        transition: all 300ms ease-in-out;
        position: absolute;
        width: 0;
        height: 0;
        left: 22px;
        top: 32px;
        border-left: 8px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 13px solid $rl-app-blue-50;
        z-index: 99;
      }

      .vertical-left {
        transition: all 300ms ease-in-out;
        position: absolute;
        height: 20px;
        width: 30px;
        bottom: 5px;
        left: 0;
        background-color: $rl-app-blue-50;
        border-radius: 0 0 1px 1px;
      }

      .vertical-right {
        transition: all 300ms ease-in-out;
        position: absolute;
        height: 28px;
        width: 40px;
        top: 5px;
        left: 0;
        bottom: 5px;
        background-color: $rl-app-blue-50;
        border-radius: 1px 20px 20px 1px;
      }

      .l-vertical-left {
        transition: all 300ms ease-in-out;
        position: absolute;
        width: 6px;
        top: 5px;
        left: 0;
        bottom: 5px;
        background-color: $rl-app-blue-100;
      }

      .l-horizontal-bottom {
        transition: all 300ms ease-in-out;
        position: absolute;
        left: 0;
        bottom: 5px;
        height: 6px;
        width: 20px;
        background-color: $rl-app-blue-100;
      }

      &:hover {
        .triangle-up {
          border-bottom-color: $rl-app-blue-100;
        }

        .vertical-left, .vertical-right {
          background-color: $rl-app-blue-100;
        }

        .l-vertical-left {
          width: 13px;
          background-color: $rl-app-blue-300;
        }

        .l-horizontal-bottom {
          height: 13px;
          background-color: $rl-app-blue-300;
        }
      }

      &.router-link-active {
        .triangle-up {
          border-bottom-color: $rl-app-brown-500;
        }

        .vertical-left, .vertical-right {
          background-color: $rl-app-brown-500;
        }

        .l-vertical-left {
          background-color: $rl-app-brown-700;
        }

        .l-horizontal-bottom {
          background-color: $rl-app-brown-700;
        }

        &:hover {
          .triangle-up {
            border-bottom-color: $rl-app-brown-200;
          }

          .vertical-left, .vertical-right {
            background-color: $rl-app-brown-200;
          }

          .l-vertical-left {
            width: 13px;
            background-color: $rl-app-brown-400;
          }

          .l-horizontal-bottom {
            height: 13px;
            background-color: $rl-app-brown-400;
          }
        }
      }
    }

    .nav-links {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 12px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: $rl-app-blue-50;
        //font-size: $rl-app-desktop-fs-sm;
        font-size: clamp(10px, 1vw + 0.1rem, 28px);
        height: 42px;
        text-decoration: none;
        text-transform: uppercase;
        border-bottom: 2px solid transparent;
        padding: 6pt;
        background-color: transparent;
        transition: all ease-in-out 300ms;
        gap: 6px;

        &:hover {
          color: $rl-app-brown-500;
          border-bottom: 2px solid $rl-app-brown-500;
        }

        &.router-link-active {
          color: $rl-app-brown-500;
          border-bottom: 2px solid $rl-app-brown-500;
        }
      }
    }

    .switch-theme {
      width: 46px;
      position: relative;
      border-radius: 20px;
      cursor: pointer;
      padding: 2px;
      display: flex;
      align-items: center;
      border: 1px solid $rl-app-blue-50;
      background-color: var(--bg-solid-blue-2);
      transition: background-color 300ms; // Transições de cor continuam válidas
      justify-content: start;

      .material-icons {
        border-radius: 50%;
        background-color: $rl-app-blue-50;
        color: var(--bg-solid-blue-2);
        border: 1px solid $rl-app-blue-50;
        //font-size: 18px;
        font-size: clamp(10px, 1vw + 0.1rem, 28px);
        height: 18px;
        width: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 300ms;
        transform: translateX(0);
      }

      &.light .material-icons {
        transform: translateX(0);
      }

      &:not(.light) .material-icons {
        transform: translateX(22px);
      }
    }
  }

  .click-to-close-menu-mobile {
    display: none;
  }
}

@media (max-width: 600px) {
  header {
    padding: 12px;
    z-index: 99;
    position: fixed;

    nav {
      position: relative;
      transition: all 200ms ease-in-out;
      flex-direction: column;
      padding: 0;

      .homepage-logo, .switch-theme {
        display: none;
      }

      .mobile-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 12px;

        .menu-mobile {
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .material-icons {
            color: $rl-app-blue-50;
            margin: 0 !important;
          }
        }

        .homepage-logo, .switch-theme {
          display: block;
        }
      }

      .nav-links {
        background: var(--bg-solid-blue-2);
        width: 100%;
        z-index: -1;
        flex-direction: column;
        height: 0;
        border-radius: 0 0 $rl-app-desktop-br-lg $rl-app-desktop-br-lg;
        transition: all 300ms ease-in-out;
        overflow: hidden;
        padding: 0;
        gap: 0;

        a {
          justify-content: start;
          width: 100%;
          padding: 12px;
          height: auto;
          opacity: 0;
          transition: opacity 250ms ease-in-out;

          &:not(:last-child) {
            margin-right: 0;
          }

          &:last-child {
            border-radius: 0 0 $rl-app-desktop-br-lg $rl-app-desktop-br-lg;
          }

          &.router-link-active {
            color: $rl-app-brown-500;
            border-bottom: 1px solid $rl-app-brown-500;
            border-top: 1px solid $rl-app-brown-500;
          }
        }
      }
    }

    &.show-menu {
      nav {
        z-index: 999;
        border-bottom: none;

        .nav-links {
          z-index: 9;
          height: 200px;
          border-top: none;

          a {
            opacity: 1;
          }
        }
      }

      .click-to-close-menu-mobile {
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        overflow: hidden;
      }
    }
  }
}

@media (min-width: 601px) and (max-width: 750px) {
  header {
    padding: 12px;
    z-index: 99;
    position: fixed;

    nav {
      position: relative;
      transition: all 200ms ease-in-out;
      flex-grow: 1;
      overflow: hidden;

      .nav-links {
        gap: 16px;

        a {
          gap: 4px;
          flex-direction: column;
          padding: 3pt;
          height: auto;
        }
      }
    }
  }
}

</style>