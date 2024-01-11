<template>
    <div class="testimonials">
      <h1 class="fw-bold" id="right">Testimonials</h1>
      <br><br>

      <div v-if="jsonData">
        <div class="container text-center">

          <div class="row">
            <div class="col" v-for="test in jsonData.testimonials" :key="test.name">
              <div class="card" id="fade">
                <img :src="test.profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ test.name }}</h5>
                  <p class="card-text">{{ test.quote }}</p>
                  <a href="mailto: matthew@lifechoices.co.za" class="card-link">{{test.email}}</a>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            
            <div class="col">
    
              <div class="card" id="left">
                <img :src="jsonData.testimonials[0].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[0].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[0].quote }}</p>
                  <a href="mailto: matthew@lifechoices.co.za" class="card-link">{{jsonData.testimonials[0].email}}</a>
                </div>
              </div>
    
            </div>
    
            <div class="col">
    
              <div class="card" id="middle">
                <img :src="jsonData.testimonials[1].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[1].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[1].quote }}</p>
                  <a href="mailto: cornebalie789@gmail.com" class="card-link">{{jsonData.testimonials[1].email}}</a>
                </div>
              </div>
    
            </div>
            
            <div class="col">
    
              <div class="card" id="right">
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
    
              <div class="card" id="left">
                <img :src="jsonData.testimonials[3].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[3].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[3].quote }}</p>
                  <a href="mailto: damonraffels@gmail.com" class="card-link">{{jsonData.testimonials[3].email}}</a>
                </div>
              </div>
    
            </div>
    
            <div class="col">
    
              <div class="card" id="middle">
                <img :src="jsonData.testimonials[4].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[4].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[4].quote }}</p>
                  <a href="brandonroulstone71@gmail.com" class="card-link">{{jsonData.testimonials[4].email}}</a>
                </div>
              </div>
    
            </div>
            
            <div class="col">
    
              <div class="card" id="right">
                <img :src="jsonData.testimonials[5].profile" class="card-img-top" alt="image">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.testimonials[5].name }}</h5>
                  <p class="card-text">{{ jsonData.testimonials[5].quote }}</p>
                  <a href="mailto: unitydemas12@gmail.com" class="card-link">{{jsonData.testimonials[5].email}}</a>
                </div>
              </div>
    
            </div>
            
          </div> -->
          
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
      width: 18rem;
      overflow: hidden;
      border: solid 6px #24ff02;
    }
    .card img{
      height: 250px;
      transition: transform .5s ease;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 2px floralwhite,
      0em 0em 1em #24ff02;
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
      color: #24ff02;
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

    #middle{
      animation: fadeIn 1s ease;
      animation-duration: 5s;
    }
    #left{
      animation: fromRight 1s ease;
      animation-duration: 5s;
    }
    #right{
      animation: fromLeft 1s ease;
      animation-duration: 5s;
    }
    #fade{
      animation: fadeIn 5s ease;
      animation-duration: 10s;
    }

    @keyframes fromLeft {
      0%{
        transform: translateX(100%);
      }
      100%{
        transform: translateX(0%);
      }
    }
    @keyframes fromRight {
        0%{
          transform: translateX(-100%);
        }
        100%{
          transform: translateX(0%);
        }
      }
    @keyframes fadeIn {
        0%{
          opacity: 0%;
        }
        100%{
          opacity: 100%;
        }
      }

      @media screen and (max-width:360px){
        .row{
          margin-left: 5%;
        }
        .card{
          width: 18rem;
        }
      }
      @media screen and (max-width:300px){
        .row{
          margin-left: 5%;
        }
        .card{
          width: 15rem;
        }
      }
</style>