<template>
  <li>
    <a v-if="type === 'link'" :class="{ activeLink: active }" href="#" @click="goTo()">{{
      text
    }}</a>
    <facebook-button v-if="type === 'login'" />
    <button v-if="type === 'logout'" class="logout" @click="logout">
      Logout
    </button>
  </li>
</template>

<script>
// Item do context menu
import FacebookButton from "../UI/FacebookButton.vue";
export default {
  components: {
    FacebookButton,
  },
  props: ["type", "text", "path", "active"],
  inject: ["contextMenuController"],
  methods: {
    logout() {
      this.$store.commit("logout");
      this.contextMenuController(false);
      this.$router.push({name: "index"})
    },
    goTo(){
      this.$router.push({name: this.path});
      this.contextMenuController(false);
    }
  },
  computed: {
    getLink(){
      if(this.active){
        return '#';
      } else {
        return this.path
      }
    }
  }
};
</script>

<style scoped>
.logout {
  color: rgb(209, 2, 2, 0.6);
  border: none;
  padding: 0;
  font-weight: bold;
  font-size: 12pt;
  background-color: transparent;
}

a {
  text-decoration: none;
  color: rgb(30, 30, 30, 0.7);
}

.activeLink {
  color: rgb(209, 2, 2);
}

.activeLink:hover {
  cursor: default;
  color: rgb(209, 2, 2);
}

.logout:hover {
  color: rgb(67, 47, 156, 0.6);
  cursor: pointer;
}
.logout:focus {
  outline: none;
}

li {
  width: 90%;
  margin: 0 auto;
  padding: 0;
  color: rgb(46, 46, 46, 0.8);
  margin-bottom: 15px;
  font-weight: bold;
  display: flex;
}

a:hover,
li:hover > a {
  color: rgb(255, 130, 130, 0.6);
}

</style>