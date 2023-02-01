<template>
    <mynavbar />
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="mx-auto my-12" max-width="450" ref="form">
          <v-card-text>
            <v-card-title>Student login</v-card-title>
            <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required></v-text-field>
            <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password"
              required></v-text-field>
  
          </v-card-text>
          <v-divider class="mt-2"></v-divider>
          <v-card-actions>
            <v-card-text>
              
              <p>Haven't register?</p>
              <router-link style="text-decoration: none; color: inherit;" :to="{name:'studentsignup'}" tag="v-btn">Sign up</router-link>
            </v-card-text>
            <v-spacer></v-spacer>
  
            <p>Haven't register?</p>
            <router-link style="text-decoration: none; color: inherit;" :to="{name:'studentforgotpassword'}" tag="v-btn">Forgot password</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  
  </template>
  
  <script>
  import mynavbar from '../../components/navbar/Homenavbar.vue';
  export default {
    name: 'SignUp',
    components: {
      mynavbar
    }
  }
  </script>
  
  
  