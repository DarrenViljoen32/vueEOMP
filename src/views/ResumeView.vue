<template>
    <div class="resume">
      <h1 class="fw-bold" id="right">Resume</h1>
      <br><br>
      <h2 id="right">Education</h2>

      <!-- Display education information if jsonData is available -->
      <div v-if="jsonData">

        <div class="container text-center">

          <div class="row">
            <!-- Loop through education data and create a card for each item -->
            <div class="col" v-for="edu in jsonData.education" :key="edu.title">
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <!-- Display education title, year, and description -->
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
          </div> -->
          
        </div>

      </div>

      <!-- Display a loading spinner when jsonData is not available -->
      <div v-else>
        <Spinner />
      </div>


      <br><br>
      <h2 id="right">Skills</h2>

      <!-- Display skills information if jsonData is available -->
      <div v-if="jsonData">

        <div class="container text-center">

          <div class="row">
            <!-- Loop through skills data and create a card for each item -->
            <div class="col" v-for="skill in jsonData.skills" :key="skill.title">
              <div class="card" id="skill-zoom">
                <div class="card-body">
                  <!-- Display skill title, level, experience, and an icon -->
                  <a class="bi bi-person-up"></a>
                  <h5 class="card-title">{{ skill.title }}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ skill.level }}</h6>
                  <p class="card-text">{{ skill.experience }}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      
      <!-- Display a loading spinner when jsonData is not available -->
      <div v-else>
        <Spinner />
      </div>


      <br><br>
      <h2 id="right">Accolades</h2>

      <div v-if="jsonData">

        <div class="row">
          <div class="col-4" v-for="accolade in jsonData.accolades" :key="accolade.title">
            <div class="card-whole" id="left">
              <div class="card-inner">
                <div class="card-img">
                  <img :src="accolade.image" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ accolade.title }}</h5>
                  <p class="card-text">{{ accolade.subtitle }}</p>
                  <p class="card-text">{{ accolade.experience }}</p>
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

// Import the Spinner component
import  Spinner from '@/components/Spinner.vue'

export default {
  name: 'HomeView',
  // Register the Spinner component
  components: {
    Spinner
  },
  // Computed property to retrieve jsonData from the Vuex store
  computed:{
  jsonData(){
      return this.$store.state.jsonData
    }
  },
  // Fetch data when the component is mounted
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
      height: 375px;
      width: 18rem;
      border: solid 6px #24ff02;
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 3px #7cef6a,
      0em 0em 3em #24ff02;
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
    .card-whole{
        flex: 0 0 33.33%;
        max-width: 100%;
        margin-bottom: 30px;
    }
    .card-whole .card-inner{
        border: 6px solid #24ff02;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    .card-whole .card-inner:hover{
        box-shadow: inset 0 -3em 3em floralwhite,
        0 0 0 3px #7cef6a,
        0em 0em 3em #24ff02;
    }
    .card-whole .card-inner .card-img img{
        width: 100%;
        display: block;
    }
    .card-whole .card-inner .card-info{
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
        z-index: 1;
        padding-top: 30px;
        padding-right: 30px;
        padding-left: 30px;
        padding-bottom: 30px;
        transition: all 0.3s ease;
        opacity: 0;
    }
    .card-whole .card-inner:hover .card-info{
        opacity: 1;
    }
    .card-whole .card-inner .card-info h5{
        font-size: 18px;
        font-weight: 700;
        color: floralwhite;
        text-transform: capitalize;
        transition: all 0.3s ease;
        transform: translateX(-20px);
        opacity: 0;
    }
    .card-whole .card-inner .card-info p{
        color: floralwhite;
        transition: all 0.3s ease;
        transform: translateX(-20px);
        opacity: 0;
    } 
    .card-whole .card-inner:hover .card-info h5{
      transform: translateX(0px);
      opacity: 1;
    }
    .card-whole .card-inner:hover .card-info p{
      transform: translateX(0px);
      opacity: 1;
    }
    .card-whole .card-inner .card-icon a{
        height: 40px;
        width: 40px;
        background-color: floralwhite;
        text-align: center;
        border-radius: 50%;
        position: absolute;
        right: 30px;
        bottom: 30px;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateX(20px);
    }
    .card-whole .card-inner .card-icon a{
        color: floralwhite;
        padding-left: 100px;
        padding-top: 5px;
        font-size: xx-large;
    }
    .card-img{
      height: 310px;
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
