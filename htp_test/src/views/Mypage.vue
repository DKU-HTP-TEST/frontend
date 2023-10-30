<template>
    <div class="wrap">
    <div class="main" style="float: left;">
        <img src="..\assets\HTP_logo2.png" class="logo">
        <!-- 글씨 크기 조절 (h1, h3 이런거 말고) -->
        <p class="title">안녕하세요, {{ user }}님!</p>
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
        <Setting v-if = "this.modify"></Setting>
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
    props: {
        user: {
            type: String,
            default: 'jang'
        }
        
    },
    data() {
        return {
            res: false,
            modify: false,
            house_res: "최고가 되는 것은 외로운 일입니다. 매우 희귀한 성격이면서도 뛰어난 능력을 지닌 전략가(INTJ)는 이러한 말의 의미를 잘 알고 있습니다. 전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다. 하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다.",
            tree_res: "전략가는 모든 것에 의문을 제기합니다. 다른 많은 성격은 현재 상태를 유지하고 일반적인 통념과 다른 사람의 전문 지식에 의존해 살아가곤 합니다. 하지만 비판적인 성향을 지닌 전략가는 자신만의 방식을 찾아내기를 원하며, 일을 진행하는 더 나은 방식을 찾기 위해 규칙을 깨거나 다른 사람의 반대를 무릅쓰는 일도 마다하지 않습니다. 사실 오히려 이러한 과정을 즐기는 편입니다.",
            human_res: "전략가는 실제로 활용할 수 있는 아이디어만이 가치가 있다고 생각하며, 단순히 새로운 아이디어를 내는 데 그치는 것이 아니라 아이디어를 이용해 성공을 쟁취하고자 합니다. 이들은 업무에 자신의 모든 통찰력과 논리력과 의지를 쏟아부으며, 불필요한 규칙을 설정하거나 쓸모없는 비판을 제기하면서 자신을 방해하는 사람에게는 가차 없는 모습을 보입니다",
            token: localStorage.getItem('token')
        }
    },
    async mounted() {
        console.log(this.token)
        axios.get(get_url, {
            headers: {
                AUTH: this.token, 
            }
        })
        .then((res) => {
            console.log("suc")
            this.user=res.data.username
        })
        .catch((error) => {
            console.log("fail")
            console.log(error)
        });
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
        }
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