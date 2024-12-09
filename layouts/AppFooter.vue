<script lang="ts" setup>
import {useToggleHeaderMobile} from "~/composables/useToggleHeaderMobile";
import {ref} from "vue";

const isHeaderMobileVisible = useToggleHeaderMobile();

const toggleHeaderMobile = () => isHeaderMobileVisible.value = !isHeaderMobileVisible.value

const copyText = (message: string) => {
  const tempInput = document.createElement("textarea");
  tempInput.value = message;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

const callPhone = () => window.open('tel:85984491127', '_blank');

const sendWhatsapp = () => window.open('https://wa.me/5585984491127', 'blank')

const sendEmail = () => window.open('mailto:faelleonan@gmail.com', 'blank')

const photoUrl = ref('/images/1629036542049_2.jpg')

</script>

<template>
  <footer :class="{'show-header-mobile': isHeaderMobileVisible}">
    <div class="footer">
      <div class="app-footer">
        <section class="section-info-mobile">
          <img :src="photoUrl" alt="Foto"/>
          <div class="app-header-text">
            <span>Rafael Leonan</span>
            <span>Desenvolvedor Full Stack</span>
          </div>
        </section>
        <section class="section-contacts">
          <a class="item-contact" tabindex="0">
            <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.62337 5.5H6.95671V7.16667H8.62337V5.5ZM11.9567 5.5H10.29V7.16667H11.9567V5.5ZM14.4567 10.9167C13.415 10.9167 12.415 10.75 11.4817 10.4417C11.19 10.35 10.865 10.4167 10.6317 10.6417L8.79837 12.475C6.44004 11.275 4.50671 9.35 3.30671 6.99167L5.14004 5.15C5.37337 4.925 5.44004 4.6 5.34837 4.30833C5.04004 3.375 4.87337 2.375 4.87337 1.33333C4.87337 0.875 4.49837 0.5 4.04004 0.5H1.12337C0.665039 0.5 0.290039 0.875 0.290039 1.33333C0.290039 9.15833 6.63171 15.5 14.4567 15.5C14.915 15.5 15.29 15.125 15.29 14.6667V11.75C15.29 11.2917 14.915 10.9167 14.4567 10.9167ZM13.6234 5.5V7.16667H15.29V5.5H13.6234Z"/>
            </svg>
            <span>(85) 9 8449-1127</span>
            <ul class="item-options">
              <li class="item-option" @click="copyText('(85) 9 8449-1127')">
                <svg class="icon" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0.75H2C1.175 0.75 0.5 1.425 0.5 2.25V12.75H2V2.25H11V0.75ZM13.25 3.75H5C4.175 3.75 3.5 4.425 3.5 5.25V15.75C3.5 16.575 4.175 17.25 5 17.25H13.25C14.075 17.25 14.75 16.575 14.75 15.75V5.25C14.75 4.425 14.075 3.75 13.25 3.75ZM13.25 15.75H5V5.25H13.25V15.75Z"/>
                </svg>
                COPIAR TELEFONE
              </li>
              <li class="item-option" @click="callPhone">
                <svg class="icon" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 9.625C12.0625 9.625 11.1625 9.475 10.3225 9.1975C10.06 9.115 9.7675 9.175 9.5575 9.3775L7.9075 11.0275C5.785 9.9475 4.045 8.215 2.965 6.085L4.615 4.4275C4.825 4.2325 4.885 3.94 4.8025 3.6775C4.525 2.8375 4.375 1.9375 4.375 1C4.375 0.5875 4.0375 0.25 3.625 0.25H1C0.5875 0.25 0.25 0.5875 0.25 1C0.25 8.0425 5.9575 13.75 13 13.75C13.4125 13.75 13.75 13.4125 13.75 13V10.375C13.75 9.9625 13.4125 9.625 13 9.625ZM12.25 7H13.75C13.75 3.2725 10.7275 0.25 7 0.25V1.75C9.9025 1.75 12.25 4.0975 12.25 7ZM9.25 7H10.75C10.75 4.93 9.07 3.25 7 3.25V4.75C8.245 4.75 9.25 5.755 9.25 7Z"/>
                </svg>
                REALIZAR LIGAÇÃO
              </li>
              <li class="item-option" @click="sendWhatsapp">
                <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2876 2.6825C11.8851 1.2725 10.0176 0.5 8.0301 0.5C3.9351 0.5 0.597598 3.8375 0.597598 7.9325C0.597598 9.245 0.942598 10.52 1.5876 11.645L0.537598 15.5L4.4751 14.465C5.5626 15.0575 6.7851 15.3725 8.0301 15.3725C12.1251 15.3725 15.4626 12.035 15.4626 7.94C15.4626 5.9525 14.6901 4.085 13.2876 2.6825ZM8.0301 14.1125C6.9201 14.1125 5.8326 13.8125 4.8801 13.25L4.6551 13.115L2.3151 13.73L2.9376 11.45L2.7876 11.2175C2.1726 10.235 1.8426 9.095 1.8426 7.9325C1.8426 4.5275 4.6176 1.7525 8.0226 1.7525C9.6726 1.7525 11.2251 2.3975 12.3876 3.5675C13.5576 4.7375 14.1951 6.29 14.1951 7.94C14.2101 11.345 11.4351 14.1125 8.0301 14.1125ZM11.4201 9.4925C11.2326 9.4025 10.3176 8.9525 10.1526 8.885C9.9801 8.825 9.8601 8.795 9.7326 8.975C9.6051 9.1625 9.2526 9.5825 9.1476 9.7025C9.0426 9.83 8.9301 9.845 8.7426 9.7475C8.5551 9.6575 7.9551 9.455 7.2501 8.825C6.6951 8.33 6.3276 7.7225 6.2151 7.535C6.1101 7.3475 6.2001 7.25 6.2976 7.1525C6.3801 7.07 6.4851 6.935 6.5751 6.83C6.6651 6.725 6.7026 6.6425 6.7626 6.5225C6.8226 6.395 6.7926 6.29 6.7476 6.2C6.7026 6.11 6.3276 5.195 6.1776 4.82C6.0276 4.46 5.8701 4.505 5.7576 4.4975C5.6451 4.4975 5.5251 4.4975 5.3976 4.4975C5.2701 4.4975 5.0751 4.5425 4.9026 4.73C4.7376 4.9175 4.2576 5.3675 4.2576 6.2825C4.2576 7.1975 4.9251 8.0825 5.0151 8.2025C5.1051 8.33 6.3276 10.205 8.1876 11.0075C8.6301 11.2025 8.9751 11.315 9.2451 11.3975C9.6876 11.54 10.0926 11.5175 10.4151 11.4725C10.7751 11.42 11.5176 11.0225 11.6676 10.5875C11.8251 10.1525 11.8251 9.785 11.7726 9.7025C11.7201 9.62 11.6076 9.5825 11.4201 9.4925Z"/>
                </svg>
                MENSAGEM WHATSAPP
              </li>
            </ul>
          </a>
          <a class="item-contact" tabindex="0">
            <svg class="icon" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9777 7.91667C11.1305 8.02778 11.2902 8.08333 11.4569 8.08333C11.6235 8.08333 11.7833 8.02778 11.936 7.91667L17.2902 4.1875V2.16667L11.4569 6.20833L5.62354 2.16667V4.1875L10.9777 7.91667ZM2.2902 15.5C1.83187 15.5 1.43951 15.3368 1.11312 15.0104C0.78673 14.684 0.623535 14.2917 0.623535 13.8333V4.25C0.623535 4.01389 0.703396 3.81597 0.863118 3.65625C1.02284 3.49653 1.22076 3.41667 1.45687 3.41667C1.69298 3.41667 1.8909 3.49653 2.05062 3.65625C2.21034 3.81597 2.2902 4.01389 2.2902 4.25V13.8333H15.2069C15.443 13.8333 15.6409 13.9132 15.8006 14.0729C15.9603 14.2326 16.0402 14.4306 16.0402 14.6667C16.0402 14.9028 15.9603 15.1007 15.8006 15.2604C15.6409 15.4201 15.443 15.5 15.2069 15.5H2.2902ZM5.62354 12.1667C5.1652 12.1667 4.77284 12.0035 4.44645 11.6771C4.12006 11.3507 3.95687 10.9583 3.95687 10.5V2.16667C3.95687 1.70833 4.12006 1.31597 4.44645 0.989583C4.77284 0.663194 5.1652 0.5 5.62354 0.5H17.2902C17.7485 0.5 18.1409 0.663194 18.4673 0.989583C18.7937 1.31597 18.9569 1.70833 18.9569 2.16667V10.5C18.9569 10.9583 18.7937 11.3507 18.4673 11.6771C18.1409 12.0035 17.7485 12.1667 17.2902 12.1667H5.62354Z"/>
            </svg>
            <span>faelleonan@gmail.com</span>
            <ul class="item-options">
              <li class="item-option" @click="copyText('faelleonan@gmail.com')">
                <svg class="icon" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0.75H2C1.175 0.75 0.5 1.425 0.5 2.25V12.75H2V2.25H11V0.75ZM13.25 3.75H5C4.175 3.75 3.5 4.425 3.5 5.25V15.75C3.5 16.575 4.175 17.25 5 17.25H13.25C14.075 17.25 14.75 16.575 14.75 15.75V5.25C14.75 4.425 14.075 3.75 13.25 3.75ZM13.25 15.75H5V5.25H13.25V15.75Z"/>
                </svg>
                COPIAR EMAIL
              </li>
              <li class="item-option" @click="sendEmail">
                <svg class="icon" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5075 13.75L16.25 7L0.5075 0.25L0.5 5.5L11.75 7L0.5 8.5L0.5075 13.75Z"/>
                </svg>
                MENSAGEM EMAIL
              </li>
            </ul>
          </a>
        </section>
        <div class="divisor-vertical"></div>
        <section class="section-links">
          <a class="item-contact link" href="https://www.linkedin.com/in/rafael-leonan" rel="noopener noreferrer" target="_blank">
            <svg class="icon-link" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.9011 0.875H3.92893C2.19469 0.875 0.790039 2.27965 0.790039 4.01389V25.9861C0.790039 27.7203 2.19469 29.125 3.92893 29.125H25.9011C27.6354 29.125 29.04 27.7203 29.04 25.9861V4.01389C29.04 2.27965 27.6354 0.875 25.9011 0.875ZM10.2067 22.8472H6.247V11.8611H10.2067V22.8472ZM8.15701 9.84751C6.94697 9.84751 6.13871 9.04082 6.13871 7.96418C6.13871 6.88754 6.9454 6.08085 8.29041 6.08085C9.50045 6.08085 10.3087 6.88754 10.3087 7.96418C10.3087 9.04082 9.50202 9.84751 8.15701 9.84751ZM24.3317 22.8472H20.4991V16.8425C20.4991 15.1821 19.4774 14.7991 19.0945 14.7991C18.7115 14.7991 17.434 15.0549 17.434 16.8425C17.434 17.0983 17.434 22.8472 17.434 22.8472H13.4743V11.8611H17.434V13.3945C17.9441 12.4999 18.9658 11.8611 20.8821 11.8611C22.7984 11.8611 24.3317 13.3945 24.3317 16.8425V22.8472Z"/>
            </svg>
            <span>Rafael Leonan</span>
          </a>
          <a class="item-contact link" href="https://github.com/rafaelleonan" rel="noopener noreferrer" target="_blank">
            <svg class="icon-link" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6234 0.416748C6.56836 0.416748 0.0400391 6.94507 0.0400391 15.0001C0.0400391 23.0551 6.56836 29.5834 14.6234 29.5834C22.6784 29.5834 29.2067 23.0551 29.2067 15.0001C29.2067 6.94507 22.6784 0.416748 14.6234 0.416748ZM14.6234 3.33341C21.0548 3.33341 26.29 8.5686 26.29 15.0001C26.29 15.6837 26.2217 16.3559 26.1077 17.0053C25.7489 16.9255 25.2191 16.8287 24.6038 16.823C24.1481 16.8173 23.5785 16.8914 23.0999 16.9597C23.2651 16.4527 23.3734 15.8945 23.3734 15.3191C23.3734 13.9177 22.6898 12.6132 21.596 11.5365C21.8979 10.4143 22.1942 8.48885 21.4137 7.70842C19.1066 7.70842 17.8306 9.35474 17.7679 9.44019C17.0558 9.26929 16.321 9.16675 15.5348 9.16675C14.5265 9.16675 13.5638 9.34904 12.6637 9.62248L12.9372 9.39461C12.9372 9.39461 11.6554 7.61727 9.29134 7.61727C8.46533 8.44898 8.84131 10.5567 9.15462 11.6277C8.03809 12.693 7.33171 13.9519 7.33171 15.3191C7.33171 15.7976 7.44564 16.2533 7.55957 16.6863C7.15511 16.6407 5.69678 16.504 5.09863 16.504C4.56885 16.504 3.74854 16.6293 3.09342 16.7774C3.00228 16.1964 2.95671 15.6039 2.95671 15.0001C2.95671 8.5686 8.1919 3.33341 14.6234 3.33341ZM5.09863 16.8686C5.67399 16.8686 7.42285 17.0737 7.65072 17.0964C7.6792 17.1762 7.70768 17.2502 7.74186 17.3243C7.11524 17.2673 5.90186 17.1819 5.09863 17.2787C4.56315 17.3414 3.87956 17.5351 3.27572 17.6889C3.23014 17.5066 3.17318 17.33 3.139 17.142C3.77702 17.0053 4.61442 16.8686 5.09863 16.8686ZM24.6038 17.1876C25.1849 17.1933 25.7147 17.2901 26.0622 17.3699C26.0451 17.4667 25.9938 17.5465 25.971 17.6433C25.6007 17.5579 24.9912 17.4325 24.2848 17.4154C23.943 17.4097 23.3962 17.4268 22.9176 17.461C22.9404 17.4154 22.9461 17.3699 22.9632 17.3243C23.4588 17.2559 24.0911 17.1819 24.6038 17.1876ZM6.01009 17.5977C6.8304 17.6034 7.59945 17.6604 7.92415 17.6889C8.6875 19.113 10.2313 20.1669 12.6182 20.6056C12.0314 20.9303 11.5073 21.386 11.1143 21.9272C10.7725 21.9556 10.4136 21.9727 10.0661 21.9727C9.05208 21.9727 8.41976 21.067 7.87858 20.2865C7.33171 19.5061 6.65951 19.4207 6.28353 19.3751C5.90186 19.3295 5.77083 19.546 5.96452 19.6941C7.07536 20.5486 7.47412 21.5626 7.92415 22.474C8.32861 23.2944 9.17741 23.7501 10.1117 23.7501H10.2939C10.2655 23.9096 10.2484 24.0577 10.2484 24.2058V25.8009C6.88167 24.4394 4.3182 21.5626 3.36686 18.0079C3.96501 17.8598 4.63721 17.706 5.14421 17.6433C5.37777 17.6148 5.67399 17.592 6.01009 17.5977ZM24.2848 17.78C24.9399 17.7971 25.521 17.9224 25.8799 18.0079C25.0767 21.0271 23.0942 23.5393 20.4567 25.0717V24.2058C20.4567 22.9639 19.4769 21.3689 18.0869 20.6056C20.394 20.184 21.8979 19.1757 22.6898 17.8256C23.2423 17.7857 23.8918 17.7686 24.2848 17.78ZM15.3525 23.7501C15.7513 23.7501 16.0817 24.0805 16.0817 24.4792V26.5756C15.6032 26.6383 15.119 26.6667 14.6234 26.6667V24.4792C14.6234 24.0805 14.9538 23.7501 15.3525 23.7501ZM12.4359 25.2084C12.8346 25.2084 13.165 25.5388 13.165 25.9376V26.5756C12.6751 26.5129 12.1795 26.4218 11.7067 26.3022V25.9376C11.7067 25.5388 12.0371 25.2084 12.4359 25.2084ZM18.2692 25.2084C18.6224 25.2084 18.93 25.4648 18.9984 25.8009C18.5256 25.9945 18.0413 26.1711 17.54 26.3022V25.9376C17.54 25.5388 17.8704 25.2084 18.2692 25.2084Z"/>
            </svg>
            <span>rafaelleonan</span>
          </a>
          <a class="item-contact link" href="https://hub.docker.com/u/rafaelleonan" rel="noopener noreferrer" target="_blank">
            <svg class="icon-link" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1652 0.6875V5.0625H23.5402V0.6875H19.1652ZM7.49857 6.52083V10.8958H11.8736V6.52083H7.49857ZM13.3319 6.52083V10.8958H17.7069V6.52083H13.3319ZM19.1652 6.52083V10.8958H23.5402V6.52083H19.1652ZM26.9126 10.668C26.3658 10.7192 25.4201 11.6364 24.9986 12.3997C23.9333 14.3081 24.7479 16.7121 24.953 17.2305C24.4802 17.84 22.0819 18.1875 22.0819 18.1875H1.61966C0.423373 18.2274 0.206901 20.0047 0.206901 20.4206C0.155631 27.6667 5.61869 31.2954 11.828 31.3125C20.8173 31.341 26.2689 27.7578 29.4191 22.5625H33.7486C33.008 22.3745 32.0282 22.0669 32.2902 21.1042C31.9997 21.5314 30.9686 21.953 29.7382 22.0156C29.8635 21.7992 29.9888 21.5998 30.1027 21.3776C32.0339 21.2637 33.1447 20.3579 33.9764 19.5547C34.9278 18.6375 35.1499 18.1191 35.2069 17.5951C35.298 16.8032 33.1903 15.436 30.604 15.1341C30.3591 12.7358 27.7272 10.5882 26.9126 10.668ZM1.66523 12.3542V16.7292H6.04023V12.3542H1.66523ZM7.49857 12.3542V16.7292H11.8736V12.3542H7.49857ZM13.3319 12.3542V16.7292H17.7069V12.3542H13.3319ZM19.1652 12.3542V16.7292H23.5402V12.3542H19.1652ZM27.0949 13.7214C27.5165 14.1942 28.371 15.2594 28.5533 16.2279C28.6729 16.8602 29.5502 17.3558 30.1939 17.4128C31.1965 17.5039 31.8117 17.6976 32.3814 17.8685C32.1934 18.2274 30.9117 18.9907 29.0546 18.9167C28.559 18.8939 28.1032 19.1901 27.9152 19.6458C27.8013 19.9364 27.3798 20.5687 26.7759 21.332C26.6506 21.258 26.531 21.1896 26.4113 21.1042C25.7505 21.7251 22.6003 23.0125 20.578 21.1042C19.4387 22.4429 15.884 22.4429 14.7447 21.1042C14.3744 22.1296 9.82279 22.4201 8.91133 21.1042C8.65498 22.2891 4.57051 22.853 3.07799 21.1042V21.8333C3.04951 21.5827 3.04382 21.332 3.07799 21.1042C3.07799 21.1042 6.46178 21.1042 8.91133 21.1042C11.3609 21.1042 11.9932 21.1042 14.7447 21.1042C17.4961 21.1042 19.6608 21.1099 20.578 21.1042C20.8173 21.1042 22.0591 21.1042 22.0819 21.1042C25.0441 20.9219 26.474 19.2983 26.9582 18.9167C27.3285 18.6261 27.6988 17.8742 27.3684 17.3216C27.3456 17.2817 26.4626 14.7752 27.0949 13.7214ZM3.21471 22.5625H25.6822C23.1586 25.2057 18.5386 28.5439 11.828 28.3958C9.7943 28.3503 7.64668 28.0369 6.17695 26.8919C8.65498 26.8065 10.8254 26.3451 10.8254 26.3451C11.4577 26.2254 11.8565 25.6102 11.7368 24.9779C11.6172 24.3455 11.002 23.9012 10.3697 24.0208C10.3184 24.0322 7.01436 24.8411 3.98945 24.4766C3.81856 24.1632 3.44258 23.3942 3.21471 22.5625ZM12.5116 24.0208C12.1356 24.0208 11.828 24.3285 11.828 24.7044C11.828 25.0804 12.1356 25.388 12.5116 25.388C12.8876 25.388 13.1952 25.0804 13.1952 24.7044C13.1952 24.6133 13.1838 24.5563 13.1496 24.4766C13.104 24.562 12.9787 24.6133 12.8762 24.6133C12.7224 24.6133 12.6483 24.4481 12.6483 24.2943C12.6483 24.1917 12.654 24.1576 12.7395 24.112C12.6654 24.0835 12.597 24.0208 12.5116 24.0208Z"/>
            </svg>
            <span>rafaelleonan</span>
          </a>
        </section>
      </div>
      <div class="btn-toggle-header" @click="toggleHeaderMobile">
        <svg class="icon-arrow" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6438 1.98157L9.66491 9.74654C9.56992 9.83871 9.46702 9.90384 9.3562 9.94194C9.24538 9.98065 9.12665 10 9 10C8.87335 10 8.75462 9.98065 8.6438 9.94194C8.53298 9.90384 8.43008 9.83871 8.33509 9.74654L0.332454 1.98157C0.110818 1.76651 0 1.49769 0 1.17511C0 0.852534 0.118734 0.576036 0.356201 0.345622C0.593668 0.115207 0.870712 0 1.18734 0C1.50396 0 1.781 0.115207 2.01847 0.345622L9 7.11982L15.9815 0.345622C16.2032 0.130569 16.4761 0.0230408 16.8003 0.0230408C17.1252 0.0230408 17.4063 0.138248 17.6438 0.368663C17.8813 0.599078 18 0.867895 18 1.17511C18 1.48233 17.8813 1.75115 17.6438 1.98157Z"/>
        </svg>
      </div>
      <p>© 2024 Rafael Leonan</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "assets/style/variables.scss";

footer {
  width: 100%;

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 18px 10px;
    text-align: center;
    background-color: $rl-app-blue-500;
    color: $rl-app-blue-200;

    .app-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
      width: 100%;

      .section-links {
        display: flex;
        justify-content: start;
        align-items: center;
      }

      .section-info-mobile {
        display: none;
      }

      .section-contacts, .section-links {
        min-width: 220px;

        .item-contact {
          position: relative;
          padding: 8px 10px;
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 8px;
          color: $rl-app-blue-50;
          text-decoration: none;
          transition: all 250ms;
          cursor: pointer;
          border-radius: $rl-app-desktop-br-sm;

          ul {
            &.item-options {
              transition: all 250ms;
              left: 0;
              right: 0;
              top: 20px;
              z-index: -1;
              position: absolute;
              display: none;
              list-style: none;
              padding: 0;
              border-radius: 0 0 $rl-app-desktop-br-sm $rl-app-desktop-br-sm;

              .item-option {
                transition: all 250ms;
                width: 100%;
                padding: 8px;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 10px;
                background-color: $rl-app-blue-50;
                color: $rl-app-blue-500;
                font-size: $rl-app-desktop-fs-sm;
                font-weight: bold;

                &:last-child {
                  border-radius: 0 0 $rl-app-desktop-br-sm $rl-app-desktop-br-sm;
                }

                &:not(:last-child) {
                  border-bottom: 1px solid $rl-app-blue-500
                }

                .icon {
                  fill: $rl-app-blue-500;
                  width: 15px;
                  transition: fill 250ms;
                }

                &:hover {
                  background-color: $rl-app-white;
                }
              }
            }
          }

          .icon {
            fill: $rl-app-blue-50;
            width: 15px;
            transition: fill 250ms;
          }

          .icon-link {
            fill: $rl-app-blue-50;
            width: 28px;
            transition: fill 250ms;
          }

          &:hover {
            background-color: $rl-app-white-10;
            color: $rl-app-white;

            ul {
              &.item-options {
                z-index: 99;
                display: block;
              }
            }

            .icon-link, .icon {
              fill: $rl-app-white;
            }
          }
        }
      }
    }

    .btn-toggle-header {
      display: none;
      width: 40px;
      height: 30px;
      justify-content: center;
      align-items: center;
      border: 1px solid $rl-app-blue-400;
      border-radius: $rl-app-br-full;
      cursor: pointer;

      .icon-arrow {
        width: 10px;
        fill: $rl-app-blue-200;
      }
    }

    p {
      font-size: 12px;
      transition: font-size 250ms ease;
    }
  }
}

