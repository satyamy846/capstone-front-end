<template>
        <form action="POST">
            <div class="container">
                <v-card class="d-inline-block ma-5" width="50rem" height="38rem">
                <v-card-item >
                    <v-card-title class="mt-3 text-center">{{ title }}</v-card-title>
                    <v-card-content >
                        
                        <v-text-field label="Question Name" placeholder="Title" type="text" required
                            v-model="content"></v-text-field>
                        <v-text-field label="Option1" placeholder="Option1" type="text" required
                            v-model="option1"></v-text-field>
                        <v-text-field label="Option2" placeholder="Option2" type="text" required
                            v-model="option2"></v-text-field>
                        <v-text-field label="Option3" placeholder="Option3" type="text" required
                            v-model="option3"></v-text-field>
                        <v-text-field label="Option4" placeholder="Option4" type="text" required
                            v-model="option4"></v-text-field>
                        <v-text-field label="Answer" placeholder="Answer" type="text" required
                            v-model="answer"></v-text-field>
                    </v-card-content>
                    <v-btn @click="goback(title)" color="white" class="ml-4">Go back</v-btn>
                    <v-btn @click="updatequestions(title)" color="blue-grey" class="ml-4">Update</v-btn>
                </v-card-item>
            </v-card>
            </div>
            
        </form>

</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';


export default {
    name: 'updatequestions',
    data() {
        return {
            questions: [],
            title:'',
            content:'',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            answer:'',
        }
    },

    methods: {
        async getquestions() {
            try {
                // const title = this.$route.query.title;
                const id = this.$route.params.id;
                // console.log(id);
                // console.log(title);
                const token = await localStorage.getItem('token');
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + `/get-questionById/${id}`, { headers: { Authorization: "bearer " + token } })
                // console.log(questiondetails);
                this.title =  questiondetails.data.data[0].title;
                this.content = questiondetails.data.data[0].content;
                this.option1 = questiondetails.data.data[0].option1;
                this.option2 = questiondetails.data.data[0].option2;
                this.option3 = questiondetails.data.data[0].option3;
                this.option4 = questiondetails.data.data[0].option4;
                this.answer = questiondetails.data.data[0].answer;
                // this.questions = questiondetails.data.data.content;
                // console.log(questiondetails.data.data[0].content);
            }
            catch (err) {
                console.log(err);
            }

        },
        async updatequestions(titleOne) {
            //update the questions
            try {
                const id = this.$route.params.id;
                // console.log(title);
                const token = await localStorage.getItem('token');
                
                const updated = await axios.put(import.meta.env.VITE_APIURL + `/update-questions/${id}`,{
                    content: this.content,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    answer: this.answer,
                } ,{ headers: { Authorization: "bearer " + token } })
                console.log(updated);
                alert("Question is Updated");
                this.$router.push({name:'viewquizpage', query:{title:titleOne}})
            }
            catch (err) {
                console.log(err);
            }
        },
        async goback(titleOne){
            // console.log(titleOne);
            this.$router.push({name:'viewquizpage',query:{title:titleOne}})
        },
    },
    mounted() {
        this.getquestions();
    }

}
</script>

<style>
.container{
    display: flex;
    justify-content: center;
}

.heading{
    text-align: center;
}
</style>