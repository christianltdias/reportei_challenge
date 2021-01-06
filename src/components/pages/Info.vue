<template>
  <base-card>
    <template #header>
      <h1>Info</h1>
    </template>
    <template #default>
      <div>
        <p>
          Esse projeto se trata de uma etapa do processo seletivo para a vaga de
          Desenvolvedor Javascript pelo da Reportei
        </p>
        <p>
          Por favor, faça login com seu facebook, clicando na imagem do header,
          para continuar
        </p>
      </div>
    </template>
  </base-card>
</template>

<script>
export default {
  methods: {
    getAccessToken() {
      return this.$store.getters.userAccessToken;
    },
  },
};
</script>

<style scoped>
div {
  margin: 10%;
}

h1 {
  color: rgb(54, 54, 54);
}
</style>