<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-text-field label="Question Name" placeholder="Enter Your Question"></v-text-field>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
                <v-radio v-model="radio" value="radio-1"></v-radio><v-card-text>Merge sort</v-card-text>
            </v-card-item>
            <v-btn color="blue-grey" class="ma-3 white--text">Update</v-btn>
        </v-card>
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
        async getquestions(titleOne){
            const token = localStorage.getItem('token');
            const details = await axios.get("http://localhost:5000/get-questions",{headers:{Authorization:"bearer " + token}});
            console.log(details);
            this.questions = details.data.data;
        },
        async updatequestions(titleOne) {
            //update the questions
            this.$router.push({ name: 'updatequestions', query: { title: titleOne } })
        }
    },
    mounted(){
        this.getquestions();
    }

}
</script>