<template>
  <div class="main-notify">
    <transition name="fade">
      <div v-if="visible" class="notify" :class="type">
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: 'info',
      position: 'rightBottom'
    };
  },
  methods: {
    show(message: string, type = 'info', duration = 3000, position = 'rightBottom') {
      this.message = message;
      this.type = type;
      this.visible = true;
      this.position = position;
      setTimeout(() => {
        this.visible = false;
      }, duration);
    },
  },
};
</script>

<style lang="scss" scoped>

.main-notify {
  .notify {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    z-index: 9999;

    &.notify.info {
      background-color: #2196f3;
    }
    &.notify.success {
      background-color: #4caf50;
    }
    &.notify.error {
      background-color: #f44336;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
