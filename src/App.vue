<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar/Homenavbar.vue';


</script>


<template>
  <!-- App.vue -->

<!-- <v-app>
  <v-navigation-drawer app>
  </v-navigation-drawer>

  <v-app-bar app>
  </v-app-bar>

  Sizes your content based upon application components
  <v-main>

    Provides the application the proper gutter
    <v-container fluid>

      If using vue-router
      <router-view></router-view> with this tag all the components dynamically injected to the htmml page we mounted earlier
    </v-container>
  </v-main>

  <v-footer app>
  </v-footer>
</v-app> -->
<!-- <router-view></router-view>  -->
<router-view/>
</template>



<!-- <script>
import store from './store/store';
  export default{

    // mounted(){
    //   this.$store.initialize
    // }
  }
</script> -->


<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>  -->
