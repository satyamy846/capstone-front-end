<template>
    <navbar />
    <!-- <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-2">

                <sidebar/>
            </div>
            <div class="col-md-10">

                <router-view></router-view>
            </div>
        </div>
    </div> -->

    <v-container fluid>
        <v-row wrap >
            <v-col md-6 xs-12>
                <sidebar/>
            </v-col>
            
            <v-col md-6 xs-12 >
                <router-view></router-view>
            </v-col>
        </v-row>
    </v-container>

</template>


<script>
import navbar from '../../../components/navbar/dashboardnavbar.vue';
import sidebar from '../../../components/sidebar.vue';
import profile from './profile.vue';
import quiz from './quiz.vue';
import teacherview from './teacherview.vue';
export default {
    name: 'Teacherdashboard',
    components: {
        navbar,
        sidebar,
        profile,
        quiz,
        teacherview
    },
    data() {
        return {
            
        }
    },
}



</script>

<style>
body{
    background-color: #E3F2FD;
}
</style>