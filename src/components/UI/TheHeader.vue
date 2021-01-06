<template>
  <header>
    <user-info />
    <h2>Reportei | Desafio Desenvolvedor Javascript | Junior </h2>
  </header>
  <context-menu
    v-if="showUserContextMenu">
    <nav>
      <ul>
        <context-menu-item v-for="opt in populateOptions()" :key="opt.text" :text="opt.text" :type="opt.type" :path="opt.path" :active="opt.active"/>
      </ul>
    </nav>
  </context-menu>
</template>

<script>
import ContextMenu from "../Base/ContextMenu.vue";
import ContextMenuItem from "../Base/ContextMenuItem.vue";
import UserInfo from "../UI/UserInfo.vue";

export default {
  components: {
    ContextMenu,
    ContextMenuItem,
    UserInfo
  },
  // É fornecido o estado do context menu para as childs do cabeçalho
  provide(){
    return {
      contextMenuController: this.contextMenuController
    }
  },
  // Dados do componente : Se o context menu está aberto e quais opções devem ser mostradas
  data() {
    return {
      showUserContextMenu: false,
      contextOpt: [],
    };
  },
  // Abre ou fecha o context menu
  methods: {
    contextMenuController(display) {
      this.showUserContextMenu = display;
    },

    // As opções que irão aparecer no context menu, diferente quando estiver logado ou não
    populateOptions() {
      if (!this.isUserLogged()) {
        return this.contextOpt = [
          { text: "", type: "login" }
        ];
      } else {
        return this.contextOpt = [
          { text: "Ínicio", path: "inicio", type:"link", active: this.getCurrentPath === "inicio" },
          { text: "Relatórios", path: "reports", type:"link", active: this.getCurrentPath === "reports" },
          { text: "Stories", path: "stories", type:"link", active: this.getCurrentPath === "stories" },
          { text: "Usuários", path: "users", type:"link", active: this.getCurrentPath === "users" },
          { text: "", type: "logout" }
        ];
      }
    },
    // Retorna se o usuario está logado, (variavel global salva com vuex)
    isUserLogged(){
      return this.$store.getters.isLogged;
    }
  },
  // Retorna o path atual 
  computed: {
    getCurrentPath(){
      return this.$router.currentRoute.value.name;
    }
  },
  // Cria as opçoes do context menu após componente ser montado
  mounted() {
    this.populateOptions();
  }
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(192, 66, 66);
  border-bottom: 3px solid rgb(248, 146, 146);
  display: flex;
  flex-direction: row;
}

h2 {
  color: white;
  margin: 0 1rem 0 0;
}

nav {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

</style>