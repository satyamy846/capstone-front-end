<template>
  <mynavbar />
  <v-row class="image" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text class="text-center">
          <v-card-title><b>Student Log in</b></v-card-title>
          <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required
            v-model="email" :rules="[rules.email.required,rules.email.counter,rules.email.Isemail]" ></v-text-field>

          <v-text-field ref="email" label="Passward" placeholder="Your Password" type="password" required
            v-model="password" :rules="[rules.password.required,rules.password.Ispassword,rules.password.minimum]"></v-text-field>

          <v-btn block color="info" @click="login" :loading="loading" class="mb-4">Log In</v-btn>
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
      loading:false,
      rules:{
        email:{
            required: value => !!value || 'Email is Required.',
            counter: value => value.length <= 20 || 'Max 20 characters',
            Isemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        },
        password:{
            required: value =>!!value || 'Password is Required.',
            minimum: value => value.length >=4 && value.length <=16 || ' Password should contains min 4 or max 16',
            Ispassword: value =>{
              const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
              return password.test(value) || 'Invalid Password.'
            } 
        }
      }
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
            //start the loader
            this.loading = true;
            const result = await axios.post(
              import.meta.env.VITE_APIURL + "/student/login",
              user
            );
            // this.loading = false;
            
            swal("You are logged in", "success");
            console.log(result);
            
            // console.log(result.data.user.contact);
            
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('userfirstname', result.data.user.firstname);
            localStorage.setItem('userlastname', result.data.user.lastname);
            localStorage.setItem('useremail', result.data.user.email);
            localStorage.setItem('usercontact', result.data.user.contact);
            localStorage.setItem('Isstudent',result.data.user.Isstudent);
            const  key = await localStorage.getItem('Isstudent')
            console.log("login ",key);
            
            this.$router.push({ path: "/student/dashboard/view", replace: true });
          }

         
        }
        this.loading = false;
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