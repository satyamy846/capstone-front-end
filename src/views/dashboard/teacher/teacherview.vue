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