<template>
<div class="cart">
  <!-- 全选按钮 -->
  <div class="selectAll" @change="selectAll">
    全选
    <input type="checkbox">
  </div>
  <!-- 订单信息 -->
  <div class="cart-item" v-for="(item,index) of list"
  :key="index">
    <div class="leftImgTxt">
      <input type="checkbox" v-model="item.cb">
      <img :src="'http://127.0.0.1:3000/'+item.img" class="img">
      <div class="rightImg">
        <span style="margin-right: 35px">{{item.pname}}</span>
        <span>{{item.price}}</span>
      </div>
    </div>
    <mt-button @click="delItem" :data-id="item.id">删除</mt-button>
  </div>
  <!-- 删除选中的订单 -->
  <div class="delAll">
    <mt-button @click="delAll">
      清空订单 
    </mt-button>
     <mt-button @click="delSelected">
      删除选中订单
    </mt-button>
  </div>
</div>
</template>
<script>
export default{
    data(){
    return{
      list:[]
    }
    },
    created () {
      this.loadMore();
    },
    methods: {
      delSelected(){
        // console.log(123);
        this.$messagebox({
          title:"消息",
          message:"是否删除",
          showConfirmButton:true,
          showCancelButton:true
        }).then(result=>{
          if("cancel"==result){
            return;
          }else{
            //功能：删除选中商品
            // 判断：cd==true 获取id
            // 拼接字符串 "1,2,3"
            console.log(this.list);
            // 1：创建变了保存字符串
            var str="";
            // 2：创建循环每个数组中元素
            for(var item of this.list){
              // 3：判断cb==true
              if(item.cb){
              // 4：获取当前id 拼字符串
              str +=item.id+","
              }
            }
            console.log(str);
            // 5：判断
            if(str.length==0){
              this.$messagebox("","请选中要删除的商品");
              return;
            }
            str =str.substring(0,str.length-1);
            // 6：发送ajax delAll
            var url="delAll";
            var obj={ids:str}
            this.axios.get(url,{params:obj})
            .then(result=>{
              this.loadMore();// 7：刷新
            })
          }
        })
      },
      delAll(){
        // 0：确认框
        this.$messagebox({
          title:"消息",
          message:"是否删除",
          showConfirmButton:true,
          showCancelButton:true
        }).then(result=>{
          if("cancel"==result){
            return;
          }else{
            //清空购物车所有商品
        // 1：创建变量保存空字符串
        var str="";
        // 2：创建遍历数组
        for(var item of this.list){
          str +=item.id+","
        }
        if(str.length==0){
          this.$messagebox("","请选中要删除数据");
          return;
        }
        // console.log(str);
        // 3：获取当前元素id拼接字符串
        // 4：结果 "1,2,3"
        str = str.substring(0,str.length-1);
        console.log(str);
        // 5：发送ajax请求获取数据
        // 6:创建url delAll
        var url ="delAll";
        // 7:创建obj
        var obj ={ids:str};
        // 8：发送ajax请求
        this.axios.get(url,{params:obj})
        .then(result=>{
          console.log(result);
          this.loadMore();// 9：刷新
        })
        }
        })
        
      },
      selectAll(e){
        // console.log(123);
        // 1:获取当前按钮状态
        var rs= e.target.checked;
        console.log(rs);
        // 2:获取订单数组列表
        // 3:创建循环
        for (var item of this.list){
          // 4:将当前商品cd状态修改全选状态
          item.cb=rs;
        }
      },
      //删除指定订单商品
      delItem(e){
        // 确认提示框：确认，取消
        this.$messagebox({
          title:"消息",
          message:"是否删除",
          showConfirmButton:true,
          showCancelButton:true
        }).then(result=>{
          // console.log(result);
          //如果用户选中取消,停止执行
          if("cancel"==result){
            return;
          }else{
            // 1：获取当前商品id
        var id= e.target.dataset.id;
        // console.log(id);
        // 2：发送ajax删除商品
        var url ="del";
        var obj ={id : id};
        this.axios.get(url,{params:obj})
        .then(result=>{
          // console.log(result);
          this.loadMore();
        })
        // 3：刷新
          }
        })
         
      },
      //加载购物车数据
      loadMore(){
        // console.log(123);
        // 1：创建rul
        var url="cart";
        // 2：发送ajax请求
        this.axios.get(url)
        .then(result=>{
          // console.log(result);
          // 1:获取数组
          var rows=result.data.data;
          // 2：创建循环数组中元素添加cb属性
          for (var item of rows){
            item.cb=false;
          }
          // 3：将修改后数据复制list
          this.list= rows;
          // this.list=result.data.data;
          // console.log(this.list);
        })
        // 3：获取服务器购物车数据
        // 4：保存
      }
    }
}
</script>
  <style>
    /* 最外层的容器 */
    .cart-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 修改左侧图片文字 */
    .leftImgTxt{
      display: flex;
    }
   .img{
     width: 60px;
     height: 60px;
   }
   .rightImg{
     display: flex;
     align-items: center;
     margin-left: 25px;
   }
  </style> 