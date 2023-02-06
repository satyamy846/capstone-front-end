<template>
<mynavbar />
    <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-2">
                <!--Menu-->
                <studentsidebar/>
            </div>
            <div class="col-md-2">
                <!--Content-->
                <!-- <h1>content</h1> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import mynavbar from '../../../components/navbar/Homenavbar.vue';
import studentsidebar from '../../../components/studentsidebar.vue';
import studentprofile from './studentprofile.vue';
import studentquiz from './studentquiz.vue';
export default{
    name:'studentdashboard',

    components:{
        mynavbar,
        studentsidebar,
        studentprofile,
        studentquiz
    }
}

</script>

<style>

</style>