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
            <div class="RegisID">
                <p>아이디<span style="color: red">*</span></p>
                <input type="text" class="id_input" v-model="user_id" placeholder=""/>
                <button type="button" class="btn2 btn-primary" @click="id_check()">중복 확인</button>
                <p style="color: blue;">{{ id_c }}</p>
            </div>
            <!-- 비밀번호 -->
            <div class="RegisPW">
                <div>
                    <p>비밀번호<span style="color: red">*</span></p>
                    <input type="password" v-model="password" placeholder=""/>
                </div>
                <br>
                <div>
                    <p>비밀번호 확인</p>
                    <input type="password" v-model="password_check" placeholder=""/>
                    <p v-if="ispassword" style="color: red">비밀번호가 일치하지 않습니다.</p>
                </div>
            </div>
            <!-- <div class="">
                <div>
                    비밀번호 확인
                </div>
                <input type="text" v-model="password_check" placeholder=""/>
                <p v-if="ispassword" style="color: red">비밀번호가 일치하지 않습니다.</p>
            </div> -->
            <!-- 이름 입력 -->
            <div class="Name">
                <p>이름 <span style="color: red">*</span></p>
                <input type="text" v-model="username" placeholder=""/>
            </div>
            <!-- 이메일 입력 -->
            <div class="Email">
                <p>e-mail <span style="color: red">*</span></p>
                <input type="text" v-model="useremail" placeholder=""/>
            </div>
            <p class="notice"> *필수 입력 사항</p>
        </div>
    <Button msg="다음" @click="register()"/>
</template>

<script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";

  import axios from "axios";
  let url = "http://127.0.0.1:8000/member/register/";
  let id_url = "http://127.0.0.1:8000/member/id_check/"
  
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
                id_c: '',
                id: false,
        }
    },
    components: {
      UpperSide,
      Button
    },
    methods: {
        id_check: function() {
            var id_data = {user_id: this.user_id}
            axios.post(id_url, new URLSearchParams(id_data))
            .then((response) => {
                this.id_c = '사용 가능한 아이디입니다.'
                this.id = true
            })
            .catch((error) => {
                this.id_c = '중복된 아이디가 존재합니다.'
                this.id = false
            })
        },
        register: function() {
            if(!this.id) {
                alert('아이디 중복확인을 해주세요.')
                return
            }
            if (!this.password || this.password != this.password_check) {
                    this.ispassword = true;
                    return;
                }
            else {
                this.ispassword = false;
            }
            if (!this.username || !this.useremail) {
                alert('필수 항목을 입력해주세요.')
                return
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
        /* display: table;
        padding: 30px;
        padding-left:290px; */
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
        border-top: 3px dotted gainsboro;
        color: white;
        background-color: white;
        height: 1px;
        width: 300px;
    }
    .circle {
        /* display: table-cell;
        vertical-align: center;
        width:100px;
        height:auto;
        background-color: gainsboro;
        border-radius: 50%; */
        display: table-cell;
        vertical-align: middle;
        width: 100px;
        height: 100px;
        background-color: gainsboro;
        border-radius: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .circle #c1 {
        background-color: gray;
        margin: 0;
    }
    .circle #c2,
    .circle #c3{
        background-color: #F3F3F3;
        margin: 0;
    }
    .Register_input  {
        /* text-align: center;
        height: calc(100vh - 132px); */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .RegisID{
        /* display: flex; */
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
        margin-bottom: 8px;
    }
    .RegisID p {
        margin: 0;
    }
    .RegisPW{
        /* display: flex; */
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .RegisPW p {
        margin: 0;
    }
    .Name{
        /* display: flex; */
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .Name p {
        margin: 0;
    }
    .Email{
        /* display: flex; */
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .Email p {
        margin: 0;
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
    .notice {
        color: red;
        margin-bottom: 30px;
    }
</style>