<template>
    <form action="POST">
        <div class="container">
            <v-card class="d-inline-block ma-5" max-width="500px" width="400px" height="300px">
                <v-card-item>
                    <v-card-title class="mt-3 text-center">{{ name }}</v-card-title>
                    <v-text-field type="text" v-model="title" required></v-text-field>
                    <v-text-field type="text" v-model="description" required></v-text-field>

                </v-card-item>
                <v-btn color="primary" @click="goback" class="ml-2">Back</v-btn>
                <v-btn color="blue-grey" class="ml-4" @click="updatequiz" :loading="loading">Update</v-btn>
            </v-card>
        </div>

    </form>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name: 'updatequiz',
    data() {
        return {
            name: '',
            title: '',
            description: '',
            loading: false
        }
    },
    methods: {
        async getquiz() {
            try {

                const id = this.$route.params.id;
                console.log(id);
                const token = await localStorage.getItem('token')
                const quizdetails = await axios.get(import.meta.env.VITE_APIURL + `/get-quizById/${id}`, { headers: { Authorization: "bearer " + token } })

                console.log(quizdetails);
                this.name = quizdetails.data.data.title;
                this.title = quizdetails.data.data.title;
                this.description = quizdetails.data.data.description;
                // console.log("qzarray = " + this.qzarray)
            }
            catch (err) {

                console.log(err);
            }

        },
        async updatequiz() {
            try {
                this.loading = true;
                const id = this.$route.params.id
                console.log(id);
                const token = localStorage.getItem('token');

                const details = axios.put(import.meta.env.VITE_APIURL + `/update-quiz/${id}`, {
                    title: this.title,
                    description: this.description,
                }, { headers: { Authorization: "bearer " + token } });
                console.log(details);
                alert("Quiz is updated");
                this.$router.push({name:'quiz'});

            }
            catch (err) {
                console.log(err);
            }
            finally {
                this.loading = false;
            }

        },
        async goback() {
            this.$router.push({ name: 'quiz' })
        },
    },
    mounted() {
        this.getquiz();
    }
}
</script>


<style>
    .container{
        display: flex;
        justify-content: center;
    }
</style>