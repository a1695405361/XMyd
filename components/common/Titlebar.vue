<template>
    <div class="page-head">
     <span>选择/地区</span>
     <van-search style="padding: 0;margin-right:50px;"
    placeholder="请输入搜索关键词" 
    v-model="value" 
    background="#008fff"/> 
    </div>
</template>
 <script>
export default{
    data () {
        return {
          value:""  
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
     /* justify-content:space-between; */
     align-items: center;
     background-color: #008fff;
     padding-left: 7px;
     padding-right: 7px;
     height: 55px;
     color: black;
     font-size: 18px;
 }
 </style>