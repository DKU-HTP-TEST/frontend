<template>
    <div class="wrap">
    <div class="main" style="float: left;">
        <RouterLink to="/Main"><img src="..\assets\HTP_logo2.png" class="logo"></RouterLink>
        <!-- 글씨 크기 조절 (h1, h3 이런거 말고) -->
        <p class="title">안녕하세요, {{ username }}님!</p>
        <div class="menu" @click="res_exec">
            <h2>심리검사 결과 관리</h2>
            <h2 class="more">&gt;</h2>
        </div>
        <hr>
        <div class="menu" @click="modify_exec">
            <h2>회원 정보 수정</h2>
            <h2 class="more">&gt;</h2>
        </div>
        <hr>
        <p class="withdrawal" @click="openModal=true; withdrawUser()">회원탈퇴</p>
    </div>

    <div class="page" style="float: left;">
        <Setting v-if = "this.modify" :user_id="user_id" :username="username" :useremail="useremail"></Setting>
        <MypageResult :house_res="house_res" :tree_res="tree_res" :human_res="human_res" v-if="this.res" />
    </div>
    
    </div>

</template>

<script>
import Setting from "@/components/Setting.vue";
import MypageResult from "@/components/MypageResult.vue";
import axios from "axios";
import { RouterLink } from "vue-router";

let get_url = "http://127.0.0.1:8000/member/get_user/"

export default {
    name: 'MypageComponent',
    components: {
    Setting,
    MypageResult,
    RouterLink
},
    data() {
        return {
            res: false,
            modify: false,
            // house_res: "",
            // tree_res: "",
            // human_res: "",
            token: localStorage.getItem('token'),
            username: '',
            user_id: '',
            useremail: '',
            openModal : false,
        }
    },
    methods: {
        modify_exec: function () {
            if (this.modify == false) {
                this.modify = true;
                this.res = false;
            }
            else {
                this.modify = false;
            }
            return true
        },
        res_exec: function() {
            if (this.res == false) {
                this.res = true;
                this.modify = false;
            }
            else {
                this.res = false;
            }
        },
        fetchData: function() {
            console.log(this.token)
            axios.get(get_url, {
                headers: {
                    Authorization: this.token, 
                }
            })
            .then((res) => {
                console.log("suc")
                console.log(res)
                this.username = res.data.username
                this.useremail = res.data.useremail
                this.user_id = res.data.user_id
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)
            });
        },
        close(event){
                if(event.target.classList.contains('modalcontent') || event.target.classList.contains('close')){
                    this.openModal = false;
                }else if(event.target.classList.contains('content')){
                    this.openModal = true;
                }
            },
        withdrawUser() {
            if (confirm("정말로 탈퇴하시겠습니까?")) {
                axios.delete("http://127.0.0.1:8000/member/delete/" + this.user_id + "/", {
                    headers: {
                        Authorization: this.token,
                    }
                })
                .then(response => {
                    console.log('회원탈퇴 성공');
                    localStorage.removeItem("token");
                    window.location.replace("http://localhost:8080/Main");
                })
                .catch(error => {
                    console.log('회원 탈퇴 실패', error);
                });
            } else {
                console.log('탈퇴가 취소되었습니다.');
                // 탈퇴가 취소된 경우 추가 작업을 할 수 있음
            }
        },
    },
    created() {
        this.fetchData();
    }
}
</script>

<style scoped>

    .wrap {
        display: flex;
        flex-direction: row;
    }
    .main {
        display: block;
        width: 32%;
        height: 100vh;
        /* background-color: #F6B590;
        opacity: 0.44; */
        background-color: rgba(246, 181, 144, 0.44);
    }
    .title {
        font-size: 230%;
        font-weight: bold;
        vertical-align: middle;
        color: black;
        margin-top: 5px;
        padding-bottom: 30px;
    }

    .main > hr {
        width: 65%;
        display: block;
        color: black;
        background-color: #F6B590;
        border-top: 1px solid;
        margin-top: 0px;
        margin-left: 17%;
    }

    .menu {
        display: flex;
        justify-content: space-between;
    }

    .menu > h2 {
        vertical-align: middle;
        /* background-color: red; */
        color: black;
        text-align: left;
        margin-left: 20%;
        padding: 5px 0px;
        font-size: 26px;
    }

    .more {
        vertical-align: middle;
        /* background-color: rgb(103, 93, 255); */
        color: black;
        text-align: left;
        margin-right: 20%;
    }

    .logo { 
        width: 130px;
        height: 63px;
        margin-right: 220px;
        margin-top: 20%;
    }

    .withdrawal {
        font-size: 90%;
        font-weight: bold;
        vertical-align: middle;
        text-align: left;
        color: red;
        margin-top: 40vh;
        margin-left: 20%;
        padding-bottom: 30px;
    }

    .page {
        display: block;
        flex-grow: 1;
    }
</style>