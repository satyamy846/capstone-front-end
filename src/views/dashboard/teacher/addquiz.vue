<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                    <v-card class="mx-auto" max-width="800">
                        <v-card-item>
                            <v-card-text class="text-center">
                                <v-card-title class="mt-3">Add Quiz</v-card-title>
                            </v-card-text>
                            
                            <v-text-field label="Title" placeholder="Title" type="text" required
                                v-model="title"></v-text-field>
                            <v-text-field label="Description" placeholder="Description" type="text" required
                                v-model="description"></v-text-field>

                        </v-card-item>
                        <v-btn color="pink" class="ml-4 mb-3" @click="addquiz">Add Quiz</v-btn>
                    </v-card>

            </v-col>
        </v-row>
    </v-container>

</template>
<script>
import axios from 'axios';
import mynavbar from '../../../components/navbar/Homenavbar.vue';
// import sidebar from '../../components/sidebar.vue';
import swal from 'sweetalert';
export default {
    name: 'addquiz',
    components: {
        mynavbar,
        // sidebar
    },
    data() {
        return {
            title: '',
            description: '',
        }
    },
    methods: {
        async addquiz() {
            try {
                //fetch the token from the localStorage
                const token = localStorage.getItem('token');
                if (this.title == '') {
                    alert("Title cannot be blank");
                }
                else if (this.description == '') {
                    alert("Description is required");
                }
                // console.log(token);
                const details = await axios.post(import.meta.env.VITE_APIURL + "/addquiz", {
                    title: this.title,
                    description: this.description,
                }, { headers: { Authorization: "bearer " + token } },);
                //headers should be written after the data we want to send if we write first then this token will be send as a data
                console.log(details);
                swal("Quiz Successfully Added", "success");
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}
</script>