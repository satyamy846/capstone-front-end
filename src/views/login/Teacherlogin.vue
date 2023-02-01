<template>
    <mynavbar />
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="mx-auto my-12" max-width="450" ref="form">
          <v-card-text>
            <v-card-title>Faculty Sign in</v-card-title>
            <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required></v-text-field>
            <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password"
              required></v-text-field>
  
          </v-card-text>
          <v-divider class="mt-2"></v-divider>
          <v-card-actions>
            <v-card-text>
              <p>Haven't registered?</p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name:'teachersignup'}" tag="v-btn"><v-btn color="primary">Sign up</v-btn></router-link>
            </v-card-text>
            <v-spacer></v-spacer>
  
            <!-- <v-btn color="primary" depressed @click="submit">
              SignIn
            </v-btn> -->
            <v-card-text>Forgot password</v-card-text>
            <router-link style="text-decoration: none; color: inherit;" :to="{name:'teacherforgotpassword'}" tag="v-btn"><v-btn color="primary">Forgot password</v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  
  </template>
  
  <script >
  import mynavbar from '../../components/navbar/Homenavbar.vue';
  export default {
    name: 'SignUp',
    components: {
      mynavbar
    }
  }
  </script>
  
  
  