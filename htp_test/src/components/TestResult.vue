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
    /* 스크롤 박스의 스타일을 정의합니다. */
    .test_result {
      width: 420px; /* 가로 너비를 조절합니다. */
      height: 520px; /* 세로 높이를 조절합니다. */
      border: 1px solid #ccc; /* 테두리 스타일을 설정합니다. */
      overflow-y: scroll; /* 위 아래로만 스크롤 가능하도록 설정합니다. */
      overflow-x: hidden; /* 수평 스크롤 비활성화 */
      background-color: #f2f2f2; /* 회색 배경 색상을 설정합니다. */
      margin-right: 60px;
      margin-left: 120px;

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
