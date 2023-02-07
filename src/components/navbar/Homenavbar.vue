<template>
    <v-toolbar app color="blue">

        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Exam</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;">Portal</router-link></span>
        </v-toolbar-title>


        <router-link style="text-decoration: none; color: inherit;" to="/teacher/login" tag="v-btn">
            <v-btn>Teacher</v-btn></router-link>
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'studentlogin' }" tag="v-btn">
            <v-btn>Student</v-btn></router-link>

    </v-toolbar>


</template>

<script>
export default {
    name: 'MyNavbar',
    data() {
        return {
            drawer: false
        }
    }
}
</script>