<script lang="ts" setup>
import {ref} from 'vue'
import AppFooter from "~/layouts/AppFooter.vue";
import { useSidebar } from '~/composables/useSidebar';

const toggleLeftSideBar = ref(false)
const toggleLeftSideBarMobile = useSidebar()
const photoUrl = ref('/images/1629036542049_2.jpg')
</script>

<template>
  <div class="left-sidebar" :class="{'toggle-menu-left-sidebar': toggleLeftSideBar,
   'toggle-menu-left-sidebar-mobile': toggleLeftSideBarMobile}">
    <section class="ls-header">
<!--      <svg @click="toggleLeftSideBar = !toggleLeftSideBar"-->
<!--           class="toggle-left-sidebar"-->
<!--           xmlns="http://www.w3.org/2000/svg"-->
<!--           viewBox="0 0 24 24">-->
<!--        <title>Recolher menu lateral</title>-->
<!--        <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" />-->
<!--      </svg>-->

      <svg
          @click="toggleLeftSideBarMobile = !toggleLeftSideBarMobile"
          class="toggle-left-sidebar-mobile"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Fechar</title>
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>

      <img :src="photoUrl" alt="Foto"/>
      <span class="ls-text-title">Rafael Leonan</span>
      <span class="ls-text-subtitle">Desenvolvedor Full Stack</span>
    </section>
    <section class="ls-content">
      <div class="ls-links">
        <a class="ls-link" href="http://www.linkedin.com/in/rafael-leonan" rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
          <span>rafael-leonan</span>
        </a>
        <a class="ls-link" href="https://github.com/rafaelleonan" rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
          <span>rafaelleonan</span>
        </a>
        <a class="ls-link" href="https://hub.docker.com/u/rafaelleonan" rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.81 10.25C21.75 10.21 21.25 9.82 20.17 9.82C19.89 9.82 19.61 9.85 19.33 9.9C19.12 8.5 17.95 7.79 17.9 7.76L17.61 7.59L17.43 7.86C17.19 8.22 17 8.63 16.92 9.05C16.72 9.85 16.84 10.61 17.25 11.26C16.76 11.54 15.96 11.61 15.79 11.61H2.62C2.28 11.61 2 11.89 2 12.24C2 13.39 2.18 14.54 2.58 15.62C3.03 16.81 3.71 17.69 4.58 18.23C5.56 18.83 7.17 19.17 9 19.17C9.79 19.17 10.61 19.1 11.42 18.95C12.54 18.75 13.62 18.36 14.61 17.79C15.43 17.32 16.16 16.72 16.78 16C17.83 14.83 18.45 13.5 18.9 12.35H19.09C20.23 12.35 20.94 11.89 21.33 11.5C21.59 11.26 21.78 10.97 21.92 10.63L22 10.39L21.81 10.25M3.85 11.24H5.61C5.69 11.24 5.77 11.17 5.77 11.08V9.5C5.77 9.42 5.7 9.34 5.61 9.34H3.85C3.76 9.34 3.69 9.41 3.69 9.5V11.08C3.7 11.17 3.76 11.24 3.85 11.24M6.28 11.24H8.04C8.12 11.24 8.2 11.17 8.2 11.08V9.5C8.2 9.42 8.13 9.34 8.04 9.34H6.28C6.19 9.34 6.12 9.41 6.12 9.5V11.08C6.13 11.17 6.19 11.24 6.28 11.24M8.75 11.24H10.5C10.6 11.24 10.67 11.17 10.67 11.08V9.5C10.67 9.42 10.61 9.34 10.5 9.34H8.75C8.67 9.34 8.6 9.41 8.6 9.5V11.08C8.6 11.17 8.66 11.24 8.75 11.24M11.19 11.24H12.96C13.04 11.24 13.11 11.17 13.11 11.08V9.5C13.11 9.42 13.05 9.34 12.96 9.34H11.19C11.11 9.34 11.04 9.41 11.04 9.5V11.08C11.04 11.17 11.11 11.24 11.19 11.24M6.28 9H8.04C8.12 9 8.2 8.91 8.2 8.82V7.25C8.2 7.16 8.13 7.09 8.04 7.09H6.28C6.19 7.09 6.12 7.15 6.12 7.25V8.82C6.13 8.91 6.19 9 6.28 9M8.75 9H10.5C10.6 9 10.67 8.91 10.67 8.82V7.25C10.67 7.16 10.61 7.09 10.5 7.09H8.75C8.67 7.09 8.6 7.15 8.6 7.25V8.82C8.6 8.91 8.66 9 8.75 9M11.19 9H12.96C13.04 9 13.11 8.91 13.11 8.82V7.25C13.11 7.16 13.04 7.09 12.96 7.09H11.19C11.11 7.09 11.04 7.15 11.04 7.25V8.82C11.04 8.91 11.11 9 11.19 9M11.19 6.72H12.96C13.04 6.72 13.11 6.65 13.11 6.56V5C13.11 4.9 13.04 4.83 12.96 4.83H11.19C11.11 4.83 11.04 4.89 11.04 5V6.56C11.04 6.64 11.11 6.72 11.19 6.72M13.65 11.24H15.41C15.5 11.24 15.57 11.17 15.57 11.08V9.5C15.57 9.42 15.5 9.34 15.41 9.34H13.65C13.57 9.34 13.5 9.41 13.5 9.5V11.08C13.5 11.17 13.57 11.24 13.65 11.24" /></svg>
          <span>rafaelleonan</span>
        </a>
        <a class="ls-link" href="tel:+5585984491127" rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4,3A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.17L13.21,17.37C10.38,15.93 8.06,13.62 6.62,10.78L8.82,8.57C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4M15,3V4.5H18.5L13,10L14,11L19.5,5.5V9H21V3H15Z" />
          </svg>
          <span>(85) 9 8449-1127</span>
        </a>
        <a class="ls-link" href="https://wa.me/5585984491127?text=Olá!%20Gostaria%20de%20saber..." rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
          </svg>
          <span>(85) 9 8449-1127</span>
        </a>
        <a class="ls-link" href="mailto:faelleonan@gmail.com?subject=Assunto%20Aqui&body=Olá!%20Gostaria%20de%20saber..." rel="noopener noreferrer" target="_blank">
          <svg class="ls-svg-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          <span>faelleonan@gmail.com</span>
        </a>
      </div>
    </section>
    <AppFooter/>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/style/variables" as *;

