<template>

<!-- <v-card class="mx-auto mt-5" width="800">
        <v-card-item v-for="(item,index) in qzarray" :key="item._id">
            <v-card-title class="ma-3">{{ item.title }}</v-card-title>
            <hr>
            <v-card-sub-title class="ma-3">Q{{ index+1 }} {{ item.content }}</v-card-sub-title>
            <v-radio-group v-model="radio">
           <span><v-radio class="inline" value="radio-1"></v-radio> <v-card-text><strong>A. </strong> {{ item.option1 }}</v-card-text></span>     
                <v-radio value="radio-2"></v-radio> <v-card-text><strong>B. </strong>{{ item.option2 }}</v-card-text>
                <v-radio value="radio-3"></v-radio> <v-card-text><strong>C. </strong>{{ item.option3 }}</v-card-text>
                <v-radio value="radio-4"></v-radio> <v-card-text><strong>D. </strong>{{ item.option4 }}</v-card-text>
            </v-radio-group>
        </v-card-item>
        <v-btn class="ma-4" outline color="primary" @click="goback">Go Back</v-btn>
    </v-card> -->

    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto mt-5">
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
                        <v-btn class="ma-4" color="upload" @click="updatequestion(item._id)">Update</v-btn>
                        <v-btn class="ma-4" color="error" @click="deletequestion(item._id)">Delete</v-btn>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn color="primary" :to="{path:'/teacher/dashboard/quizes'}">Go Back</v-btn>
                        <!-- <v-spacer></v-spacer> -->
                        
                    </v-card-actions>
                    
                   
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: 'viewquiz',
    // components: {
    //     navbar,
    //     Studentdashboard
    // },
    data() {
        return {
            details: null,
            qzarray: [],
            radio: [],
            titleOne:'',
        }
    },
    methods: {
        async getquestions() {
            try {
                const title = this.$route.query.title;
                // console.log(this.$route)
                // console.log(title);
                const token = await localStorage.getItem('token')
                const questiondetails = await axios.get(import.meta.env.VITE_APIURL + '/get-questions', 
                { headers: { Authorization: "bearer " + token }, params: { title } })
                // console.log(questiondetails);
                this.qzarray = questiondetails.data.data;
                this.titleOne = title;
                console.log(questiondetails);
            }
            catch (err) {
                console.log(err);
            }

        },
        async goback(){
            this.$router.push({name:'quiz'})
        },
        async updatequestion(id,titleOne){
            this.$router.push({name:'updatequestions',params:{id:id}})
        },
        async deletequestion(id){
            try{
                const token = await localStorage.getItem('token');
                console.log(id);
                const data = await axios.delete(import.meta.env.VITE_APIURL + `/delete-question/${id}`,
                {headers:{Authorization: "bearer " + token}});
                alert("Question Deleted");
                this.$router.go();
                // swal("Question deleted");
            }
            catch(err){
                console.log(err);
            }
        },
    },
    mounted() {
        this.getquestions()
    }
}
</script>