import { createRouter, createWebHistory } from 'vue-router';

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
      component: ()=>import('../views/login/Login.vue')
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
      path:'/teacher',
      name:'dashboard',
      component:()=>import('../views/dashboard/Teacherdashboard.vue')
    },
    {
      path:'/student',
      name:'student',
      component: ()=>import('../views/dashboard/Studentdashboard.vue')

    }
  ]
})

export default router
