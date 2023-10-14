<template>
    <div class="layout">
        <div class = "test_name">
            <h2>{{ msg }}</h2>
        </div>
        <div class = 'test_result'>
            <div class = 'content'>
                <p>{{ msg2 }}</p>
            </div>
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
    
    .layout{
        width: max-content;
    }
    .test_result {
      width: 420px; 
      height: 500px; 
      /* border: 1px solid #F6B590;  */
      overflow-y: scroll;  /*위 아래로만 스크롤 가능하도록 설정*/
      overflow-x: hidden;  /* 수평 스크롤 비활성화 */
      background-color: rgba(246, 181, 144, 0.1);
      border-radius: 1%;
      margin-top: 15px;

    }
    
    .content {
        padding: 12px; 

    }
    .test_name{
        margin-top: 20px;
        
    }
    .test_name > h2{
        text-align: center; 
       
    }
</style>
