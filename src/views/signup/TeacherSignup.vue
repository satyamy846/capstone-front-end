<template>
    <mynavbar />
    <form action="POST" >
        <v-form>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="mx-auto my-12 mt-1" max-width="500" ref="form" >
                        <v-card-text class="text-center">
                            <v-card-title>Teacher Register</v-card-title>
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

                            <v-checkbox label="Yes I am a Teacher" v-model="Isteacher"></v-checkbox>

                            <v-btn block @click="signup" color="primary"  dark class="mb-3">
                                Register
                            </v-btn>
                            
                            <span>Already Registered?</span>
          <router-link class="ml-1" style="text-decoration: none;" :to="{ name: 'teacherlogin' }">
            Log In</router-link>
                        </v-card-text>
                    </v-card>
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
            Isteacher:true,
        }
    },
    // validations:{
    //     fullname:{required}
    // },
    methods:

    {
        async signup() {
            try {
                if (this.email == '' || this.email == null){
                    alert('Email is required!');
                } 
                    
                let result = await axios.post(import.meta.env.VITE_APIURL + "/teacher", {
                    firstname: this.first_name,
                    lastname: this.last_name,
                    email: this.email,
                    password: this.password,
                    contact: this.contact,
                    Isteacher:this.Isteacher
                });
                swal("Successfully Registered", "success");
                console.log(result.data)
                await this.$router.push({name:'teacherlogin'});

            
            }
            catch (err) {
                console.log(err.message)
            }
        },
        
    }
}
</script>