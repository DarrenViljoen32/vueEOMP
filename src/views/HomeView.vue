<template>
  <div class="home">
    <!-- <br><br><br><br><br><br> -->
    
    <!-- Backgroung Animations -->
    
    
    <!-- <div class="square"> 
      <div class="square-title"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
    </div> -->
    
    <!-- Conditional rendering: Display content if jsonData is available, otherwise show a loading spinner -->
    <div v-if="jsonData">
        <!-- Loop through items in jsonData.home -->
        <div v-for="ho in jsonData.home" :key="ho.name">
          <!-- Display profile picture -->
          <!-- <img :src="ho.picture" class="rounded-circle border" alt=""> -->
          <!-- <img src="https://i.postimg.cc/rsjBygKM/20231009-140315-00.jpg" class="rounded-circle border" alt="Profile Picture"> -->
          <div class="container">
            <div class="glitch" id="maintext" data-text="DARREN VILJOEN">DARREN VILJOE</div>
            <div class="glow" id="maintext"></div>
            <p class="subtitle" id="subtext">{{ ho.intro }}</p>
          </div>
          <br><br><br><br><br><br><br><br><br><br><br>
          <!-- Display name and introduction -->
          <!-- <h1 class="ani-home fw-bold">Hi, I'm {{ ho.name }}</h1> -->
          <!-- <h2 class="ani-home fw-bold">{{ ho.intro }}</h2> -->
          <!-- Display Social Media Links -->
          <!-- <div class="ani-home">
            <a href="https://github.com/DarrenViljoen32" class="bi bi-github"></a> | 
            <a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin"></a> | 
            <a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe"></a> | 
            <a href="https://wa.me/0748671764" class="bi bi-whatsapp"></a>
          </div> -->
        </div>
      </div>
      <!-- Display a loading spinner when jsonData is not available -->
      <div v-else>
        <Spinner />
      </div>
      
  </div>
<div class="scanlines"></div>
<Footer/>
</template>

<script>
// import axios from 'axios'

// Import Spinner component
import Spinner from '@/components/Spinner.vue'
import Footer from "@/components/Footer.vue";

import '../styles/main.scss'

export default {
  name: 'HomeView',
  // Register the Spinner component
  components: {
    Footer,
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
    // this.fetchJsonData();
    this.$store.dispatch('fetchJsonData')
  }
};
</script>

<style scoped>
.home{
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
}
img{
  margin-top: 10%;
  height: 250px;
  width: 250px;
  box-shadow: inset 0 -3em 3em #24ff02,
  0 0 0 2px floralwhite,
  0em 0em 3em #24ff02;
}
a{
  text-decoration: none;
  color: floralwhite;
  font-size: xx-large;
}
h1{
  color: #24ff02;
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
  padding-bottom: 30%;
}

 @media screen and (max-width: 1440px){
  .home {  
  padding-bottom: 25%;
  }
}

@media screen and (min-width: 1440px){
  .home {  
  padding-bottom: 25%;
  }
}
@media screen and (max-width: 1080px){
  .home {  
    padding-bottom: 25%;
  }
}
@media screen and (min-width: 1080px){
  .home {  
    padding-bottom: 25%;
  }
}
@media screen and (min-width: 768px){
  .home{
    padding-bottom: 0%;
  }
}
@media screen and (min-width: 720px){
  .home {  
    padding-bottom: 0%;
  }
}
@media screen and (min-width: 360px){
  .home {  
    padding-bottom: 0%;
  }
  a{
    font-size: large;
  }
  img{
    margin-top: 35%;
  }
}
@media screen and (min-width:300px){
  img{
    margin-top: 30%;
  }
  .home{
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 25%;
  }
}



/* Background Animation */

/* @import url("https://fonts.googleapis.com/css?family=Montserrat:700");
.square {
  background-color: #000000ba;
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
  border: solid 1px #24ff02;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: shape 12s ease-in forwards infinite;
}
.shape:nth-child(2n) {
  border-color: #a90298;
}
.shape:nth-child(2) {
  animation-delay: 0.1s;
  left: 25vw;
  top: 40vh;
}
.shape:nth-child(3) {
  animation-delay: 1s;
  left: 75vw;
  top: 50vh;
}
.shape:nth-child(4) {
  animation-delay: 2s;
  left: 90vw;
  top: 10vh;
}
.shape:nth-child(5) {
  animation-delay: 3s;
  left: 10vw;
  top: 85vh;
}
.shape:nth-child(6) {
  animation-delay: 5s;
  left: 50vw;
  top: 10vh;
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
} */
</style>
