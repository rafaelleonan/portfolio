<script setup lang="ts">
import { defineProps, defineEmits, onBeforeUnmount, watch } from 'vue';

const props = defineProps<{
  show: boolean;
  hiddenFooter?: boolean;
  hiddenHeader?: boolean;
  title?: string;
  size?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}>();

const emit = defineEmits(['update:show']);

function handleCancel() {
  emit('update:show', false);
  props.onCancel?.();
}

function handleConfirm() {
  emit('update:show', false);
  props.onConfirm?.();
}

watch(() => props.show, (isOpen) => {
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
  <div v-if="show" class="modal-backdrop" @click.self="handleCancel">
    <div class="modal-container" :class="{'modal-sm': size === 'sm', 'modal-lg': size === 'lg'}">
      <!-- Header -->
      <header class="modal-header" v-if="!hiddenHeader">
        <div class="d-flex d-flex--align-center d-flex--justify-between w-100">
          <h2 v-if="title">{{ title }}</h2>
          <span class="material-icons cursor--pointer" @click="handleCancel">close</span>
        </div>

        <slot name="header"></slot>
      </header>

      <!-- Content -->
      <section class="modal-body">
        <slot></slot>
      </section>

      <!-- Footer -->
      <footer class="modal-footer" v-if="!hiddenFooter">
        <slot name="footer">
          <button @click="handleCancel">Cancelar</button>
          <button @click="handleConfirm">Confirmar</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/style/variables" as *;
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $rl-app-black-50;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;

  .modal-container {
    background: var(--bg-solid-blue-1);
    border-radius: 8px;
    max-width: 900px;
    max-height: 600px;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: auto;

    .modal-header h2 {
      margin: 0 0 1rem;
    }

    .modal-body {
      margin-bottom: 1rem;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      button {
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        border-radius: 4px;

        &:first-of-type {
          background: #ccc;
        }

        &:last-of-type {
          background: #007bff;
          color: #fff;
        }
      }
    }

    &.modal-sm {
      width: 500px;
    }

    &.modal-lg {
      width: 900px;
    }
  }
}

@media (max-width: 600px) {
  .modal-backdrop {
    .modal-container {
      max-width: 100%;
      max-height: 95%;
      padding: 1rem;

      &.modal-sm {
        width: 90%;
      }

      &.modal-lg {
        width: 95%;
      }
    }
  }
}
</style>