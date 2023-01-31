<template>
    <mynavbar/>
    <form action="POST" @submit.prevent="submit">
        <v-form>
            <v-container center heigth="200" width="400">
                <v-card ref="form">
                    <v-card-text>
                        <v-card-title>Faculty Register</v-card-title>
                        <v-text-field ref="name"
                             label="First Name" placeholder="Enter Your First Name"
                            required></v-text-field>

                            <v-text-field ref="name"
                             label="Last Name" placeholder="Enter Your First Name"
                            required></v-text-field>

                            <v-text-field ref="name"
                             label="Email" placeholder="Enter Your Email"
                            required></v-text-field>

                            <v-text-field ref="name"
                             label="Password" placeholder="Enter Your Password"
                            required type="password" ></v-text-field>

                            <v-text-field ref="name"
                             label="Confirm Password" placeholder="Confirm Password"
                            type="password" ></v-text-field>

                            <v-text-field ref="name"
                             label="Contact" placeholder="Contact Number"
                            required></v-text-field>

                            <v-btn
                                rounded
                                color="primary"
                                dark
                                >
                                Register
                            </v-btn>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-form>
        
    </form>
    
</template>

<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
    export default{
        name:'register',
        components: {
            mynavbar
        }
    }
</script>