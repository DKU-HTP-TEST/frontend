<template>
    <Button msg="다음" @click="Buttonclick"/>
</template>
  
  <script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  import { useRouter } from "vue-router";
  
  export default {
    name: 'Register',
    components: {
        UpperSide,
        Button
    }
  }

  const router = useRouter();
  
  const start = () => {
    router.push({path : "/"})
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  