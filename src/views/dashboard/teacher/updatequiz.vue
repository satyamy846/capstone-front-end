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
            title:'',
            description:'',
        }
    },
    methods:{
        async updatequiz(){
            try{
                const token = localStorage.getItem('token');
            const id = localStorage.getItem('quizId');
            const details = axios.put(`http://localhost:5000/update-quiz/${id}`,{
                title:this.title,
                description:this.description,
            },{headers:{Authorization:"bearer " + token}})
            console.log(details);
            console.log("success");
            }
            catch(err){
                console.log(err);
            }
            
        }
    },
    // mounted(){
    //     this.getquiz
    // }
}
</script>