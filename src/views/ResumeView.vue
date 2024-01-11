<template>
    <div class="resume">
      <h1 class="fw-bold" id="right">Resume</h1>
      <br><br>
      <h2 id="right">Education</h2>

      <div v-if="jsonData">

        <div class="container text-center">

          <div class="row">
            <div class="col" v-for="edu in jsonData.education" :key="edu.title">
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <h5 class="card-title">{{ edu.title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{edu.year}}</h6>
                  <p class="card-text">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row">
            
            <div class="col">
  
              <div class="card" id="left">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[0].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[0].year}}</h6>
                  <p class="card-text">{{ jsonData.education[0].description }}</p>
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" id="middle">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[1].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[1].year}}</h6>
                  <p class="card-text">{{ jsonData.education[1].description }}</p>
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" id="right">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[2].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[2].year}}</h6>
                  <p class="card-text">{{ jsonData.education[2].description }}</p>
                </div>
              </div>
  
            </div>
            
          </div>

          <div class="row">
            
            <div class="col">
  
              <div class="card" id="left">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[3].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[3].year}}</h6>
                  <p class="card-text">{{ jsonData.education[3].description }}</p>
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" id="middle">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[4].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[4].year}}</h6>
                  <p class="card-text">{{ jsonData.education[4].description }}</p>
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" id="right">
                <div class="card-body">
                  <h5 class="card-title">{{ jsonData.education[5].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{jsonData.education[5].year}}</h6>
                  <p class="card-text">{{ jsonData.education[5].description }}</p>
                </div>
              </div>
  
            </div>
            
          </div> -->
          
        </div>

      </div>
      <div v-else>
        <Spinner />
      </div>


      <br><br>
      <h2 id="right">Skills</h2>

      <div v-if="jsonData">

        <div class="container text-center">
          <div class="row">
            <div class="col" v-for="skill in jsonData.skills" :key="skill.title">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a class="bi bi-person-up"></a>
                  <h5 class="card-title">{{ skill.title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ skill.level }}</h6>
                  <p class="card-text">{{ skill.experience }}</p>
                </div>
              </div>

            </div>
          </div>

          <!-- <div class="row">
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a class="bi bi-filetype-js"></a>
                  <h5 class="card-title">{{ jsonData.skills[0].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[0].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[0].experience }}</p>
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a class="bi bi-bootstrap"></a>
                  <h5 class="card-title">{{ jsonData.skills[1].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[1].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[1].experience }}</p>
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-code-slash"></a>
                  <h5 class="card-title">{{ jsonData.skills[2].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[2].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[2].experience }}</p>
                </div>
              </div>
  
            </div>
            
          </div>
          <div class="row">
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-laptop"></a>
                  <h5 class="card-title">{{ jsonData.skills[3].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[3].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[3].experience }}</p>
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-wifi"></a>
                  <h5 class="card-title">{{ jsonData.skills[4].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[4].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[4].experience }}</p>
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-display"></a>
                  <h5 class="card-title">{{ jsonData.skills[5].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[5].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[5].experience }}</p>
                </div>
              </div>
  
            </div>
            
          </div>

          <div class="row">
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-phone"></a>
                  <h5 class="card-title">{{ jsonData.skills[6].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[6].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[6].experience }}</p>
                </div>
              </div>
  
            </div>
  
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-compass"></a>
                  <h5 class="card-title">{{ jsonData.skills[7].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[7].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[7].experience }}</p>
                </div>
              </div>
  
            </div>
            
            <div class="col">
  
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <a href="" class="bi bi-server"></a>
                  <h5 class="card-title">{{ jsonData.skills[8].title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ jsonData.skills[8].level }}</h6>
                  <p class="card-text">{{ jsonData.skills[8].experience }}</p>
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
import  Spinner from '@/components/Spinner.vue'

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
}
</script>

<style scoped>
    .resume{
      padding-bottom: 2%;
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
    .card{
      margin-top: 15px;
      height: 345px;
      width: 18rem;
      border: solid 6px #24ff02;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 2px floralwhite,
      0em 0em 1em #24ff02;
      transform: scale(1.01);
    }
    .card-body{
      color: black;
    }
    a{
      text-decoration: none;
      color: black;
      font-size: xx-large;
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
      animation-duration: 10s;
    }
    #right{
      animation: fromLeft 1s ease;
      animation-duration: 10s;
    }
    #skill-zoom{
      animation: bounceIn 1s ease;
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
    @keyframes bounceIn {
        0% { 
          opacity: 0; 
          transform: scale(.3);
        }
        50% { 
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(.9);
        }
        100% {
          transform: scale(1);
        }
      }

      @media screen and (max-width: 1080px){
        .row{
          margin-left: 0px;
        }
      }
      @media screen and (max-width: 720px){
        /* .row{
          width: auto;
        }
        .card{
          margin-right:0%;
          margin-left: 0%;
          padding-left: 0%;
          padding-right: 0%;
          width: 170px;
          height: 650px;
        } */
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