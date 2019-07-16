<template>
  <div class="page-tabbar">
    <div class="page-wrap">
   <!-- 头部--顶部标签 -->
    <titlebar></titlebar>
      <!-- 保留标题48px高度 -->
      <div style="height: 48px;"></div>
    <!-- 外卖列表 -->
    <!-- <detail></detail> -->
    <!-- 切换面板 -->
    <mt-tab-container class="page-tabbar-container" v-model="active">
      <mt-tab-container-item id="message">
          <detail></detail>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
          <user></user>
      </mt-tab-container-item>
      <mt-tab-container-item id="cart">
          <cart></cart>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- tabbar组件 -->
    <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbar
          :selectedImage="require('../assets/sy.png')"
          :normalImage="require('../assets/sy1.png')"
          :focused="currentIndex[0].isSelect">
         </tabbar>
         首页  
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="changeState(1)">
            <tabbar
             :selectedImage="require('../assets/dd.png')"
             :normalImage="require('../assets/dd1.png')"
             :focused="currentIndex[0].isSelect">
            </tabbar>
            订单  
         </mt-tab-item>
         <mt-tab-item id="me" @click.native="changeState(2)">
              <tabbar
               :selectedImage="require('../assets/wd.png')"
               :normalImage="require('../assets/wd1.png')"
               :focused="currentIndex[0].isSelect">
              </tabbar>
              我的  
         </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  // 1：引入子组件
  import Titlebar from "./common/Titlebar.vue"
  // import Navlist from "./common/Navlist.vue"
  import Detail from "./common/Detail.vue"
  import Tabbar from "./common/Tabbar.vue"
  import Cart from "./common/Cart.vue"
  import Login1 from "./common/Login1.vue"
  import User from "./common/User.vue"
  // 2：组件子组件
  // 3:在模块中调用子组件
  export default{
  data(){
    return{
      active:"message",
   //创建数组保存图片焦点状态
        currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false}
         ]
            }
        },
        methods: {
          changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
        },
        components: {
          "titlebar":Titlebar,
          // "navlist":Navlist,
          "detail":Detail,
          "tabbar":Tabbar,
          "login1":Login1,
          "cart":Cart,
          "user":User
        }
    }
</script>
<style>
 .page-tabbar{
   overflow: hidden;
 }
 .page-wrap{
   overflow: auto;
   padding-bottom: 60px;
 }
</style>
