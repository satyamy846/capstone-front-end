<template>
    <!-- <v-container fluid> -->
    <!-- <v-card max-width="1000" class="mx-auto mt-5"> -->

    <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-10">
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
                    <v-btn @click="updatequestions(item.title)" variant="text" color="teal-accent-4">Update</v-btn>
                    <v-btn @click="getid(item._id)">id</v-btn>
                </v-card>
            </div>
        </div>
    </div>
    <!-- <v-btn color="primary" @click="getquestions()"><router-link style="text-decoration: none; color: inherit;" :to="{name:'studentquestions'}" tag="btn-primary">questions</router-link></v-btn> -->

    <!-- </v-card> -->
    <!-- </v-container> -->

</template>
<script>
// import sidebar from '../../components/sidebar.vue';
import axios from 'axios';
export default {
    name: 'quiz',
    data() {
        return {
            values: []
        }
    },
    methods: {
        async getquiz() {
            const token = await localStorage.getItem('token')
            const quizdetails = await axios.get('http://localhost:5000/get-quiz', { headers: { Authorization: "bearer " + token } });
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
        async updatequestions(titleOne,id) {
            //update the questions;
            this.$router.push({ name: 'updatequiz', query: { title: titleOne } })
        },
        async getid(id){
            this.$router.push({name:'updatequiz',query:{id:id}})
            console.log(id);
        }
    },
    mounted() {
        this.getquiz();
    }
}
</script>