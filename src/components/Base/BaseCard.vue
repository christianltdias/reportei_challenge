<template>
  <div class="card-container">
    <slot name="header"></slot>
    <slot name="notification"></slot>
    <slot></slot>
  </div>
</template>

<script>
// Componente base que será utilizado ao logo do app
export default {};
</script>

<style scoped>
.card-container {
  width: 40%;
  margin: 0 auto;
  border-radius: 30px;
  background-color: transparent;
  box-shadow: 1px 2px 4px rgba(66, 66, 66, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
