<script lang="ts" setup>
import { useSidebar } from '~/composables/useSidebar';
import {ref} from "vue";

const isSidebarVisible = useSidebar();
const photoUrl = ref('/images/1629036542049_2.jpg')

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
  <header>
    <nav :class="{'show-menu': isSidebarVisible}">
      <div class="header-profile">
        <img :src="photoUrl" alt="Foto"/>
        <div class="app-header-text">
          <span>Rafael Leonan</span>
          <span>Desenvolvedor Full Stack</span>
        </div>
      </div>
      <div class="btn-menu-mobile" @click="toggleSidebar">
        <svg v-if="!isSidebarVisible" class="svg-icon" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-icon-part-1" d="M0 18.4609H28V15.4609H0V18.4609ZM0 10.9609H28V7.96094H0V10.9609ZM0 0.460938V3.46094H28V0.460938H0Z"/>
        </svg>

        <svg v-else class="svg-icon" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-icon-part-1" d="M11.2258 23.986L0.354839 13.3475C0.225806 13.2208 0.134624 13.0836 0.0812903 12.9359C0.0270968 12.7881 0 12.6298 0 12.4609C0 12.2921 0.0270968 12.1338 0.0812903 11.986C0.134624 11.8382 0.225806 11.701 0.354839 11.5744L11.2258 0.904209C11.5269 0.608695 11.9032 0.460938 12.3548 0.460938C12.8065 0.460938 13.1935 0.619249 13.5161 0.935872C13.8387 1.25249 14 1.62189 14 2.04405C14 2.46621 13.8387 2.83561 13.5161 3.15223L4.03226 12.4609L13.5161 21.7696C13.8172 22.0652 13.9677 22.4291 13.9677 22.8614C13.9677 23.2945 13.8065 23.6694 13.4839 23.986C13.1613 24.3026 12.7849 24.4609 12.3548 24.4609C11.9247 24.4609 11.5484 24.3026 11.2258 23.986Z"/>
        </svg>
      </div>
      <nuxt-link to="/">
        <svg class="svg-icon" viewBox="0 0 230 177" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 177V0H93C139 0 191.5 75.5 131.5 129L155.5 177H0Z" class="svg-icon-part-1" fill="$secondary-color"/>
          <path d="M211 0H176.5V69H230V34.5H211V0Z" class="svg-icon-part-2" fill="$secondary-color"/>
          <path d="M176 88V83H229.5V88H176Z" class="svg-icon-part-3" fill="$tertiary-color" stroke="$tertiary-color"/>
        </svg>
        <span>Início</span>
      </nuxt-link>
<!--      <nuxt-link to="/experience">-->
<!--        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--          <path class="svg-icon-part-1" d="M21 11.11V7A2 2 0 0 0 19 5H15V3A2 2 0 0 0 13 1H9A2 2 0 0 0 7 3V5H3A2 2 0 0 0 1 7V18A2 2 0 0 0 3 20H10.26A7 7 0 1 0 21 11.11M9 3H13V5H9M19 20A5 5 0 0 1 13 20A5 5 0 1 1 19 20M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13" />-->
<!--        </svg>-->
<!--        <span>Experiências</span>-->
<!--      </nuxt-link>-->
      <nuxt-link to="/resume">
        <svg class="svg-icon" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-icon-part-1" d="M8.375 0.25C10.7875 0.25 12.75 2.2125 12.75 4.625C12.75 7.0375 10.7875 9 8.375 9C5.9625 9 4 7.0375 4 4.625C4 2.2125 5.9625 0.25 8.375 0.25ZM0.25 17.75V14.625C0.25 12.2125 4.575 10.25 8.375 10.25C9.85 10.25 11.4 10.55 12.75 11.05V17.75H0.25ZM26.5 17.75H16.5C15.8125 17.75 15.25 17.1875 15.25 16.5V1.5C15.25 0.8125 15.8125 0.25 16.5 0.25H22.75L27.75 5.25V16.5C27.75 17.1875 27.1875 17.75 26.5 17.75ZM21.5 6.5H25.25V6.2875L21.7125 2.75H21.5V6.5ZM17.75 9V10.875H25.25V9H17.75ZM17.75 12.75V14.625H25.25V12.75H17.75Z" fill="#969DA1"/>
        </svg>
        <span>Resumo</span>
      </nuxt-link>
      <nuxt-link to="/certifications">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>certificate</title>
          <path class="svg-icon-part-1" d="M4,3C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H12V22L15,19L18,22V17H20A2,2 0 0,0 22,15V8L22,6V5A2,2 0 0,0 20,3H16V3H4M12,5L15,7L18,5V8.5L21,10L18,11.5V15L15,13L12,15V11.5L9,10L12,8.5V5M4,5H9V7H4V5M4,9H7V11H4V9M4,13H9V15H4V13Z" />
        </svg>
        <span>Certificações</span>
      </nuxt-link>
