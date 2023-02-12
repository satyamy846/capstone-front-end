<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card color="#FFEBEE">
                    <v-card class="d-inline-block ma-6" v-for="item in values" :key="item._id" height="300px" width="240px">
                        <v-card-item>
                            <v-card-title>
                                {{ item.title }}
                            </v-card-title>
                            <v-card-subtitle>
                                Attempt in one go
                            </v-card-subtitle>
                        </v-card-item>
                        <v-img src="https://neteims.com/wp-content/themes/ims/assets/images/online-exam-portal-2.svg"
                            height="100px"></v-img>

                        <v-row class="ma-1">
                            <v-card-text variant="outlined">{{ item.description }}
                            </v-card-text>
                        </v-row>
                        <v-row align="center" justify="space-around" class="mt-2">
                            <v-btn left @click="viewquiz(item.title)" variant="text" color="success">View Quiz</v-btn>
                            <v-btn @click="deletequiz(item.title)" variant="text" color="error">Delete</v-btn>

                        </v-row>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>



</template>
<script>
// import sidebar from '../../components/sidebar.vue';
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: 'quiz',
    data() {
        return {
            values: []
        }
    },
    methods: {
        async getquiz() {
            const token = await localStorage.getItem('token');
            const quizdetails = await axios.get( import.meta.env.VITE_APIURL + '/get-quiz', { headers: { Authorization: "bearer " + token } });
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
            localStorage.setItem('quizId', quizdetails.data.data[0]._id);
            console.log(quizdetails);
        },
        // async updatequestions(titleOne,id) {
        //     //update the questions;

        //     this.$router.push({ name: 'updatequiz', query: { title: titleOne } })
        // },
        async deletequiz(title) {
            // this.$router.push({name:'updatequiz',query:{id:id}})
            // const title = this.$router.query.title;
            const token = await localStorage.getItem('token');
            await axios.delete(import.meta.env.VITE_APIURL + '/delete-quiz', { headers: { Authorization: "bearer " + token }, params: { title } })
            this.$router.push({ name: 'quiz' })
            swal("Quiz deleted successfully!");
            console.log('deleted successfully');
        },
        async viewquiz(titleOne) {
            this.$router.push({ name: 'viewquizpage', query: { title: titleOne } })
        },
        async updatequiz(title) {
            this.$router.push({ name: 'updatequiz', query: { title: title } })
        }
    },
    mounted() {
        this.getquiz();
    }
}
</script>