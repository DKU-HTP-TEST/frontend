import { createWebHistory, createRouter } from 'vue-router';

import Register from '../views/Register'
import Mypage from '../components/Mypage'

const routes = [
    {
        path: '/register',
        name: "Register",
        component: Register
    },
    {
        path: '/mypage',
        name: "Mypage",
        component: Mypage
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router};