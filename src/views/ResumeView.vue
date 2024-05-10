<template>
    <div class="resume">
      <h1 class="fw-bold" id="resumeTitle" title="">Education & Experience</h1>
      <br><br>

      <!-- <div class="row">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col buttons pads">
          <a href="https://docs.google.com/document/d/1yxXwSmmh3eHerKS70qtUNjyLnusV_G6GMb-GeruSLjE/edit?usp=drive_link" target="_blank" class="cv" id="cv">
              <button class="cv" id="cv">Checkout My CV!</button>
          </a>
        </div>
      </div> -->

      <br><br>
      <h2 id="resumeTitle" title="">Education</h2>

      <!-- Display education information if jsonData is available -->
      <div v-if="jsonData">

        <div class="text-center">

          <div class="row" id="education">

            <div class="col-lg-3" v-for="edu in jsonData.education" :key="edu.title">
              <div class="card eduCard" id="skill-zoom">

                    <div class="card-body">
                      <h5 class="card-title">{{ edu.title }}</h5>
                      <h6 class="card-title">{{ edu.course }}</h6>
                      <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{edu.year}}</h6>
                      <p class="card-text">{{ edu.description }}</p>
                   
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
      
      <!-- <br><br><br><br><br><br><br><br>
      <h2 id="resumeTitle" title="Accolades & Achievments">Accolades & Achievments</h2>
      <br>

      <div v-if="jsonData">
      
        <div class="row row-cols-3 row-cols-lg-3">
          
          <div class="col-12 col-lg">
            <div class="card-whole" id="middle">
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
            <div class="card-whole" id="middle">
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
            <div class="card-whole" id="middle">
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
      </div> -->

      <br><br><br><br><hr><br><br><br><br>
      <h2 id="resumeTitle" title="">Work Experience</h2>

      <div v-if="jsonData">
        <div class="text-center">
          <div class="row" id="skills">
            <div class="col-lg-4" v-for="exp in jsonData.work" :key="exp.title">
              <div class="card workCard" id="skill-zoom">
                <div class="card-body">
                  <a class="bi bi-person-workspace"></a>
                  <h5 class="card-title">{{ exp.title }}</h5>
                  <h6 class="card-subtitle mb-2">{{ exp.position }}</h6>
                  <h6 class="card-subtitle mb-2 text-muted bi bi-calendar">{{ exp.year }}</h6>
                  <p class="card-text">{{ exp.description }}</p>
                  <p class="card-text">{{ exp.leave }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <Spinner/>
      </div>

      <!-- <br><br><br><br><br><br><br><br>
      <h2 id="resumeTitle" title="Skills">Skills</h2>

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
      
      <div v-else>
        <Spinner />
      </div> -->


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
      max-height: 100%;
      padding-top: 5%;
      padding-bottom: 10%;
      background-image: linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/d0Jbfvz/wp2799850-tron-grid-wallpaper.jpg");
      /* background-repeat: no-repeat; */
      background-attachment: fixed;
      background-size: cover;

    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
    }
    h1, h2{
      color: rgb(255, 255, 255);
      text-shadow: 0em 0em 10px cyan;
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    .card{
      margin-top: 35px;
      height: 380px;
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
    .eduCard{
      width: 18rem;
    }
    a{
      text-decoration: none;
      color: black;
      font-size: xx-large;
    }
    .row{
      margin-left: 0px;
      margin-right: 0px;
      /* padding-left: 20%; */
    }
    #education, #skills{
      max-width: 100%;
      margin-right: 20%;
      padding-left: 0px;
      padding-right: 0px;
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
        padding-right: 30px;
        padding-left: 30px;
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
    .cv{
      font-size: large;
    }
    button{
      background-color: cyan;
      color: floralwhite;
      height: 55px;
      border-radius: 10px;
    }
    button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em cyan,
      0 0 0 2px floralwhite,
      0em 0em 3em cyan;
    }

    #middle{
      animation: fadeIn 3s ease;
      animation-duration: 5s;
    }
    #left{
      animation: fromRight 1s ease;
      animation-duration: 10s;
    }
    /* #right{
      animation: fromLeft 1s ease;
      animation-duration: 10s;
    } */
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

