<template>
    <Mypage :user="username"/>
  </template>
  
  <script>
  import Mypage from "../components/Mypage.vue";
  
  export default {
    name: 'Mypage',
    components: {
        Mypage
    },
    data() {
        return {
            username: 'ㅇㅇㅇ',
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  