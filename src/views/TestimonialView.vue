<template>
    <div class="testimonials">
      <h1 class="fw-bold">Testimonials</h1>
      <br><br>

      <div v-if="jsonData">
        <div class="container text-center">
          <div class="row">
            
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[0].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[0].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[0].quote }}</p>
                  <a href="mailto: matthew@lifechoices.co.za" class="card-link">{{jsonData.testimonials[0].email}}</a>
                </div>
              </div>
    
            </div>
    
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[1].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[1].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[1].quote }}</p>
                  <a href="mailto: cornebalie789@gmail.com" class="card-link">{{jsonData.testimonials[1].email}}</a>
                </div>
              </div>
    
            </div>
            
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[2].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[2].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[2].quote }}</p>
                  <a href="mailto: septemberj626@gmail.com" class="card-link">{{jsonData.testimonials[2].email}}</a>
                </div>
              </div>
    
            </div>
            
          </div>
          <div class="row">
            
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[3].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[3].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[3].quote }}</p>
                  <a href="mailto: damonraffels@gmail.com" class="card-link">{{jsonData.testimonials[3].email}}</a>
                </div>
              </div>
    
            </div>
    
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[4].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[4].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[4].quote }}</p>
                  <a href="brandonroulstone71@gmail.com" class="card-link">{{jsonData.testimonials[4].email}}</a>
                </div>
              </div>
    
            </div>
            
            <div class="col">
    
              <div class="card" style="width: 18rem;">
                <img :src="jsonData.testimonials[5].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[5].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[5].quote }}</p>
                  <a href="mailto: unitydemas12@gmail.com" class="card-link">{{jsonData.testimonials[5].email}}</a>
                </div>
              </div>
    
            </div>
            
          </div>
          
        </div>

      </div>

      <div v-else>
      <Spinner />
    </div>


    </div>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue'

  export default {
    name: 'HomeView',
    components: {
      Spinner
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
.testimonials{
  padding-bottom: 2%;
}
    .card{
      margin-top: 100px;
      height: 700px;
      overflow: hidden;
    }
    .card img{
      height: 250px;
      transition: transform .5s ease;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 2px floralwhite,
      0em 0em 1em floralwhite;
      transform: scale(1.01);
    }
    /* .card:hover img{
      transform: scale(1.1);
    } */
    a{
      text-decoration: none;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    .row{
      margin-left: 100px;
      margin-right: 0px;
    }
</style>