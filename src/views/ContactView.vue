<template>
    <div class="about">
      <h1>Contact Me</h1>
      <br><br>

      <div class="row">
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

      <div class="row">

        <div class="col-md mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST">

            <div class="row">

              <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Full Name">
                </div>
              </div>

              <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" placeholder="Email">
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject">
                  </div>
              </div>
            </div>

            <div class="row">

              <div class="col-md-12">

                <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Your Message"></textarea>
                </div>

              </div>

            </div>

            <div class="text-center text-md-left">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>

        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    
}
</script>
<style scoped>
    .bi{
      font-size: xx-large;
    }
    input, textarea, button{
      margin-top: 25px;
    }
    a{
      text-decoration: none;
    }
</style>