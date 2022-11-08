<template>
    <div class="container-text-landing-page">
        <p class="name-landing-page">N<img alt="File:Soccerball.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png?20190202162056" decoding="async" width="4.5%" height="4.5%" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/750px-Soccerball.svg.png?20190202162056 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1000px-Soccerball.svg.png?20190202162056 2x" data-file-width="500" data-file-height="500">LaTeng<img alt="File:Soccerball.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png?20190202162056" decoding="async" width="4.5%" height="4.5%" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/750px-Soccerball.svg.png?20190202162056 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1000px-Soccerball.svg.png?20190202162056 2x" data-file-width="500" data-file-height="500"></p>
      <div class="container-title-landing-page">
        <p>Conseguí las figuritas del mundial</p>
        <p>que te faltan para completar el albúm!</p>
      </div>
    </div>
  <div class="container-img-landing-page">
  </div>
</template>

<script>
export default {
  name: "HomeH",
  components:{
  },
  data() {
    return {
      data() {
      },
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Nunito&display=swap');
.name-landing-page{
  color: #000;
  font-family: "Comfortaa", cursive;
  font-size: 180%;
}

.container-title-landing-page{
  background-color: white;
  opacity: 0.5;
  padding: 0.5%;
  margin-top: -3%;
  z-index: -2;
}
.container-title-landing-page p {
  color: black;
  opacity: 1;
  z-index: 2
}
p{
  font-family: "Nunito", sans-serif;
  color: black;
}

html, body{
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

</style>