<template>
  <HeaderH/>
  <div class="container">
    <form class="locations">
      <select class="form-select" name="loc" id="loc">
        <option value="none" selected>Seleccione provincia</option>
        <option value="CABA">CABA</option>
        <option value="provincia">Provincia</option>
        <option value="all">Ver todas</option>
      </select>
    </form>
  </div>
  <br>
  <div id="mapaPuntos"></div>
</template>

<script>
import HeaderH from "@/components/Header";

export default {
  name: "pdvView",
  components: {HeaderH,}
}
</script>

<style scoped>
html, body {
  background-color: #e4a82f;
  font-size: 250%;
  overflow-x: hidden;
  font-family: "Comfortaa", cursive;
  box-sizing: border-box;
}
.form-select{
  margin-top: 4%;
  margin-left: 10%;
  width: 80%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 0.375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>