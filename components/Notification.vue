<template>
  <div class="notifications-container">
    <TransitionGroup name="fade" tag="div">
      <div
          v-for="n in notifications"
          :key="n.id"
          class="notification"
          :class="n.type"
      >
        {{ n.message }}
        <button type="button" class="material-icons" @click="removeNotification(n.id)">
          close
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications'

const { notifications, removeNotification } = useNotifications()
</script>

<style lang="scss" scoped>
@import '@/assets/style/notifications.scss';
</style>
