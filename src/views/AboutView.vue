<template>
  <div class="about">
    <h1 class="fw-bold">About Me</h1>
    <h2>Hello, I'm Darren Viljoen, an Aspiring Developer</h2>
    <br><br><br>
    <div v-if="jsonData">
      <img :src="jsonData.home[0].picture" class="rounded-circle border" alt="Profile Picture">
      <br><br><br>
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
                      <!-- github link -->
                      <a href="https://github.com/DarrenViljoen32?tab=repositories" target="_blank" class="btn btn-primary">See More of my Work</a>
                  </div>
              </div>
          </div>
      </div>

      <!-- <table class="table">
        <tbody>
          <tr>
            <td>Date of Birth : 12 March 1998</td>
            <td>Age : 25</td>
            <td></td>
          </tr>
        </tbody>
      </table> -->
  
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeView',
  components: {
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
h1{
  margin-top: 55px;
}
h3, p{
  text-align: initial;
  padding-left: 15%;
  padding-right: 15%;
}
img{
  height: 250px;
  width: 250px;
  box-shadow: inset 0 -3em 3em floralwhite,
  0 0 0 2px floralwhite,
  0em 0em 1em floralwhite;
}
.info-item{
  border-bottom: 2px floralwhite;
}

</style>