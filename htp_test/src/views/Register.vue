<template>
    <UpperSide msg="회원가입"/>
    <div class="circle-box">
      <div class="circle" style="background-color:gray; margin-left: 70px;"><p style="color: white; size: 5px;">약관 동의</p></div>
      <hr/>
      <div class="circle" id="c2"></div>
      <hr/>
      <div class="circle" id="c3"></div>
    </div>
    <Button msg="다음" @click="Buttonclick"/>
</template>
  
  <script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  
  export default {
    name: 'Register',
    components: {
      UpperSide,
      Button
    }
  }
  </script>
  
  <style>
   body {
      margin: 0px;
      padding: 0px;
    }
    .circle-box {
      display: table;
      padding: 30px;
      padding-left:290px;
    }
    hr {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 40px;
      border: none;
      border-top: 3px dotted gainsboro;
      color: white;
      background-color: white;
      height: 1px;
      width: 300px;
    }
    .circle {
      display: table-cell;
     
      vertical-align: center;
      width:90px;
      height:90px;
      background-color: gainsboro;
      border-radius: 50%;
    }
    .circle #c1 {
      background-color: gray;
    }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  