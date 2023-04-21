<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="500" >

                    <table class="table">
                        <div class="image">
                            <img src="../../../assets/user.png" alt="profile-img">
                        </div>
                       
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
</template>
<script>
import axios from 'axios';
export default {
    name: 'profile',
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            contact: ''
        }
    },
    methods: {
        async getusers() {
            try {
                this.firstname = localStorage.getItem('teacherfirstname');
                this.lastname = localStorage.getItem('teacherlastname');
                this.email = localStorage.getItem('teacheremail');
                this.contact = localStorage.getItem('teachercontact');
                //without using await you will get to see the promise data is returning
                // const teacherdetails = await axios.get("http://localhost:5000/getTeacherdetails",{headers:{Authorization:"bearer " + token}});
                // this.values = user;
                // console.log(user);
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        this.getusers();
    }
}
</script>


<style>
body{
    box-sizing: border-box;
}

.image{
    display: flex;
    justify-content: center;

    width: 100%;
}
img{
    height: 100px;
    width: 100px;
}

</style>