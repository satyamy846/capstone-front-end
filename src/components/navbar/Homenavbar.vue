<template>
    <!-- <v-app> -->
        <nav>
                <v-toolbar app color="blue">
                <!-- <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon> -->
                <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light"> Exam</span>
                    <span>Portal</span>
                </v-toolbar-title>

                
                <v-btn>Sign Up</v-btn>
                <v-btn>Sign In</v-btn>

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