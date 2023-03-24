<template>
    <v-container fluid>
    <v-row justify="center">
        <v-col >
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
                        height="100px" cover></v-img>
                    <v-card-text variant="outlined">{{ item.description }}
                    </v-card-text>
                    <v-btn @click="gotoquestion(item.title)" :loading="loading" variant="text" color="teal-accent-4">Start</v-btn>
                </v-card>
            </v-card>
        </v-col>
    </v-row>
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
            loading:false,
        }
    },
    props: {
        questions: Array
    },
    methods: {
        async getquiz() {
            try{
                const token = await localStorage.getItem('token')
                const quizdetails = await axios.get(import.meta.env.VITE_APIURL + '/get-quiz', { headers: { Authorization: "bearer " + token } });
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
            }
            catch(err){
                console.log(err);
            }
        },
        async gotoquestion(titleOne) {
            this.loading = true;
            this.$router.push({ name: 'studentquestions', query: { title: titleOne } })
        }
    },
    mounted() {
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
}
</style>