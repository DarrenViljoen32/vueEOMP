<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

  export default {
    components:{
      Navbar,
      Footer
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
  color: #000030;
}

nav a.router-link-exact-active {
  color: #0d0def;
}

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
