<template>
    <div>
      <!-- 小图片 -->
        <navlist></navlist>
        <!-- 下面内容 -->
      <h2>----附近商家----</h2>
      <!-- 商家导航 -->
      <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <!-- 店家 -->
      <div class="navlist" 
       v-for="(item,index) of list" 
       :key="index">
          <!-- 上 -->
          <div class="navlist-top">
              <!-- 左 -->
              <div class="navlist-top-l">
                <img :src="item.img">
                <!-- <img src="../../img/s1.png"> -->
              </div>
              <!-- 右 -->
              <div class="navlist-top-r">
                <span style="margin-right: 50px">{{item.pname}}</span>
                <span>评分{{item.pscore}}|月销{{item.psell}}</span>
              </div>
          </div>
          <!-- 下 -->
          <div class="navlist-bottom">
              <!-- 左 -->
            <div class="navlist-bottom-l">
                <img :src="item.imgs">
                <!-- <img src="../../img/x1.png"> -->
            </div>
            <!-- 右 -->
            <div class="navlist-bottom">
                <div>
                    <h4 style="margin-bottom: 35px;">{{item.pnames}}</h4>
                    <p style="color:#b91f20;font-size:20px;padding-bottom: 10px;">
                     {{item.price}}
                     <del style="color: black;font-size:15px">{{item.prices}}</del>
                    </p>
                    <van-button round type="primary">加入订单</van-button>
                </div>
            </div>
          </div>
      </div>
      <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
  import Navlist from "./Navlist.vue"
 export default{
    name:"detail",
    data () {
        return {
            list:[],    //保存服务器数据
            pno:0,      //页码
            pageSize:5, //页大小
    //vat组件 
      value: 5,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合排序', value: 0 },
        { text: '销量最高', value: 1 },
        { text: '评分最高', value: 2 }
      ],
      option2: [
        { text: '距离最近', value: 'a' },
        { text: '速度最快', value: 'b' },
        { text: '销量排序', value: 'c' },
        ]}
    },
    
    methods:{
        loadMore(){
            // 1：获取当前页码加1
            this.pno++;
            // 2：创建url请求地址
            var url="detail";
            // 3：创建参数对象
            var obj={pno:this.pno,pageSize:this.pageSize};
            // 4：发送ajsx请求
            this.axios.get(url,{params:obj})
            .then(result=>{
                //  console.log(result.data.data.prices);
                // this.list=result.data.data;
                var rows= this.list.concat(result.data.data);
                this.list=rows;
            })
            // 5：接收服务器返回数据
            // 6：保存到list
            }
        },
        created(){
        this.loadMore();    
        },
        components: {
          "navlist":Navlist
        }
 }
</script>
<style>
  h2{
      text-align: center;
      font-size: 20px;
  }
  .navlist{
      padding: 12px
  }
  .navlist-top{
      display: flex;
      padding-top: 12px;
      padding-bottom: 10px;
      font-size: 4vw;
      line-height: 1.3;
      color: #666;
  }
  .navlist-top-l img{
      width: 38px;
      height: 38px;
    padding-right: 10px;
  }
  .navlist-bottom{
      display: flex;
      margin-right: 10px;
  }
  .navlist-bottom-l img{
      width: 107px;
      height: 107px;
      margin-right: 10px;
  }
</style>