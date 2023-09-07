<template>
    <MypageComponent :user="username"/>
  </template>
  
  <script>
  import MypageComponent from "../components/Mypage.vue";
  
  export default {
    name: 'Mypage',
    components: {
        MypageComponent
    },
    data() {
        return {
            username: "jang",
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  