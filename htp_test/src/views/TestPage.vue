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
            <img v-if="imageUrl" :src="imageUrl" style="width:100%; height:100%;" id="uploaded-image">
            <img v-else src="@/assets/camera-icon.png" id="camera">
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

  let url = "http://127.0.0.1:8000/htp_test/"

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
        ],

        imageUrl: null 
      }
    },
    methods: {
      next: function () {

        if (!this.imageUrl) {
          window.alert('이미지를 업로드해주세요');  //이미지 업로드가 안되면 모달 띄우기
        } else {
          this.imageUrl = null;  // 업로드한 이미지 초기화

          /* 그림 보내서 결과 가져오기 */
          switch(this.order) {
            case 1:
              let house_url = url + "analyze_img_house/"
              var house_img
              axios.post(house_url, new URLSearchParams(house_img))
              .then((response) => {
                
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
              break
            case 2:
              let tree_url = url + "analyze_img_tree/"
              var tree_img
              axios.post(tree_url, new URLSearchParams(tree_img))
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            case 3:
              let person_url = url + "analyze_img_person/"
              var person_img
              axios.post(person_url, new URLSearchParams(person_img))
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
          }

          if (this.order == 3) {
            this.$router.push({
              name: "Complete"
            });
          } else {
            this.order = Number(this.order) + 1;
            this.$router.push({
              name: "TestPage",
              query: { order: this.order }
            });
          }
        }
      },

      uploadImage: function(event) {

        const formData = new FormData();  //객체 생성
        formData.append('image', event.target.files[0]);  // image로 파일 첨부

        const url = this.determineURL(); // 업로드할 URL 결정

        axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.imageUrl = URL.createObjectURL(event.target.files[0]);
        })
        .catch(error => {
          alert('error');
        });
      },
    
      determineURL() {  //업로드할 URL 결정
        if (this.order === 2) {
          return 'http://127.0.0.1:8000/htp_test/analyze_img_tree/';
        } else if (this.order === 3) {
          return 'http://127.0.0.1:8000/htp_test/analyze_img_person/';
        } 
        else{
          return 'http://127.0.0.1:8000/htp_test/analyze_img_house/'
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
        border: 1px solid gainsboro;
    }

    #camera { 
        margin-top: 25%;
        width: 35px;
        height: 35px;
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
  