import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  //it created the history so that we can jump back to previous page
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../views/HomePage/Home.vue')
    },
    
    {
      //student components
      path: '/student',
      name:"student",
      children: [
        {
          path:'/student/register',
          name:'studentsignup',
          component:()=>import('../views/signup/studentSignup.vue')
        },
        {
          path:'/student/login',
          name:'studentlogin',
          component:()=>import('../views/login/Studentlogin.vue')
        },
        {
          
          path:'/student/forgot-password',
          name:'studentforgotpassword',
          component:()=>import('../views/forgotpassword/Studentforgot.vue')
        
      },
        {
          path:'/student/dashboard',
          name:'studentdashboard',
          component:()=>import('../views/dashboard/Studentdashboard.vue')
        }

      ]
    },
    //teacher components
    {
      path: '/teacher',
      name:"teacher",
      children: [
        {
          path:'/teacher/signup',
          name:'teachersignup',
          component:()=>import('../views/signup/Teachersignup.vue')
        },
        {
          path:'/teacher/login',
          name:'teacherlogin',
          component:()=>import('../views/login/Teacherlogin.vue')
        },
        {
          
            path:'/teacher/forgot-password',
            name:'teacherforgotpassword',
            component:()=>import('../views/forgotpassword/Teacherforgot.vue')
          
        },
        {
          path:'/teacher/dashboard',
          name:'teacherdashboard',
          component:()=>import('../views/dashboard/Teacherdashboard.vue')
        },
        {
          path:'/student/dashboard',
          redirect:'/student/login'
        }

      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name:'404error',
      component: ()=>import('../components/Notfound.vue')
    },
  ]
})

export default router
