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
                <div class="list">
                    <div class="date">23.07.22(금)<span class="more">&gt;</span>
                        <button class="delete-button" @click="deleteItem(index)" v-if="isDeleteButtonVisible">삭제</button>
                    </div>
                    <hr>
                </div>
                <div class="list">
                    <div class="date">23.07.22(금)<span class="more">&gt;</span>
                    <button class="delete-button" @click="deleteItem(index)" v-if="isDeleteButtonVisible">삭제</button>
                    </div>
                    <hr>
                </div>
                <div class="list" :key="index" v-for="(item, index) in datelist">
                    <div class="date">{{ item.date }}<span class="more">&gt;</span>
                    <button class="delete-button" @click="deleteItem(index)" v-if="isDeleteButtonVisible">삭제</button>
                    </div>
                    <hr>
                </div>
            </div>

            <div class="results">
                <h2>검사 결과</h2>
                <h3>●  집</h3>
                <div class="house">
                    <p class="house_res">{{ house_res }}</p>
                </div>
                <h3>●  나무</h3>
                <div class="tree">
                    <p class="tree_res">{{ tree_res }}</p>
                </div>
                <h3>●  사람</h3>
                <div class="human">
                    <p class="human_res">{{ human_res }}</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'MypageResult',
    props: {
        house_res: String,
        tree_res: String,
        human_res: String
    },

    data() {
        return{
            datelist: [{"date":"2020-02-02  "},{"date":"2021-01-01  " }, {"date":"2022-01-01  " }, {"date":"2023-01-01  " }], // 새로운 데이터를 저장할 배열
            isDeleteButtonVisible: false, // 이미지 클릭 상태
        };
        
    },

    methods: { 
    
        addData() { /// 데이터를 추가하는 메서드 추가
        const currentDate = new Date().toLocaleDateString();
        const newData = { date: 'currentDate' };
        this.datelist.push(newData);
        },

        // 이미지 클릭 시 삭제 버튼 표시&숨김
        showDeleteButton() {
            // const deleteButtons = document.querySelectorAll(".delete-button");
            // deleteButtons.forEach((button) => {
            //     button.style.display = "inline-block";
            // });
            this.isDeleteButtonVisible = !this.isDeleteButtonVisible;
        },

        // 삭제 버튼 클릭 시 아이템 삭제
        deleteItem(index) {
            this.datelist.splice(index, 1); // 해당 아이템을 삭제
        },

  },
      
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
        height: 700px;
        margin-left: 40px; 
        border-radius: 5%;
    }
    .results > h2 {
        text-align: left;
        margin-left: 30px;
        margin-bottom: 0;
        color: #FF0000;
    }
    .results > h3 {
        text-align: left;
        margin-left: 30px;
        margin-bottom: 0;
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
    }

    .more {
        margin-left: 180px;
    }

    .house, .tree, .human{
        display: flex;
        flex-direction: column;
        width: 455px;
        height: 160px;
        text-align: justify;
        margin-left: 30px;
        margin-top: 8px;
    }
    
    .house_res, .tree_res, .human_res {
        margin-top: 0;
    }
</style>