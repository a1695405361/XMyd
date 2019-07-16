<template>
    <div>
        <van-swipe :autoplay="3000" style="height: 200px;margin-top: 5px">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <div class="navlistt">
            <a href="">
                <img class="imgs" src="../../img/ms.png">
                美食
            </a>
            <a href="">
                <img class="imgs" src="../../img/xwc.png">
                下午茶
            </a>
            <a href="">
                <img class="imgs" src="../../img/pz.png">
                汉堡
            </a>
            <a href="">
                <img class="imgs" src="../../img/xc.png">
                小吃馆
            </a>
            <a href="">
                <img class="imgs" src="../../img/jc.png">
                家常菜
            </a>
        </div>
    </div>
</template>
<script>
  export default{
    name:"Navlist",
    data(){
    return{
        images: [
        'http://127.0.0.1:3000/img/lb1.png',
        'http://127.0.0.1:3000/img/lb2.png',
        'http://127.0.0.1:3000/img/lb3.png',
        'http://127.0.0.1:3000/img/lb4.png'
      ]
    }
    }
  }  
</script>
<style>
  .navlistt{
      display: flex;
      flex-wrap: wrap;
      justify-content:space-around;
      margin-top: 20px;
  }
  .navlistt a{
    display: block;
    /* margin-left: 31px; */
    width: 44px;
    height: 78px;
    font-size: 11px;
    text-align: center;
  }
  .imgs{
      height: 44px;
      width: 44px;
  }
  img{
      width: 100%;
      height:100%;
  }
  
</style>