#resumeTitle{
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

#resumeTitle::before, #resumeTitle:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 228px;
}

#resumeTitle::before{
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

#resumeTitle::after{
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
  #resumeTitle::before, #resumeTitle:after{
    padding-left: 230px;
  }
  .row{
    margin-left: 0px;
  }
  .card{
    margin-left: 100px;
    margin-right: 50px;
    width: 18rem;
    height: 360px;
  }
  .eduCard{
    width: 16rem;
    height: 450px;
  }
  .card-text{
    font-size: 16px;
  }
  .card-whole{
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 70px;
    padding-right: 0px;
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
@media only screen and (max-width: 1080px){
  #resumeTitle::before, #resumeTitle:after{
    padding-left: 163px;
  }
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
  .eduCard{
    width: 13rem;
    height: 430px;
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
    /*@media only screen and (max-width: 720px){
         .row{
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
        
        /* .card{
          margin-left: 0px;
          width: 900px;
        }
        #education, #skills{
          padding-left: 20px;
          padding-right: 0px;
          margin-left: 20px;
          margin-right: 0px;
        }
        .card-whole{
          margin-left: 0px;
          margin-right: 5px;
        }
        .card-whole .card-inner{
          width: 230px;
          height: 170px;
        }
        .card-whole .card-inner .card-info{
          font-size: 12px;
          padding: 0px;
        }
        #card-text{
          font-size: 10px;
        } 
    }*/
    /* @media only screen and (min-width: 720px){
      .card{
          margin-left: 0px;
          width: 900px;
        }
        #education, #skills{
          padding-left: 20px;
          padding-right: 0px;
          margin-left: 20px;
          margin-right: 0px;
        }
        .card-whole{
          margin-left: 0px;
          margin-right: 5px;
        }
        .card-whole .card-inner{
          width: 230px;
          height: 170px;
        }
        .card-whole .card-inner .card-info{
          font-size: 12px;
          padding: 0px;
        }
    } */
@media only screen and (max-width:430px){
  h1, h2{
    white-space: nowrap;
  }
  #resumeTitle::before, #resumeTitle:after{
    padding-left: 55px;
  }
  .card{
    margin-left: 25px;
    margin-right: 0px;
    width: 20rem;
    height: 360px;
  }
  .card-title{
    font-size: 24px;
  }
  .card-text{
    font-size: 18px;
  }
  .card-whole{
    margin-left: 0px;
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
  .eduCard{
    height: 450px;
  }
        /*
        .card{
          width: 18rem;
        }
        #education, #skills{
          padding-left: 35px;
          padding-right: 0px;
          margin-left: 20px;
          margin-right: 0px;
        }
        .card-whole .card-inner{
          border: 3px solid cyan;
          height: 185px;
          width: 250px;
        }
        .card-whole{
          margin-left: 0px;
          margin-right: 5px;
        }
        .card-whole .card-inner{
          height: 185px;
          width: 250px;
        }
        .card-whole .card-inner .card-info .card-title{
          font-size: 20px;
          padding: 0px;
        }
        .card-text{
          font-size: 9px;
        } */
    }
    @media only screen and (max-width:360px){
       .card{
          width: 20rem;
          margin-left: 2%;
        }
       /* 
        #education, #skills{
          padding-left: 0px;
          padding-right: 0px;
          margin-left: 10px;
          margin-right: 0px;
        }
        .card-whole .card-inner{
          height: 185px;
          width: 250px;
        }
        .card-whole .card-inner .card-info .card-title{
          font-size: 20px;
          padding-top: 5px;
        }
        .card-text{
          font-size: 20px;
        }
        #card-text{
          font-size: 10px;
        } */
    }
    /* @media only screen and (min-width: 300px){
        .card{
          width: 15rem;
          margin-left: 0px;
          height: 265px;
        }
        #education, #skills{
          padding-left: 0px;
          padding-right: 0px;
          margin-left: 10px;
          margin-right: 0px;
        }
        .card-inner{
          height: 180px;
          width: 255px;
        }
        .card-whole{
          margin-right: 50px;
        }
        .card-text{
          font-size: 10px;
        }
    } */
</style>
