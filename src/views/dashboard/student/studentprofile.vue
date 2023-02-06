<template>
<div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-10">
                <!--Content-->
                <v-card maxwidth="200">
            <v-card-item >
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
    name: 'studentprofile',
    data() {
        return {
            firstname:'',
            lastname:'',
            email:'',
            contact:''
        }
    },
    methods:{
        async getuser(){
            try{
                this.firstname= localStorage.getItem('userfirstname');
                this.lastname= localStorage.getItem('userlastname');
                this.email= localStorage.getItem('useremail');
                this.contact= localStorage.getItem('usercontact');
            }
            catch(err){
                console.log(err);
            }
        }
    },
    mounted(){
        this.getuser();
    }
}
</script>