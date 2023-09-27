import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import axios from "axios"

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app');


let url = "http://127.0.0.1:8000/register/"; // 장고 서버 주소

axios.get(url)
.then(function(response){
  console.log(response);
})
.catch(function(response){
  console.log(response);
})