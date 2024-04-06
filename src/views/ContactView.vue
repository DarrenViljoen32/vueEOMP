<template>

    <!-- Display contact information if jsonData is available -->
    <div class="contact" v-if="jsonData">
      <h1 class="fw-bold" id="contactTitle" title="">Contact Me</h1>
      <br><br>

      <div class="row" id="">
        <div class="col-1"></div>

        <div class="col-md text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-geo-alt-fill"></i>
                  <h4 id="headings" title="Location">Location</h4>
                    <p>Riverton, Cape Town, Western Cape, South Africa</p>
                </li>
            </ul>
        </div>

        <div class="col-md text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-telephone-outbound-fill"></i>
                  <h4 id="headings" title="TelePhone">Telephone</h4>
                  <p><a href="tel: 0748671764" target="_blank">+27 74 867 1764</a></p>
                </li>
            </ul>
        </div>

        <div class="col-md text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-envelope-at-fill"></i>
                  <h4 id="headings" title="Email">Email</h4>
                  <p>darrenviljoen32@gmail.com</p>
                </li>
            </ul>
        </div>
        <div class="col-1"></div>
      </div>

      <br><br><br>

      <div class="row row-cols-2 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
        <div class="col-4">

          <h3 class="fw-bold"  id="contactTitle" title="">Social Media Links</h3>
          <br><br>

          <div class="row" id="">
            <div class="col-1"></div>
            <div class="col-md-5 text-center">
              <a href="https://github.com/DarrenViljoen32" class="bi bi-github" target="_blank"></a> 
              <p>Check out my GitHub!</p>
              <br>
              <a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin" target="_blank"></a>
              <p>Hire Me via LinkedIn!</p> 
              <br>
            </div>
            <div class="col-md-5 text-center">
                <a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe" target="_blank"></a> 
                <p>Try out my Netlify!</p>
                <br>
                <a href="https://wa.me/0748671764" class="bi bi-whatsapp" target="_blank"></a>
                <p>Whatsapp Me!</p>
            </div>
            <div class="col-1"></div>
          </div>

        </div>
        
        <div class="col">

          <h3 class="fw-bold col"  id="contactTitle" title="">Send Me a Message via Email</h3>
    
          <div class="row">
    
            <div class="col-md mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST" class="was-validated" target="_blank">
    
                <div class="row">
    
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" placeholder="Enter Full Name" required v-model="name">
                        <div class="valid-feedback">
                          Valid!
                        </div>
                        <div class="invalid-feedback">
                          Please Enter A Name.
                        </div>
                    </div>
                  </div>
    
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required v-model="email">
                        <div class="valid-feedback">
                          Valid!
                        </div>
                        <div class="invalid-feedback">
                          Please Enter An Email.
                        </div>
                    </div>
                  </div>
    
                </div>
    
                <div class="row">
    
                  <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required v-model="subject">
                        <div class="valid-feedback">
                          Valid!
                        </div>
                        <div class="invalid-feedback">
                          Please Enter A Subject.
                        </div>
                      </div>
                  </div>
                  
                </div>
    
                <div class="row">
    
                  <div class="col-md-12">
    
                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter Your Message" required v-model="message"></textarea>
                        <div class="valid-feedback">
                          Valid!
                        </div>
                        <div class="invalid-feedback">
                          Please Enter A Message.
                        </div>
                    </div>
    
                  </div>
    
                </div>
    
                <div class="text-center text-md-left">
                  <button type="submit" class="btn" data-toggle="modal" data-target="#formModal">Send</button>
                </div>
    
                  <!-- Modal -->
                  <!-- <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="formModalLongTitle">Thank You!</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p>Your Message Was Successfully Sent via Formspree.</p>
                        </div>
                      </div>
                    </div>
                  </div> -->
    
              </form>
            </div>
    
          </div>

        </div>
        <!-- <div class="col-1"></div> -->
      </div>

      <br><br><br>

    </div>

    <!-- Display a loading spinner when jsonData is not available -->
    <div v-else>
      <Spinner />
    </div>

</template>
  
<script>
// Import the Spinner component
import Spinner from '@/components/Spinner.vue'

export default {
  // Register the Spinner component
  components:{
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
  },
  data(){
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods:{
    // Empty form fields when submit button is pressed
    submitForm(){
      console.log('Page was refreshed.');
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>
<style scoped>
    .contact{
      padding-top: 5%;
      padding-bottom: 0%;
      background-image: linear-gradient(rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/d0Jbfvz/wp2799850-tron-grid-wallpaper.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    .bi{
      font-size: xx-large;
      color: floralwhite;
    }
    input, textarea, button{
      margin-top: 25px;
    }
    a{
      text-decoration: none;
    }
    a:hover{
      transform: scale(1.01);
      color: cyan;
      box-shadow: 0em 0em 3em cyan;
    }
    #headings, #contactTitle{
      color: white;
      text-shadow: 0em 0em 5px cyan;
    }
    label{
      color: floralwhite;
      text-align: initial;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
      color: cyan;
    }
    h4{
      color: cyan;
    }
    h1, h2, h3{
      text-align: initial;
      padding-left: 15%;
      padding-right: 15%;
    }
    textarea{
      height: 150px;
    }
    .md-form input:focus{
      box-shadow: 0 0 20px floralwhite;
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
      0em 0em 1em cyan;
    }
    form{
      margin-left: 2%;
      margin-right: 2%;
    }
    #left{
      animation: fromRight 1s ease;
      animation-duration: 5s;
    }
    #right{
      animation: fromLeft 1s ease;
      animation-duration: 5s;
    }
    #icons{
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

    #contactTitle, #headings{
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

#contactTitle::before, #contactTitle:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 230px;
}
/* #headings::before, #headings:after{
  content: attr(title);
  position: absolute;
  left: 0;
  padding-left: 228px;
} */

#contactTitle::before{
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

#contactTitle::after{
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

    /* @media screen and (min-width: 300px) {
      .row-cols-2{
        --bs-gutter-x: 0rem
      }
    } */
</style>