<template>
    <container>
        <v-row >
          <v-col>
            <v-card  color="#1A237E">
              <v-card-item>
                <v-card-text class="text-center"><span style="font-size:xx-large; font-family:'Times New Roman', Times, serif; color:white">
                    <b>Welcome To Teacher Dashboard Page</b></span></v-card-text>
              </v-card-item>
             
      
            </v-card>
            
          </v-col>
        </v-row>
      </container>
        <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <footer class="bg-primary text-white text-center mt-6 text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0 disclaimer">
          <h5 class="text-uppercase">Disclamer</h5>

          <p>
            Here Student can improve their thinking abilities and keep them consistence, they can give their respective
            quizes, and see their profiles as well.
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 connect-us">
          <h5 class="text-uppercase">Connect Us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <!-- <a href="#!" class="text-white">Link 1</a> -->

            </li>
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

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-white" href="#">satyamonlinequiz.com</a>
    </div>
  </footer>

</template>

<script>
export default{
    name:'teacherview',
    data(){
        return{
            items: [
          {
            src: ' https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX53975293.jpg',
          },
          {
            src: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX56371795.jpg',
          },
          {
            src: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX43458467.jpg',
          },
        ],
        }
    },

}</script>

<style>
.row {
  position: relative;
}

.connect-us {
  position: absolute;
  right: 10px;
}
</style>