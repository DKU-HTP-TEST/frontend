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
        <div class = "Register_input">
            <!-- 아이디 입력 -->
            <div class="Registerpage">
                <div>
                    아이디 <span style="color: red">*</span>
                </div>
                <input type="text" v-model="username" placeholder=""/>
                <button type="button" class="btn2 btn-primary">중복 확인</button>
            </div>
            <!-- 비밀번호 입력 -->
            <div class="">
                <div>
                    비밀번호<span style="color: red">*</span>
                </div>
                <input type="text" v-model="username" placeholder=""/>
            </div>
            <!-- 비밀번호 확인 -->
            <div class="">
                <div>
                    비밀번호 확인
                </div>
                <input type="text" v-model="username" placeholder=""/>
            </div>
            <!-- 이름 입력 -->
            <div class="">
                <div>
                    이름 <span style="color: red">*</span>
                </div>
                <input type="text" v-model="username" placeholder=""/>
            </div>
            <!-- 이메일 입력 -->
            <div class="">
                <div>
                    e-mail <span style="color: red">*</span>
                </div>
                <input type="text" v-model="username" placeholder=""/>
            </div>
            <p style="font-color: red;"> *필수 입력 사항</p>
        </div>
    <Button msg="다음" @click="Buttonclick"/>
</template>

<script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  
  export default {
    name: 'Register2',
    components: {
      UpperSide,
      Button
    }
  }
  </script>

<style scoped>
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
        width:100px;
        height:auto;
        background-color: gainsboro;
        border-radius: 50%;
    }
    .circle #c1 {
        background-color: gray;
    }
    .circle #c2,
    .circle #c3{
        background-color: #F3F3F3;
    }
    .Register_input {
        text-align: center;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .btn2 {
        width: 66px;
        height: 28px;

        background-color: #D9D9D9;
        font-size: 10px;
    }
</style>