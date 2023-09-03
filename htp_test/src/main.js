import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app');
