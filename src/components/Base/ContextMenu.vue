<template>
  <div class="backdrop" @click="closeMenu"></div>
  <div class="pointer-deco"></div>
  <div class="context-menu">
    <slot></slot>
  </div>

</template>

<script>
// Componente que controla os itens que irão ser exibidos no context menu
export default {
  inject:['contextMenuController'],
  methods: {
    // Fecha o menu após selecionado um item
    closeMenu() {
      this.contextMenuController(false);
    },
  }
};
</script>

<style scoped>
.pointer-deco {
    position: fixed;
    background-color: white;
    top: 4rem;
    left: 1.5rem;
    width: 2rem;
    height: 2rem;
    transform: rotate(45deg);
}
.context-menu {
  position: fixed;
  top: 4.5rem;
  left: 1rem;
  border-radius: 10px;
  background-color: white;
  margin: 0;
  width: 10rem;
  padding: 10px 5px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>