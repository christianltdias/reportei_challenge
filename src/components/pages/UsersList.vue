<template>
  <base-card class="container">
    <template #header>
      <div class="header">
        <h2>Histórico de usuários</h2>
      </div>
    </template>
    <base-table />
  </base-card>
</template>

<script>
// Componente que descreve os usuarios que já acessaram a api (somente para controle)
import BaseTable from "../Base/BaseUsersTable.vue";
export default {
  components: {
    BaseTable,
  },
  data(){
    return {
      loading: false
    }
  },
};
</script>

<style scoped>
</style>