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
  background-color: #000030;
  /* width: initial; */

  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 0%;

  /* cursor: pointer; */
}


nav {
  padding: 30px;
  text-align: initial;
  /* position: sticky; */
}

nav a {
  font-weight: bold;
  color: #000030;
  text-decoration: none;
  padding-left: 0%;
  font-size: larger;
}


nav a:hover {
  color: #0d0def;
}

/* nav a.router-link-exact-active {
  color: red;
} */

.navbar-nav{
  padding-left: 0%;
  padding-right: 0%;
}


@media screen and (min-width: 1080px) {
  .navbar-nav{
  padding-left: 0%;
  }
}
</style>
