<template class="main">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Inconsolata&display=swap" rel="stylesheet">
</head>
<body>
    <div class = "form">

        <!--첫 화면-->
        <div class = "home">
            <div class = "nav_header">
                <ul class = "nav">
                    <li v-if="isLogin" @click="logout()">Logout</li>
                    <li v-else @click="logout()">Login</li>
                    <li v-if="isLogin" @click="mypage()">Mypage</li>
                    <li v-else @click="register()">Register</li>
                </ul>
            </div>
            <div class = "home_t">
            <h1>HTP 심리검사</h1>
            <h3 class = contents1>어서오세요! <span class = "point">htp 검사</span> 사이트에 오신 것을 환영합니다:)</h3> 
            </div>
        </div>
        <!---->

        <!--자기 소개 바-->
        <ul class = "info">
            <li>
            <div class = "list">
                <div><img src = "../images/HTP_logo2.png" height = "100px"></div>
            </div>
            </li>
            <li>
            <div class = "list">
                <div class="contents3" >Home</div>
                <div class="contents2">집</div>
            </div>
            </li>
            <li>
                <div class = "list">
                    <div class="contents3">Tree</div>
                    <div class="contents2">나무</div>
                </div>
            </li>
            <li>
                <div class = "list">
                    <div class="contents3">Person</div>
                    <div class="contents2">사람</div>
                </div>
            </li>
        </ul>
        <!---->

        <!--메인 영역-->
        <div class = "main1">
            <h1>검사를 시작해 볼까요?</h1>
            <h4>3장의 종이와 펜을 준비해 주세요!</h4>

            <button class="btn2" @click="test()">검사 시작하기</button>
        </div>

        <div class = "main2">
            <h1>HTP 심리검사란?</h1>
            <h4>House-Tree-Person 검사, 줄여서 HTP 검사는 집, 나무, 사람
                그림을 통해 정서적인 면을 파악하는 검사에요!</h4>

            <div class = "main2_block">
                <div class = "my_img">
                    <img src = "../images/htp.jpg" width = "640px" height="640px">
                </div>
                <div class = "main2_text">
                    19세기 초, 정신 병원 의료진은 장기 입원 환자들에게 소일거리를 주어 나태해지지 않도록
                    미술을 활용했어요. 초기 미술 활동은 치료 목적이 아니었지만 이 활동이 점차 환자들의 정신 건강 상태를
                    호전시킨다는 것이 확인되면서 본격적으로 미술 심리 치료 연구가 시작되었어요.
                    <br><br>
                    HTP 검사는 1947년에 알랜트 원트와 존 버클리에 의해 처음으로 소개되었어요. 
                    이들은 간단하면서도 심리적인 특성을 파악하기 위한 도구로서 HTP를 개발했다고 해요.
                    <br><br>
                    HTP 검사는 주로 비언어적인 수단인 집과 사람 나무 그림을 통해 정서, 성격, 인지 능력 등을 평가하기 위해 사용돼요. 
                    집, 나무, 그리고 사람을 그림으로 나타내는 과정에서 나타나는 요소들로부터 심리학적인 상태와 특성에 대한 통찰을 얻을 수 있도록 설계되었어요.
                    <br><br>
                    저희 HTP 검사 웹사이트에서는 병원에 가지 않고, 돈을 지불하지 않고 심리 상태를 쉽게 테스트할 수 있어요. 또한 자칫 주관적일 수 있는 심리 검사를
                    AI를 활용해 보다 객관적으로 검사해요.
                    <br><br>
                    검사를 통해 인식하지 못했던 내면의 욕구, 감정, 생각, 환경 또는 자신에 대한 경험과 지각을 알아보러 가볼까요?
                    <br><br>
                    지금, 시작해 보세요!
                </div>
            </div>
        </div>
        <!---->
    </div>
</body>
</template>

<script>
import { VueElement } from 'vue';

    export default {
        data() {
            return {
                isLogin: false,
            }
        },
        methods: {
            logout() {
                localStorage.removeItem("token");
                window.location.replace("http://localhost:8080/login");
            },
            mypage() {
                window.location.replace("http://localhost:8080/mypage");
            },
            register() {
                window.location.replace("http://localhost:8080/register");
            },
            isLogin_m() {
                const savedtoken =localStorage.getItem("token");
                if (savedtoken == null) {
                    this.isLogin = false;
                }
                else {
                    this.isLogin = true;
                }
            },
            test() {
                const savedtoken = localStorage.getItem("token");
                if (savedtoken == null) {
                    if (confirm("로그인이 필요한 서비스입니다. 페이지를 이동하시겠습니까?")) {
                        // 확인을 눌렀을 때, 페이지를 이동하고자 하는 URL로 수정합니다.
                        window.location.replace('http://localhost:8080/login') // 원하는 URL로 수정
                    } else {
                        // 사용자가 취소를 눌렀을 때 추가적인 처리를 할 수 있습니다.
                    }
                }
                else {
                    window.location.replace("http://localhost:8080/teststart");
                }
            }
        },
        created() {
            this.isLogin_m();
        },
    }

</script>


<style>

