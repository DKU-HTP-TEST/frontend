<template>
    <div class="main">
        <h2>{{ msg }}</h2>
    </div>
</template>
  
<script>
    export default {
        name: 'UpperSide',
        props: {
            msg: String
        }
    }
  
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
    /* .main {
        display: table;
        height: 250px;
        width: 100%;
        /* width: 1870px; */
        /* background-color: #F6B590;
        margin: 0px;
        padding: 0px;
    }
    
    .main > h2 {
        display: table-cell;
        vertical-align: middle;
        font-size: 35px;
    } */
    .main {
        background-color: #F6B590;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2 {
        height: 200px;
        font-size: 36px;
        text-align: senter;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: center; /*수평 가운데 정렬*/
    }
</style>
  