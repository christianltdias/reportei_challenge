<template>
  <div class="container">
    <base-card>
      <template #header>
        <h2>Seguidores</h2>
      </template>
      <div class="content">
        <p>Crescimento diário de seguidores</p>
      </div>
    </base-card>
    <base-card>
      <template #header>
        <h2>Histórias</h2>
      </template>
      <div class="content">
        <p>Aqui o Nº de stories ativos</p>
      </div>
    </base-card>
  </div>
</template>

<script>
import UserService from "../../services/userService";
// Pagina inicial, onde algumas informações são obtidas na pagina inicial
export default {
  // Retorna as informações de usuario, salvas no banco de dados
  async created() {
    const user = await UserService.getUser(this.$store.getters.getUserID);
    this.$store.commit("loadUser", user);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
}

h2 {
  color: rgb(70, 70, 70);
}

p {
  font-weight: bold;
  font-size: 14pt;
}

.content {
  margin: 20px 0;
}
</style>