<template>

<v-card class="mx-auto mt-5" width="800">
        <v-card-item v-for="(item,index) in qzarray" :key="item._id">
            <v-card-title class="ma-3">{{ item.title }}</v-card-title>
            <hr>
            <v-card-sub-title class="ma-3">Q{{ index+1 }} {{ item.content }}</v-card-sub-title>
            <v-radio-group v-model="radio">
           <span><v-radio class="inline" value="radio-1"></v-radio> <v-card-text><strong>A. </strong> {{ item.option1 }}</v-card-text></span>     
                <v-radio value="radio-2"></v-radio> <v-card-text><strong>B. </strong>{{ item.option2 }}</v-card-text>
                <v-radio value="radio-3"></v-radio> <v-card-text><strong>C. </strong>{{ item.option3 }}</v-card-text>
                <v-radio value="radio-4"></v-radio> <v-card-text><strong>D. </strong>{{ item.option4 }}</v-card-text>
            </v-radio-group>
            <v-btn @click="updatequestion(item.title)">Update</v-btn>
        </v-card-item>
        <v-btn class="ma-4" outline color="primary" @click="goback">Go Back</v-btn>
    </v-card>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: 'viewquiz',
    // components: {
    //     navbar,
    //     Studentdashboard
    // },
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
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + '/get-questions', { headers: { Authorization: "bearer " + token }, params: { title } })
                console.log(questiondetails);
                this.qzarray = questiondetails.data.data;
            }
            catch (err) {
                console.log(err);
            }

        },
        async goback(){
            this.$router.push({name:'quiz'})
        },
        async updatequestion(title){
            this.$router.push({name:'updatequestions',query:{title:title}})
        }
    },
    mounted() {
        this.getquestions()
    }
}
</script>