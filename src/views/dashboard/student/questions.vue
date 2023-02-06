<template>

    <v-card class="mx-auto mt-5" width="800">
        <v-card-item v-for="item in qzarray" :key="item._id">
            <v-card-title class="ma-3">{{ item.title }}</v-card-title>
            <hr>
            <v-card-sub-title class="ma-3">{{ item.content }}</v-card-sub-title>
            <v-radio-group v-model="radio">
                <v-radio value="radio-1"></v-radio> <v-card-text>{{ item.option1 }}</v-card-text>
                <v-radio value="radio-2"></v-radio> <v-card-text>{{ item.option2 }}</v-card-text>
                <v-radio value="radio-3"></v-radio> <v-card-text>{{ item.option3 }}</v-card-text>
                <v-radio value="radio-4"></v-radio> <v-card-text>{{ item.option4 }}</v-card-text>
            </v-radio-group>

        </v-card-item>
        <v-btn class="ma-4" color="success" @click="submission">Submit</v-btn>
    </v-card>

</template>

<script>
import axios from 'axios';
import mynavbar from '../../../components/navbar/Homenavbar.vue';
import Studentdashboard from './Studentdashboard.vue';
import swal from 'sweetalert';
export default {
    name: 'questions',
    components: {
        mynavbar,
        Studentdashboard
    },
    data() {
        return {
            details: null,
            qzarray: [],
            radio: null
        }
    },
    methods: {
        async getquestions() {
            try {
                const title = this.$route.query.title;
                console.log(title);
                const token = await localStorage.getItem('token')
                const questiondetails = await axios.get('http://localhost:5000/get-questions', { headers: { Authorization: "bearer " + token }, params: { title } })
                console.log(questiondetails);
                this.qzarray = questiondetails.data.data;
            }
            catch (err) {
                console.log(err);
            }

        },
        async submission(){
            try{
                swal("Your Submission recorded")
            }
            catch(err){
                console.log(err);
            }
        }
    },
    mounted() {
        this.getquestions()
    }
}
</script>