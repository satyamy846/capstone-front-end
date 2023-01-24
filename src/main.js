import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue' 
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'



import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
  });


const app = createApp(App)

app.use(router); //it is a middleware

app.mount('#app');

app.use(vuetify);




// import Vue from 'vue'
// import vuetify from '../src/plugins/vuetify.js' // path to vuetify export

// new Vue({
//   vuetify,
//   router,
// }).$mount('#app')

