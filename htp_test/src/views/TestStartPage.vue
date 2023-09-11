<template>
    <UpperSide msg="HTP 검사 시작"></UpperSide>
    <br><br><br><br><br><br><br>
    <img src="../assets/HTP_logo.png" style="width:300px">
    <h1>HTP 검사를 시작할게요!</h1>
    <p>집, 나무, 사람 순서대로 그림을 업로드 해주세요.</p>
    <Button msg="다음" @click="start"></Button>
</template>

  <script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";

  export default {
    name: 'Register',
    components: {
        UpperSide,
        Button
    },
    methods: {
        start : function () {
            this.$router.push({
                name: "TestPage",
                query: {order: 1}
            })
        }
    }
  };



  </script>
  
  <style>
   body {
      margin: 0px;
      padding: 0px;
    }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  </style>
  