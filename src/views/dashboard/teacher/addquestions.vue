<template>
    <v-card class="d-inline-block ma-5" height="900px" width="800px">
        <v-card-item>
            <v-card-title class="mt-3">Add quiz</v-card-title>
            <v-text-field label="Question Name" placeholder="Enter Your Question" type="text" required
                v-model="content"></v-text-field>
            <v-text-field label="Option1" placeholder="Option1" type="text" required v-model="option1"></v-text-field>
            <v-text-field label="Option2" placeholder="Option2" type="text" required v-model="option2"></v-text-field>
            <v-text-field label="Option3" placeholder="Option3" type="text" required v-model="option3"></v-text-field>
            <v-text-field label="Option4" placeholder="Option4" type="text" required v-model="option4"></v-text-field>
            <v-text-field label="Answer" placeholder="Enter your answer" type="text" required v-model="answer"></v-text-field>
        </v-card-item>
        <v-btn color="blue-grey" class="ml-4" @click="addquestions">Add Questions</v-btn>
    </v-card>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    
    name: 'addquestions',
    data() {
        return {
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer:'',
        }
    },
    methods: {
        async addquestions() {
            try {
                //fetch the token from the localStorage
                const token = localStorage.getItem('token');
                // console.log(token);
                const details = await axios.post("http://localhost:5000/addquestions", {
                    content: this.content,
                    option1: this.option1,
                    option2: this.option2,
                    option3: this.option3,
                    option4: this.option4,
                    answer:this.answer,
                }, { headers: { Authorization: "bearer " + token } },);
                //headers should be written after the data we want to send if we write first then this token will be send as a data
                console.log(details);
                swal("Questions Added Successfully", "success");
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}
</script>