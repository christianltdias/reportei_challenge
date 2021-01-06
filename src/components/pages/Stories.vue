<template>
  <base-card class="container">
    <template #header>
      <div class="header">
        <div class="perDay">
          <label to="perDay">Atualizações por dia</label>
          <input
            type="number"
            id="perDay"
            :value="$store.state.updatesPerDay"
            @input="onInputChange"
          />
        </div>
        <h2>Histórias ativas</h2>
      </div>
    </template>
    <template #notification v-if="getActiveStories.length === 0">
      <h3>Não existem histórias ativas</h3>
    </template>
    <div v-if="getActiveStories.length === 0" class="storiesContainer">
      <story />
      <story />
      <story />
      <story />
    </div>
    <div v-else class="storiesContainer">
      <story :v-for="story in getActiveStories" />
    </div>
  </base-card>
</template>

<script>
// Aqui é o componente para mostrar os relatórios gerados de monitoramento de histórias ativas (não implementado)
import Story from "../UI/Story.vue";
import UserService from "../../services/userService";
export default {
  components: {
    Story,
  },
  methods: {
    // Validação do valor inserido no input (para n updates diários da API)
    async onInputChange(event) {
      const value = event.target.value;
      if (value < 0) {
        event.target.value = 0;
      } else if (value > 20) {
        event.target.value = 20;
      }
      // Seta novo valor na variavel global
      this.$store.dispatch("setUpdatesPerDay", {
        updatesPerDay: event.target.value,
      });
      // Atualiza também no banco de dados
      UserService.updateUser(this.$store.getters.getUser);
    },
  },
  // Retorna as storias ativas do usuário
  computed: {
    getActiveStories() {
      return this.$store.getters.getStories;
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
}
.storiesContainer {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  border: none;
  width: 20%;
  margin: 10px 20px;
  height: 30px;
  text-align: center;
  padding: 0;
  background-color: rgba(141, 141, 141, 0.15);
  border-radius: 30px;
  font-weight: bold;
  outline: none;
}
input:hover {
  background-color: rgba(141, 141, 141, 0.5);
  cursor: pointer;
  color: brown;
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>