<template>
  <mynavbar />
  <v-row class="image" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text class="text-center">
          <v-card-title><b>Teacher Log In</b></v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required
            v-model="email"></v-text-field>
          <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password" required
            v-model="password"></v-text-field>
          <v-btn block color="info" @click="login" class="mb-4">Log In</v-btn>




          <span>Haven't Registered?</span>
          <router-link class="ml-1" style="text-decoration: none;" :to="{ name: 'teachersignup' }">
            Sign Up</router-link>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script >
import mynavbar from '../../components/navbar/Homenavbar.vue';
import axios from 'axios';
import swal from 'sweetalert';
export default {
  name: 'Login',
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
      try {
        if(this.email == '' || this.email==null){
          alert("Email is required");
        }


          if (this.password.length <= 4 && this.password.length >= 12) {
            alert("Password length should be atleast 4 character")
          }
            const data = {
              email: this.email,
              password: this.password,
            };
            const result = await axios.post(
              import.meta.env.VITE_APIURL + "/teacher/login",
              data
            );
            swal("You are logged in", "success");
            console.log(result);
            // console.log(result.data.teacher[0]);
            //navigating to teacher's dashboard page
            this.$router.push({ path:'/teacher/dashboard/view', replace: true });
            // result.forEach((item,index)=>{
            //   console.log(item.firstname);
            // })
            // console.log(result.data.teacher);
            //setting up the token which is generated while login in localstorage so that teacher's profile 
            // still remains logged in unless we remove token from localstorage
            localStorage.setItem('token',result.data.token);
            localStorage.setItem('teacherfirstname',result.data.teacher[0].firstname);
            localStorage.setItem('teacherlastname',result.data.teacher[0].lastname);
            localStorage.setItem('teacheremail',result.data.teacher[0].email);
            localStorage.setItem('teachercontact',result.data.teacher[0].contact);
            // localStorage.setItem('teacher_flag',true);
            // localStorage.setItem('student_flag',false);
          
      }
      catch (err) {
        alert("User not found")
        console.log("Please Enter valid data \n" + err);
      }
      
    },
    // signup(){
    //   this.$router.push({path:'/signup' , replace:true})
    // }
  },
}
</script>


