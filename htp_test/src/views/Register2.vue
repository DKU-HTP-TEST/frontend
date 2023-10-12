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
                <input type="text" class="id_input" v-model="user_id" placeholder=""/>
                <button type="button" class="btn2 btn-primary">중복 확인</button>
            </div>
            <!-- 비밀번호 입력 -->
            <div class="">
                <div>
                    비밀번호<span style="color: red">*</span>
                </div>
                <input type="text" v-model="password" placeholder=""/>
            </div>
            <!-- 비밀번호 확인 -->
            <div class="">
                <div>
                    비밀번호 확인
                </div>
                <input type="text" v-model="password_check" placeholder=""/>
                <p v-if="ispassword" style="color: red">비밀번호가 일치하지 않습니다.</p>
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
                <input type="text" v-model="useremail" placeholder=""/>
            </div>
            <p style="font-color: red;"> *필수 입력 사항</p>
        </div>
    <Button msg="다음" @click="register()"/>
</template>

<script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";

  import axios from "axios";
  let url = "http://127.0.0.1:8000/register/";
  
  export default {
    name: 'Register2',
    data: () => {
        return {
                user_id: '',
                password: '',
                password_check: '',
                username: '',
                useremail: '',
                ispassword: false,
                issuc: false,
        }
    },
    components: {
      UpperSide,
      Button
    },
    methods: {
        register: function() {
            if (this.password != this.password_check) {
                this.ispassword = true;
                return;
            }
            else {
                this.ispassword = false;
            }
            var data = {
                user_id: this.user_id,
                password: this.password,
                username: this.username,
                useremail: this.useremail
            }
            axios.post(url, new URLSearchParams(data))
            .then((response) => {
                this.issuc = true
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
        }
    },
    watch: {
        issuc () {
            if (this.issuc == true) {
                window.location.replace('http://localhost:8080/register3')
            }
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
    input {
        border-color: black;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        padding: 10px 0;
        width: 349px;
        height: 20px;
    }
    .id_input{
        border-color: black;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        padding: 10px 0;
        width: 283px;
        height: 20px;
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