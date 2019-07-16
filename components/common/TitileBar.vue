<template>
    <div class="page-head">
        <div>
          <span>{{leftTitle}}</span>   
        </div>
        <div clas="right-head">
            <div class="searchdiv" @click="search">
                <img src="rightFirstImg" style="width:25px;">
            </div>
            <div class="searchdiv" style="margin-left: 40px" @click="add">
                <img src="rightSecondImg" style="width: 25px; margin-right:15px">
            </div>
        </div>
    </div>
</template>
<script>
 export default{
     name:"TitleBar",
     props:{
        //三级联动
        leftTitle:{default:""},
        // 图片
        rightFirstImg:{default:""},
        rightSecondImg:{default:""},
        // 函数
        search:{type:Function},
        add:{type:Function}
     },
     data () {
         return {
            
         }
     }
 }
</script>
<style>
 .page-head{
     display: flex;
     position: fixed;
     z-index: 999;
     width: 100%;
     justify-content:space-between;
     align-items: center;
     background-color: #008fff;
     padding-left: 7px;
     padding-right: 7px;
     height: 48px;
     color: black;
     font-size: 18px;
 }
 .right-head{
     display: flex;
 }
 .searchdiv{
     display: flex;
     align-items: center;
     height: 0px;
 }
</style>