<template>
  <div class="container">
    <table class="users" v-if="users.length > 0 && !loading">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Stories Ativos</th>
          <th>Seguidores</th>
          <th>chamadas por dia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.nome">
          <td>{{ user.nome }}</td>
          <td >{{ user.stories.length }}</td>
          <td>{{ user.followers.length }}</td>
          <td>{{ user.updatesPerDay }}</td>
        </tr>
      </tbody>
    </table>
    <h3 v-else-if="!loading">Não existem registros de ativadade</h3>
    <h3 v-else>Carregando informações...</h3>
  </div>
</template>

<script>
// Componente para ilustrar todos os usuarios que já acessaram o app
import UserService from '../../services/userService';
export default {

  data(){
    return {
      users: [],
      loading:false
    }
  },
  // São obtidos os usuarios que já acessaram o app
  async created(){
    this.loading = true;
    this.users = await UserService.getUsers();
    this.loading = false;
  }
};
</script>

<style scoped>
.container {
  margin: 20px;
}
table.users {
  table-layout: auto;
  width: 100%;
}

table {
  border-collapse: collapse;
  margin: 20px 0;
}

th {
  background-color: rgb(218, 160, 160);
  height: 30px;
  color: rgb(56, 56, 56);
  font-weight: bold;
}

td {
  background-color: rgb(231, 231, 231, 0.2);
}

</style>