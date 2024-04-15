<template>
  <div class="about">
    <div class="titleDiv">
      <h1 class="fw-bold" id="aboutTitle" title="">About Me</h1>
      <h3 id="aboutSub"><span>Hello, I'm Darren Viljoen, an Aspiring Developer</span></h3>
    </div>
    <br><br><br>
    
    <!-- Display content if jsonData is available, otherwise show a loading spinner -->
    <div v-if="jsonData">

      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">

        <div class="col">
          <div class="info">
            <!-- Display paragraphs from the 'about' array -->
            <p>{{ jsonData.about[0] }}</p>
            <p>{{ jsonData.about[1] }}</p>
            <br>
          </div>
        </div>

        <div class="col">
          <!-- Display profile picture from the first item in the 'home' array -->
          <!-- <img :src="jsonData.home[0].picture" class="rounded-circle border" alt="Profile Picture Loading..."> -->
          <img src="https://i.postimg.cc/rsjBygKM/20231009-140315-00.jpg" class="rounded-circle border" alt="Profile Picture Loading...">
          <br><br><br>

          <div class="buttons pads">
            <a href="https://drive.google.com/file/d/1GNKQJHO64nzXMQVaE6cULQ1tg5Xq9FED/view?usp=drive_link" target="_blank" class="btn">
              <button>View My CV</button>
            </a>
          </div>

        </div>

      </div>

      <br><br><br><br><hr><br><br><br><br>

      <h2 class="fw-bold" id="aboutTitle" title="">Additional Information</h2>
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
              
        <div class="col">
          <div class="personal-info pads">
            <div class="info-item pads">
              <p><span id="aboutLabel">Languages Spoken</span>:<br>English, Afrikaans</p>
            </div>
          </div>
        </div>
                    
        <div class="col">
          <div class="personal-info pads">
            <div class="info-item pads">
              <p><span id="aboutLabel">Age</span>:<br>26</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="personal-info pads">
            <div class="info-item pads">
              <p><span id="aboutLabel">Email</span>:<br>darrenviljoen32@gmail.com</p>
            </div>
          </div>
        </div>
               
      </div>

      <br>

      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
              
        <div class="col">
          <div class="personal-info pads">
            <div class="info-item pads">
              <p><span id="aboutLabel">Date of Birth</span>:<br>12 March 1998</p>
              </div>
            </div>
          </div>
                    
          <div class="col">
            <div class="personal-info pads">
              <div class="info-item pads">
                <p><span id="aboutLabel">Phone</span>:<br>+27 74 867 1764</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="personal-info pads">
              <div class="info-item pads">
                <p><span id="aboutLabel">Suburb, City</span>:<br>Riverton, Cape Town</p>
              </div>
            </div>
          </div>
               
      </div>
  
    </div>

    <!-- Display a loading spinner when jsonData is not available -->
    <div v-else>
      <Spinner />
    </div>

    <br><br><br><br><hr><br><br><br><br>

    <h2 id="aboutTitle" title="">Accolades & Achievments</h2>
      <br>

      <div v-if="jsonData">
      
        <div class="row row-cols-3 row-cols-lg-3">
          
          <div class="col-12 col-lg">
            <div class="card-whole info" id="middle">
              <div class="card-inner">
                <div class="card-img">
                  <img src="https://i.ibb.co/60TTnx3/Intro-To-Java-Script.png" class="card-img-top img-fluid" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ jsonData.accolades[0].title }}</h5>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[0].subtitle }}</p>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[0].experience }}</p>
                </div>
              </div>              
            </div>
          </div>

          <div class="col-12 col-lg">
            <div class="card-whole info" id="middle">
              <div class="card-inner">
                <div class="card-img">
                  <img src="https://i.ibb.co/163HvXM/Intro-To-HTML5.png" class="card-img-top img-fluid" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ jsonData.accolades[1].title }}</h5>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[1].subtitle }}</p>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[1].experience }}</p>
                </div>
              </div>              
            </div>
          </div>

          <div class="col-12 col-lg">
            <div class="card-whole info" id="middle">
              <div class="card-inner">
                <div class="card-img">
                  <img src="https://i.ibb.co/1JJbN2Z/IC3-Spark.png" class="card-img-top img-fluid" alt="Image Loading...">
                </div>
                <div class="card-info">
                  <h5 class="card-title">{{ jsonData.accolades[2].title }}</h5>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[2].subtitle }}</p>
                  <p class="card-text" id="card-text">{{ jsonData.accolades[2].experience }}</p>
                </div>
              </div>              
            </div>
          </div>
        
        </div>
      
      </div>
      
      <div v-else>
        <Spinner />
      </div>

      <br><br><br><br><hr><br><br><br><br>

      <h2 id="aboutTitle" title="">Skills</h2>

      <!-- Display skills information if jsonData is available -->
      <div v-if="jsonData">

        <div class="text-center">

          <div class="row" id="skills">
            <div class="col-lg-4" v-for="skill in jsonData.skills" :key="skill.title">
              <div class="card skillCard" id="skill-zoom">
                <div class="card-body">
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

      <br><br><br><br><hr><br><br><br><br>

  </div>

</template>

