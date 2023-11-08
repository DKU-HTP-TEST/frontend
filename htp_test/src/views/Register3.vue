<template>
    <UpperSide msg="회원가입"/>
        <div class="circle-box">
            <div class="circle" id="c1">
                <b class="circle-text">1</b>
                <p>약관 동의</p>
            </div>
            <hr/>
            <div class="circle" id="c2">
                <b class="circle-text">2</b>
                <p>회원정보<br>입력</p>
            </div>
            <hr/>
            <div class="circle" id="c3">
                <b class="circle-text">3</b>
                <p>회원가입<br>완료</p>
            </div>
        </div>
        <div class="Success">
            <span>회원가입 성공!</span>
        </div>
        <Button msg="로그인하러 가기" @click="Buttonclick"/>
</template>

<script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  
  export default {
    name: 'Register3',
    components: {
      UpperSide,
      Button
    },
    methods: {
        Buttonclick: function() {
            window.location.replace('http://localhost:8080/login')
        }
    }
  }
  </script>

<style scoped>
    body {
        margin: 0px;
        padding: 0px;
    }
    .circle-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 90px 20px 90px;
    }
    hr {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 40px;
        border: none;
        /* border-top: 3px dotted gainsboro; */
        border-top: 3px dotted black;
        color: white;
        background-color: white;
        height: 1px;
        width: 300px;
    }
    .circle {
        display: table-cell;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        /* background-color: gainsboro; */
        border-radius: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #c1, #c2{
        background-color: #F3F3F3;
        margin: 0;
    }
    #c3{
        background-color: gainsboro;
        margin: 0;
    }
    span {
        text-align: center;
        font-size: 30px;
    }
    .Success {
        margin-top: 190px;
        margin-bottom: 190px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>