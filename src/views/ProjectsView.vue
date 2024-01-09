<template>
    <div class="about">
      <h1>Projects</h1>
      <br><br>

    <div v-if="jsonData">

      <div class="container text-center">
        <div class="row">
          
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[5].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[5].name }}</h5>
                <p class="card-text">{{ jsonData.projects[5].description }}</p>
                <a :href="jsonData.projects[5].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[5].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
  
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[4].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[4].name }}</h5>
                <p class="card-text">{{ jsonData.projects[4].description }}</p>
                <a :href="jsonData.projects[4].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[4].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
          
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[2].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[2].name }}</h5>
                <p class="card-text">{{ jsonData.projects[2].description }}</p>
                <a :href="jsonData.projects[2].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[2].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
          
        </div>
        <div class="row">
          
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[1].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[1].name }}</h5>
                <p class="card-text">{{ jsonData.projects[1].description }}</p>
                <a :href="jsonData.projects[1].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[1].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
  
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[3].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[3].name }}</h5>
                <p class="card-text">{{ jsonData.projects[3].description }}</p>
                <a :href="jsonData.projects[3].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[3].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
          
          <div class="col">
  
            <div class="card" style="width: 18rem;">
              <img :src="jsonData.projects[0].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[0].name }}</h5>
                <p class="card-text">{{ jsonData.projects[0].description }}</p>
                <a :href="jsonData.projects[0].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[0].netlify" class="card-link bi bi-globe">Netlify</a>
              </div>
            </div>
  
          </div>
          
        </div>
        
      </div>

    </div>

    <div v-else>
      Loading...
    </div>


    </div>
  </template>
  
<script>
export default {
  name: 'HomeView',
  components: {
  },
  computed:{
    jsonData(){
      return this.$store.state.jsonData
    }
  },  
  mounted(){
    this.$store.dispatch('fetchJsonData')
  }
};
</script>
<style scoped>
    h1{
      margin-top: 55px;
    }
    .card{
      margin-top: 100px;
      height: 450px;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 2px floralwhite,
      0em 0em 1em floralwhite;
    }
    img{
      height: 250px;
    }
    a{
      text-decoration: none;
    }
</style>