<script>
// Import the Spinner component
import Spinner from '@/components/Spinner.vue'
import '../styles/main.scss'


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
.about{
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
  color: cyan;
}
h2{
  color: white;
}
h1, h2, h3, p{
  text-align: initial;
  padding-left: 15%;
  padding-right: 15%;
}
#highlight{
  text-shadow: 0em 0em 10px cyan;
}
#aboutLabel, h1, h2{
  color: rgb(255, 255, 255);
  text-shadow: 0em 0em 10px cyan;
}
img{
  height: 250px;
  width: 250px;
  box-shadow: inset 0 -3em 3em cyan,
  0 0 0 2px cyan,
  0em 0em 3em cyan;
}
button{
  background-color: rgb(8, 174, 174);
  color: floralwhite;
  height: 55px;
  border-radius: 10px;
  font-size: large;
}
button:hover{
  transform: scale(1.05);
  box-shadow: inset 0 -3em 3em cyan,
  0 0 0 2px floralwhite,
  0em 0em 3em cyan;
}
.info-item{
  border-bottom: 2px floralwhite;
}
a{
      text-decoration: none;
      color: black;
      font-size: xx-large;
}
.card{
      margin-top: 35px;
      height: 400px;
      width: 18rem;
      margin-left: 155px;
      margin-right: 0px;
      border: solid 3px rgb(8, 174, 174);
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 3px rgb(8, 174, 174),
      0em 0em 3em cyan;
      transform: scale(1.01);
    }
    .card-body{
      color: black;
    }
    .card .card-body{
      height: 22rem;
      padding-bottom: 15px;
    }
    .card-text{
      font-size: 16px;
    }
.card-whole{
      flex: 0 0 33.33%;
      max-width: 100%;
      max-height: 100%;
      margin-bottom: 30px;
      margin-left: 40px;
      margin-right: 0px;
    }
    .card-whole .card-inner{
      border: 6px solid cyan;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      width: 400px;
      height: 300px;
      }
    .card-whole .card-inner:hover{
        box-shadow: inset 0 -3em 3em floralwhite,
        0 0 0 3px rgb(8, 174, 174),
        0em 0em 3em cyan;
      }
      .card-whole .card-inner .card-img img{
        width: 100%;
        height: 300px;
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
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 30px;
        transition: all 0.3s ease;
        opacity: 0;
        font-size: 20px;
    }
    .card-whole .card-inner:hover .card-info{
      opacity: 1;
    }
    .card-whole .card-inner .card-info h5{
      font-size: 28px;
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
      font-size: 16px;
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
      height: auto;
    }

/* h1, h2{
  animation: fromLeft 1s ease;
  animation-duration: 10s;
} */
.info{
  animation: fadeIn 5s ease;
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

#aboutTitle{
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

#aboutTitle::before, #aboutTitle:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 228px;
}

#aboutTitle::before{
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

#aboutTitle::after{
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


@media only screen and (min-width: 1081px){
  .card{
    margin-left: 75px;
    margin-right: 75px;
    width: 18rem;
    height: 400px;
  }
  .card-text{
    font-size: 16px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .card-whole{
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 22px;
    padding-right: 22px;
  }
  .card-whole .card-inner{
    width: 400px;
    height: 290px;       
  } 
  .card-whole .card-inner .card-img img{
    height: 280px;
  }
  .card-whole .card-inner .card-info h5{
    font-size: 26px;
  }
  .card-whole .card-inner .card-info p{
    font-size: 16px;
  }
}
@media only screen and (max-width: 1080px){
  .card{
    margin-left: 100px;
    margin-right: 0px;
    width: 16rem;
    height: 360px;
  }
  .card-title{
    font-size: 20px;
  }
  .card-text{
    font-size: 14px;
  }
  .card-whole{
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px; 
    padding-bottom: 0px;
  }
  .card-whole .card-inner{
    width: 330px;
    height: 280px;       
  } 
  .card-whole .card-inner .card-img img{
    height: 280px;
  }
  .card-whole .card-inner .card-info h5{
    font-size: 26px;
  }
  .card-whole .card-inner .card-info p{
    font-size: 14px;
  }
}
@media only screen and (max-width: 430px){
  .card{
    margin-left: 50px;
    margin-right: 0px;
    width: 20rem;
    height: 400px;
  }
  .card-title{
    font-size: 24px;
  }
  .card-text{
    font-size: 15px;
  }
  .card-whole{
    margin-left: 40px;
    margin-right: 0px;
    padding-left: 0px; 
    padding-bottom: 0px;
  }
  .card-whole .card-inner{
    width: 340px;
    height: 280px;
  } 
  .card-whole .card-inner .card-img img{
    height: 270px;
    margin-right: 0%;
    padding-right: 0%;
  }
}
@media only screen and (max-width: 360px){
  .card{
    margin-left: 20px;
    margin-right: 0px;
    width: 20rem;
    height: 400px;
  }
  .card-title{
    font-size: 24px;
  }
  .card-text{
    font-size: 15px;
  }
  .card-whole{
    margin-left: 10px;
    margin-right: 0px;
    padding-left: 0px; 
    padding-bottom: 0px;
  }
  .card-whole .card-inner{
    width: 340px;
    height: 280px;
  } 
  .card-whole .card-inner .card-img img{
    height: 270px;
    margin-right: 0%;
    padding-right: 0%;
  }
}

</style>