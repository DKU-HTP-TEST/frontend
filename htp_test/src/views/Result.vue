<template>
    <UpperSide msg = 'HTP 검사 결과'/>
    <div class="block">
      <div class="container1">
        <div class="row">
            <TestResult msg = 'HOUSE 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
        <div class="row">
            <TestResult msg = 'TREE 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
        <div class="row">
            <TestResult msg = 'HUMAN 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
      </div>

      <div class="button">
        <button class="go_to_h">처음으로</button>
        <button class="go_to_mp" @click="go_mp">마이페이지</button>
        <button class="share">공유</button>
      </div>
    </div>
    

</template>
<script>
import UpperSide from '../components/UpperSide.vue';
import TestResult from '../components/TestResult.vue';
import Button from '../components/Button.vue';

export default {
    name: 'Result',
    components: {
      UpperSide,
      TestResult,
      Button
    },
    methods: {
      go_mp: function() {
        this.$router.push({
                name: "mypage",
                // query: {order: 1}
            })
        }
    },
  }
</script>

<style>

    .block {
      display: block;
    }

    /* 화면을 세로로 3등분*/
    .container1 {
      /* border: 1px solid red; */
      display: flex;  
      overflow-x: hidden;  /* 수평 스크롤 비활성화 */

      padding-left: 40px;
      padding-right: 40px;
      margin-top: 10px;
    }

    .row { 
      flex: 1;
      padding: 20px; 
      /* border: 1px solid blue;  */
      justify-content: center; 
    }

    .button {
      margin-top: 20px;
    }
    .go_to_h, .go_to_mp {
      width: 300px;
      height: 40px;
    }
    .go_to_mp, .share {
      margin-left: 20px;
    }
    .go_to_h, .go_to_mp, .share{
      background-color: #F6B590;
      border-radius: 8px;
      text-align: center;
      font-size: 15px;
      font-weight: 550;
     
    }

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
    }

</style>