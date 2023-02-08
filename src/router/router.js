import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  //it created the history so that we can jump back to previous page easily
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
          component: () => import('../views/signup/Studentsignup.vue'),
          meta:{auth:false}
        },
        {
          path: 'login',
          name: 'studentlogin',
          component: () => import('../views/login/Studentlogin.vue'),
          meta:{auth:false}
        },
        {
          path: 'dashboard',
          name: 'studentdashboard',
          component:()=>import('../views/dashboard/student/Studentdashboard.vue'),
          meta:{auth:true},
          children: [
            {
              path: 'view',
              name: 'studentview',
              component: () => import('../views/dashboard/student/studentview.vue')
            },
            {
              path: 'quiz',
              name: 'studentquiz',
              component: () => import('../views/dashboard/student/studentquiz.vue')
            },
            {
              path: 'profile',
              name: 'studentprofile',
              component: () => import('../views/dashboard/student/studentprofile.vue')
            },
            {
              path: 'questions',
              name: 'studentquestions',
              component: () => import('../views/dashboard/student/questions.vue')
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
          component: () => import('../views/signup/TeacherSignup.vue'),
          meta:{auth:false}
        },
        {
          path: 'login',
          name: 'teacherlogin',
          component: () => import('../views/login/Teacherlogin.vue'),
          meta:{auth:false}
        },
        {
          path: '/teacher/dashboard',
          name: 'teacherdashboard',
          component:()=>import('../views/dashboard/teacher/Teacherdashboard.vue'),
          meta:{auth:true},
          children: [
            {
              path:'view',
              name:'teacherview',
              component:()=>import('../views/dashboard/teacher/teacherview.vue'),
            },
            {
              path: 'profile',
              name: 'profile',
              component: () => import('../views/dashboard/teacher/profile.vue')
            },
            {
              path: 'addquiz',
              name: 'addquiz',
              component: () => import('../views/dashboard/teacher/addquiz.vue')
            },
            {
              path: 'quizes',
              name: 'quiz',
              component: () => import('../views/dashboard/teacher/quiz.vue')
            },
            {
              path: 'updatequestions',
              name: 'updatequestions',
              component: () => import('../views/dashboard/teacher/updatequestions.vue')
            },
            {
              path: 'updatequiz',
              name: 'updatequiz',
              component: () => import('../views/dashboard/teacher/updatequiz.vue')
            },
            {
              path: 'addquestions',
              name: 'addquestions',
              component: () => import('../views/dashboard/teacher/addquestions.vue')
            },
            {
              path:'viewquiz',
              name:'viewquizpage',
              component:()=>import('../views/dashboard/teacher/viewquiz.vue')
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

router.beforeEach((to, from,next)=>{
  // console.log(to);
  //check if user is not authenticated and trying to access the dashboard page
  const token = localStorage.getItem('token');
  if(to.meta.auth && !token ){
    next({name:'home'});
  }
  // else if(to.meta.auth && !token ){
  //   next({name:'teacherlogin'});
  // }
  else if(!to.meta.auth && token){
    //if we have the token so it will keep us stay at the same page
    next({name:'studentdashboard'});
  }
  else{
    next();
  }
});

// window.onload = function() {
//   localStorage.clear();
//   return '';
// };

export default router
