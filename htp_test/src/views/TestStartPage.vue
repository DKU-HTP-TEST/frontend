<template>
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
  