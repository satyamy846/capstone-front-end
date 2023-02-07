<template>

    <v-toolbar app color="blue">
        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Exam</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;">Portal</router-link></span>
        </v-toolbar-title>


        <v-btn @click="logout">Logout</v-btn>

    </v-toolbar>



</template>

<script>
export default {
    name: 'dashboardnavbar',
    methods: {
        async logout() {
            try {
                window.localStorage.clear();
                this.$router.push({ name: 'home' })
            }
            catch (err) {

            }
        }
    }
}
</script>