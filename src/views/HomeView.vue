<template>
  <div class="home">
    
    <div class="square"> 
      <div class="square-title">
        <!-- <br><br><br><br><br> -->
        <div v-if="jsonData">
          <img :src="jsonData.home[0].picture" class="rounded-circle border" alt="Profile Picture">
          <br><br>
          <h1 class="ani-home fw-bold">{{ jsonData.home[0].name }}</h1>
          <h2 class="ani-home fw-bold">{{ jsonData.home[0].intro }}</h2>
          <div class="ani-home">
            <a href="https://github.com/DarrenViljoen32" class="bi bi-github"></a> | 
            <a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin"></a> | 
            <a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe"></a> | 
            <a href="https://wa.me/0748671764" class="bi bi-whatsapp"></a>
          </div>
        </div>
        <div v-else>
          <Spinner />
        </div>


      </div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div>


    
    <!-- <p v-for="item in jsonData" :key="item.id">
      {{ item.name }}
    </p>
    <p v-for="item in jsonData" :key="item.id">
      {{ item.intro }}
    </p> -->
  </div>
</template>

<script>
import axios from 'axios'
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
  data(){
    return {
      // jsonData: null
    };
  },
  mounted(){
    // this.fetchJsonData();
    this.$store.dispatch('fetchJsonData')
  },
  created(){
    // this.fetchData();
  },
  methods: {
    // async fetchJsonData(){
    //   try{
    //     const response = await axios.get('https://darrenviljoen32.github.io/vueEOMP/index.json');
    //     this.jsonData = response.data;
    //   } catch(error){
    //     console.error('Error fetching data: ', error);
    //   }
    // }
  }
};
</script>

<style scoped>
img{
  height: 250px;
  width: 250px;
  box-shadow: inset 0 -3em 3em floralwhite,
  0 0 0 2px floralwhite,
  0em 0em 1em floralwhite;
}
a{
  text-decoration: none;
  color: floralwhite;
  font-size: xx-large;
}

.ani-home{
    animation: zoom 1s ease;
    animation-duration: 5s;
  }

  @keyframes zoom {
    0% {
      transform: scale(0, 0);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }

.home {  
  padding-bottom: 2%;
}




@import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.square {
  background-color: #000030;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

.square-title {
  color: floralwhite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.shape {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #003298;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: shape 12s ease-in forwards infinite;
          animation: shape 12s ease-in forwards infinite;
}
.shape:nth-child(2n) {
  border-color: #0051f4;
}
.shape:nth-child(2) {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.shape:nth-child(3) {
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.shape:nth-child(4) {
  -webkit-animation-delay: 6s;
          animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.shape:nth-child(5) {
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.shape:nth-child(6) {
  -webkit-animation-delay: 10s;
          animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

@-webkit-keyframes shape {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

@keyframes shape {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
