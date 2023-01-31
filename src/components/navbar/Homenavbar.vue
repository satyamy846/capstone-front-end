<template>
    <!-- <v-app> -->
        <nav>
                <v-toolbar app color="blue">
                <!-- <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon> -->
                <v-toolbar-title class="text-uppercase grey--text" >
                    <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">Exam</router-link></span>
                    <span><router-link to="/" style="text-decoration: none; color: inherit;">Portal</router-link></span>
                </v-toolbar-title>

                
                <router-link style="text-decoration: none; color: inherit;" to="/teacher/signup" tag="v-btn"><v-btn>Teacher</v-btn></router-link>
                <router-link style="text-decoration: none; color: inherit;" to="/student/dashboard" tag="v-btn"><v-btn>Student</v-btn></router-link>
                <!-- <v-navigation-drawer v-model="drawer" absolute bottom temporary class="indigo">
                    <p>ell</p>
                </v-navigation-drawer> -->
            </v-toolbar>

            
        </nav>
    <!-- </v-app> -->


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