<template>
    <navbar />

    <router-view></router-view>
</template>


<script>
import navbar from '../../../components/navbar/teachernavbar.vue';
import sidebar from '../../../components/sidebar.vue';
import profile from './profile.vue';
import quiz from './quiz.vue';
import footer from '../../../components/footer.vue';

export default {
    name: 'Teacherdashboard',
    components: {
        navbar,
        sidebar,
        profile,
        quiz,
        footer,
    },
    data() {
        return {
            
        }
    },
}



</script>

<style>
body{
    background-color: #ECEFF1;
    background-size: contain;
}
</style>