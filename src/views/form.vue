<template>
    <!-- <form action="POST" @submit.prevent="submit"> -->
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card ref="form">
                    <v-card-text>
                        <h1 style="text-align:center; color:dodgerblue">Please Register</h1>
                        <v-text-field ref="name" v-model="first_name" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="First Name" placeholder="Enter Your First Name"
                            required></v-text-field>

                            <v-text-field ref="name" v-model="last_name" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="Last Name" placeholder="Enter Your First Name"
                            required></v-text-field>

                            <v-text-field ref="name" v-model="email" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="Email" placeholder="Enter Your Email"
                            required></v-text-field>

                            <v-text-field ref="name" v-model="password" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="Password" placeholder="Enter Your Password"
                            required></v-text-field>

                            <v-text-field ref="name" v-model="confirmpassword" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="Confirm Password" placeholder="Enter Your Confirm Password"
                            required></v-text-field>

                            <v-text-field ref="name" v-model="contact" :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages" label="Contact" placeholder="Enter Your Contact Number"
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
            </v-col>
        </v-row>
    <!-- </form> -->
</template>