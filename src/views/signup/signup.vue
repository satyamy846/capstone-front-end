
<template>

<div class="vue-tempalte">
    <form>
        <h3>Please Register</h3>

        <div class="form-group">
            <label>First Name</label>
            <input required type="text" name="first_name"  class="form-control is-invalid form-control-lg" v-model="first_name"/>
            <div  class="invalid-feddback">First Name is required</div> 
            <!-- :class="{'is-invalid':validationstatus(v.$first_name)}" -->
            <!-- v-if="!$v.first_name.required" -->
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input required type="text" name="last_name" class="form-control form-control-lg" v-model="last_name"/>
        </div>

        <div class="form-group">
            <label>Email address</label>
            <input required type="email" name="email" class="form-control form-control-lg"  v-model="email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input required type="password" name="password" class="form-control form-control-lg"  v-model="password"/>
        </div>
        <div class="form-group">
            <label>Contact No</label>
            <input required type="number" name="contact" class="form-control form-control-lg" data-toggle="password" v-model="contact"/>
        </div>

        <button @click="adduser" type="button" class="btn btn-dark btn-lg btn-block">Sign Up</button>

        <p class="forgot-password text-right">
            Already registered 
            <router-link :to="{name: 'login'}">sign in?</router-link>
        </p>
    </form>
</div>
</template>




<script>
  import axios from 'axios';
  import swal from 'sweetalert';
  // import { required } from 'vuelidate/lib/validators'

  export default{
      data(){
        return {
          first_name:'',
          last_name:'',
          email:'',
          password:'',
          contact:'',
        }
      },
      // validations:{
      //     fullname:{required}
      // },
      methods: 
      {
        validationstatus:function(validation){
          return typeof validation!= "undefined"? validation.$error:false
        },
        async adduser(){
          try{
              if(this.email=='' || this.email==null){
                alert("email is required");
              }
              // if(this.first_name=='' || this.first_name==null){
              //   this.errors.push("First Name is required")
              // }

              let result = await axios.post("http://localhost:5000/student",{
              firstname :this.first_name,
              lastname: this.last_name,
              email: this.email,
              password: this.password,
              contact: this.contact
            });
              // alert("Registered Successfully")
            swal("Successfully Registered","success");
             console.log(result.data)
            //this.$router.push({name:'homePage'})
            //console.warn("Output",result.data);
            
          }
          catch(err){
            console.log(err.message)
          }
        }
      }
  }
</script>




<style>
    *{
  box-sizing: border-box;
}


body {
  background: #7e8393 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
 
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
 
.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}
 
.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}
 
.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}
 
.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
 
label {
  font-weight: 500;
}
 
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
 
.forgot-password a {
  color: #2554FF;
}
 
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
 
.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.btn{
  margin-top: 7px;
}
</style>

