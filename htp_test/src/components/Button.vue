<template>
    <div>
        <button type="button" class="btn btn-primary" @click="Buttonclick">{{ msg }}</button>
    </div>
</template>
  
<script>
    export default {
        name: 'Button',
        props: {
            msg: String
        }
    }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        margin-top: -18px;
        /* position: absolute; */
        width: 350px;
        height: 50px;
        /* left: 31px;
        top: 416px; */
        background-color: #F6B590;
        border-radius: 8px;
        /* border: none; */

        
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 15px;

        /* position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);  페이지 중앙에 위치 */
    }

</style>
  