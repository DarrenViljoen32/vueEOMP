<template>
    <div class="about">
      <h1 class="fw-bold">Resume</h1>
      <br><br>
      <h2>Education</h2>

      <!-- <div v-if="jsonData">
        <p>{{ jsonData.about[0] }}</p>
      </div> -->
      <!-- <div v-else>
        Loading...
      </div> -->


      <div v-if="jsonData">
        <div class="container text-center">
          <div class="row">
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[0].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[0].year}}</h6>
                  <p class="card-text">{{ jsonData.education[0].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[1].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[1].year}}</h6>
                  <p class="card-text">{{ jsonData.education[1].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[2].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[2].year}}</h6>
                  <p class="card-text">{{ jsonData.education[2].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
          </div>
          <div class="row">
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[3].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[3].year}}</h6>
                  <p class="card-text">{{ jsonData.education[3].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[4].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[4].year}}</h6>
                  <p class="card-text">{{ jsonData.education[4].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[5].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">Year: {{jsonData.education[5].year}}</h6>
                  <p class="card-text">{{ jsonData.education[5].description }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
          </div>
          
        </div>

      </div>
      <div v-else>
        Loading...
      </div>


      <br><br>
      <h2>Skills</h2>


      <div v-if="jsonData">

        <div class="container text-center">
          <div class="row">
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a class="bi bi-filetype-js"></a>
                  <h5 class="card-title">{{ jsonData.skills[0].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[0].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[0].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a class="bi bi-bootstrap"></a>
                  <h5 class="card-title">{{ jsonData.skills[1].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[1].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[1].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-code-slash"></a>
                  <h5 class="card-title">{{ jsonData.skills[2].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[2].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[2].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
          </div>
          <div class="row">
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-laptop"></a>
                  <h5 class="card-title">{{ jsonData.skills[3].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[3].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[3].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-wifi"></a>
                  <h5 class="card-title">{{ jsonData.skills[4].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[4].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[4].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-display"></a>
                  <h5 class="card-title">{{ jsonData.skills[5].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[5].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[5].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
          </div>

          <div class="row">
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-phone"></a>
                  <h5 class="card-title">{{ jsonData.skills[6].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[6].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[6].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-compass"></a>
                  <h5 class="card-title">{{ jsonData.skills[7].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[7].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[7].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="image"> -->
                <div class="card-body">
                  <a href="" class="bi bi-server"></a>
                  <h5 class="card-title">{{ jsonData.skills[8].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[8].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[8].experience }}</p>
                  <!-- <a href="#" class="card-link">Card link</a> -->
                  <!-- <a href="#" class="card-link">Another link</a> -->
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
    h2{
      text-align: initial;
    }
    .card{
      margin-top: 15px;
      height: 335px;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 2px floralwhite,
      0em 0em 1em floralwhite;
    }
    a{
      text-decoration: none;
      color: #000030;
      font-size: xx-large;
    }
</style>