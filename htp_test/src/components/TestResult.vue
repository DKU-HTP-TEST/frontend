<template>
    <div class = "test_name">
        <h2>{{ msg }}</h2>
    </div>
    <div class = 'test_result'>
        <div class = 'content'>
            <p>{{ msg2 }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestResult',
        props: {
            msg : String,
            msg2: String
        }
    }
</script>

<style scoped>
    
    .test_result {
      width: 420px; 
      height: 520px; 
      /* border: 1px solid #F6B590;  */
      overflow-y: scroll;  /*위 아래로만 스크롤 가능하도록 설정*/
      overflow-x: hidden;  /* 수평 스크롤 비활성화 */
      background-color: rgba(246, 181, 144, 0.1);
      border-radius: 1%;
      margin-right: 60px;
      margin-left: 130px;

    }
    
    /* 스크롤 박스 내부의 콘텐츠를 스타일링할 수도 있습니다. */
    .content {
      padding: 10px; /* 콘텐츠 패딩을 추가합니다. */

    }
    .test_name{
        margin-top: 30px;
    }
    .test_name > h2{
        
        text-align: center;
        margin-right: 60px;
        margin-left: 120px;
    }
</style>
