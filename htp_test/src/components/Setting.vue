<template>
    <div style="height: 80px; width: 100%">
        <h3>회원 정보 수정</h3>
        <div class="modify_btn" @click="modify_func">
            <img src="../assets/modify-icon.png">
        </div>
    </div>
    
    <br>
    <hr>
    <br><br><br><br><br><br><br>

    <div class="content">
        <p id="attr">아이디</p>
        <div class="box">
            <p>{{ id }}</p>
        </div>

        <p id="attr">비밀번호</p>
        <div class="box" v-if="!this.isModify">
            <p>{{ password }}</p>
        </div>
        <div class="input-box" v-if="this.isModify">
            <input type="text" name="password" v-model="password">
        </div>

        <p id="attr">이름</p>
        <div class="box">
            <p>{{ name }}</p>
        </div>

        <p id="attr">e-mail</p>
        <div class="box" v-if="!this.isModify">
            <p>{{ email }}</p>
        </div>
        <div class="input-box" v-if="this.isModify">
            <input type="text" name="email" v-model="email">
        </div>

        <div v-if="this.isModify" class="btn_area">
            <button @click="save" id="save">저장</button>
            <button @click="cancel" id="cancel">취소</button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import Button from './Button.vue'

let get_url = "http://127.0.0.1:8000/get_user/"

    export default {
        name: 'UpperSide',
        props: {
            username: String,
            user_id: String,
            useremail: String
        },
        components: {
            Button,
        },
        data() {
            return {
                isModify : false,
                password: "***",
                name: this.username,
                id: this.user_id,
                email: this.useremail,
            }
        },
        methods: {
            modify_func: function () {
                this.isModify = true;

            },
            save: function() {
                axios.post("http://127.0.0.1:8000/member/update_user/"+this.user_id+"/", {
                    headers: {
                        Authorization: this.token,
                        password: this.password,
                        email: this.useremail,
                    }
                }).then(Response => {
                    console.log('수정 성공');
                    console.log(this.email);
                    console.log(this.password);
                })
                .catch(error => {
                    console.log('수정 실패', error);
                });
                this.isModify = false;
            },
            cancel: function () {
                this.isModify = false;
            },
        },
    }
  
</script>
  
<style scoped> 
    h3 {
        float: left;
        padding-top: 50px;
        padding-left: 80px;
        font-weight: 70;
        font-size: 25px;
        text-align: left;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: left; /*수평 왼쪽 정렬*/
    }

    hr {
        margin-left: 70px;
        margin-right: 70px;
    }

    #attr {
        padding-left: 80px;
        text-align: left;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: left; /*수평 왼쪽 정렬*/
    }

    .modify_btn { 
        display: flex;
        margin-right: 70px;
        margin-top: 50px;
        float: right;
        justify-content: right;
    }

    img {
        width: 30px;
        height: 30px;
    }

    .btn_area {
        margin-top: 200px;
        margin-right: 70px;
        float: right;
    }

    button {
        background-color: rgba(246, 181, 144, 0.44);
        width: 100px;
        height: 40px;
        margin-right: 20px;
        border-radius: 7px;
    }

    .box {
        background-color: gainsboro;
        width: 600px;
        height: 35px;
        margin-top: 10px;
        margin-left: 80px;
        margin-bottom: 20px;
        border-radius: 7px;
    }

    .box > p {
        padding-left: 10px;
        padding-top: 7px;
        text-align: left;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: left; /*수평 왼쪽 정렬*/
    }

    input {
        width: 600px;
        height: 30px;
        margin-top: 10px;
        margin-left: 80px;
        margin-bottom: 20px;
        border-radius: 7px;
        display: flex;
        justify-content: left;
    }
</style>
  