<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card color="#FFEBEE">
                    <v-card class="d-inline-block ma-6" v-for="item in values" :key="item._id" height="350px" width="260px">
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
                        <v-row justify="space-evenly" class="mt-2">
                            <v-btn left @click="viewquiz(item.title)"  :key="item.title" variant="text" color="success">View Quiz</v-btn>
                            <v-btn @click="deletequiz(item.title,item._id)"  :key="item.title" variant="text" color="error">Delete</v-btn>
                            <v-btn @click="updatequiz(item._id)" :key="item._id" class="mt-2">Update</v-btn>
                            <!-- <router-link :to="{name:'updatequiz' , params:{id:item._id}}"> Update</router-link> -->
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
            values: [],
            loading:false,
        }
    },
    methods: {
        async getquiz() {
            const token = await localStorage.getItem('token');
            const quizdetails = await axios.get( import.meta.env.VITE_APIURL + '/get-quiz', { headers: { Authorization: "bearer " + token } });
            const title = quizdetails.data.data.title;
            // const questiondetails = await axios.get(import.meta.env.VITE_APIURL + `/get-question`, 
            // {headers:{ Authorization: "bearer " + token}}, {query:{title}})
            // console.log("questions =>" + questiondetails)
            // console.log(quizdetails);
            // console.log(quizdetails.data.data);
            console.log(quizdetails);
            this.values = quizdetails.data.data;
            // value.forEach((item,index )=>{
            //     const detail1 = item.title;
            //     const detail2 = item.description;
            //     console.log(`${item.title} ${item.description}`,index);
            //     return detail1;
            // })
            // return value;
            // console.log(quizdetails.data.data[0]._id);
            // localStorage.setItem('quizId', quizdetails.data.data[0]._id);
            
        },
        async deletequiz(title,id) {
            // this.$router.push({name:'updatequiz',query:{id:id}})
            // const title = this.$router.query.title;
            try{
                const token = await localStorage.getItem('token');
                // this.loading = true;
                await axios.delete(import.meta.env.VITE_APIURL + '/delete-quiz', { headers: { Authorization: "bearer " + token }, params: { title } })
                await axios.delete(import.meta.env.VITE_APIURL + `/delete-questions/${id}`, { headers: { Authorization: "bearer " + token }, params: { id } })
                
                
                swal("Quiz and their questions deleted successfully!");
                // this.$router.push({ path:'/teacher/dashboard/view' });
                // this.$router.reload();
                console.log('deleted successfully');
            }
            catch(err){
                console.log(err);
            }
        },
        async viewquiz(titleOne) {
            this.loading = true;
            this.$router.push({ name: 'viewquizpage', query: { title: titleOne } })
        },
        async updatequiz(id) {
            console.log(id);
            this.$router.push({ path:`/updatequiz/${id}`, params: { id: id } })
        }
    },
    mounted() {
        this.getquiz();
    }
}
</script>