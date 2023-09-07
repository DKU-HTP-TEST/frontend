import { createWebHistory, createRouter } from 'vue-router';

import Register from '../views/Register'
import Register2 from '../views/Register2'
import Mypage from '../views/Mypage'
import Complete from '../views/Complete.vue'
import TestStartPage from '../views/TestStartPage'
import TestPage from '../views/TestPage'

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
      path: '/complete',
      name: "Complete",
      component: Complete
    },
    
    {
        path: '/mypage',
        name: "Mypage",
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
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router};