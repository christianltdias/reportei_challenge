<template>
  <button class="login" @click="login">
    <button class="fa fa-facebook"></button>
    <div class="fa-login-container">
      <p class="fa-login-text">Login</p>
    </div>
  </button>
</template>

<script>
import UserService from "../../services/userService";
export default {
  data() {
    return {};
  },
  inject: ["contextMenuController"],
  methods: {
    async login() {
      // Aqui é realizado o login com o facebook
      const { authResponse } = await new Promise(FB.login);
      // É retornado o access token e outras informações
      this.$store.commit("login", { authResponse });

      // Fecha o menu context se estiver aberto
      if (this.contextMenuController) {
        this.contextMenuController(false);
      }
      
      // Se o login ocorreu, são obtidas demais informações do usuário
      if (authResponse) {
        await this.getResponse();
        // Insere novo usuario no banco de dados, se ele já não existir  
        await UserService.insertUser(this.$store.getters.getUser);
        // Redireciona para o inicio
        this.$router.push({ name: "inicio" });
      }
    
    },
    async getResponse() {
      const that = this;
      // Informações do usuario (User ID e nome)
      await FB.api(
        "/me?access_token=" + this.$store.getters.userAccessToken,
        "GET",
        {},
        function (response) {
          that.$store.commit("setUserInfo", response);
        }
      );

      // Informações do usuario (url da imagem de perfil)
      await FB.api(
        "/me/picture?redirect=false",
        "GET",
        {},
        function (response) {
          that.$store.commit("setUserUrlPhoto", response);
        }
      );
    },
  },
};
</script>

<style scoped>
.fa-login-text {
  font-weight: bold;
  font-size: 13pt;
}

.fa {
  font-size: 30px;
  width: 30%;
  height: 40px;
  text-align: center;
  text-decoration: none;
  border: none;
}

.fa-login-container {
  width: 70%;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 100%;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
}

.login:hover {
  opacity: 0.7;
}

.fa-facebook:focus {
  outline: none;
}

.fa-facebook,
.fa-login-container {
  background: #3b5998;
  color: white;
}
</style>