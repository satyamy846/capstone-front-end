<template>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <!-- <v-toolbar app color="blue" > -->
        
<!-- <v-toolbar-title class="text-uppercase grey--text sm-4">

            <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Online</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;"> Quiz</router-link></span>
                    <v-btn variant="outlined" class="ml-10 mr-3" :to="{name:'teacherview'}">Home</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'teacherprofile'}">Profile</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'quiz'}">Go to Quiz</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'addquiz'}">Add Quiz</v-btn>
                <v-btn variant="outlined" class="ml-3 mr-3" :to="{name:'addquestions'}">Add Questions</v-btn>
                <router-link style="text-decoration: none; color: inherit;" to="/teacher/login" tag="v-btn">
            <v-btn>Teacher</v-btn></router-link>
        </v-toolbar-title> -->
<!-- <v-toolbar-title>
        <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Online</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;"> Quiz</router-link></span>
        </v-toolbar-title>
        
        <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn  class="ml-10 mr-3" :to="{name:'teacherview'}">Dashboard</v-btn>
                <v-btn  :to="{name:'teacherprofile'}">Profile</v-btn>
                <v-btn  :to="{name:'quiz'}">Go to Quiz</v-btn>
                <v-btn  :to="{name:'addquiz'}">Add Quiz</v-btn>
                <v-btn  :to="{name:'addquestions'}">Add Questions</v-btn>
                
            <v-btn>Log Out</v-btn>

        </v-toolbar-items>

        <v-menu class="hidden-sm-and-up" v-slot:activator="{ props }">
          
            
            <v-list v-bind="props">
                <v-list-item v-for="item in items" :key="item.title">
                    <v-list-item-title>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <v-app-bar-nav-icon > <v-icon icon="mdi-view-headline"></v-icon></v-app-bar-nav-icon>

        </v-menu>
            
            
    </v-toolbar> -->

    
    <!-- <v-app-bar-nav-icon slot="activator"></v-app-bar-nav-icon> -->


    <nav class="navbar navbar-expand-lg py-3 " style="background-color: #EDDBC7;">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" > <i class="bi bi-laptop mr-2"></i>ONLINE QUIZ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="/teacher/dashboard/view">DASHBOARD</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/teacher/dashboard/profile">PROFILE</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/teacher/dashboard/quizes">QUIZ</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/teacher/dashboard/addquiz">ADD QUIZ</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/teacher/dashboard/addquestions">ADD QUESTIONS</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="" @click="logout">LOGOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

</template>


<script>

import { RouterLink, RouterView } from 'vue-router'
export default {
    
    name: 'teachernavbar',
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
        },
        async menuItems () {
            return this.menu
        }
    },
    mounted() {
        this.getemail();
        // console.log(this.$vuetify.display.mobile);
    }
}
</script>

<style>
ul.navbar-nav li a:hover{
    color: #2B3467;
}

.navbar-brand{
    color: BLACK
}
</style>