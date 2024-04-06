<!-- NAVBAR -->
<template lang="">

    <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">DARREN VILJOEN</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <!-- Navigation using router links -->
                <div class="navbar-nav">
                    <router-link @click.native="closeNavbar" to="/" class="nav-link"><span class="bi bi-house"> | </span>Home</router-link>
                    <router-link @click.native="closeNavbar" to="/about" class="nav-link"><span class="bi bi-person"> | </span>About</router-link>
                    <router-link @click.native="closeNavbar" to="/resume" class="nav-link"><span class="bi bi-file-person"> | </span>Education & Experience</router-link>
                    <router-link @click.native="closeNavbar" to="/projects" class="nav-link"><span class="bi bi-file-earmark-code"> | </span>Projects</router-link>
                    <router-link @click.native="closeNavbar" to="/testimonials" class="nav-link"><span class="bi bi-person-check"> | </span>Testimonials</router-link>
                    <router-link @click.native="closeNavbar" to="/contact" class="nav-link"><span class="bi bi-envelope-at"> | </span>Contact</router-link>
                </div>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
  methods: {
    closeNavbar() {
      // Close the offcanvas navbar when a link is clicked
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    },

    handleClickOutside(event){
      const navbar = this.$refs.navbar
      if (navbar && !navbar.contains(event.target)){
        this.closeNavbar()
      }
    }
  },

  mounted(){
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>
<style scoped>
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
    color: rgb(0, 0, 0);
    text-decoration: none;
    padding-left: 0%;
    font-size: larger;
  }
 .navbar-nav a:hover {
    color: black;
  }
  /* nav a.router-link-exact-active {
    color: red;
  } */
  .navbar-nav{
    padding-left: 0%;
    padding-right: 0%;
  }
  .nav-link:hover{
    text-shadow: 0em 0em 5px rgb(8, 174, 174);
  }
  .navbar-brand:hover{
    text-shadow: 0em 0em 5px cyan;
  }

  @media screen and (max-width: 1080px){
    .nav-link{
      font-size: large;
    }
  }
  @media screen and (min-width: 1080px) {
    .navbar-nav{
    padding-left: 0%;
    }
    .nav-link{
      font-size: medium;
    }
  }
  @media screen and (min-width: 300px){
    .navbar{
      overflow-y: hidden;
      overflow-x: hidden;
    }
    .navbar-brand{
      font-size: medium;
    }
    .nav-link{
      font-size: small;
    }
    button{
      margin-right: 10px;
    }
  }
</style>