<!--      <nuxt-link to="/projects">-->
<!--        <svg class="svg-icon" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--          <path class="svg-icon-part-1" d="M8.09028 13L10.1389 10.9514C10.4167 10.6736 10.5556 10.3495 10.5556 9.97917C10.5556 9.6088 10.4167 9.28472 10.1389 9.00694C9.86111 8.72917 9.53148 8.59028 9.15 8.59028C8.76759 8.59028 8.4375 8.72917 8.15972 9.00694L5.13889 12.0278C5 12.1667 4.90185 12.3171 4.84444 12.4792C4.78611 12.6412 4.75694 12.8148 4.75694 13C4.75694 13.1852 4.78611 13.3588 4.84444 13.5208C4.90185 13.6829 5 13.8333 5.13889 13.9722L8.15972 16.9931C8.4375 17.2708 8.76759 17.4097 9.15 17.4097C9.53148 17.4097 9.86111 17.2708 10.1389 16.9931C10.4167 16.7153 10.5556 16.3912 10.5556 16.0208C10.5556 15.6505 10.4167 15.3264 10.1389 15.0486L8.09028 13ZM16.9097 13L14.8611 15.0486C14.5833 15.3264 14.4444 15.6505 14.4444 16.0208C14.4444 16.3912 14.5833 16.7153 14.8611 16.9931C15.1389 17.2708 15.469 17.4097 15.8514 17.4097C16.2329 17.4097 16.5625 17.2708 16.8403 16.9931L19.8611 13.9722C20 13.8333 20.0981 13.6829 20.1556 13.5208C20.2139 13.3588 20.2431 13.1852 20.2431 13C20.2431 12.8148 20.2139 12.6412 20.1556 12.4792C20.0981 12.3171 20 12.1667 19.8611 12.0278L16.8403 9.00694C16.7014 8.86806 16.5454 8.76389 16.3722 8.69444C16.1981 8.625 16.0245 8.59028 15.8514 8.59028C15.6773 8.59028 15.5037 8.625 15.3306 8.69444C15.1565 8.76389 15 8.86806 14.8611 9.00694C14.5833 9.28472 14.4444 9.6088 14.4444 9.97917C14.4444 10.3495 14.5833 10.6736 14.8611 10.9514L16.9097 13ZM2.77778 25.5C2.01389 25.5 1.35972 25.2282 0.815278 24.6847C0.271759 24.1403 0 23.4861 0 22.7222V3.27778C0 2.51389 0.271759 1.85972 0.815278 1.31528C1.35972 0.771759 2.01389 0.5 2.77778 0.5H22.2222C22.9861 0.5 23.6403 0.771759 24.1847 1.31528C24.7282 1.85972 25 2.51389 25 3.27778V22.7222C25 23.4861 24.7282 24.1403 24.1847 24.6847C23.6403 25.2282 22.9861 25.5 22.2222 25.5H2.77778Z" fill="#969DA1"/>-->
<!--        </svg>-->
<!--        <span>Projetos</span>-->
<!--      </nuxt-link>-->
<!--      <nuxt-link to="/bitcoin">-->
<!--        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--          <path class="svg-icon-part-1" d="M17.06 11.57C17.65 10.88 18 10 18 9C18 7.14 16.73 5.57 15 5.13V3H13V5H11V3H9V5H6V7H8V17H6V19H9V21H11V19H13V21H15V19C17.21 19 19 17.21 19 15C19 13.55 18.22 12.27 17.06 11.57M10 7H14C15.1 7 16 7.9 16 9S15.1 11 14 11H10V7M15 17H10V13H15C16.1 13 17 13.9 17 15S16.1 17 15 17Z" />-->
<!--        </svg>-->
<!--        <span>BTC</span>-->
<!--      </nuxt-link>-->
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "assets/style/variables.scss";

