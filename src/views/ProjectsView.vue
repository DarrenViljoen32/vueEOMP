<template>
    <div class="projects">
      <h1 class="fw-bold" id="right">Projects</h1>
      <br><br>

    <!-- Display projects information if jsonData is available -->
    <div v-if="jsonData">

      <div class="container text-center">

        <!-- COMMENTED OUT BECAUSE CAN'T STYLE CARDS INDIVIDUALLY -->

        <!-- <div class="row">
          <div class="col-4" v-for="proj in jsonData.projects" :key="proj.name">
            <div class="card-whole" id="">
              <div class="card-inner">
                <div class="card-img">
                  <img :src="proj.image" class="card-img-top" alt="image">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ proj.name }}</h5>
                  <p class="card-text">{{ proj.description }}</p>
                  <a :href="proj.github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="proj.netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
            </div>
          </div>
        </div> -->


        <!-- ABLE TO STYLE CARDS INDIVIDUALLY WITH THE FOLLOWING CODE -->

        <div class="row">
          <div class="col">
            
            <div class="card-whole" id="left">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[5].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/9Q4xW4zV/portfolio.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[5].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[5].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[5].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[5].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>
          </div>

          <div class="col">
            <div class="card-whole" id="middle">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[4].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/1zwJqLpj/ecommerce-Java-Script.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[4].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[4].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[4].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[4].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>
          </div>

          <div class="col">
            <div class="card-whole" id="right">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[2].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/4dGwbBPN/ecommerce.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[2].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[2].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[2].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[2].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>

          </div>

        </div>

        <div class="row">
          <div class="col">

            <div class="card-whole" id="left">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[1].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/1tKBWw70/virtual-Calculator.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[1].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[1].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[1].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[1].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>
          </div>

          <div class="col">
            
            <div class="card-whole" id="middle">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[3].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/vHZqN2s4/bmi-Calculator.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[3].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[3].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[3].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[3].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>
          </div>

          <div class="col">

            <div class="card-whole" id="right">
  
              <div class="card-inner">
                <div class="card-img">
                  <!-- Display project image from the data -->
                  <!-- <img :src="jsonData.projects[0].image" class="card-img-top" alt="Image Loading..."> -->
                  <img src="https://i.postimg.cc/6pDMT9GZ/virtual-Keyboard.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <!-- Display project name and description from the data -->
                  <h5 class="card-title">{{ jsonData.projects[0].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[0].description }}</p>
                  <!-- Display GitHub and Netlify buttons with links from the data -->
                  <a :href="jsonData.projects[0].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[0].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Hover for Details!</label>
              
            </div>
          </div>

        </div>
        
      </div>

    </div>

    <!-- Display a loading spinner when jsonData is not available -->
    <div v-else>
      <Spinner />
    </div>

    </div>
  </template>
  
<script>
// Import the Spinner component
import Spinner from '@/components/Spinner.vue'

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
};
</script>
<style scoped>
    .projects{
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
    img{
      height: 250px;
    }
    a{
      text-decoration: none;
    }
    button{
    background-color: #24ff02;
    color: floralwhite;
    height: 55px;
    border-radius: 10px;
    }
    button:hover{
      transform: scale(1.15);
      /* box-shadow: inset 0 -3em 3em #24ff02,
      0 0 0 2px floralwhite,
      0em 0em 1em #24ff02; */
    }
    .row{
      margin-left: 25px;
      margin-right: 25px;
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
    button{
        width: 50px;
        height: 35px;
        font-size: larger;
        margin: 10px;
    }
    @media screen and (max-width: 720px){
        .card-whole{
          width: 500px;
        }
    }
    @media screen and (max-width: 1080px){
        .card-whole{
          width: 18rem;
        }
    }
</style>