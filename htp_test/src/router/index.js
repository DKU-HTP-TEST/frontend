import { createWebHistory, createRouter } from 'vue-router';

import Register from '../views/Register'
import Complete from '../views/Complete.vue'

const routes = [
    {
        path: '/register',
        name: "Register",
        component: Register
    },

    {
      path: '/complete',
      name: "Complete",
      component: Complete
    }
  
    
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export {router};