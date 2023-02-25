<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <!-- <v-toolbar app color="blue">

        <v-toolbar-title class="text-uppercase grey--text">

            <span class="font-weight-light"> <router-link to="/" style="text-decoration: none; color: inherit;">
                    <v-icon icon="mdi-laptop-account" class="mr-2"></v-icon>
                    Online</router-link></span>
            <span><router-link to="/" style="text-decoration: none; color: inherit;"> Quiz</router-link></span>
        </v-toolbar-title>


        <router-link style="text-decoration: none; color: inherit;" to="/teacher/login" tag="v-btn">
            <v-btn>Teacher</v-btn></router-link>
        <router-link style="text-decoration: none; color: inherit;" :to="{ name: 'studentlogin' }" tag="v-btn">
            <v-btn>Student</v-btn></router-link>

    </v-toolbar> -->

    <nav class="navbar navbar-expand-lg py-4 " style="background-color: #EDDBC7;">
        <div class="container-fluid">
            
            <a class="navbar-brand" href="/" > <i class="bi bi-laptop mr-2"></i>ONLINE QUIZ</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a class="nav-link" aria-current="page" href="/teacher/login">TEACHER</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/student/login">STUDENT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


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

<style>
ul.navbar-nav li a:hover{
    color: #2B3467;
}
.navbar-brand{
    color: BLACK
}
</style>