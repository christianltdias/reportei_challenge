<template>
  <div class="container">
    <table class="follows" v-if="getFollowersHistory.length > 0">
      <thead>
        <tr>
          <th>Data</th>
          <th>Acréscimo/Decréscimo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rep in reports" :key="rep.data">
          <td>{{ rep.data }}</td>
          <td :class="getClass(rep)">{{ rep.valor }}</td>
        </tr>
      </tbody>
    </table>
    <h3 v-else>Não existem registros de ativadade</h3>
  </div>
</template>

<script>

export default {
  // Componente para tabela que irá conter os relatórios de seguidores
  methods: {
    // Diferentes classes para crescimento de seguidores
    getClass(rep) {
      return {
        positive: rep.valor > 0,
        negative: rep.valor < 0,
        neutral: rep.valor === 0,
      };
    },
  },
  // Retornar todos os relatórios obtidos do usuario a partir do login
  computed: {
    getFollowersHistory(){
      return this.$store.getters.getFollowers;
    }
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}
table.follows {
  table-layout: auto;
  width: 100%;
}

table {
  border-collapse: collapse;
}

th {
  background-color: rgb(134, 134, 134);
  height: 30px;
  color: rgb(56, 56, 56);
  font-weight: bold;
}

td {
  background-color: rgb(219, 219, 219, 0.2);
}

.positive {
  color: rgb(52, 243, 52);
  font-weight: bold;
}

.negative {
  color: rgb(255, 45, 45);
  font-weight: bold;
}

.neutral {
  color: rgb(74, 74, 255);
  font-weight: bold;
}
</style>