header {
  padding: 25px 25px 0 25px;
  background-color: transparent;
  width: 100%;

  nav {
    position: relative;
    background-color: $rl-app-blue-500;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 100px;
    height: 68px;
    border-radius: $rl-app-desktop-br-lg;
    box-shadow: 4px 4px 4px $rl-app-black-50;

    .header-profile {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        height: 98px;
        left: 0;
        border-radius: $rl-app-desktop-br-lg;
        box-shadow: 4px 4px 4px $rl-app-black-50;
      }

      .app-header-text {
        display: flex;
        flex-direction: column;
        margin: 0 22px;
        padding-right: 22px;

        span {
          color: $rl-app-blue-50;

          &:first-child {
            font-size: $rl-app-desktop-fs-xxl;
            font-weight: 500;
          }

          &:last-child {
            font-size: $rl-app-desktop-fs-md;
            font-weight: lighter;
            text-transform: uppercase;
          }
        }
      }
    }

    .btn-menu-mobile {
      display: none;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $rl-app-blue-200;
      font-size: $rl-app-desktop-fs-sm;
      height: 42px;
      text-decoration: none;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      padding: 6pt;
      background-color: transparent;
      transition: all ease-in-out 300ms;

      &:not(:last-child) {
        margin-right: 26px;
      }

      .svg-icon {
        width: 24px;
        margin-right: 12px;

        .svg-icon-part-1,
        .svg-icon-part-2 {
          fill: $rl-app-blue-200;
          transition: fill ease-in-out 300ms;
        }
      }

      &:hover {
        color: $rl-app-brown-500;
        fill: $rl-app-brown-500;
        border-bottom: 2px solid $rl-app-brown-500;

        .svg-icon {
          .svg-icon-part-1,
          .svg-icon-part-2 {
            fill: $rl-app-brown-500;
          }
        }
      }

      &.router-link-active {
        color: $rl-app-brown-500;
        fill: $rl-app-brown-500;
        border-bottom: 2px solid $rl-app-brown-500;

        .svg-icon {
          .svg-icon-part-1,
          .svg-icon-part-2 {
            fill: $rl-app-brown-500;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  header {
    position: fixed;
    padding: 0 12px 12px 12px;
    z-index: 999;

    nav {
      justify-content: start;
      padding-left: 0;
      gap: 8px;
      height: 48px;
      width: 48px;

      &.show-menu {
        width: 100%;

        a {
          display: flex;
        }

        .btn-menu-mobile {
          .svg-icon {
            width: 14px;
          }
        }
      }

      .header-profile {
        display: none;
      }

      .btn-menu-mobile {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 48px;

        .svg-icon {
          fill: $rl-app-blue-50;
          width: 28px;
        }
      }

      a {
        display: none;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        color: $rl-app-blue-50;
        font-size: $rl-app-desktop-fs-xxs;
        text-decoration: none;
        text-transform: uppercase;
        border-bottom: none;
        background-color: transparent;
        transition: all ease-in-out 300ms;
        height: 100%;

        &:not(:last-child) {
          margin-right: 0;
        }

        .svg-icon {
          transform: scale(0.9);
          margin-bottom: 2px;
          margin-right: 0 !important;

          .svg-icon-part-1,
          .svg-icon-part-2 {
            fill: $rl-app-blue-50;
          }
        }

        &.router-link-active, &:hover {
          border-bottom: none;
        }
      }
    }
  }
}

@media (min-width: 601px) and (max-width: 850px) {
  header {
    padding: 15px 15px 0 15px;

    nav {
      padding-left: 50px;
      height: 50px;

      .header-profile {
        img {
          height: 70px;
        }

        .app-header-text {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          margin-right: 10px;
          padding-right: 10px;

          span {
            &:first-child {
              font-size: $rl-app-desktop-fs-xm;
            }

            &:last-child {
              font-size: $rl-app-desktop-fs-xxs;
            }
          }
        }
      }

      .btn-menu-mobile {
        display: none;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: $rl-app-blue-200;
        font-size: $rl-app-desktop-fs-xxs;
        height: 35px;
        padding: 4px;

        &:not(:last-child) {
          margin-right: 8px;
        }

        .svg-icon {
          width: 18px;
          margin-right: 8px;
        }
      }
    }
  }
}

</style>