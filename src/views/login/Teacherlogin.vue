<template>
  <mynavbar />
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text>
          <v-card-title>Faculty Sign in</v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required v-model="email" ></v-text-field>
          <v-text-field ref="password" label="Passward" placeholder="Your Password" type="password"
            required v-model="password"></v-text-field>

        </v-card-text>
        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
          <v-card-text>
            <v-btn depressed  color="success" @click="login">Sign In</v-btn>
            <p>Haven't registered?</p>
            <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'teachersignup' }" tag="v-btn"><v-btn
                color="primary">Sign up</v-btn></router-link>
          </v-card-text>
          <v-spacer></v-spacer>

          <!-- <v-btn color="primary" depressed @click="submit">
            SignIn
          </v-btn> -->
          <v-card-text>Forgot password</v-card-text>
          <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'teacherforgotpassword' }"
            tag="v-btn"><v-btn color="primary">Forgot password</v-btn></router-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>

<script >
import mynavbar from '../../components/navbar/Homenavbar.vue';
import axios from 'axios';
import swal from 'sweetalert';
export default {
  name: 'SignUp',
  components: {
    mynavbar
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.email, this.password);
      try {
        if (this.email && this.password) {
          if (this.password.length >= 4 && this.password.length <= 12) {
            const user = {
              email: this.email,
              password: this.password,
            };
            const result = await axios.post(
              "http://localhost:5000/teacher/login",
              user
            );
            swal("You are logged in", "success");
            console.log(result);
            this.$router.push({ path:'/teacher/dashboard', replace: true });
          }

          else {
            console.log("Pasword or email is incorrect");
          }
        }
      }
      catch (err) {
        console.log("Please enter valid data");
      }
    },
    // signup(){
    //   this.$router.push({path:'/signup' , replace:true})
    // }
  },
}
</script>


