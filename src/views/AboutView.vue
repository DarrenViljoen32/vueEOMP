<template>
  <div class="about">
    <h1 class="fw-bold">About Me</h1>
    <h2>Hello, I'm Darren Viljoen, an Aspiring Developer</h2>
    <br><br><br>

    <!-- Display content if jsonData is available, otherwise show a loading spinner -->
    <div v-if="jsonData">
      <!-- Display profile picture from the first item in the 'home' array -->
      <!-- <img :src="jsonData.home[0].picture" class="rounded-circle border" alt="Profile Picture Loading..."> -->
      <img src="https://i.postimg.cc/rsjBygKM/20231009-140315-00.jpg" class="rounded-circle border" alt="Profile Picture Loading...">
      <br><br><br>
      <div class="info">
        <!-- Display paragraphs from the 'about' array -->
        <p>{{ jsonData.about[0] }}</p>
        <p>{{ jsonData.about[1] }}</p>
        <br>
        <h3 class="fw-bold">Additional Information : </h3>
        <div class="row">
            <div class="personal-info pads">
                <div class="row">
                    <div class="info-item pads">
                        <p>Date of Birth : 12 March 1998</p>
                    </div>
                    <div class="info-item pads">
                        <p>Age : 25</p>
                    </div>
                    <div class="info-item pads">
                        <p>Phone : +27 74 867 1764</p>
                    </div>
                    <div class="info-item pads">
                        <p>Email : darrenviljoen32@gmail.com</p>
                    </div>
                    <div class="info-item pads">
                        <p>City : Cape Town</p>
                    </div>
                    <div class="info-item pads">
                        <p>Freelance : N/A</p>
                    </div>
                </div>
                <div class="row">
                    <div class="buttons pads">
                        <!-- GitHub link button -->
                        <a href="https://github.com/DarrenViljoen32?tab=repositories" target="_blank" class="btn"><button>See More of my Work</button></a>
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
.about{
  padding-bottom: 2%;
}
h1{
  margin-top: 55px;
  padding-top: 50px;
  color: #24ff02;
}
h3{
  color: #24ff02;
}
h1, h2, h3, p{
  text-align: initial;
  padding-left: 15%;
  padding-right: 15%;
}
img{
  height: 250px;
  width: 250px;
  box-shadow: inset 0 -3em 3em floralwhite,
  0 0 0 2px floralwhite,
  0em 0em 3em #24ff02;
}
button{
  background-color: #24ff02;
  color: floralwhite;
  height: 55px;
  border-radius: 10px;
}
button:hover{
  transform: scale(1.05);
  box-shadow: inset 0 -3em 3em #24ff02,
  0 0 0 2px floralwhite,
  0em 0em 3em #24ff02;
}
.info-item{
  border-bottom: 2px floralwhite;
}
h1, h2{
  animation: fromLeft 1s ease;
  animation-duration: 10s;
}
.info{
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
@keyframes fadeIn {
    0%{
      opacity: 0%;
    }
    100%{
      opacity: 100%;
    }
}

</style>