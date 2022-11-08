<template>
  <div id="homepage">
    <Header/>
  </div>
  <div class="slider-background-landing-page">
      <div id="home">
        <Home/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
export default {
  name: "HomeView",
  components:{
    Header,
    Home,
    Footer,
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');
#home{
  color: #000;
  font-size: 40px;
  font-family: 'Allerta Stencil', sans-serif;
  overflow-x: hidden;
}
.slider-background-landing-page{
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/pel.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  animation: bgChange 20s linear infinite;
  z-index: -3;
}

@keyframes bgChange{
  0%{
    background-image: url("../assets/pel.jpg");
  }
  20%{
    background-image: url("../assets/pel.jpg");
  }
  25%{
    background-image: url("../assets/copa-mundial.jpg");
  }
  45%{
    background-image: url("../assets/copa-mundial.jpg");
  }
  50%{
    background-image: url("../assets/estadio-argentinos.jpg");
  }
  70%{
    background-image: url("../assets/estadio-argentinos.jpg");
  }
  75%{
    background-image: url("../assets/catar-banderas.jpg");
  }
  95%{
    background-image: url("../assets/catar-banderas.jpg");
  }
}


</style>