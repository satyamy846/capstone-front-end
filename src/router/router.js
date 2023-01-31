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
      //student components
      path: '/students',
      name:"student",
      children: [
        {
          path:'/students/signup',
          name:'signup',
          component:()=>import('../views/signup/Studentsignup.vue')
        },
        {
          path:'/students/login',
          name:'login',
          component:()=>import('../views/login/Studentlogin.vue')
        },
        {
          
          path:'/students/forgot-password',
          name:'login',
          component:()=>import('../views/forgotpassword/Studentforgot.vue')
        
      },
        {
          path:'/students/dashboard',
          name:'login',
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
          name:'signup',
          component:()=>import('../views/signup/Teachersignup.vue')
        },
        {
          path:'/teacher/login',
          name:'login',
          component:()=>import('../views/login/Teacherlogin.vue')
        },
        {
          
            path:'/teacher/forgot-password',
            name:'login',
            component:()=>import('../views/forgotpassword/Teacherforgot.vue')
          
        },
        {
          path:'/teacher/dashboard',
          name:'login',
          component:()=>import('../views/dashboard/Teacherdashboard.vue')
        }

      ]
    }
  ]
})

export default router