.left-sidebar {
  z-index: 99;
  width: 250px;
  height: 100%;
  background-color: $rl-app-blue-500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: width 250ms ease-out;

  &.toggle-menu-left-sidebar {
    width: 85px;

    .ls-header,
    .ls-content {
      padding: 20px 10px 10px;
    }

    .ls-header {
      text-align: center;

      .toggle-left-sidebar {
        transform: rotateY(180deg);
      }

      .ls-text-title {
        color: $rl-app-blue-200;
        font-size: 8pt;
        font-weight: 800;
        margin-top: 15px;
      }

      .ls-text-subtitle {
        color: $rl-app-blue-200;
        font-size: 6pt;
        font-weight: 300;
        margin-top: 10px;
      }
    }

    .ls-content {
      .ls-links {
        .ls-link {
          justify-content: center;

          span {
            display: none;
          }
        }
      }
    }
  }

  .ls-header,
  .ls-content {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 25px 30px 15px;
  }

  .ls-header {
    justify-content: center;
    padding: 36px 30px 25px;
    border-bottom: 1px solid $rl-app-blue-200;

    .toggle-left-sidebar-mobile {
      display: none;
    }

    .toggle-left-sidebar {
      position: absolute;
      z-index: 99;
      right: 0;
      top: 33px;
      width: 20px;
      cursor: pointer;
      fill: $rl-app-blue-200;
      transition: all 500ms ease-out;

      &:hover {
        fill: $rl-app-brown-500;
      }
    }

    .ls-text-title {
      color: $rl-app-blue-200;
      font-size: 14px;
      font-weight: 800;
      margin-top: 25px;
    }

    .ls-text-subtitle {
      color: $rl-app-blue-200;
      font-size: 12px;
      font-weight: 300;
      margin-top: 10px;
    }

    img {
      width: 65%;
      border-radius: 10px;
      border: 2px solid $rl-app-blue-200;
    }
  }

  .ls-content {
    align-items: end;
    flex: 1;

    .ls-links {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 15px 0;

      .ls-link {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid $rl-app-blue-200;
        transition: border 500ms;
        overflow: hidden;
        text-wrap: nowrap;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;

        &:not(:first-child) {
          margin-top: 10px;
        }

        .ls-svg-link {
          fill: $rl-app-blue-200;
          width: 20px;
          height: 20px;
          transition: fill 500ms;
          flex-shrink: 0;
        }

        span {
          margin-left: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 10px;
          color: $rl-app-blue-200;
          flex-grow: 1;
          transition: color 500ms;
        }

        &:hover {
          cursor: pointer;
          border-color: $rl-app-brown-500;

          .ls-svg-link {
            fill: $rl-app-brown-500;
          }

          span {
            color: $rl-app-brown-500;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .left-sidebar {
    position: absolute;
    width: 100%;
    overflow: hidden;
    display: none;

    &.toggle-menu-left-sidebar-mobile {
      display: flex;
    }

    .ls-header {
      .toggle-left-sidebar {
        display: none;
      }

      .toggle-left-sidebar-mobile {
        display: block;
        position: absolute;
        z-index: 99;
        right: 20px;
        top: 33px;
        width: 30px;
        cursor: pointer;
        fill: $rl-app-blue-200;
      }
    }
  }
}

</style>