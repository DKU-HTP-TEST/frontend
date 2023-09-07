<template>
    <div class="main">
        <h2>{{ this.order }}</h2>
        <img v-bind:src="image[order-1].img" style="width:30px; height:30px;">
    </div>
    
    
    <div class="circle-box"> <!--절차 원-->
      <div class="circle" style="margin-left: 70px;">집</div>
      <hr/>
      <div class="circle" id="c2">나무</div>
      <hr/>
      <div class="circle" id="c3">사람</div> 
    </div>

    <h3>{{image[order-1].name}} 그려주세요</h3>
    <label for="upload-file">
      <div class="upload-box">
      <img src="@/assets/camera-icon.png" id="camera">
      <input type="file" name="picture" id="upload-file" style="visibility: hidden;">
    </div>
    </label>
    <p style="color:red"><b>사진을 정방향으로 업로드해주세요.</b></p>

    <Button msg="다음" @click="next"/>
</template>
  
  <script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  import { useRoute } from 'vue-router';


  const route = useRoute;
  
  export default {
    name: 'TestPage',
    components: {
        UpperSide,
        Button
    },
    data() {
      return {
        order: this.$route.query.order,
        image: [
          {
            name: '집을',
            img: require("../assets/home-icon.png")
          },
          {
            name: "나무를",
            img: require("../assets/tree-icon.png")
          },
          {
            name: "사람을",
            img: require("../assets/man-icon.png")
          }
        ]
      }
    },
    methods: {
      next: function () {
        if (this.order == 3) {
          this.$router.push({
            name: "Complete"
          })
        }
        else {
          this.order = Number(this.order) + 1;
          this.$router.push({
                name: "TestPage",
                query: {order: this.order}
          });
        }
      }
    }
  }
  </script>
  
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
    .main > img {
      display: table-cell;
      vertical-align: middle;
    }

   body {
      margin: 0px;
      padding: 0px;
    }
    .circle-box {
      display: table;
      padding: 30px;
      padding-left:480px;
    }
    .upload-box {
      width: 300px;
      height: 200px;
      margin-left: 42%;
      background-color: gainsboro;
    }
    #camera { 
      margin-top: 25%;
      width: 35px;
      height: 35px;
      margin-left: 13px;
    }
    hr {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 40px;
      border: none;
      border-top: 3px dotted gainsboro;
      color: white;
      background-color: white;
      height: 1px;
      width: 300px;
    }
    .circle {
      display: table-cell;
     
      vertical-align: center;
      width:90px;
      height:90px;
      background-color: gainsboro;
      border-radius: 50%;
    }
    .circle #c1 {
      background-color: gray;
    }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  