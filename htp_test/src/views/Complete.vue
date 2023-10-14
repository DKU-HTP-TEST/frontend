<template>
    <UpperSide msg = 'HTP 검사 완료'/>
    <div class="complete_msg">
        <div class="msg1">
            <h2>검사가 완료되었어요!</h2>
            <h3>이용해 주셔서 감사합니다.</h3>
        </div>
        <div class="grey_box">
            <div class="complete_img">
                <img src="@/assets/research.png" alt="Research Image">
            </div>
            <div class="msg2">
                <h3>수고하셨습니다.</h3>
                <h3>검사를 완료하였습니다.</h3>
                <h3>아래의 결과보기 버튼을 누르시면 바로 결과 확인이 가능합니다.</h3>
            </div>
        </div>
      
    </div>
    <Button msg = '검사 결과 보러가기'  @click="go_to_result"></Button>
</template>

<script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  
  export default {
    name: 'Complete',
    components: {
      UpperSide,
      Button
    },
    methods: {
        go_to_result : function () {
            this.$router.push({
                name: "Result",
                // query: {order: 1}
            })
        }

    }
  }
  </script>

<style>
    /* body {
    margin: 0px;
    padding: 0px;
    } */

    .grey_box {
            margin-top: 40px;
            margin-bottom: 50px;
            width: 550px;
            height: 320px;
            background-color: #D9D9D9;
            border-radius: 8px; /* 박스를 둥글게 만들기 위한 속성 */
            text-align: center; /*텍스트를 가운데 정렬하기 위한 속성 */
            background-color: rgba(217, 217, 217, 0.5);

            display: inline-block;
            vertical-align: middle;

            /*
            position: absolute;
            display: block;
            justify-content: center; /* 가로 가운데 정렬 
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            */
            /* margin-left: 660px;
            margin-right: 660px;        */
    }

    .grey_box img{

        width: 170px;
        height: 170px;
        margin-top: 25px;
        margin-bottom: 15px;
        margin-left: 40px;
        

    }
    .msg2 h3 {
        font-size: 18px;
        line-height: 17px;
        color: black;
        font-weight: normal;
        margin-top: 5px;
    }
    .msg1 h2{
        margin-top: 40px;
        font-size: 30px;
       
    }
    .msg1 h3{
        font-size: 17px;
        font-weight: normal;
        line-height: 1px;
    }
    .complete_msg{
        display: block;
    }

    

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }


</style>