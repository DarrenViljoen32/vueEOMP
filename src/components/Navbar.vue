<template lang="">

    <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Darren Viljoen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link"><span class="bi bi-house"> | </span>Home</router-link>
                    <router-link to="/about" class="nav-link"><span class="bi bi-person"> | </span>About</router-link>
                    <router-link to="/resume" class="nav-link"><span class="bi bi-file-person"> | </span>Resume</router-link>
                    <router-link to="/projects" class="nav-link"><span class="bi bi-file-earmark-code"> | </span>Projects</router-link>
                    <router-link to="/testimonials" class="nav-link"><span class="bi bi-person-check"> | </span>Testimonials</router-link>
                    <router-link to="/contact" class="nav-link"><span class="bi bi-envelope-at"> | </span>Contact</router-link>
                </div>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
  computed:{
    jsonData(){
      return this.$store.state.jsonData
    }
  },  
  mounted(){
    this.$store.dispatch('fetchJsonData')
  }
}
</script>
<style>
  .bi{
    color: black;
    font-size: large;
  }

  
  nav {
    padding: 30px;
    text-align: initial;
    /* position: sticky; */
  }

  nav a {
    font-weight: bold;
    color: #a0e714;
    text-decoration: none;
    padding-left: 0%;
    font-size: larger;
  }


 .navbar-nav a:hover {
    color: #24ff02;
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