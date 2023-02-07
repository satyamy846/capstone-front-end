<template>
  <mynavbar />
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text>
          <v-card-title>Student login</v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required
            v-model="email"></v-text-field>
          <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password" required
            v-model="password"></v-text-field>

        </v-card-text>
        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
          <v-card-text>
            <v-btn depressed color="success" @click="login">Sign In</v-btn>
            <p>Not yet Sign up?</p>
            <v-spacer></v-spacer>
            <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'studentsignup' }" tag="v-btn"><v-btn
                color="primary">Sign up</v-btn></router-link>
          </v-card-text>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <!-- {{ $store.state.email }} -->
</template>

<script>
import axios from 'axios';
import mynavbar from '../../components/navbar/Homenavbar.vue';
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
      // console.log(this.email, this.password);
      try {
        if (this.email && this.password) {
          if (this.password.length >= 4 && this.password.length <= 12) {
            const user = {
              email: this.email,
              password: this.password,
            };
            const result = await axios.post(
              "http://localhost:5000/student/login",
              user
            );
            swal("You are logged in", "success");
            console.log(result);
            // console.log(result.data.user.contact);
            this.$router.push({ path: "/student/dashboard/view", replace: true });
            
            localStorage.setItem('token',result.data.token);
            // localStorage.setItem('user',result.data.user);
            localStorage.setItem('userfirstname',result.data.user.firstname);
            localStorage.setItem('userlastname',result.data.user.lastname);
            localStorage.setItem('useremail',result.data.user.email);
            localStorage.setItem('usercontact',result.data.user.contact);
            
          }

          else {
            console.log("Pasword or email is incorrect");
          }
        }
      }
      catch (err) {
        console.log("Please enter valid data " + err);
      }
    },
    // signup(){
    //   this.$router.push({path:'/signup' , replace:true})
    // }
  },
}
</script>


