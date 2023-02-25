<template>
<navbar />
    <!-- <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-2">

                <studentsidebar/>
            </div>
            <div class="col-md-2">

                <router-view></router-view>
            </div>
        </div>
    </div> -->
    
    <!-- <v-container fluid >
        <v-row wrap>
            <v-col md-2 xs-12>
                <studentsidebar/>
            </v-col>
            
            <v-col md-10 xs-12 >
                <router-view></router-view>
            </v-col>
        </v-row>
    </v-container> -->

    <router-view></router-view>

    <!-- <studentprofile/> -->
<!-- <div class="bootstrap-wrapper">
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-2">
            <studentsidebar/>
        </div>
        <div class="col-md-10">
            <router-view></router-view>
        </div>
    </div>
    </div>
</div> -->
    <!-- <footer/> -->
</template>

<script>
import navbar from '../../../components/navbar/studentnavbar.vue';
import studentsidebar from '../../../components/studentsidebar.vue';
import studentprofile from './studentprofile.vue';
import studentquiz from './studentquiz.vue';
export default{
    name:'studentdashboard',

    components:{
        navbar,
        // studentsidebar,
        studentprofile,
        studentquiz,
    }
}

</script>

<style>

</style>