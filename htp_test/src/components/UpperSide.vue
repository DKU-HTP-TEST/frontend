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
    .main {
        display: table;
        height: 250px;
        width: 100%;
        background-color: #F6B590;
        margin: 0px;
        padding: 0px;
    }
    .main > h2 {
        display: table-cell;
        vertical-align: middle;
        font-size: 35px;
    }
</style>
  