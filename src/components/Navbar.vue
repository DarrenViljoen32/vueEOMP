<template lang="">

    <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Darren Viljoen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/about" class="nav-link">About</router-link>
                    <router-link to="/resume" class="nav-link">Resume</router-link>
                    <router-link to="/projects" class="nav-link">Projects</router-link>
                    <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </div>
            </div>
        </div>
    </nav>

</template>
<script>
export default {
    data(){
    return {
      jsonData: null
    };
  },
  created(){
    this.fetchData();
  },
  methods: {
    async fetchData(){
      try{
        const response = await axios.get('http://localhost:3000/home');
        this.jsonData = response.data;
      } catch(error){
        console.error('Error fetching data: ', error);
      }
    }
  }
}
</script>
<style lang="">

</style>