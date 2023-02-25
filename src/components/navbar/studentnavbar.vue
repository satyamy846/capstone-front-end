<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <!-- <v-toolbar app color="blue" class="overflow-hidden">

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
    </v-toolbar> -->
    <nav class="navbar navbar-expand-lg py-4 " style="background-color: #EDDBC7;">
        <div class="container-fluid">
            
          <a class="navbar-brand" href="/"> <i class="bi bi-laptop mr-2"></i>Online Quiz</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="/student/dashboard/view">DASHBOARD</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/student/dashboard/profile">PROFILE</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/student/dashboard/quiz">QUIZ</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href=""  @click="logout">LOGOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
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


<style>
ul.navbar-nav li a:hover{
    color: #2B3467;
}
.navbar-brand{
    color: BLACK
}
</style>