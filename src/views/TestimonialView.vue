<template>
  
    <div class="testimonials">
      <h1 class="fw-bold" id="referenceTitle" title="">References</h1>
      <br><br>

      <!-- Display testimonials information if jsonData is available -->
      <div v-if="jsonData">
        <div class="text-center">

          <!-- Iterate over testimonials data and create a card for each item -->
          <div class="row">

            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[0].name }}</h5>
                      <p class="card-text">Lecturer</p>
                      <p class="card-text">{{ jsonData.testimonials[0].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[0].email}}</a>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="https://i.ibb.co/0X97CNH/matthew-1.png" class="card-img-top" alt="Image Loading...">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <img src="https://i.ibb.co/hH2jnH3/20231009-142111crop.jpg" class="card-img-top" alt="Image Loading...">
                  </div>
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[1].name }}</h5>
                      <p class="card-text">Peer</p>
                      <p class="card-text">{{ jsonData.testimonials[1].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[1].email}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          
          <!-- Iterate over testimonials data and create a card for each item -->
          <div class="row">
            
            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[2].name }}</h5>
                      <p class="card-text">Peer</p>
                      <p class="card-text">{{ jsonData.testimonials[2].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[2].email}}</a>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="https://i.ibb.co/177jjx9/20231009-142232crop.jpg" class="card-img-top" alt="Image Loading...">
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <img src="https://i.ibb.co/Qf3X6xW/IMG-20211025-134530-422-1.jpg" class="card-img-top" alt="Image Loading...">
                  </div>
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[3].name }}</h5>
                      <p class="card-text">Peer</p>
                      <p class="card-text">{{ jsonData.testimonials[3].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[3].email}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div class="row">
            
            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[4].name }}</h5>
                      <p class="card-text">Peer</p>
                      <p class="card-text">{{ jsonData.testimonials[4].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[4].email}}</a>
                    </div>
                  </div>
                  <div class="col-6">
                    <img src="https://i.ibb.co/vzKCgMJ/20231009-135626crop.jpg" class="card-img-top" alt="Image Loading...">
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6">
              <div class="card" id="fade">
                <div class="row">
                  <div class="col-6">
                    <img src="https://i.ibb.co/z6P3Wm3/20231009-141958crop.jpg" class="card-img-top" alt="Image Loading...">
                  </div>
                  <div class="col-6">
                    <div class="card-body">
                      <h5 class="card-title">{{ jsonData.testimonials[5].name }}</h5>
                      <p class="card-text">Peer</p>
                      <p class="card-text">{{ jsonData.testimonials[5].quote }}</p>
                      <a class="card-link">{{jsonData.testimonials[5].email}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <br><br><hr><br><br>

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
          </div> -->
          
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
    .testimonials{
      padding-top: 5%;
      padding-bottom: 0%;
      background-image: linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/d0Jbfvz/wp2799850-tron-grid-wallpaper.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    .card{
      margin-top: 100px;
      height: 24rem;
      width: 40rem;
      overflow: hidden;
      border: solid 6px cyan;
      margin-left: 33px;
    }
    .card img{
      height: 230px;
      transition: transform .5s ease;
      padding-top: 5%
    }
    .card:hover{
      box-shadow: inset 0 -3em 3em floralwhite,
      0 0 0 3px rgb(8, 174, 174),
      0em 0em 3em cyan;
      transform: scale(1.01);
    }
    /* .card:hover img{
      transform: scale(1.1);
    } */
    .card-link{
      font-size: 13px;
      /* white-space: nowrap; */
    }
    a{
      text-decoration: none;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
      color: white;
      text-shadow: 0em 0em 10px cyan;  
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    .row{
      max-width: 100%;
      margin-left: 100px;
      margin-right: 0px;
      padding-left: 100px;
      padding-right: 0px;
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

    #referenceTitle{
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

#referenceTitle::before, #referenceTitle:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 228px;
}

#referenceTitle::before{
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

#referenceTitle::after{
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
      .row{
        margin-left: 0px;
        padding-left: 5px;
      }
      .card{
        height: 24rem;
        margin-left: 12px;
        margin-right: 20px;
      }
    }
    @media only screen and (max-width: 1080px){
      .row{
        margin-left: 0px;
        padding-left: 5px;
      }
    }
    @media only screen and (max-width:430px){
        .row{
          margin-left: 0%;
          margin-right: 0%;
          padding-left: 0%;
        }
        .card{
          width: 22rem;
        }
        .card-body{
          margin-left: 0%;
          padding-left: 0%;
          margin-right: 0%;
          padding-right: 0%;
        }
        .card-text{
          font-size: 12px;
          padding: 0%;
          margin: 0%;
        }
    }
     @media only screen and (max-width:360px){
        .row{
          margin-left: 0%;
          padding-left: 0%;
        }
        .card{
          width: 18rem;
        }
        .card-body{
          margin-left: 0%;
          padding-left: 0%;
          margin-right: 0%;
          padding-right: 0%;
        }
        .card-text{
          font-size: 10px;
          padding: 0%;
          margin: 0%;
        }
    }

    /*@media screen and (min-width: 300px){
        .card{
          width: 15rem;
          margin-left: 0px;
          height: 755px;
        }
        .row{
          margin-left: 5px;
          margin-right: 0px;
        }
    } */
</style>