@media (max-width: 520px) {
  footer {
    width: 100%;
    transition: all 800ms ease;

    .footer {
      background-color: $rl-app-blue-500;
      width: 100%;
      padding: 8px;
      transition: all 250ms ease;
      gap: 10px;

      .app-footer {
        gap: 8px;
        flex-direction: column;
        transition: all 250ms ease;
        position: absolute;
        //top: -250px;
        transform: translateY(-250px);

        .section-info-mobile {
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 10px;
          width: 100%;

          img {
            height: 48px;
            border-radius: $rl-app-desktop-br-lg;
            border: 1px solid $rl-app-blue-50;
          }

          .app-header-text {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;

            span {
              color: $rl-app-blue-50;

              &:first-child {
                font-size: $rl-app-desktop-fs-xm;
                font-weight: 500;
              }

              &:last-child {
                font-size: $rl-app-desktop-fs-xs;
                font-weight: lighter;
                text-transform: uppercase;
              }
            }
          }
        }

        .section-contacts {
          border-top: 1px solid $rl-app-blue-400;
          padding-top: 12px;
          border-bottom: 1px solid $rl-app-blue-400;
          padding-bottom: 12px;
        }

        .section-contacts, .section-links {
          display: flex;
          width: 100%;

          .item-contact {
            position: relative;
            padding: 8px 4px;
            gap: 4px;
            color: $rl-app-blue-50;
            text-decoration: none;
            transition: all 250ms;
            cursor: pointer;
            font-size: $rl-app-desktop-fs-sm;
            border-radius: $rl-app-desktop-br-sm;
            width: 100%;

            ul {
              &.item-options {
                transition: all 250ms;
                left: 0;
                right: 0;
                top: 20px;
                z-index: -1;
                position: absolute;
                display: none;
                list-style: none;
                padding: 0;
                border-radius: 0 0 $rl-app-desktop-br-sm $rl-app-desktop-br-sm;

                .item-option {
                  transition: all 250ms;
                  width: 100%;
                  padding: 8px;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  gap: 10px;
                  background-color: $rl-app-blue-50;
                  color: $rl-app-blue-500;
                  font-size: $rl-app-desktop-fs-xs;
                  font-weight: lighter;

                  &:last-child {
                    border-radius: 0 0 $rl-app-desktop-br-sm $rl-app-desktop-br-sm;
                  }

                  &:not(:last-child) {
                    border-bottom: 1px solid $rl-app-blue-500;
                  }

                  .icon {
                    fill: $rl-app-blue-500;
                    width: 15px;
                    transition: fill 250ms;
                  }

                  &:hover {
                    background-color: $rl-app-white;
                  }
                }
              }
            }

            .icon {
              fill: $rl-app-blue-50;
              width: 15px;
              transition: fill 250ms;
            }

            .icon-link {
              fill: $rl-app-blue-50;
              width: 15px;
              transition: fill 250ms;
            }

            &:hover, &:focus {
              background-color: $rl-app-white-10;
              color: $rl-app-white;

              ul {
                &.item-options {
                  z-index: 99;
                  display: block;
                }
              }

              .icon-link, .icon {
                fill: $rl-app-white;
              }
            }
          }
        }
      }

      .btn-toggle-header {
        display: flex;

        .icon-arrow {
          transition: transform 250ms ease;
        }
      }

      p {
        display: none;
      }
    }

    &.show-header-mobile {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $rl-app-black-50;

      .footer {
        border-bottom-left-radius: $rl-app-desktop-br-xl;
        border-bottom-right-radius: $rl-app-desktop-br-xl;

        .btn-toggle-header {
          box-shadow: 0 -2px 8px $rl-app-blue-100;

          .icon-arrow {
            transform: rotate(180deg);
          }
        }

        .app-footer {
          position: relative;
          transform: translateY(0);
        }
      }
    }
  }
}
</style>