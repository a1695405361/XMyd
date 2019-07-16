<template>
    <!--登录组件-->
    <div class="container">
      <!--提示框-->
      <div class="logintou">
        <span><i class="fa fa-times" aria-hidden="true"></i></span>
        <span @click="logout">注销</span>
     </div>
      <!--广告图片-->
      <div class="imgDiv">
        <img src="../../img/mttb.jpg" alt="" class="logo">
      </div>
      <!--操作区域-->
      <div class="operateDiv">
         <!--帐号-->
         <mt-field :placeholder="accountPlaceholder" v-model="uname"></mt-field>
         <!-- 密码 -->
         <mt-field v-show="isUserAccount"placeholder="请输入密码"
         type="password" v-model="upass" class="myinput">
         </mt-field>
         <!-- 短信验证 -->
         <!-- 登陆切换 -->
         <div>
             <mt-button size="large" class="mybutton" @click="login">
                 登陆
             </mt-button>
             <a type="primary" size="large" class="qh"
             @click="changeLoginMethod">
                 {{defaultAccountText}}</a>
         </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data(){
      return {
        accountPlaceholder:"手机号",
        uname:"",
        defaultAccountText:"短信验证登陆",
        //是否是账户方式
        isUserAccount:true,
        upass:""
      }
    },
    methods: {
      logout(){
        var url="Login1";
        this.axios.get(url).then(result=>{
          if(result.data.code==1){
            alert("已退出");
            sessionStorage.removeItem("uid");
          }
        })
      },
      login(){
        //完成用户登录
        //1:获取用户输入用户名 3~10
        //2:获取用户输入密码   3~8
        var n = this.uname;
        var p = this.upass;
        //3:创建二个正则表达式
        var nreg = /^[a-zA-Z0-9]{3,10}$/;
        var preg = /^[a-zA-Z0-9]{3,8}$/;
        //4:判断用户名格式不正确 提示出错
        if(!nreg.test(n)){
           this.$toast("用户名格式不正确");
           return;
        }
        //5:判断密码格式不正确  提示出错
        if(!preg.test(p)){
           this.$toast("密码格式不正确");
           return;
        }
        //6:将用户名和密码发送 ajax请求
        var url = "login";
        var obj = {uname:n,upass:p};
        //7:并且获取服务器返回结果
        this.axios.get(url,{params:obj}).then(result=>{
            // console.log(result);
            console.log(result.data.code);
            // console.log(result.data.msg);
          //result 对象服务器返回结果
          if(result.data.code == 1){
            //跳转指定组件
            sessionStorage.getItem("uid",this.uid);
            this.$router.push("/Home");
          }else{
            this.$messagebox("消息",
            result.data.msg);
          }
        });
        //8:返回失败 提示
        //9:返回成功 跳转Home.vue
      },
      changeLoginMethod(){
        if(this.isUserAccount){
            this.accountPlaceholder="请输入手机号码";
            this.defaultAccountText="密码登陆";
        }else{
            this.defaultAccountText="短信验证登陆";
            this.accountPlaceholder="请输入手机号码";
        }
         this.isUserAccount=!this.isUserAccount;
        }
    },
  }
  </script>
  <style scoped>
      .logintou{
        display:flex;
        justify-content:space-between;
        padding:15px;
      }
      /* 你需要登录才能继续仿问的布局样式 */
      .tipslogin {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        background: rgb(238, 238, 238);
        padding-left: 20px;
        padding-right: 20px;
      }
      /* 半闭样式 */
      .closeSpan {
        color: rgb(153, 153, 153)
      }
      /* 图片 logo 根样式 */
      .imgDiv {
        display: flex;
        justify-content: center;
      }
      /* 图片样式 */
      .logo{
        width: 80px;
        height: 80px;
      }
      /* 上面的线隐藏 */
      .mint-cell-wrapper  {
        background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
      }
     /* 输入框底边框样式 */
      .mint-cell-wrapper  {
        border-bottom: 1px solid #003cff;
      }
  
      /* 修改按钮按钮下的默认颜色 */
      .mint-button::after {
        background-color: transparent;
      }
      /* 操作区域的样式*/
      .operateDiv {
        padding-left: 20px;
        padding-right: 20px;
      }
      /* 输入框边距 */
      .myinput {
        margin-top: 30px;
      }
      /* 获取短信验证码字体颜色 */
      .getCode {
        color:#0004ff;
        font-size: 17px;
        border-left:1px solid #b5b5b5;
        padding-left: 7px;
      }
      /* 免费注册根样式 */
      .registerDiv {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      /* 免费注册字体样式*/
      .registerDiv span {
        color: #555;
      }
      /* 登录短信验证按钮边距 */
      .mybutton {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      /* 修改默认 butoon 的样式 达到和淘宝登录一样 */
      .mint-button--default {
        background: -webkit-linear-gradient(left,#68dbce,#00eeff) no-repeat;
        border-radius: 25px;
        color: #fff;
        height: 48px;
      }
      /* 同上 */
      .mint-button--primary {
        border-radius: 25px;
        height: 48px;
        background-color: transparent;
        border: 1px solid #68dbce;
        color: #68dbce
      }
      /* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
      .mint-msgbox{
        border-radius: 8px;
        width: 70%
      }
      /* 弹出框内容样式 */
      .mint-msgbox-content {
        min-height: 50px;
        font-size: 18px;
      }
      /* 弹出内容居中 */
      .mint-msgbox-message{
        line-height: 50px;
      }
      /* 弹出框确定按钮样式 */
      .mint-msgbox-btns{
        height: 60px;
      }
      /* 弹出框确定按钮字体 */
      .mint-msgbox-confirm {
        color: #68dbce;
      }
  </style>
  
  
  