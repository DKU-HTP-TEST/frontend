<template>
    <div class="wrap">
    <div class="main" style="float: left;">
        <img src="..\assets\HTP_logo2.png" class="logo">
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
        <p class="withdrawal">회원탈퇴</p>
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

let get_url = "http://127.0.0.1:8000/member/get_user/"

export default {
    name: 'MypageComponent',
    components: {
        Setting,
        MypageResult
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
        }
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