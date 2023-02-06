<template>
     <v-card class="d-inline-block ma-5" height="900px" width="800px">
        <v-card-item>
            <v-card-title class="mt-3">Update quiz</v-card-title>
            <v-text-field label="Title" placeholder="Title" type="text" required v-model="title"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="description"></v-text-field>

        </v-card-item>
        <v-btn color="blue-grey" class="ml-4" @click="updatequiz">Update</v-btn>
    </v-card>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default{
    name:'updatequiz',
    data(){
        return{
            quizdetails:[],
        }
    },
    methods:{
        async updatequiz(){
            if(err){
                console.log(err);
            }
            const token = localStorage.getItem('token');
            const id = localStorage.getItem('_id')
            const details = axios.get(`http://localhost:5000/update-quiz${id}`,{headers:{Authorization:"bearer " + token}})
            this.quizdetails = details.data.data;
            console.log(quizdetails);
        }
    },
    // mounted(){
    //     this.getquiz
    // }
}
</script>