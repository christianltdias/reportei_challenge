<template>
  <base-card>
    <template #header>
      <h1>Erro</h1>
    </template>
    <template #notification>
      <h2>
        Página não encontrada.
      </h2>
    </template>
    <div class="nav-opt">
      <a class="back" @click="goTo()">Volte ao inicio</a>
    </div>
  </base-card>
</template>

<script>
// Componente de quando o usuario acessar uma rota que não existe
export default {
  methods: {
    goTo() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style scoped>
.nav-opt {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.back {
  align-self: center;
  margin: 0 30px;
  font-weight: bold;
  color: rgb(47, 140, 223);
}
.back:hover {
  cursor: pointer;
  color: rgb(0, 70, 131);
}
</style>

