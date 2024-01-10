<template>
    <div class="projects">
      <h1 class="fw-bold">Projects</h1>
      <br><br>

    <div v-if="jsonData">

      <div class="container text-center">



        <div class="row">

          <div class="card-whole col" id="left">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[5].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[5].name }}</h5>
                <p class="card-text">{{ jsonData.projects[5].description }}</p>
                <a :href="jsonData.projects[5].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[5].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>

          <div class="card-whole col" id="middle">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[4].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[4].name }}</h5>
                <p class="card-text">{{ jsonData.projects[4].description }}</p>
                <a :href="jsonData.projects[4].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[4].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>
          <div class="card-whole col" id="right">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[2].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[2].name }}</h5>
                <p class="card-text">{{ jsonData.projects[2].description }}</p>
                <a :href="jsonData.projects[2].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[2].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>

        </div>

        <div class="row">

          <div class="card-whole col" id="left">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[1].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[1].name }}</h5>
                <p class="card-text">{{ jsonData.projects[1].description }}</p>
                <a :href="jsonData.projects[1].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[1].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>

          <div class="card-whole col" id="middle">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[3].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[3].name }}</h5>
                <p class="card-text">{{ jsonData.projects[3].description }}</p>
                <a :href="jsonData.projects[3].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[3].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>

          <div class="card-whole col" id="right">

            <div class="card-inner">
              <div class="card-img">
                <img :src="jsonData.projects[0].image" class="card-img-top" alt="image">
              </div>
              <div class="card-info">
                <h5 class="card-title">{{ jsonData.projects[0].name }}</h5>
                <p class="card-text">{{ jsonData.projects[0].description }}</p>
                <a :href="jsonData.projects[0].github"><button type="button" class="card-link bi bi-github btn btn-light" title="GitHub"></button></a>
                <a :href="jsonData.projects[0].netlify"><button type="button" class="card-link bi bi-globe btn btn-light" title="Netflify"></button></a>
              </div>
            </div>
            <label for=".card-whole">Hover for Details!</label>
            
          </div>

        </div>


        <!-- <div class="row">
          
          <div class="col">
  
            <div class="card" id="left" style="width: 18rem;">
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
  
            <div class="card" id="middle" style="width: 18rem;">
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
  
            <div class="card" id="right" style="width: 18rem;">
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
  
            <div class="card" id="left" style="width: 18rem;">
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
  
            <div class="card" id="middle" style="width: 18rem;">
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
  
            <div class="card" id="right" style="width: 18rem;">
              <img :src="jsonData.projects[0].image" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title">{{ jsonData.projects[0].name }}</h5>
                <p class="card-text">{{ jsonData.projects[0].description }}</p>
                <a :href="jsonData.projects[0].github" class="card-link bi bi-github">GitHub</a>
                <a :href="jsonData.projects[0].netlify" class="card-link bi bi-globe">Netlify</a>
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
.projects{
  padding-bottom: 2%;
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
        max-width: 33.33%;
        margin-bottom: 30px;
      }
      .card-whole.hide{
        display: none;
      }
      .card-while.show{
        display: block;
        animation: showItem 0.5s ease;
      }
      .card-whole .card-inner{
        border: 6px solid floralwhite;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
      }
      .card-whole .card-inner:hover{
        box-shadow: inset 0 -3em 3em floralwhite,
        0 0 0 2px floralwhite,
        0em 0em 1em floralwhite;
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
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px);
        opacity: 0;
      }
      .card-whole .card-inner .card-info p{
        color: floralwhite;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px);
        opacity: 0;
      } 
      .card-whole .card-inner:hover .card-info h5{
        -webkit-transform: translateX(0px);
      transform: translateX(0px);
      opacity: 1;
      }
      .card-whole .card-inner:hover .card-info p{
        -webkit-transform: translateX(0px);
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
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-transform: translateX(20px);
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
</style>