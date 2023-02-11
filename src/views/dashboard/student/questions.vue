<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto mt-5" max-width="2000">
                    <v-card-title class="ma-3 text-center">{{ titleOne }}</v-card-title>
                    <v-card-item v-for="(item, index) in qzarray" :key="item._id">
                        <hr>
                        <!-- <v-card-sub-title class="ma-3"><h5>Q{{ index+1 }}. {{ item.content }}</h5></v-card-sub-title> -->
                        <p><b>Q{{ index+ 1 }}.</b>
                            <span class="ml-2">{{ item.content }}</span>
                        </p>
                        <v-radio-group class="inline" v-model="radio[index]">
                            <v-radio :label="` ${item.option1}`" value="radio-1"></v-radio>
                            <v-radio :label="` ${item.option2}`" value="radio-2"></v-radio>
                            <v-radio :label="` ${item.option3}`" value="radio-3"></v-radio>
                            <v-radio :label="` ${item.option4}`" value="radio-4"></v-radio>
                        </v-radio-group>
                        <!-- <input type="radio"> -->

                    </v-card-item>
                    <v-btn class="ma-4" color="success" @click="submission">Submit</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>


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
            radio: [],
            titleOne: ''
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
                this.titleOne = title;
            }
            catch (err) {
                console.log(err);
            }

        },
        async submission() {
            try {
                //we have to implement the logic like this
                // if(radio == answer){
                //     alert("Your answer is correct you scored 10 out of 20")

                // }

                swal("Your Submission recorded");
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        this.getquestions()
    }
}
</script>