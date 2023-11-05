<template>
  <UpperSide msg="회원가입"/>
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
      <div class="content">
          <div class="all_content">
              <div class="content_1">
                  <!-- <h2>이용 약관 동의</h2> -->
                  아래의 약관을 읽으신 후 동의하신다면 체크박스를 클릭하여 주십시오.<br/>
                  필수 사항은 모두 동의해야 다음 페이지로 이동하실 수 있습니다.
              </div>
              <div class="scheme-g">
                  <h5> 이용약관 동의(필수)</h5>
                  <textarea style="font-size:1em;">
여러분을 환영합니다.
Sketch Mind 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 Sketch Mind 서비스의 이용과 관련하여 Sketch Mind 서비스를 제공하는 Sketch Mind와 이를 이용하는 Sketch Mind 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 Sketch Mind 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                  </textarea>
                  <br/>
                  <input type="checkbox" id="check_1" v-model="c1" name="" /> 위의 약관에 동의 합니다.<br/>
              </div>
              <div class="scheme-g">
                  <h5> 개인정보 수집 및 이용에 대한 안내(필수)</h5>
                  <textarea style="font-size:1em;">
Sketch Mind 서비스 및 제품(이하 '서비스')는 「개인정보보호법」 제15조 제1항 제1호, 제17조 제1항 제1호, 제23조 제1호 따라 아래와 같이 개인정보의 수집. 이용에 관하여 귀하의 동의를 얻고자 합니다.
Sketch Mind는 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다. 이용자가 제공한 모든 정보는 아래의 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 이를 알리고 동의를 구할 것입니다.
      개인정보의 수집 및 이용 동의
      1. 개인정보의 수집 및 이용 목적
      가. 회원 관리
      나. 전문가 등의 관리
      다. 기술보호지원 서비스 제공
      라. 홍보 등의 활용

      2. 수집하는 개인정보의 항목
      가. 일반회원 가입
      - 성명, 이메일, 아이디, 비밀번호
      나. 자동 수집
      - IP주소, 쿠키, 서비스 이용 기록, 방문기록 등

      3. 개인정보 보유 및 이용기간
      Sketch Mind는 원칙적으로 보유기간의 경과, 개인정보의 수집
      및 이용목적의 달성 등 그 개인정보가 불필요하게 되었을 때에는 
      지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야 하는
      경우에는 그러하지 않을 수 있습니다. 불필요하게 되었을 때에는
      지체 없이 해당 개인정보를 파기합니다.
                      
      4. 동의 거부 및 불이익
      정보주체는 개인정보 수집에 동의를 거부할 권리가 있습니다.
      다만, 필수 항목에 대한 동의를 거부할 시 저희가 제공하는 서비
      스를 이용할 수 없습니다.
                  </textarea>
                  <br/>
                  <input type="checkbox" id="check_2" v-model="c2" name="" /> 위의 약관에 동의 합니다.<br />
              </div>
              <div class="scheme-g">
                  <h5>개인정보 제3자 제공 동의(필수)</h5>
                  <textarea style="font-size:1em;">
다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
      1. 개인정보를 제공받는자 : ooo 전문가
      2. 제공 받은 자의 개인정보 이용 목적 : 심리검사 분석
      3. 제공하는 개인정보 항목 : 그림
      4. 제공받는 자의 보유 및 이용기간 : 회원 탈퇴시
      개인정보 제공자가 동의한 내용외의 다른 목적으로 이용하지 않
      으며, 정보주체는 개인정보처리자에게 열람, 정정, 삭제를 요구
      할 수 있습니다.
      *만 14세 미만 아동인 경우 반드시 법정대리인의 동의 필요
「개인정보보호법 제15조(개인정보의 수집․이용), 제17조(개인정보의 제공), 제18조(개인정보의 이용․제공 제한), 제22조(동의를 받는 방법)」에 의거 개인정보처리에 관하여 고지를 받았으며 본인은 위와 같이 개인정보 수집 및 이용․제공에 동의합니다.
                  </textarea>
                  <br/>
                  <input type="checkbox" id="check_3" v-model="c3" name="" /> 위의 약관에 동의 합니다.<br />
              </div>
              <p>
                  <input type="checkbox" id="check_all" v-model="all" name="checkAll" />모두 동의<br />
              </p>
          </div>
      </div>
  <Button msg="다음" @click="Buttonclick"/>
</template>

<script>
import UpperSide from '../components/UpperSide.vue';
import Button from "../components/Button.vue";


export default {
  name: 'Register',
  components: {
    UpperSide,
    Button
  },
  data: () => {
    return {
      c1: false,
      c2: false,
      c3: false,
      // all: false,
    }
  },
  computed: {
    all: {
      get: function () {
        return this.c1 && this.c2 && this.c3;
      },
      set: function (e) {
        if (e == true) {
          this.c1 = true
          this.c2 = true
          this.c3 = true
        } else {
          this.c1 = false
          this.c2 = false
          this.c3 = false
        }
      }
    }
  },
  methods: {
    Buttonclick() {
      if (this.c1 == true & this.c2 == true & this.c3 ==true) {
        window.location.replace("http://localhost:8080/register2")
      }
      else {
        alert("약관에 모두 동의해주세요.")
      }
    }
  }
}
</script>

<style scoped>
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
  .content {
      /* text-align: center;
      height: calc(100vh - 132px); */
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .all_content {
      margin-bottom: 10px;
  }
  .content_1 {
      text-align: center;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
      margin-bottom: 8px;
  }
  .content_1 h3{
      margin: 0;
  }
  .scheme-g{
      /* display: flex; */
      text-align: left;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
      margin-bottom: 8px;
  }
  .content h5 {
      margin: 0;
  }
  .content p {
      /* display: flex; */
      text-align: left;
      flex-direction: column;
      align-items: flex-start;
  }
  .content textarea {
      resize: none;
      width: 100%;
      height: 6.25em;

  }
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
  }
</style>