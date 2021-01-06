<template>
  <base-card class="container">
    <template #header>
      <div class="header">
        <h2>Histórico de seguidores</h2>
      </div>
    </template>

    <template #notification v-if="!getFollowersHistory">
      <h3>Não existem históricos de seguidores</h3>
    </template>
    <base-table :reports="reports"/>
  </base-card>
</template>

<script>
// Aqui é o componente para mostrar os relatórios gerados de monitoramento de seguidores (não implementado)
import BaseTable from "../Base/BaseFollowersTable.vue";
export default {
  components: {
    BaseTable,
  },
  computed: {
    getFollowersHistory() {
      return this.$store.getters.getFollowers;
    },
  },
  data() {
    return {
      reports: [
        { data: "04/01/2021", valor: 50 },
        { data: "05/01/2021", valor: -32 },
        { data: "06/01/2021", valor: 0 },
      ],
    };
  },
};
</script>

<style scoped>
</style>