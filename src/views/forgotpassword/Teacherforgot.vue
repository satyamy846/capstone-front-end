<template>
  <mynavbar />
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text>
          <v-card-title>Faculty forgot password</v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required></v-text-field>
        </v-card-text>
        <!-- <v-divider class="mt-12"></v-divider> -->
        <v-card-actions>
          
          <router-link style="text-decoration: none; color:inherit" :to="{ name: 'home' }" tag="btn"><v-btn color="primary">Go to home</v-btn></router-link>
          <v-spacer></v-spacer>
          <v-btn color="primary" depressed @click="submit">
            Reset
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
export default {
  name: 'forgotPassword',
  components: {
    mynavbar
  }
}
</script>
