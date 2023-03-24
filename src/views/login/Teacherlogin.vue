<template>
  <mynavbar />
  <v-row class="image" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="mx-auto my-12" max-width="450" ref="form">
        <v-card-text class="text-center">
          <v-card-title><b>Teacher Log In</b></v-card-title>
          <v-form>
            <v-text-field ref="email" label="Email" placeholder="Your Email" type="email" required v-model="email"
              :rules="[rules.email.required, rules.email.counter, rules.email.Isemail]"></v-text-field>

            <v-text-field ref="email" label="Password" placeholder="Your Password" type="password" required
              v-model="password"
              :rules="[rules.password.required, rules.password.Ispassword, rules.password.minimum]"></v-text-field>
          </v-form>
          <v-btn block color="info" @click="login" :loading="loading" class="mb-4">Log In</v-btn>




          <span>Haven't Registered?</span>
          <router-link class="ml-1" style="text-decoration: none;" :to="{ name: 'teachersignup' }">
            Sign Up</router-link>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- <v-form>
    <v-text-field label="name" placeholder="name" :rules="[rules.required]" v-model="name"></v-text-field>
  </v-form> -->
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
      name: '',
      loading:false,
      rules: {
        email: {
          required: value => !!value || 'Email is Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          Isemail: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
        password: {
          required: value => !!value || 'Password is Required.',
          minimum: value => value.length >= 4 && value.length <= 16 || ' Password should contains min 4 or max 16',
          Ispassword: value => {
            const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
            return password.test(value) || 'Invalid Password.'
          }
        }
      }
    };
  },
  methods: {
    async login() {
      try {

        if (this.email && this.password) {
          const data = {
            email: this.email,
            password: this.password,
          };
          this.loading = true;
          const result = await axios.post(
            import.meta.env.VITE_APIURL + "/teacher/login",
            data
          );
          swal("You are logged in", "success");
          // console.log(result);
          //navigating to teacher's dashboard page
          this.$router.push({ path: '/teacher/dashboard/view', replace: true });

          //setting up the token which is generated while login in localstorage so that teacher's profile 
          // still remained logged in unless we remove token from localstorage
          localStorage.setItem('token', result.data.token);
          localStorage.setItem('teacherfirstname', result.data.teacher[0].firstname);
          localStorage.setItem('teacherlastname', result.data.teacher[0].lastname);
          localStorage.setItem('teacheremail', result.data.teacher[0].email);
          localStorage.setItem('teachercontact', result.data.teacher[0].contact);
          localStorage.setItem('Isteacher', result.data.teacher[0].Isteacher);
        }


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


