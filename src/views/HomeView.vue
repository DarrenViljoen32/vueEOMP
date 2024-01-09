<template>
  <div class="home">
    <br><br><br><br><br>
    <div v-if="jsonData">
      <img :src="jsonData.home[0].picture" class="rounded-circle border" alt="Profile Picture">
      <br><br><br><br>
      <h1 class="fw-bold">{{ jsonData.home[0].name }}</h1>
      <h2 class="fw-bold">{{ jsonData.home[0].intro }}</h2>
      <a href="https://github.com/DarrenViljoen32" class="bi bi-github"></a> | 
      <a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin"></a> | 
      <a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe"></a> | 
      <a href="https://wa.me/0748671764" class="bi bi-whatsapp"></a>
    </div>
    <div v-else>
      Loading...
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

export default {
  name: 'HomeView',
  components: {
    
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
</style>
