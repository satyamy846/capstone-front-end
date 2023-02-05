import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  //it created the history so that we can jump back to previous page
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage/Home.vue')
    },

    {
      //student components
      path: '/student',
      name: "student",
      children: [
        {
          path: 'register',
          name: 'studentsignup',
          component: () => import('../views/signup/studentSignup.vue')
        },
        {
          path: 'login',
          name: 'studentlogin',
          component: () => import('../views/login/Studentlogin.vue')
        },
        {

          path: 'forgot-password',
          name: 'studentforgotpassword',
          component: () => import('../views/forgotpassword/Studentforgot.vue')

        },
        {
          path: 'dashboard',
          name: 'studentdashboard',
          children: [
            {
              path: 'quiz',
              name: 'studentquiz',
              component: () => import('../views/dashboard/Studentdashboard.vue')
            },
            {
              path: 'questions',
              name: 'studentquestions',
              component: () => import('../views/dashboard/questions.vue')
            }
          ]
        }

      ]
    },
    //teacher components
    {
      path: '/teacher',
      name: "teacher",
      children: [
        {
          path: 'signup',
          name: 'teachersignup',
          component: () => import('../views/signup/Teachersignup.vue')
        },
        {
          path: 'login',
          name: 'teacherlogin',
          component: () => import('../views/login/Teacherlogin.vue')
        },
        {

          path: 'forgot-password',
          name: 'teacherforgotpassword',
          component: () => import('../views/forgotpassword/Teacherforgot.vue')

        },
        {
          path: '/teacher/dashboard',
          name: 'teacherdashboard',
          component:()=>import('../views/dashboard/teacher/Teacherdashboard.vue'),
          children: [

            {
              path: 'profile',
              name: 'profile',
              component: () => import('../views/dashboard/profile.vue')
            },
            {
              path: 'addquiz',
              name: 'addquiz',
              component: () => import('../views/dashboard/teacher/addquiz.vue')
            },
            {
              path: 'quizes',
              name: 'quiz',
              component: () => import('../views/dashboard/quiz.vue')
            },
            {
              path: 'updatequestions',
              name: 'updatequestions',
              component: () => import('../views/dashboard/teacher/updatequestions.vue')
            },
            {
              path: 'addquestions',
              name: 'addquestions',
              component: () => import('../views/dashboard/teacher/addquestions.vue')
            }

          ]
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404error',
      component: () => import('../components/Notfound.vue')
    },
  ]
})

export default router
