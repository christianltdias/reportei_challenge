<template>
  <div>
    <img
      :src="logoImgSrc"
      alt="user photo"
      class="userLogo"
      @click="contextMenuController(true)"
    />
    <h2 v-if="$store.getters.getName">{{$store.getters.getName}}</h2>
  </div>
</template>

<script>
import logo from "../../assets/user.png";
// Aqui é o componente de foto e nome do usuario quando estiver logado (ou não)
export default {
  inject: ['contextMenuController'],
  computed: {
    logoImgSrc() {
      if(this.$store.getters.getUserPhotoUrl){
        return this.$store.getters.getUserPhotoUrl;
      }
      return logo;
    },
  },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 14pt;
    color: white;
    margin-left: 15px;
    font-weight: bold;
}

.userLogo {
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin-left: 1rem;
}
</style>