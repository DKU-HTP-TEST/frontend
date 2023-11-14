<template>
    <UpperSide msg = 'HTP 검사 완료'/>
    <div class="loading_msg">
        <div class = "message">
            <h2>검사가 진행중이에요!</h2>
            <h3>잠시만 기다려주세요</h3>
        </div>
        <div class="loading">
            <img src="@\assets\loading.gif" alt="Loading img">
        </div>
        <div class="message2">
            <h3>· · ·  분석 중  · · ·</h3>
        </div>
    </div>
</template>

<script>
import UpperSide from '../components/UpperSide.vue';

export default {
    name: 'Loading',
    components: {
      UpperSide,
    },

    methods: {
        nextPage() {
          setTimeout(() => {
            this.$router.push('/Complete') // 다음으로 이동할 페이지
          }, 4000) // 3초 후에 이동
        },
    },
    mounted() {
        this.nextPage() // 페이지가 로드되면 자동 시작
    },

}
</script>

<style>
    .loading_msg {
        text-align: center; /*텍스트를 가운데 정렬하기 위한 속성 */
    }
    .loading {
        margin-top: 120px;
    }
    .loading img{
        width: 170px;
        height: 170px;
    }
    .message h2{
        margin-top: 40px;
        font-size: 30px;
    }
    .message h3{
        font-size: 17px;
        font-weight: normal;
        /* line-height: 1px; */
        margin-top: 5px;
    }
    .message2 {
        margin-top: 100px;
    }
</style>
