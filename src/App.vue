<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/Spinner.vue"

  export default {
    components:{
      Navbar,
      Footer,
      Spinner
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: floralwhite;
  background-color: #000000;
  /* width: initial; */

  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 0%;

  /* cursor: pointer; */
}

</style>
