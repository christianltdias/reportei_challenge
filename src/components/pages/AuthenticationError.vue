<template>
  <base-card>
    <template #header>
      <h1>Erro</h1>
    </template>
    <template #notification>
      <h2>
        Por favor, faça o login com sua conta para poder utilizar as
        ferramentas.
      </h2>
    </template>
    <div class="nav-opt">
      <a class="back" @click="goTo()">Volte ao inicio</a>
      <facebook class="button" />
    </div>
  </base-card>
</template>

<script>
// Componente para quando o usuário acessar uma página não estando logado
import Facebook from "../UI/FacebookButton.vue";
export default {
  components: {
    Facebook,
  },
  methods: {
    goTo() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style scoped>
.button {
  width: 30%;
  margin: 0 30px;
}
.button:hover {
  cursor: pointer;
}

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

