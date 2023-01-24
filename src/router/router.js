import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../views/HomePage/Home.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: ()=> import('../views/signup/signup.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import('../views/login/login.vue')
    },
    {
      path:'/forgot-password',
      name:'password',
      component: ()=>import('../views/forgotpassword/forgotPassword.vue')
    },
    {
      path:'/home-page',
      name:'homePage',
      component: ()=>import('../views/HomePage/Home.vue')
    },
    {
      path:'/form',
      name:'form',
      component: ()=>import('../views/form.vue')
    },
  ]
})

export default router
