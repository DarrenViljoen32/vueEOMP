<template>
    <div class="contact" v-if="jsonData">
      <h1 class="fw-bold" id="right">Contact Me</h1>
      <br><br>

      <div class="row" id="right">
        <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-geo-alt-fill"></i>
                  <h4>Location</h4>
                    <p>Cape Town, Western Cape, South Africa</p>
                </li>
            </ul>
        </div>

        <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-telephone-outbound-fill"></i>
                  <h4>Telephone</h4>
                  <p><a href="tel: 0748671764">+27 74 867 1764</a></p>
                </li>
            </ul>
        </div>

        <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-envelope-at-fill"></i>
                  <h4>Email</h4>
                  <a href="mailto: darrenviljoen32@gmail.com">darrenviljoen32@gmail.com</a>
                </li>
            </ul>
        </div>

      </div>
      <br><br><br><br><br>
      <div class="row">

        <div class="col-md mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST" class="was-validated">

            <div class="row">

              <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Full Name" required>
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
                    <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required>
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
                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required>
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
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter Your Message" required></textarea>
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
              <button type="submit" class="btn">Send</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
</template>
  
<script>
import Spinner from '@/components/Spinner.vue'

export default {
  components:{
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
}
</script>
<style scoped>
    .contact{
      padding-bottom: 2%;
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
    label{
      color: floralwhite;
      text-align: initial;
    }
    h1{
      margin-top: 55px;
      padding-top: 50px;
      color: #24ff02;;
    }
    h4{
      color: #24ff02;
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
      background-color: #24ff02;
      color: floralwhite;
      height: 55px;
      border-radius: 10px;
    }
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #24ff02,
      0 0 0 2px floralwhite,
      0em 0em 1em #24ff02;
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
</style>