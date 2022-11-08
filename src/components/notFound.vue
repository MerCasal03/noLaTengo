<template>
  <div>
    <Header/>
    <br>
    <h1>La pelota se fue de la cancha : (</h1>
    <p>No encontramos la página que estás buscando</p>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "notFound",
  components: {Header}
}
</script>

<style scoped>
h1{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15%;
  font-size: 300%;
  font-family: "Nunito";
}
p{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>