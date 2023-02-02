<template>
    <mynavbar />
    <v-btn color="primary" @click="getquiz">Quiz</v-btn>
    <v-card max-width="1000"  class="mx-auto mt-5">

        
        <!-- <v-btn color="primary" @click="getquestions()"><router-link style="text-decoration: none; color: inherit;" :to="{name:'studentquestions'}" tag="btn-primary">questions</router-link></v-btn> -->
        <v-card class="d-inline-block ma-6" v-for="item in values" :key="item._id" height="290px" width="200px">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" cover></v-img>
            <v-card-item>
                <v-card-title>
                    {{ item.title }}
                </v-card-title>
                <v-card-subtitle>
                    Attempt in one go
                </v-card-subtitle>
            </v-card-item>
            <v-card-text variant="outlined">{{ item.description }}
            </v-card-text>
            <v-btn @click="getquestions" variant="text" color="teal-accent-4"> <router-link
                    style="text-decoration: none; color: inherit;" :to="{ name: 'studentquestions' }"
                    tag="btn-primary">Start</router-link></v-btn>
        </v-card>
    </v-card>
</template>

<script>
import axios from 'axios';
import mynavbar from '../../components/navbar/Homenavbar.vue';
export default {
    name: 'student',
    components: {
        mynavbar,
    },
    //child component
    data() {
        return {
            values: [],

        }
    },
    props: {
        questions: Array
    },
    methods: {
        async getquiz() {
            const quizdetails = await axios.get('http://localhost:5000/get-quiz');
            // console.log(quizdetails);
            // console.log(quizdetails.data.data);
            this.values = quizdetails.data.data;
            // value.forEach((item,index )=>{
            //     const detail1 = item.title;
            //     const detail2 = item.description;
            //     console.log(`${item.title} ${item.description}`,index);
            //     return detail1;
            // })
            // return value;
            // console.log(this.values);
        },
        async getquestions() {
            const questions = await axios.get("http://localhost:5000/get-questions");
            // this.values = questions.data.data;
            // console.log(data);
            // data.forEach((item)=>{
            //     console.log(item.title)
            // })

        },

    }
}
</script>

<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>