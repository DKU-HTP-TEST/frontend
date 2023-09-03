import { createWebHistory, createRouter } from 'vue-router';

import Register from '../views/Register'

const routes = [
    {
        path: '/register',
        name: "Register",
        component: Register
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router};