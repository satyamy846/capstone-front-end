<template>
    <v-card class="d-inline-block ma-5" height="900px" width="800px">
        <v-card-item>
            <v-card-title class="mt-3">Add quiz</v-card-title>
            <v-text-field label="Title" placeholder="Title" type="text" required v-model="title"></v-text-field>
            <v-text-field label="Description" placeholder="Description" type="text" required v-model="description"></v-text-field>

        </v-card-item>
        <v-btn color="blue-grey" class="ml-4" @click="addquiz">Add Quiz</v-btn>
    </v-card>
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
            try{
                //fetch the token from the localStorage
                const token =  localStorage.getItem('token');
                // console.log(token);
                const details = await axios.post("http://localhost:5000/addquiz", {
                    title: this.title,
                    description: this.description,
                },{headers:{Authorization:"bearer " + token}},); 
                //headers should be written after the data we want to send if we write first then this token will be send as a data
                console.log(details);
                swal("Quiz Successfully Added", "success");
            }
            catch(err){
                console.log(err);
            }
        }
    }
}
</script>