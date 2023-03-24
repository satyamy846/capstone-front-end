<template>
    <mynavbar />
    <form action="POST">
        <v-form>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <v-card class="mx-auto my-12 mt-1" max-width="500" ref="form">
                        <v-card-text class="text-center">
                            <v-card-title>Teacher Register</v-card-title>
                            <v-text-field ref="name" label="First Name" placeholder="Enter Your First Name" required
                                v-model="first_name" :rules="[rules.firstname.required]"></v-text-field>

                            <v-text-field ref="name" label="Last Name" placeholder="Enter Your Last Name" required
                                v-model="last_name" :rules="[rules.lastname.required]"></v-text-field>

                            <v-text-field ref="name" label="Email" placeholder="Enter Your Email" required v-model="email"
                                :rules="[rules.email.required, rules.email.Isemail, rules.email.counter]"></v-text-field>

                            <v-text-field ref="name" label="Password" placeholder="Enter Your Password" required
                                type="password" v-model="password"
                                :rules="[rules.password.required, rules.password.Ispassword, rules.password.minimum]"></v-text-field>

                            <v-text-field ref="name" label="Confirm Password" placeholder="Confirm Password" type="password"
                                v-model="confirmpassword"
                                :rules="[rules.confirmpassword.Ispassword, rules.confirmpassword.matched, rules.confirmpassword.required, rules.confirmpassword.minimum]"></v-text-field>

                            <v-text-field ref="name" label="Contact" placeholder="Contact Number" required v-model="contact"
                                :rules="[rules.contact.required, rules.contact.Iscontact]"></v-text-field>

                            <v-checkbox label="Yes I am a Teacher" v-model="Isteacher"
                                :rules="[rules.checkbox.required]"></v-checkbox>

                            <v-btn block @click="signup" :loading="loading" color="primary" dark class="mb-3">
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
            confirmpassword: '',
            Isteacher: true,
            loading:false,
            rules: {
                firstname: {
                    required: value => !!value || 'First Name is required'
                },
                lastname: {
                    required: value => !!value || 'Last Name is required'
                },
                contact: {
                    required: value => !!value || 'Contact is required',
                    Iscontact: value => {
                        const pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/
                        return pattern.test(value) || 'Invalid Contact No.'
                    }
                },
                email: {
                    required: value => !!value || 'Email is required.',
                    counter: value => value.length <= 20 || 'Max 20 characters',
                    Isemail: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    },
                },
                password: {
                    required: value => !!value || 'Password is required.',
                    minimum: value => value.length >= 4 && value.length <= 16 || ' Password should contains min 4 or max 16',
                    Ispassword: value => {
                        const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
                        return password.test(value) || 'Invalid Password.'
                    }
                },
                confirmpassword: {
                    matched: !this.password || "Password doesn't match.",
                    required: value => !!value || 'Password is required.',
                    minimum: value => value.length >= 4 && value.length <= 16 || ' Password should contains min 4 or max 16',
                    Ispassword: value => {
                        const password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
                        return password.test(value) || 'Invalid Password.'
                    }
                },
                checkbox: {
                    required: value => !!value || 'Please Accept that I am Student.'
                }
            }
        }
    },
    methods:

    {
        async signup() {
            try {
                if(this.first_name && this.last_name && this.email && this.password && this.confirmpassword && this.contact){
                    //start the loader
                    this.loading = true;
                    let result = await axios.post(import.meta.env.VITE_APIURL + "/teacher", {
                    firstname: this.first_name,
                    lastname: this.last_name,
                    email: this.email,
                    password: this.password,
                    contact: this.contact,
                    Isteacher: this.Isteacher
                    });

                    swal("Successfully Registered", "success");
                    console.log(result.data)

                    await this.$router.push({ name: 'teacherlogin' });
                }
                this.loading = false;
            }
            catch (err) {

                console.log(err.message)
            }
        },

    }
}
</script>