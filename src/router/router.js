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
          meta:{guest:true}
        },
        {
          path: 'login',
          name: 'studentlogin',
          component: () => import('../views/login/Studentlogin.vue'),
          meta:{guest:true}
        },
        {
          path: 'dashboard',
          name: 'studentdashboard',
          component:()=>import('../views/dashboard/student/Studentdashboard.vue'),
          meta:{
            requiresAuth:true,
            
          },
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
          meta:{
            guest:true
          }
        },
        {
          path: 'login',
          name: 'teacherlogin',
          component: () => import('../views/login/Teacherlogin.vue'),
          meta:{
            guest:true
          }
        },
        {
          path: '/teacher/dashboard',
          name: 'teacherdashboard',
          component:()=>import('../views/dashboard/teacher/Teacherdashboard.vue'),
          meta:{
            requiresAuth:true,
            is_teacher:true
          },
          children: [
            {
              path:'view',
              name:'teacherview',
              component:()=>import('../views/dashboard/teacher/teacherview.vue'),
            },
            {
              path: 'profile',
              name: 'teacherprofile',
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

// const token = localStorage.getItem('token');
// router.beforeEach((to,from,next)=>{

//   //check if user is verified user or not
//   if(to.matched.some(record=>record.meta.requiresAuth)){
//     //check if that user has token or not
    
//     if(token == ''){
//       //user don't have token
//       next({name:'home'})
//     }
//     else{
//       //if it has token then check the user info(student or teacher)
//       let user = JSON.parse(localStorage.getItem('user'))

//       if(to.matched.some(record=>record.meta.is_teacher)){
//         //if teacher is trying to login
//         if(user.Isteacher == true){
//           next()
//         }
//         else{
//           //student is tring to login
//           next({name:'studentview'})
//         }
//       }
//       else{
//         next();
//       }
//     }
//   }
//   //anyone is trying to login who is not verified user
//   else if(to.matched.some(record=>record.meta.guest)){
//     if(token == ''){
//       next();
//     }
//     else{
//       next({name:'studentview'})
//     }
//   }
//   else{
//     next();
//   }


// })

export default router
