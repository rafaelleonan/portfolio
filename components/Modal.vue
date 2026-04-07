<script setup lang="ts">
import { onBeforeUnmount, watch, computed } from 'vue';
import {useModal} from "~/composables/useModal"

const props = defineProps<{
  id: string; // Novo: Identificador único do modal
  hiddenFooter?: boolean;
  hiddenHeader?: boolean;
  noCloseModalClickBackdrop?: boolean;
  title?: string;
  size?: 'sm' | 'lg' | string; // Tipagem levemente melhorada
  onConfirm?: () => void;
  onCancel?: () => void;
}>();

const { activeModalId, closeModal } = useModal();

// O modal só aparece se o ID ativo for o ID deste componente
const isVisible = computed(() => activeModalId.value === props.id);

function handleCancel() {
  closeModal();
  props.onCancel?.();
}

function handleConfirm() {
  closeModal();
  props.onConfirm?.();
}

// Watcher para gerenciar o scroll do body
watch(isVisible, (isOpen) => {
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
  <Teleport to="body">
    <Transition name="fade">
      <div
          v-if="isVisible"
          class="modal-backdrop"
          @click.self="noCloseModalClickBackdrop ? null : handleCancel()"
      >
        <div class="modal-container" :class="{'modal-sm': size === 'sm', 'modal-lg': size === 'lg'}">

          <header class="modal-header mb-2" v-if="!hiddenHeader">
            <div class="d-flex d-flex--align-center d-flex--justify-between w-100">
              <h2 v-if="title">{{ title }}</h2>
              <slot name="header" v-else></slot>
              <span class="material-icons cursor--pointer" @click="handleCancel">close</span>
            </div>
          </header>

          <section class="modal-body">
            <slot></slot>
          </section>

          <footer class="modal-footer" v-if="!hiddenFooter">
            <slot name="footer">
              <button class="btn-cancel" @click="handleCancel">Cancelar</button>
              <button class="btn-confirm" @click="handleConfirm">Confirmar</button>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/assets/style/variables" as *;

// Animação de entrada/saída
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.modal-backdrop {
  position: fixed;
  inset: 0; // Top, left, right, bottom: 0
  background: rgba(0, 0, 0, 0.6); // Usei rgba fixo ou sua variável $rl-app-black-50
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // Aumentado para garantir sobreposição
  backdrop-filter: blur(2px);
  overflow: hidden;

  .modal-container {
    background: var(--bg-solid-blue-1);
    border-radius: 8px;
    max-width: 900px;
    max-height: 90vh;
    width: 90%;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow-y: auto; // Garante que o conteúdo longo role dentro do modal

    .modal-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 1rem;
      h2 { margin: 0; font-family: 'Montserrat', sans-serif; }
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1.5rem;

      button {
        padding: 0.6rem 1.2rem;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover { filter: brightness(1.1); }
        &.btn-cancel { background: #444; color: #fff; }
        &.btn-confirm { background: $rl-app-brown-500; color: #fff; }
      }
    }

    &.modal-sm { width: 450px; }
    &.modal-lg { width: 900px; }
  }
}

@media (max-width: 600px) {
  .modal-backdrop .modal-container {
    width: 95%;
    padding: 1rem;
  }
}
</style>