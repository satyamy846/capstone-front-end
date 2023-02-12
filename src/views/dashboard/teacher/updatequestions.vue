<template>
    <v-container>
        <form action="POST">
        <v-card class="d-inline-block ma-5"  width="800px">
        <v-card-item v-for="item in questions">
            <v-card-title class="mt-3">{{ item.title }}</v-card-title>
            <v-text-field label="Title" placeholder="Title" type="text" required v-model="item.content"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.option1"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.option2"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.option3"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.option4"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="item.answer"></v-text-field>
            <v-btn @click="updatequestions" color="blue-grey" class="ml-4">Update</v-btn>
        </v-card-item>
    </v-card>
    </form>
    </v-container>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';


export default{
    name:'updatequestions',
    data(){
        return{
            questions:[]
        }
    },

    methods:{
        async getquestions() {
            try {
                const title = this.$route.query.title;
                console.log(title);
                const token = await localStorage.getItem('token')
                const questiondetails = await axios.get( import.meta.env.VITE_APIURL + '/get-questions', { headers: { Authorization: "bearer " + token }, params: { title } })
                console.log(questiondetails);
                this.questions = questiondetails.data.data;
            }
            catch (err) {
                console.log(err);
            }

        },
        async updatequestions() {
            //update the questions
            try {
                const title = this.$route.query.title;
                console.log(title);
                const token = await localStorage.getItem('token')
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + '/update-questions', { headers: { Authorization: "bearer " + token }, params: { title } })
                // console.log(questiondetails);
                // this.questions = questiondetails.data.data;
                console.log(updated);
                swal("Question Updated");
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    mounted(){
        this.getquestions();
    }

}
</script>