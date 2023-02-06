<template>
<v-container fluid>
    <v-card width="1200"  class=" mt-5">
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
            <v-btn @click="gotoquestion(item.title)" variant="text" color="teal-accent-4">Start</v-btn>
        </v-card>
    </v-card>
</v-container>
</template>

<script>
import axios from 'axios';
import mynavbar from '../../../components/navbar/Homenavbar.vue';
export default {
    name: 'studentquiz',
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
        const token = await localStorage.getItem('token')
        const quizdetails = await axios.get('http://localhost:5000/get-quiz',{headers:{Authorization:"bearer " + token}});
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
            console.log(this.values);
        },
        async gotoquestion(titleOne){
            this.$router.push({name:'studentquestions',query:{title:titleOne}})
        }
    },
    mounted(){
        this.getquiz()
    }
}
</script>

<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}</style>