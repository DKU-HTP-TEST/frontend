<template>
    <div class="main">
        <h2>STEP {{ this.order }}</h2>
        <img v-bind:src="image[order-1].img" style="width:30px; height:30px;">
    </div>

    <div class="circle-box">
        <div class="circle" id="c1">
            <b>1</b>
            <p>약관 동의</p>
        </div>
        <hr/>
        <div class="circle" id="c2">
            <b>2</b>
            <p>회원정보<br>입력</p>
        </div>
        <hr/>
        <div class="circle" id="c3">
            <b>3</b>
            <p>회원가입<br>완료</p>
        </div>
    </div>

    <h3>{{image[order-1].name}} 그려주세요</h3>
    <label for="upload-file">
        <div class="upload-box">
            <img src="@/assets/camera-icon.png" id="camera">
            <!-- <input type="file" name="picture" id="upload-file" style="visibility: hidden; "> -->
            <input type="file" name="picture" id="upload-file" style="visibility: hidden;" @change="uploadImage" accept="image/*">
        </div>
    </label>
    <br>
    <p style="color:red"><b>사진을 정방향으로 업로드해주세요.</b></p>
    <br>
    <Button msg="다음" @click="next"/>
</template>
  
  <script>
  import UpperSide from '../components/UpperSide.vue';
  import Button from "../components/Button.vue";
  import { useRoute } from 'vue-router';
  import axios from 'axios';

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
      },

      uploadImage: function(event) {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);

        const url = this.determineURL();

        axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
        
        })
        .catch(error => {
        // 에러를 처리하는 로직
        });
      },
  
      determineURL() {
        if (this.order === 2) {
          return 'http://127.0.0.1:8000/analyze_img_tree/';
        } else if (this.order === 3) {
          return 'http://127.0.0.1:8000/analyze_img_person/';
        }
        else{
          return 'http://127.0.0.1:8000/analyze_img_house/'
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

        font-size: 36px;
        text-align: center;
        color: black;
        margin-top: 80px;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: center; /*수평 가운데 정렬*/
    }


    body {
        margin: 0px;
        padding: 0px;
    }
    .circle-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 90px 20px 90px;
    }
    .upload-box {
        width: 300px;
        height: 200px;
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
        vertical-align: middle;
        width: 100px;
        height: 100px;
        background-color: gainsboro;
        border-radius: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .circle #c1 {
        background-color: gray;
        margin: 0;
    }
    .circle #c2,
    .circle #c3{
        background-color: #F3F3F3;
        margin: 0;
    }
    label {
        align-content: center;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
  </style>
  