<template>
  <mynavbar />
  <v-row class="image" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text class="text-center">
          <v-card-title><b>Student Log in</b></v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required
            v-model="email"></v-text-field>
          <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password" required
            v-model="password"></v-text-field>
          <v-btn block color="info" @click="login" class="mb-4">Log In</v-btn>
          <span>Haven't Signed Up?</span>
          <router-link class="ml-1" style="text-decoration: none;" :to="{ name: 'studentsignup' }">
            Sign Up</router-link>

        </v-card-text>
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
      result:'',
    };
  },
  methods: {
    async login() {
      // console.log(this.email, this.password);
      try {
        if (this.email && this.password) {
          if (this.password.length >= 4 && this.password.length <= 12) {

          // this.result.forEach((element)=>{
          //   if(element.email ==this.email){
          //     alert("User doesn't exists please register yourself");
          //     // console.log("not found");
          //     return;
          //   }
          // })
            const user = {
              email: this.email,
              password: this.password,
            };
            const result = await axios.post(
              import.meta.env.VITE_APIURL + "/student/login",
              user
            );
            swal("You are logged in", "success");
            console.log(result);
            // console.log(result.data.user.contact);
            this.$router.push({ path: "/student/dashboard/view", replace: true });

            localStorage.setItem('token', result.data.token);
            // localStorage.setItem('user',JSON.stringify(result.data.user));
            localStorage.setItem('userfirstname', result.data.user.firstname);
            localStorage.setItem('userlastname', result.data.user.lastname);
            localStorage.setItem('useremail', result.data.user.email);
            localStorage.setItem('usercontact', result.data.user.contact);
            // localStorage.setItem('student_flag', true);
            // localStorage.setItem('teacher_flag', false)

          }

         
        }
        // else {
        //     console.log("Pasword or email is incorrect");
        //   }
      }
      catch (err) {
        alert("User not found");
        console.log("Please Enter valid data \n" + err);
      }
    },
    // signup(){
    //   this.$router.push({path:'/signup' , replace:true})
    // }
    async getuser(){
    const details = await axios.get(import.meta.env.VITE_APIURL + "/get-user");
    this.result = details.data.data; 
    console.log(details);
    // console.log(this.result[1].email);
  },
  },
  mounted(){
    this.getuser();
    this.login();
  }
  
}

</script>


<style>
/* body {
  background-color: rgb(223, 255, 245);
} */
</style>