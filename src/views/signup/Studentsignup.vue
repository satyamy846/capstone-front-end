<template>
    <mynavbar/>
    <form action="POST" >
        <v-form>

            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="mx-auto my-12 mt-0" max-width="500" ref="form" >
                        <v-card-text>
                            <v-card-title>Student Register</v-card-title>
                            <v-text-field ref="name" label="First Name" placeholder="Enter Your First Name" required
                                v-model="first_name"></v-text-field>

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
                            
                            <v-btn rounded color="primary" @click="studentRegistration" dark>
                                Register
                            </v-btn>
                            <v-spacer></v-spacer>
                            <p >Already registered?</p>
                            <router-link style="text-decoration: none; color: inherit;" :to="{name:'studentlogin'}" tag="v-btn">Sign in</router-link>
                            

                        </v-card-text>


                    </v-card>
                </v-col>
            </v-row>
        </v-form>

    </form>

    
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import mynavbar from '../../components/navbar/Homenavbar.vue';
    export default{
        name:'register',
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
        methods:{
            async studentRegistration(){
                try{
                    const details = await axios.post("http://localhost:5000/student",{
                    firstname:this.first_name,
                    lastname: this.last_name,
                    email: this.email,
                    password: this.password,
                    contact: this.contact
                    })
                    console.log(details);
                    swal("Successfully Registered", "success");
                    await this.$router.push({name:"studentlogin"});

                }
                catch(err){
                    console.log(err);
                }
                

            }
        }
    }
    
</script>