<template>
    <div class="page">
        <div class="change">
            <!-- 라우터 경로 변경 필요 -->
            <br>
            <router-link to="/login">로그인</router-link>
            &nbsp; | &nbsp;
            <router-link to="/register"> 회원가입 &nbsp;&nbsp;&nbsp;</router-link>
        </div>
        <header>
            <img src="../assets/orangeLogo.png" style="width:250px; height:200px;">
        </header>
        <h4>
            집/나무/사람 그림으로 알아보는 심리 검사
            <br>
            <br>
        </h4>
        <br>
        <div class="mainpage">
            <div class="explain">
                <p>
                    검사를 시작하기 전에<br/>
                    HTP 검사가 뭔지 간단하게 설명드릴게요
                </p>
            </div>
            <p>
                House-Tree-Person 검사, 줄여서 HTS 검사는 집, 나무, 사람<br/>
                그림을 통해 정서적인 면을 파악하는 검사에요!
            </p>
            <p>
                검사를 통해 자신도 인식하지 못했던 <b>내면의 욕구, 감정, 생각,</b><br/>
                <b>환경 또는 자신에 대한 경험과 지각</b>을 알 수 있어요.
            </p>
            <p>3장의 종이와 펜을 준비해 주세요!<br/>
                그럼 검사를 시작하러 가볼까요?<br/>
                .<br/>.<br/>.
            </p>
            <div>
                <!-- @click 바꿔야함 -->
                <button type="button" class="btn btn-primary" @click="showAlert()">HTP 검사 시작하기</button>
                <!-- <button type="button" class="btn btn-primary" @click="showPopup">HTP 검사 시작하기</button>
                <Modal></Modal> -->
                <!-- <button type="button" class="btn btn-primary" @click="props">HTP 검사 시작하기</button> -->
                <!-- <Modal :visible="false" variant="success" msg="HTP 검사 시작하기" title="로그인이 필요한 서비스 입니다" msg2="로그인하러 가기"></Modal> -->
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
    name: 'MainBeforeLoginView',
    components: {
      Modal
    },
    // props: {
    //     title: String,
    //     msg2: String,
    //     msg: String,
    //     visible: Boolean,
    // },
    methods: {
        showAlert() {
            if (confirm("로그인이 필요한 서비스입니다. 페이지를 이동하시겠습니까?")) {
                // 확인을 눌렀을 때, 페이지를 이동하고자 하는 URL로 수정합니다.
                window.location.replace('http://localhost:8080/login') // 원하는 URL로 수정
            } else {
                // 사용자가 취소를 눌렀을 때 추가적인 처리를 할 수 있습니다.
            }
        },
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
    h4 {
        background-color: #F6B590;
        /* height: 200px;
        font-size: 36px; */
        text-align: senter;
        /* color: black; */
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: center; /*수평 가운데 정렬*/
    }
    .page header i {
        margin-right: 20px;
    }
    .mainpage {
        /* text-align: center;
        height: calc(100vh - 132px); */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .explain {
        font-size: 22px;
        font-weight: 800;
    }
    .change {
        background-color: #F6B590;
        text-align:right;
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
    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 12px;
    }
</style>