<template>
    <mynavbar/>
    
    <v-card max-width="1000" class="mx-auto mt-5">


        <v-container fluid>
            <v-row>
                <v-col >
                    <v-card  height="290px" width="200px">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" cover></v-img>
                        <v-card-item>
                            <v-card-title>
                                Aptitude
                            </v-card-title>
                            <v-card-subtitle>
                                Attempt in one go
                            </v-card-subtitle>
                        </v-card-item>
                        <v-card-text variant="outlined">Lorem ipsum, dolor sit amt hjgjgjg j hfyr7fytfhf
                        </v-card-text>
                        <v-btn variant="text" color="teal-accent-4" @click="reveal = false">Play</v-btn>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-card height="290px" width="200px">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" cover></v-img>
                        <v-card-item>
                            <v-card-title>
                                Reasoning
                            </v-card-title>
                            <v-card-subtitle>
                                Attempt in one go
                            </v-card-subtitle>
                        </v-card-item>
                        <v-card-text variant="outlined">Lorem ipsum, dolor sit amt hjgjgjg j hfyr7fytfhf
                        </v-card-text>
                        <v-btn variant="text" color="teal-accent-4" @click="reveal = false">Play</v-btn>
                    </v-card>
                    <v-card height="290px" width="200px">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100px" cover></v-img>
                        <v-card-item>
                            <v-card-title>
                                Programming
                            </v-card-title>
                            <v-card-subtitle>
                                Attempt in one go
                            </v-card-subtitle>
                        </v-card-item>
                        <v-card-text variant="outlined">Lorem ipsum, dolor sit amt hjgjgjg j hfyr7fytfhf
                        </v-card-text>
                        <v-btn variant="text" color="teal-accent-4" @click="reveal = false">Play</v-btn>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
export default {
    name: 'student',
    components: {
        mynavbar,
    },
    data: () => ({
        reveal: false,
    }),
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