import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const myApp = createApp(App);
myApp.use(BootstrapVue3)
myApp.use(router);
myApp.mount('#app');
