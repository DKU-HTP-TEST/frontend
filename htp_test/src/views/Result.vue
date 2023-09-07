<template>
    <UpperSide msg = 'HTP 검사 결과'/>
    <div class="container">
        <div class="colum">
            <TestResult msg = 'HOUSE 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
        <div class="colum">
            <TestResult msg = 'TREE 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
        <div class="colum">
            <TestResult msg = 'HUMAN 검사 결과' msg2 = 'asdfasdfasdf'/>
        </div>
    </div>
    <!-- <div class = "btn">
        <Button msg="처음으로" @click="Buttonclick"></Button>
    </div> -->

</template>
<script>
import UpperSide from '../components/UpperSide.vue';
import TestResult from '@/components/TestResult.vue';
import Button from '../components/Button.vue';

export default {
    name: 'Result',
    components: {
      UpperSide,
      TestResult,
      Button
    }
  }
</script>

<style>
 /* 화면을 세로로 3등분*/
 .container {
      display: flex;
      height: 100vh; 
    }

    .column {
      flex: 1; /* 동일한 너비 분할 */
      padding: 20px; /* 열 사이 간격 조절 */
      border: 1px solid #ccc; 
    }

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

</style>