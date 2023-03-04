

<template>
  <mynavbar />
  <div>
    <img src="../../assets/quiz-vector.jpg" class="img-fluid w-100" alt="image">
  </div>


  <footer style="background-color: rgba(0, 0, 0, 0.2);">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Disclamer</h5>

          <p>
            We have designed online quiz portal for students those who are not consistent in studies they can improve
            their learning by giving these mock
            quizes online.
          </p>
        </div>
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 connect-us">
          <h5 class="text-uppercase">Connect Us</h5>

          <ul class="list-unstyled">
            <li>
              <a href="https://www.linkedin.com/in/satyam-kumar-883190158/" style="text-decoration: none;"
                class="text-black">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/satyamy846" style="text-decoration: none;" class="text-black">Github</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    <hr>
    <!-- Copyright -->
    <div class="text-center p-3">
      Copyright © 2023 Onlinequiz. All Rights Reserved.

    </div>
  </footer>
</template>

<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
export default {
  name: 'SignUp',
  components: {
    mynavbar
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}

</script>


<style>
/* .row {
  position: relative;
}

.connect-us {
  position: absolute;
  right: 10px;
} */

.connect-us {
  margin: auto;
}
</style>