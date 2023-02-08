<template>
  <mynavbar />
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text>
          <v-card-title>Faculty Login in</v-card-title>
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
          
      }
      catch (err) {
        console.log(err);
      }
      
    },
    // signup(){
    //   this.$router.push({path:'/signup' , replace:true})
    // }
  },
}
</script>


