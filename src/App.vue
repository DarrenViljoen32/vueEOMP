<template>
  <Navbar/>
  <router-view/>
  <!-- <Footer/> -->
</template>

<script>
// IMPORT COMPONENTS
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/Spinner.vue";


export default {
  components:{
    Navbar,
    Footer,
    Spinner
  }
}
</script>

<style>
/* Google Fonts */
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
/* General Styling */
#app {
  font-family: "Ubuntu", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: floralwhite;
  background-color: #000000;
  /* background-image: url("https://i.ibb.co/d0Jbfvz/wp2799850-tron-grid-wallpaper.jpg"); */
  background-repeat: repeat-y;
  background-size: 1550px;
  background-attachment: fixed;
  /* width: initial; */
  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 0%;
  /* cursor: pointer; */
}
#app::before{
  opacity: 0.75;
}

</style>
