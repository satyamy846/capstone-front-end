<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="1000">
                    <v-card-item>
                        <v-card-text class="text-center">
                            <v-card-title class="mt-2 mb-1">Add Questions</v-card-title>
                        </v-card-text>
                        
                        <v-text-field label="Question Name" placeholder="Enter Your Question" type="text" required
                            v-model="content" :rules="[rules.required]"></v-text-field>
                        <v-text-field label="Option1" placeholder="Option1" type="text" required
                            v-model="option1" :rules="[rules.required]"></v-text-field>
                        <v-text-field label="Option2" placeholder="Option2" type="text" required
                            v-model="option2" :rules="[rules.required]"></v-text-field>
                        <v-text-field label="Option3" placeholder="Option3" type="text" required
                            v-model="option3" :rules="[rules.required]"></v-text-field>
                        <v-text-field label="Option4" placeholder="Option4" type="text" required
                            v-model="option4" :rules="[rules.required]"></v-text-field>
                        <v-text-field label="Answer" placeholder="Enter your answer" type="text" required
                            v-model="answer" :rules="[rules.required]"></v-text-field>

                        <!-- we are applying v-if coz this fetchtitle will be bind if this is defined(agar defined hoga tbhi ye selector se bind krega)-->
                        <v-select v-if="fetchtitle" clearable label="Title" :items="fetchtitle" variant="underlined"
                            v-model="values" :rules="[rules.required]"></v-select>
                    </v-card-item>

                    <v-btn color="pink" class="ml-4 mb-3 white--text" @click="addquestions" :loading="loading">Add Questions</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

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
            values: '',
            loading:false,
            rules:{
                required: v=> !!v || 'This field is required.',
            }
        }
    },
    methods: {
        async addquestions() {
            try {
                //fetch the token from the localStorage
                if(this.content && this.option1 && this.option2 && this.option3 && this.option4 && this.answer){
                    const token = localStorage.getItem('token');
                // console.log(token);
                //start the loader
                this.loading = true;
                const details = await axios.post(import.meta.env.VITE_APIURL + "/addquestions", {
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
                this.loading = false;
            }
            catch (err) {
                console.log(err);
            }
        },
        async gettitle() {
            const token = localStorage.getItem('token');
            const data = await axios.get(import.meta.env.VITE_APIURL + "/get-quiz", { headers: { Authorization: "bearer " + token } })

            this.fetchtitle = data.data.data;
            console.log(data.data.data);
        }
    },
    mounted() {
        this.gettitle();
    }
}
</script>