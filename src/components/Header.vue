<template>
  <div class="header"></div>
  <div id="container-menu-landing-page">
    <router-link :to="{name: 'HomeRoute'}">Home</router-link>
    <router-link :to="{name: 'pdvRoute'}">Puntos de Venta</router-link>
    <router-link :to="{name: 'pdiRoute'}">Puntos de Intercambio</router-link>
    <router-link :to="{name: 'museoRoute'}">Museo</router-link>
    <router-link :to="{name: 'perfilRoute'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderH",
  components: {
  },
  data() {
    return {
      title1: "Home",
      publicPath: process.env
    }
  }
}
</script>

<style scoped>
.header{
  width:105%;
  height:45%;
  left:-3%;
  position:absolute;
  background-color: #8e1f30;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  margin-top: -190px;
  z-index: -2;
  margin-left: 1%;
}
#container-menu-landing-page{
  margin-top: 20px;
  font-size: 150%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  align-items: flex-start;
}
nav a:hover{
  color: #8e1f30;
}
a svg{
  margin-top:0;
  width: 200%;
  height: 200%;
}
a:-webkit-any-link{
  color: white;
  text-decoration: none;
}
a:hover{
  color: #e4a82f;
}
</style>