template {
    font-family: 'Inconsolata', monospace;
    font-family: 'Gowun Dodum', sans-serif;
    list-style: none;
    text-decoration: none;
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    color: rgb(252, 252, 252);
}

h1 {
    font-size: 48px;
    font-family: 'Gowun Dodum', sans-serif;
}

.home {
    
    background-image:url("../images/main_img3.jpg");
    width:100%;
    height:900px;
    background-image:no-repeat;
    background-size: cover;

}


.nav_header {
    display:flex;
    width: 1280px;
    margin:auto;
    background:rgba(255, 255, 255, 0.068);
    height: 60px;
    justify-content: flex-end;
}

.nav {
    display:flex;
}

ul {
    list-style: none;
}

.nav > li{
    margin-top: 5%;
    font-size: x-large;
    font-family: 'Gowun Dodum', sans-serif;
    margin-left: 20px;
    margin-right: 20px;
}

.nav > li:hover {
    color: #F6B590;
}

.home_t {
    width:65%;
    margin:231px auto 231px auto;
    background-color: rgba(255, 255, 255, 0);
    align-self: center;
    text-align: center;
    font-family: 'Gowun Dodum', sans-serif;
}

.home_t > h1, 
.home_t > h3 {
    font-family: 'Gowun Dodum', sans-serif;
    list-style: none;
    text-decoration: none;
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    
}

.point {
    font-family: 'Gowun Dodum', sans-serif;
    list-style: none;
    text-decoration: none;
    border-collapse: collapse;
    margin: 0px;
    padding: 0px;
    color: #F6B590;
}

.contents1 {
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 24px;
    color:rgb(255, 255, 255);
}

.contents2 {
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 30px;
    color: black;
}

.contents3 {
    font-family: 'Gowun Dodum', sans-serif;
    font-size: 24px;
    color: #F6B590;
}



.info {
    position: relative;
    top: -90px;
    width: 1280px;
    display: flex;
    background-color: rgb(247, 247, 247);
    margin: auto;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.178);
    opacity: 95%;
    
    
}
.info > li {
    flex : 1;
    height: 190px;
}

.info>li>.list {
    text-align: center;
    margin-top: 50px;
    height: 100px;
}

.info > li:not(:last-child) >.list{
    border-right: 1px solid rgb(168, 168, 168);
}

/*메인 영역*/
.main1 {
    width: 100%;
    height: 500px;
    margin-top: -190px;
    background-color: #f1f2f3;
}

.main1 > h1 {
    padding-top:180px;
    text-align: center;
    color:#F6B590;
    font-family: 'Gowun Dodum', sans-serif;
}

.main1 > h4 {
    text-align: center;
    font-size: 20px;
    color:rgba(98, 97, 99, 0.966);
    margin-bottom: 50px;
    font-family: 'Gowun Dodum', sans-serif;
}

.main2 > h1 {
    padding-top:180px;
    text-align: center;
    color: #F6B590;
    font-family: 'Gowun Dodum', sans-serif;
}

.main2 > h4 {
    text-align: center;
    font-size: 20px;
    color:rgba(98, 97, 99, 0.966);
    margin-bottom: 50px;
    font-family: 'Gowun Dodum', sans-serif;
}

.post {
    margin: auto;
    display: flex;
    width: 1280px;
    height: 302px;

    
}

.post > li {
    flex:1;
    height: 302px;
    background-color: white;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.178);
}

.post>li:not(:last-child) {
    margin-right:20px;
}

.post > .post_daily > a > h1 {
    margin-top:20px;
    font-size:80px;
    text-align: center;
    color: rgb(44, 43, 43);
    text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.178);
    font-family: 'Gowun Dodum', sans-serif;
}
.post > .post_study > a > h1 {
    margin-top:20px;
    font-size:80px;
    text-align: center;
    color:rgb(44, 43, 43);
    text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.178);
    font-family: 'Gowun Dodum', sans-serif;
}
.post > .post_activity > a > h1 {
    margin-top:20px;
    font-size:80px;
    text-align: center;
    color:rgb(44, 43, 43);
    text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.178);
    font-family: 'Gowun Dodum', sans-serif;
}

.detail {
    width: 100px;
    height: 30px;
    margin:auto;
    text-align: center;
    color: black;
    background-color: rgb(170, 120, 211);
    font-family: 'Gowun Dodum', sans-serif;
}
h5 {
    color:rgb(51, 50, 50);
    font-size: 30px;
    text-align: center;
    font-family: 'Gowun Dodum', sans-serif;
}

.main2 {
    width: 100%;
    height: 1100px;
}

.main2 > .main2_block {
    width: 1280px;
    display: flex;
    margin: auto;
    height: 640px;
}
.main2 > .main2_block > .main2_text {
    font-size:20px;
    margin-left : 5px;
    color:black;
    font-family: 'Gowun Dodum', sans-serif;
}

.btn2 {
    margin: auto;
    width: 1280px;
    height: 302px;
    /* position: absolute; */
    width: 429px;
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
    font-family: 'Gowun Dodum', sans-serif;
}

.btn2:hover {
    color:white;
    background-color: blue;
}

</style>

