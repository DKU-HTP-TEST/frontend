<template>
    <div class="main">
        <div class="title">
            <div class="edit_img">
                <h1>심리검사 결과</h1>
                <img class="edit" src="@/assets/edit.png" alt="Edit Image" @click="showDeleteButton">
            </div>
            <hr>
        </div>

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
            datelist: [{"date":"2020-02-02"},{"date":"2021-01-01" }, {"date":"2022-01-01" }, {"date":"2023-01-01" }], // 새로운 데이터를 저장할 배열
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
    .main {
        display: block;
        margin-top: 60px;
        margin-left: 700px;
    }
    .edit_img{
        display: block; 
    }

    .title {
        display: block;
        margin-left: 10px;
    }
    
    .edit_img > h1 {
        display: flex; 
        float: left; 
        text-align: left;
        
    }
    .edit_img > img{
        display: flex;
        float: right;
        width: 30px;
        height: 30px;
        margin-top: 33px;
        margin-right: 30px;
    }
    .title > hr {
        width: 1080px;
        color: black;
        margin-left: -10px;
        margin-top: 5px;
        border: none; 
        border-top: 1px solid black; 
    }

    .container {
        display: flex; 
        margin-top: 55px;
    }
    .menu {
        display: inline-block;
        margin-left: 25px; 
        width: 460px;
        height: 700px;
    }
    .results {
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