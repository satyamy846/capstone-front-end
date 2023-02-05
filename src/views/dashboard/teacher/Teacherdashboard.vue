<template>
    <mynavbar />
    <div class="bootstrap-wrapper">
        <div class="row">
            <div class="col-md-2">
                <!--Menu-->
                <sidebar/>
            </div>
            <div class="col-md-2">
                <!--Content-->
                <router-view></router-view>
            </div>
        </div>
    </div>


</template>


<script>
import mynavbar from '../../../components/navbar/Homenavbar.vue';
import sidebar from '../../../components/sidebar.vue';
import profile from '../profile.vue';
// import quiz from './quiz.vue';
export default {
    name: 'SignUp',
    components: {
        mynavbar,
        sidebar,
        profile
    },
    data() {
        return {
            
        }
    },
}



</script>