import { createWebHistory, createRouter } from 'vue-router';

import Register from '../views/Register'
import Register2 from '../views/Register2'
import Register3 from '../views/Register3'
import LoginView from '../views/LoginView.vue'
import Mypage from '../views/Mypage'
import Complete from '../views/Complete.vue'
import TestStartPage from '../views/TestStartPage'
import TestPage from '../views/TestPage'
import MainBeforeLoginView from '../views/MainBeforeLoginView.vue'
import MainAfterLoginView from '../views/MainAfterLoginView.vue'
import Result from '../views/Result.vue'

const routes = [
    {
        path: '/register',
        name: "Register",
        component: Register
    },

    {
        path: '/register2',
        name: "Register2",
        component: Register2
    },

    {
        path: '/register3',
        name: "Register3",
        component: Register3
    },

    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    
    {
        path: '/MainBeforeLogin',
        name: 'MainBeforeLogin',
        component: MainBeforeLoginView
    },

    {
        path: '/MainAfterLogin',
        name: 'MainAfterLogin',
        component: MainAfterLoginView
    },

    {
      path: '/complete',
      name: "Complete",
      component: Complete
    },
    
    {
        path: '/mypage',
        name: "mypage",
        component: Mypage
    },

    {
        path: '/teststart',
        name: "TestStartPage",
        component: TestStartPage
    },

    {
        path: '/test',
        name: "TestPage",
        component: TestPage
    },

    {
      path : '/Result',
      name : "Result",
      component: Result
    },

];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router};