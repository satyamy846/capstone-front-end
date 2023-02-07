<template>
    <v-card  height="900px" width="800px">
        <v-card-item>
            <v-card-title class="mt-3 justify-content:center">Add Questions</v-card-title>
            <v-text-field label="Question Name" placeholder="Enter Your Question" type="text" required
                v-model="content"></v-text-field>
            <v-text-field label="Option1" placeholder="Option1" type="text" required v-model="option1"></v-text-field>
            <v-text-field label="Option2" placeholder="Option2" type="text" required v-model="option2"></v-text-field>
            <v-text-field label="Option3" placeholder="Option3" type="text" required v-model="option3"></v-text-field>
            <v-text-field label="Option4" placeholder="Option4" type="text" required v-model="option4"></v-text-field>
            <v-text-field label="Answer" placeholder="Enter your answer" type="text" required
                v-model="answer"></v-text-field>

                <!-- we are applying v-if coz this fetchtitle will be bind if this is defined(agar defined hoga tbhi ye selector se bind krega)-->
            <v-select v-if="fetchtitle" clearable label="Title"
                :items="fetchtitle"
                variant="underlined" v-model="values"></v-select>
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
            answer: '',
            fetchtitle: [],
            values: ''
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
                    answer: this.answer,
                    title: this.values,
                }, { headers: { Authorization: "bearer " + token } },);
                //headers should be written after the data we want to send if we write first then this token will be send as a data
                console.log(details);
                swal("Questions Added Successfully", "success");
            }
            catch (err) {
                console.log(err);
            }
        },
        async gettitle() {
            const token = localStorage.getItem('token');
            const data = await axios.get("http://localhost:5000/get-quiz", { headers: { Authorization: "bearer " + token } })

            this.fetchtitle = data.data.data;
            console.log(data.data.data);
        }
    },
    mounted() {
        this.gettitle();
    }
}
</script>