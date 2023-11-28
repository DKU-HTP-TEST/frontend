<template>
    <div class="page">
        <header>
            <h3>
                로그인
            </h3>
        </header>
        <router-link to="MainBeforeLogin"><img src="../assets/HTP_logo2.png"></router-link>
        <div class="loginpage">
            <!-- <div>
                <p>아이디</p>
                <input type="text" v-model="username" placeholder=""/>
                <br>
                <p>비밀번호</p>
                <input type="password" v-model="password" placeholder=""/>
                <br>
            </div> -->
            <div class="loginIDPW">
                <p>아이디</p>
            </div>
            <input type="text" v-model="user_id" placeholder=""/>
            <br>
            <div class="loginIDPW">
                <p>비밀번호</p>
            </div>
            <input type="password" v-model="password" placeholder=""/>
            <div class="findIDPW">
                <router-link to="/findID">아이디 찾기 </router-link>
                &nbsp; | &nbsp;
                <router-link to="/findPW"> 비밀번호 찾기</router-link>
            </div>
            <div>
                <button type="button" class="btn btn-primary" @click="openModal=true; login()">로그인</button>
            </div>
            <div class="signup">
                <p>계정이 없으신가요?<router-link to="/register" font-color="red">회원가입</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    import Modal from "../components/Modal.vue";

    import axios from "axios";
    let url = "http://127.0.0.1:8000/member/login/"
  
    export default {
        name: 'LoginView',
        components: {
            Modal
        },
        data() {
            return {
                openModal : false,
                user_id: '',
                password: '',
                issuc: false,
            }
        },
        methods: {
            close(event){
                if(event.target.classList.contains('modalcontent') || event.target.classList.contains('close')){
                    this.openModal = false;
                }else if(event.target.classList.contains('content')){
                    this.openModal = true;
                }
            },
            login() {
                var data = {
                    user_id: this.user_id,
                    password: this.password,
                };
                axios.post(url, new URLSearchParams(data)).then(result => {
                    console.log(result)
                    localStorage.setItem('token', result.data.access)
                    this.issuc=true
                }).catch((error) => {
                    alert("유효한 아이디와 비밀번호를 입력해 주세요.")
                })
            }
        },
        watch: {
            issuc() {
                if(this.issuc == true) {
                    window.location.replace('http://localhost:8080/Main')
                }
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: #F6B590;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h3 {
        height: 200px;
        font-size: 36px;
        text-align: senter;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: center; /*수평 가운데 정렬*/
    }
    .page header i {
        margin-right: 20px;
    }
    .loginpage {
        /* text-align: center;
        height: calc(100vh - 132px); */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loginIDPW{
        /* display: flex; */
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 8px;
    }
    .loginIDPW p {
        margin: 0;
    }
    .findIDPW {
        text-align: center;
        margin: 0px 0px 20px;
    }
    .signup {
        color: black;
        font-size: 15px;;
        display: flex;
        align-items: center;
    }
    .signup a{
        color: red;
        font-size: 15px;
        margin-left: 10px;
    }
    .btn {
        margin-top: 10px;
        /* position: absolute; */
        width: 349px;
        height: 39px;
        /* left: 31px;
        top: 416px; */
        background-color: #F6B590;
        border-radius: 8px;
        border-color: #F6B590;
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
    }
    .main-text {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: black;
    }
    .sub-text {
        font-size: 15px;
        text-align: left;
        color: black;
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

    footer {
        z-index: 100;
    }

    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 12px;
    }
    .modalcontent {
        width: 100%;
        height: 100%;
        background: rgb(0,0,0,0.6);
        position: fixed;
    }
    .content {
        width: 90%;
        margin: 80px auto;
        background: white;
        border-radius: 5px;
        padding: 20px 0;
    }
    .close {
        cursor: pointer;
        border: none;
        background: #6667AB;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        padding: 5px 15px;
    }
    .close:hover {
        color: white;
        font-weight: bold;
        align-content: center;
        /* transform: scale(1,1);
        transition: all 0.5s; */
    }
</style>