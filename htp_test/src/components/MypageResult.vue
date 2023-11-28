<template>
        <div class="title">
            <h3>심리검사 결과</h3>
            <div class="edit_img" @click="showDeleteButton">
                <img src="../assets/modify-icon.png">
            </div>
        </div>
        <hr>
        <div class="container">
            <div class = "menu">
                <div class="list" :key="index" v-for="(item, index) in datelist">
                    <div class="date" @click="fetchResults(item, idlist[index])">{{ item }}<span class="more">&gt;</span>
                    <button class="delete-button" @click="deleteItem(item, idlist[index])" v-if="isDeleteButtonVisible">X</button>
                    </div>
                    <hr>
                </div>
            </div>

            <div class="results">
            <!-- <div class="results" v-if="selectedDate">     -->
                <h2>검사 결과</h2>
                <h3>🏠  집</h3>
                <div class="house">
                    <p class="house_res">{{ selectedHouseResult }}</p>
                </div>
                <h3>🌳  나무</h3>
                <div class="tree">
                    <p class="tree_res">{{ selectedTreeResult }}</p>
                </div>
                <h3>🙂  사람</h3>
                <div class="human">
                    <p class="human_res">{{ selectedPersonResult }}</p>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
let get_url = "http://127.0.0.1:8000/member/get_user/";
let result_url = "http://127.0.0.1:8000/htp_test/result/";
let delete_url = "http://127.0.0.1:8000/htp_test/del_result/";
let date_url = "http://127.0.0.1:8000/htp_test/get_dates/";

export default {
    name: 'MypageResult',
    props: {
        house_res: String,
        tree_res: String,
        human_res: String
    },

    data() {
        return{
            datelist: [], // 새로운 데이터를 저장할 배열
            idlist: [],
            isDeleteButtonVisible: false, // 이미지 클릭 상태
            
            selectedHouseResult: '',
            selectedTreeResult: '',
            selectedPersonResult: '',

            token:localStorage.getItem('token'),
            user_id: '',
            selectedDate: null,
        };
        
    },

    methods: {
        fetchData(){
            console.log(this.token)
            axios.get(date_url, {
                headers: {
                    Authorization: this.token,
                },
                params: {
                    user_id: this.user_id
                }
            })
            .then((response)=>{
                this.datelist = response.data.dates
                this.idlist = response.data.id
                console.log(this.datelist)
                // this.datelist.push(response.data.created_date);
            })
            .catch((error) => {
                console.log(error.response);
            });
        },

        fetchResults(item, id) {
            axios.get(result_url, {
                headers: {
                    Authorization: this.token,
                },
                params: {
                    user_id: this.user_id,
                    date: item,
                    id: id,
                }
            })
            .then((res) => {
                this.selectedHouseResult = res.data.home;
                this.selectedTreeResult = res.data.tree;
                this.selectedPersonResult = res.data.person;
                
            })
            .catch((error) => {
                console.log(error.response);
            });
            
        },

        // 이미지 클릭 시 삭제 버튼 표시&숨김
        showDeleteButton() {
            this.isDeleteButtonVisible = !this.isDeleteButtonVisible;
        },

        // 삭제 버튼 클릭 시 아이템 삭제
        deleteItem(item, id) {
            axios.delete(delete_url, {
                headers: {
                    Authorization: this.token,
                },
                params: {
                    user_id: this.user_id,
                    del_date: item,
                    del_id: id,
                }
            })
            .then((response)=> {
                alert("삭제되었습니다.");
                this.fetchData();
                this.selectedHouseResult = '';
                this.selectedTreeResult = '';
                this.selectedPersonResult = '';
                this.isDeleteButtonVisible = !this.isDeleteButtonVisible;
            })
            .catch((error) => {
                console.error(error.response);
            });
        },
    },
    mounted() {
        this.fetchData();
    }
}

</script>

<style scoped>
    .title {
        height: 80px;
        width: 100%;
    }
    .title > h3 {
        padding-top: 50px;
        padding-left: 80px;
        font-weight: 70;
        font-size: 25px;
        text-align: left;
        color: black;
        margin: 0;
        display: flex;
        float: left;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: left; /*수평 왼쪽 정렬*/
        
    }
    .edit_img{
        display: flex;
        margin-right: 70px;
        margin-top: 50px;
        float: right;
        justify-content: right;
    }

    .edit_img > img {
        width: 30px;
        height: 30px;
    }

    hr {
        margin-top: 30px;
        margin-left: 70px;
        margin-right: 70px;
    }

    .container {
        display: flex; 
        margin-top: 55px;
    }
    .menu {
        display: inline-block;
        margin-left: 70px; 
        width: 460px;
        height: 700px;
        margin-right: 70px;
    }
    .results {
        justify-content: right;
        background-color: rgba(246, 181, 144, 0.1);
        width: 520px;
        max-height: 720px;
        overflow: hidden; /* 넘치는 부분 숨기기 */
        margin-left: 40px; 
        border-radius: 5%;
        padding: 1rem;
        overflow-y: auto;
        direction: ltr;
        scrollbar-color: #d4aa70 #e4e4e4;
        scrollbar-width: thin;
    }
    .results > h2 {
        text-align: left;
        margin-left: 30px;
        margin-top: 20px;
        color: #FF0000;
        font-size: xx-large;
    }
    .results > h3 {
        text-align: left;
        margin-left: 30px;
        margin-top: 25px;
        font-size: x-large;
    }
    .results::-webkit-scrollbar {
        width: 10px;
    }
    .results::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    .results::-webkit-scrollbar-thumb {
        border-radius: 100px;
        /* background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
        background-image: linear-gradient(180deg, #070707);
        /* box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5); */
    }
    
    .list {
        text-align: left;
        font-size: 25px;
        margin-bottom: 14px;
        margin-left: 10px;
    }
    .delete-button {
        display: inline-block;
        /* display: none; */
        margin-left: 18px;
        background-color: rgba(246, 181, 144, 0.44);
        border: 0.8px solid black;
        color: #FF0000  ;
        border-radius: 3px;
        font-size: small;
        
    }
    .list > hr {
        width: 340px;
        margin-top: 18px;
        border: none; 
        border-top: 1px solid black; 
        margin-left: 0;
    }
    .date{
        margin-left: 8px;
        color: black;
    }

    .more {
        margin-left: 180px;
    }

    .house, .tree, .human{
        display: flex;
        flex-direction: column;
        width: 455px;
        /* height: 160px */
        height: auto;
        text-align: justify;
        margin-left: 30px;
        margin-top: 8px;
        overflow-y: auto; /* 스크롤바가 필요한 경우만 보이도록 설정 */
        max-height: calc(720px - 60px); /* h2와 h3 요소의 높이를 고려하여 스크롤바가 나타날 최대 높이 */
    }
    
    .house_res, .tree_res, .human_res {
        margin-top: 0;
        margin-right: 30px;
    }
</style>