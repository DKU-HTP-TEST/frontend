<template>
    <div>
        <div v-if="OpenClose" class="modal fade show" 
        tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" 
        style="display:block">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">{{title}}</h6>
                    <button type="button" class="btn-close" @click="OpenCloseFun()" aria-label="Close"></button>
                </div>
                <!-- <div class="modal-body">
                    <slot></slot>
                    <p>Modal body text goes here.</p>
                </div> -->
                <div class="modal-footer">
                    <button type="button" @click="OpenCloseFun()" :class="'btn2 btn-'+variant">{{msg2}}</button>
                </div>
            </div>
        </div>
        </div>
        <div class="button-content">
            <button type="button" @click="OpenCloseFun()" :class="'btn1 btn-'+variant">{{msg}}</button>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
    name: 'Modal',
    props: {
        title: String,
        msg2: String,
        msg: String,
        visible: Boolean,
        variant: String,
    },
    data() {
        return {
            OpenClose: this.visible
        }
    },
    methods: {
        OpenCloseFun(){
            this.OpenClose = !this.OpenClose;
        },
    },
    watch: {
        visible: function(newVal, oldVal) { // watch it
            this.OpenClose =newVal;
            console.log('new' +newVal+ '==' +oldVal)
        }
    }
}

</script>

<style scoped>
.h6 {
    text-align: center;
}
.btn1 {
        margin-top: 10px;
        /* position: absolute; */
        width: 349px;
        height: 39px;
        /* left: 31px;
        top: 416px; */
        background-color: #F6B590;
        border-radius: 8px;
        border-color: #F6B590;
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
 }
.button-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.btn2 {
        margin: 0;
        /* position: absolute; */
        width: 349px;
        height: 39px;
        /* left: 31px;
        top: 416px; */
        /* background-color: #F6B590; */
        background-color: rgb(46, 169, 85);
        border: none;
        outline: none;
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
        padding: 0;
        align-items: center;
}
.modal-footer{
    background-color: rgb(46, 169, 85);
    /* width: 100%;
    height: 100%; */
    padding: 0;
}
</style>