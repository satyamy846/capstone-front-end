<template>
    <mynavbar />
    <h1>333</h1>
    <form action="POST" >
        <v-form>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="mx-auto my-12 mt-0" max-width="500" ref="form" >
                        <v-card-text>
                            <v-card-title>Faculty Register</v-card-title>
                            <v-text-field ref="name" label="First Name" placeholder="Enter Your First Name" required
                                v-model="first_name"></v-text-field>
                                <!-- <v-btn @click="usermodel">Send</v-btn> -->

                            <v-text-field ref="name" label="Last Name" placeholder="Enter Your Last Name" required
                                v-model="last_name"></v-text-field>

                            <v-text-field ref="name" label="Email" placeholder="Enter Your Email" required
                                v-model="email"></v-text-field>

                            <v-text-field ref="name" label="Password" placeholder="Enter Your Password" required
                                type="password" v-model="password"></v-text-field>

                            <v-text-field ref="name" label="Confirm Password" placeholder="Confirm Password"
                                type="password"></v-text-field>

                            <v-text-field ref="name" label="Contact" placeholder="Contact Number" required
                                v-model="contact"></v-text-field>
                                <v-spacer></v-spacer>
                            <v-btn @click="postuser" rounded color="primary"  dark>
                                Register
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p >Already registered?</p>
                            <router-link style="text-decoration: none; color: inherit;" :to="{name:'teacherlogin'}" tag="btn-primary">Sign in</router-link>
                            <v-spacer></v-spacer>
                        </v-card-text>


                    </v-card>
                    <!-- <div class="text-center">
                        <v-btn dark color="orange darken-2" @click="snackbar = true">
                            Open Snackbar
                        </v-btn>

                        <v-snackbar v-model="snackbar" :timeout="timeout">
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                                    Close
                                </v-btn>
                            </template>
                        </v-snackbar>
                    </div> -->
                </v-col>
            </v-row>
        </v-form>

    </form>

</template>

<script>
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
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            contact: '',
        }
    },
    // validations:{
    //     fullname:{required}
    // },
    methods:

    {
        // async usermodel(){
        //     console.log('I am clicked!');
        // },
        
        async postuser() {
            try {
                if (this.email == '' || this.email == null) {
                    alert('Email is required!');
                    // return {
                    //     snackbar:()=>({
                    //         snackbar:false,
                    //         text:"Email is required",
                    //         timeout:3000,
                    //     })
                        
                    // }
                }
                // if(this.first_name=='' || this.first_name==null){
                //   this.errors.push("First Name is required")
                // }
                // console.log("Hi")
                let result = await axios.post("http://localhost:5000/teacher", {
                    firstname: this.first_name,
                    lastname: this.last_name,
                    email: this.email,
                    password: this.password,
                    contact: this.contact
                });
                // alert("Registered Successfully")
                swal("Successfully Registered", "success");
                console.log(result.data)
                // console.log("Post kyun ni ho rha")
                //this.$router.push({name:'homePage'})
                //console.warn("Output",result.data);
                await this.$router.push({name:'teacherlogin'});

            }
            catch (err) {
                console.log(err.message)
            }
        },
        async getuser(){
            try{
                const data = await axios.get('http://localhost:5000/teacher')
                console.log(data);
            }
            catch(err){
                console.log(err);
            }
        },
        async updatetuser(){
            try{

            }
            catch(err){
                
            }
        },
        async deleteuser(){
            try{

            }
            catch(err){
                
            }
        },
        
    }
}
</script>