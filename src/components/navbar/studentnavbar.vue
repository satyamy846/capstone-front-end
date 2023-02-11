<template>

    <v-toolbar app color="blue" class="overflow-hidden">

        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Online</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;"> Quiz</router-link></span>
                    <v-btn variant="outlined" class="ml-10 mr-3" :to="{name:'studentview'}">Home</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'studentprofile'}">Profile</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'studentquiz'}">Go to Quiz</v-btn>
                
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
        },
        async getemail() {
            const emailOne = localStorage.getItem('teacheremail');
            this.email = emailOne;
        }
    },
    mounted() {
        this.getemail();
    }
}
</script>