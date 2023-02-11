<template>
    <!-- <div class="bootstrap-wrapper"> -->
        <!-- <div class="row"> -->
            <!-- <v-col cols="12" sm="10" md="8" lg="6"></v-col> -->
            <!-- <div class="col-md-10"> -->
                <v-container>
                <v-row >
                    <v-col >
                        <v-card class="mx-auto" max-width="500" ref="form">

                                <table class="table">
                                    <thead class="image">
                                        <!-- <v-icon icon="mdi-account" size="x-large"></v-icon> -->
                                        <div>
                                            <img src="../../../assets/user.png" alt="profile-img">
                                        </div>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">First Name: </th>
                                            <td>{{ firstname }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Last Name: </th>
                                            <td>{{ lastname }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email: </th>
                                            <td>{{ email }}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Contact: </th>
                                            <td>{{ contact }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            
                        
                        </v-card>
                    </v-col>
                    </v-row>
                    </v-container>
<!-- 
            </div>
        </div>
    </div> -->

</template>

<script>
import axios from 'axios';
export default {
    name: 'studentprofile',
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            contact: ''
        }
    },
    methods: {
        async getuser() {
            try {
                this.firstname = localStorage.getItem('userfirstname');
                this.lastname = localStorage.getItem('userlastname');
                this.email = localStorage.getItem('useremail');
                this.contact = localStorage.getItem('usercontact');
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        this.getuser();
    }
}
</script>


<style>
.image img {
    height: 100px;
    width: 100px;

}
</style>