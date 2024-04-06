<template>
    <div class="projects">
      <h1 class="fw-bold" id="projectTitle" title="Projects">Projects</h1>
      <br><br>

    <!-- Display projects information if jsonData is available -->
    <div v-if="jsonData">

      <div class="text-center">

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
                  <a :href="jsonData.projects[5].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[5].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Bootstrap5 Portfolio</label>
              
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
                  <a :href="jsonData.projects[4].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[4].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">JavaScript Ecommerce Website</label>
              
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
                  <a :href="jsonData.projects[2].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[2].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">HTML5 & CSS Ecommerce Website</label>
              
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
                  <a :href="jsonData.projects[1].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[1].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Virtual Calculator</label>
              
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
                  <a :href="jsonData.projects[3].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[3].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">BMI Calculator</label>
              
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
                  <a :href="jsonData.projects[0].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[0].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
                </div>
              </div>
              <label for=".card-whole">Virtual Keyboard</label>
              
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-4"></div>

          <div class="col">
            
            <div class="card-whole" id="middle">
  
              <div class="card-inner">
                <div class="card-img">
                  <img src="https://i.ibb.co/Bc2JHHF/capstone-Project-Image.png" class="card-img-top" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ jsonData.projects[6].name }}</h5>
                  <p class="card-text">{{ jsonData.projects[6].description }}</p>
                  <a :href="jsonData.projects[6].github" target="_blank"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                  <a :href="jsonData.projects[6].netlify" target="_blank"><button type="button" class="card-link bi bi-globe btn btn-light" title="Firebase"></button></a>
                </div>
              </div>
              <label for=".card-whole">Sign In / Log In System</label>
              
            </div>
          </div>

          <div class="col-4"></div>
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
      padding-top: 5%;
      padding-bottom: 0%;
      background-image: linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/d0Jbfvz/wp2799850-tron-grid-wallpaper.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
      color: rgb(255, 255, 255);
      text-shadow: 0em 0em 10px cyan;    
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    img{
      height: 210px;
    }
    a{
      text-decoration: none;
    }
    button{
    background-color: cyan;
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

#projectTitle{
  animation: glitch 1s linear infinite;
}

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

#projectTitle::before, #projectTitle:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 228px;
}

#projectTitle::before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

#projectTitle::after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}



    .card-whole{
        flex: 0 0 33.33%;
        max-width: 100%;
        margin-bottom: 30px;
        padding-left: 10%;
    }
    .card-whole .card-inner{
        border: 6px solid cyan;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
    }
    .card-whole .card-inner:hover{
        box-shadow: inset 0 -3em 3em floralwhite,
        0 0 0 3px rgb(8, 174, 174),
        0em 0em 3em cyan;
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


    @media screen and (min-width: 1081px){
      .card-whole{
        width: 25rem;
      }
    }
    @media screen and (max-width: 1080px){
      .card-whole{
        width: 10rem;
      }
    }
    @media screen and (max-width: 720px){
        .card-whole{
          width: 500px;
        }
    }
    @media screen and (max-width: 360px){
        .card-whole{
          width: 500px;
        }
    }
    @media screen and (max-width: 300px) {
      .row{
        margin-left: 5px;
        padding-left: 0px;
      }
      .card-whole .card-inner{
        height: 13rem;
        width: 15rem;
      }
      .card-title{
        font-size: 20px;
      }
      .card-text{
        font-size: 10px;
      }
    }
</style>