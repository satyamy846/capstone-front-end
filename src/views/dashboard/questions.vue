<template>
    <mynavbar />

    <!-- <p>Hello</p> -->
    <!-- <Studentdashboard :questions="getquestions"/> -->
    <!-- <h1 v-for="item in values" :key="item._id">{{ item.content }}</h1> -->
    <!-- <v-btn color="primary" @click="getquestions">click</v-btn> -->
    <!-- <v-btn variant="text" color="teal-accent-4" > <router-link style="text-decoration: none; color: inherit;" :to="{name:'studentquiz'}" tag="btn-primary">back</router-link></v-btn> -->
    <!-- <v-card center height="800px" width="800px">
        <v-container fluid>
            <v-radio-group v-model="radios">
                <template v-slot:label>
                    <div>Your favourite search engine</div>
                </template>
                <v-radio value="Google">
                    <template v-slot:label>
                        <div>Of course it's Google</div>
                    </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                    <template v-slot:label>
                        <div>Chat GPT</div>
                    </template>
                </v-radio>
            </v-radio-group>
            <v-radio-group v-model="radios">
                <template v-slot:label>
                    <div>Your favourite search engine</div>
                </template>
                <v-radio value="Google">
                    <template v-slot:label>
                        <div>Of course it's Google</div>
                    </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                    <template v-slot:label>
                        <div>Chat GPT</div>
                    </template>
                </v-radio>
            </v-radio-group>
            <v-radio-group v-model="radios">
                <template v-slot:label>
                    <div>Your favourite search engine</div>
                </template>
                <v-radio value="Google">
                    <template v-slot:label>
                        <div>Of course it's Google</div>
                    </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                    <template v-slot:label>
                        <div>Chat GPT</div>
                    </template>
                </v-radio>
            </v-radio-group>
            <v-radio-group v-model="radios">
                <template v-slot:label>
                    <div>Your favourite search engine</div>
                </template>
                <v-radio value="Google">
                    <template v-slot:label>
                        <div>Of course it's Google</div>
                    </template>
                </v-radio>
                <v-radio value="Duckduckgo">
                    <template v-slot:label>
                        <div>Chat GPT</div>
                    </template>
                </v-radio>
            </v-radio-group>
            <v-btn color="primary">submit</v-btn>
        </v-container>
    </v-card> -->
    <v-card max-width="1000">
        <v-card  max-width="300">
            <div class="d-inline">
                <v-card-text class="d-inline">Hells</v-card-text>
                <v-card-text class="d-inline">Hells</v-card-text>
            </div>
            
        </v-card>

    </v-card>

</template>

<script>
import axios from 'axios';
import mynavbar from '../../components/navbar/Homenavbar.vue';
import Studentdashboard from './Studentdashboard.vue';
export default {
    name: 'questions',
    components: {
        mynavbar,
        Studentdashboard
    },
    data() {
        return {
            details: null
        }
    },
    methods: {
        async getquestions(details) {
            // quizquestions.forEach((item)=>{
            //     console.log(item.answer);
            // })
            console.log(details);
        }
    },
}
</script>