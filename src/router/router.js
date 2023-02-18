import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  //it created the history so that we can jump back to previous page easily
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage/Home.vue'),
      meta:{
        logingaurd:true
      }
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
          meta:{logingaurd:true}
        },
        {
          path: 'login',
          name: 'studentlogin',
          component: () => import('../views/login/Studentlogin.vue'),
          meta:{logingaurd:true}
        },
        {
          path: 'dashboard',
          name: 'studentdashboard',
          component:()=>import('../views/dashboard/student/Studentdashboard.vue'),
          meta:{
            studentgaurd:true,
            
          },
          children: [
            {
              path: 'view',
              name: 'studentview',
              component: () => import('../views/dashboard/student/studentview.vue'),
              meta:{
                studentgaurd:true
              }
            },
            {
              path: 'quiz',
              name: 'studentquiz',
              component: () => import('../views/dashboard/student/studentquiz.vue'),
              meta:{
                studentgaurd:true,
                
              },
            },
            {
              path: 'profile',
              name: 'studentprofile',
              component: () => import('../views/dashboard/student/studentprofile.vue'),
              meta:{
                studentgaurd:true,
                
              },
            },
            {
              path: 'questions',
              name: 'studentquestions',
              component: () => import('../views/dashboard/student/questions.vue'),
              meta:{
                studentgaurd:true,
                
              },
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
          meta:{logingaurd:true}
        },
        {
          path: 'login',
          name: 'teacherlogin',
          component: () => import('../views/login/Teacherlogin.vue'),
          meta:{
            logingaurd:true
          }
        },
        {
          path: '/teacher/dashboard',
          name: 'teacherdashboard',
          component:()=>import('../views/dashboard/teacher/Teacherdashboard.vue'),
          meta:{
            teachergaurd:true,
            // is_teacher:true
          },
          children: [
            {
              path:'view',
              name:'teacherview',
              component:()=>import('../views/dashboard/teacher/teacherview.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'profile',
              name: 'teacherprofile',
              component: () => import('../views/dashboard/teacher/profile.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'addquiz',
              name: 'addquiz',
              component: () => import('../views/dashboard/teacher/addquiz.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'quizes',
              name: 'quiz',
              component: () => import('../views/dashboard/teacher/quiz.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'updatequestions',
              name: 'updatequestions',
              component: () => import('../views/dashboard/teacher/updatequestions.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'updatequiz',
              name: 'updatequiz',
              component: () => import('../views/dashboard/teacher/updatequiz.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path: 'addquestions',
              name: 'addquestions',
              component: () => import('../views/dashboard/teacher/addquestions.vue'),
              meta:{
                teachergaurd:true
              }
            },
            {
              path:'viewquiz',
              name:'viewquizpage',
              component:()=>import('../views/dashboard/teacher/viewquiz.vue'),
              meta:{
                teachergaurd:true
              }
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
//       let Isteacher = JSON.parse(localStorage.getItem('Isteacher'))

//       if(to.matched.some(record=>record.meta.is_teacher)){
//         //if teacher is trying to login
//         if(Isteacher == true){
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
//   // else if(to.matched.some(record=>record.meta.guest)){
//   //   if(token == ''){
//   //     next();
//   //   }
//   //   else{
//   //     next({name:'studentview'})
//   //   }
//   // }
//   else{
//     next();
//   }


// })

// const token = localStorage.getItem('token');

router.beforeEach((to,from,next)=>{
  // console.log(to);
  // console.log("from" ,from);
  // next();
    if(to.meta.logingaurd){
      const Isstudent = localStorage.getItem('Isstudent');
      const token = localStorage.getItem('token');
      const Isteacher = localStorage.getItem('Isteacher');
      if(Isstudent=="true"){
        next({name:'studentview'})
      }
      else if(Isteacher== "true"){
        next({name:'teacherview'})
      }
      else{

        next();
      }
    }
   else if(to.meta.studentgaurd){
      const Isstudent = localStorage.getItem('Isstudent');
      const token = localStorage.getItem('token');
      const Isteacher = localStorage.getItem('Isteacher');
      // if(Isstudent == true && token){
      //   next({name:'studentview'});
      // }
      // else{
      //   next({name:'studentlogin'})
      // }
      // if(token==null){
      //   next({name:'home'})
      // }
      // else if(Isstudent==null && Isteacher == "true" ){
      //   next({name:'home'});
      // }
      // else{
      //   next();
      // }
      if(Isstudent!="true"){
        next({name:'home'})
      }
      else{
        next()
      }
    }
    
    else if(to.meta.teachergaurd){
      const Isteacher = localStorage.getItem('Isteacher');
      const token = localStorage.getItem('token');
      // if(Isteacher == true && token){
      //   next({name:'teacherview'});
      // }
      // else{
      //   next({name:'teacherlogin'});
      // }
      if(Isteacher!="true"){
        next({name:'home'})
      }
      else{
        next();
      }
    }
    else{
      next();
    }
})

export default router
