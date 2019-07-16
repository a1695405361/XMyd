<template>
    <div class="B-user">
      <!-- 个人信息 -->
      <div class="mymsg">
        <div class="imgtou"><img src="../../img/tx.png"></div>
        <!-- 未登录 -->
        <div v-if="!uname" class="no-login">
          <router-link to="/Login1">立即登录</router-link>
        </div>
        <!-- 登录后显示用户名 -->
        <div v-else class="login-msg">
          <!--用户名  -->
          <div class="login-msg-item">
            <p> 
              <span class="ell">{{uname}}</span> 
              <span><img src="../../img/tx.png" alt=""></span> 
            </p>
            <p> <span>粉丝 0</span> <span>关注 14</span> </p>
          </div>
          <div class="qiandao">签 到</div>
        </div>
        
      </div>
      <!-- 会员特惠 -->
      <div class="huiyuan"><span>VIP会员</span> VIP限时特惠&gt;</div>
      <!-- 我的服务 -->
      <div class="myserver">
        <h3>我的服务</h3>
        <ul>
          <li>
            <p><i class="fa fa-credit-card-alt" aria-hidden="true"></i></p>
            我的钱包
          </li>
          <li>
            <p><i class="fa fa-shopping-bag" aria-hidden="true"></i></p>
            我的已购
          </li>
          <li>
            <p><i class="fa fa-whatsapp" aria-hidden="true"></i></p>
            我的客服
          </li>
          <li>
            <p><i class="fa fa-gift" aria-hidden="true"></i> </p>
            
          </li>
        </ul>
      </div>
      <div class="logout" @click="logout">退出</div>
    </div>
  </template>
  <script>
    export default{
      data(){
        return{
          uname:""
      }
      },
      methods:{
        load(){
          var uid=sessionStorage.getItem("uid");
          var uname=sessionStorage.getItem("uname");
          this.uname=uname;
          console.log(uid+":"+uname);
        },
        /*退出*/
        logout(){
          var url="Login1";
          //确认提示框:确认 取消
          this.$messagebox({
            title:"消息",
            message:"确定退出吗？",
            showConfirmButton:true,
            showCancelButton:true
          }).then(action=>{
            console.log(action);
            result=action;
            if(result=="confirm"){
            this.$router.push("/Login1");
            this.uname="";
            sessionStorage.removeItem("uid");
          };
          
          });
        //then回调函数
          
          
        }
      },
      created(){
        this.load();
      }
    }
  </script>
  <style scoped>
    /*省略*/
    .ell{
      overflow: hidden;   /*溢出隐藏*/
      white-space: nowrap;  /*不换行*/
      text-overflow:ellipsis; /*补省略号*/
    }
      /* 个人信息 */
      .mymsg{
        display:flex;
        padding: 30px 10px;
        background: url("../../img/tx.png");
        align-items: center;
      }
      /* 头像 */
      .mymsg .imgtou{
        width:60px;
        height:60px;
        border:1px solid #ccc;
        border-radius:50%;
        margin-left:20px;
        overflow: hidden;
      }
      img{
        width:100%;
        height:100%;
      }
      /* 未登录 */
      .no-login>a{
        display: inline-block;
        padding: 5px 10px;
        border:1px solid rgb(252, 59, 0);
        border-radius:20px;
        font-size:14px;
        color:rgb(252, 59, 0);
        margin-left:30px;
      }
      /*登录后 信息 */
      
      .mymsg>.login-msg>.login-msg-item{
        margin-left:20px;
        width:150px;
        display: inline-block;
      } 
      .mymsg>.login-msg>.login-msg-item>p{
        padding: 5px;
        font-size:18px;
      }
      /* vip图片 */
      .mymsg>.login-msg>.login-msg-item>p>span>img{
        width:20px;
        height:20px;
        vertical-align: middle;/*图片跟文字上下对齐*/
        margin-left:10px;
        margin-top:-5px;
      }
      /* 用户名 */
      .mymsg>.login-msg>.login-msg-item>p:last-child{
        font-size:14px;
        color:rgb(85, 84, 84);
      }
      .mymsg>.login-msg>p:first-child>span:first-child{
        width:110px;
        display: inline-block;
      }
      /* 签到 */
      .mymsg>.login-msg .qiandao{
        border:1px solid #fff;
        color:#fff;
        padding: 5px 10px;
        border-radius:20px;
        font-size:14px;
        width:50px;
        text-align: center;
        margin-left:10px;
        display: inline-block;
      }
      /* 会员特惠 */
      .huiyuan{
        padding: 10px;
        margin:10px;
        background: rgb(252, 231, 225);
        border-radius: 5px;
        font-size:14px;
        color:rgb(153, 95, 67);
      }
      ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size:10px;
      }
      ul li{
        width:75px;
        height:70px;
        text-align: center;
      }
      /* 标题 */
      h3{
        font-size:14px;
        padding: 10px;
      }
      /*退出*/
      .logout{
        width:200px;
        color:#fff;
        background: rgb(255, 30, 0);
        text-align: center;
        padding: 10px;
        margin: 0 auto;
        border-radius: 20px;
  
      }
  </style>