<template>
    <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-6">
                <!--Content-->
                <v-card>
            <v-card-item>
                <v-icon icon="mdi-account" size="x-large"></v-icon>
                <v-card-title>Profile</v-card-title>
                <v-card-subtitle>First Name: {{ firstname }}</v-card-subtitle>
                <v-card-subtitle>Last Name: {{ lastname }}</v-card-subtitle>
                <v-card-subtitle> Email :{{ email }}</v-card-subtitle>
                <v-card-subtitle> Contact :{{ contact }}</v-card-subtitle>
            </v-card-item>
        </v-card>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'profile',
    data() {
        return {
            firstname:'',
            lastname:'',
            email:'',
            contact:''
        }
    },
    methods:{
        async getusers(){
            try{
                this.firstname= localStorage.getItem('teacherfirstname');
                this.lastname= localStorage.getItem('teacherlastname');
                this.email= localStorage.getItem('teacheremail');
                this.contact= localStorage.getItem('teachercontact');
                 //without using await you will get to see the promise data is returning
                // const teacherdetails = await axios.get("http://localhost:5000/getTeacherdetails",{headers:{Authorization:"bearer " + token}});
                // this.values = user;
                // console.log(user);
            }
            catch(err){
                console.log(err);
            }
        }
    },
    mounted(){
        this.getusers();
    }
}
</script>