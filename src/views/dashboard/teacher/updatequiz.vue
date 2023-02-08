<template>
    <v-btn @click="getquestions">get</v-btn>
     <!-- <v-card class="d-inline-block ma-5" height="900px" width="800px">
        <v-card-item>
            <v-card-title class="mt-3">Update quiz</v-card-title>
            <v-text-field label="Title" placeholder="Title" type="text" required v-model="title"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="description"></v-text-field>

        </v-card-item>
        <v-btn color="blue-grey" class="ml-4" @click="updatequiz">Update</v-btn>
    </v-card> -->
    <form action="POST">
        <v-card class="d-inline-block ma-5" height="900px" width="800px">
        <v-card-item v-for="item in qzarray">
            <v-card-title class="mt-3">{{ item.title }}</v-card-title>
            <v-text-field label="Title" placeholder="Title" type="text" required v-model="item.title"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.description"></v-text-field>

        </v-card-item>
        <v-btn color="blue-grey" class="ml-4" @click="updatequiz">Update</v-btn>
    </v-card>
    </form>
    
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default{
    name:'updatequiz',
    data(){
        return{
            // title:'',
            // description:'',
            qzarray:[],
        }
    },
    methods:{
        async getquiz() {
            try {
                const title = this.$route.query.title;
                console.log(title);
                const token = await localStorage.getItem('token')
                const quizdetails = await axios.get(import.meta.env.VITE_APIURL + '/get-quiz', { headers: { Authorization: "bearer " + token }, params: { title } })
                console.log(quizdetails);
                this.qzarray = quizdetails.data.data;
            }
            catch (err) {
                console.log(err);
            }

        },  
        // async updatequiz(){
        //     try{
        //         const title = this.$router.query.title
        //         const token = localStorage.getItem('token');
        //         const details = axios.put(`http://localhost:5000/update-quiz`,{
        //         title:this.title,
        //         description:this.description,
        //     },{headers:{Authorization:"bearer " + token}},{params:{title}})
        //     console.log(details);
        //     console.log("success");
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
            
        // }
    },
    mounted(){
        this.getquiz();
    }
}
</script>