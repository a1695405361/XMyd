import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem)
import { Button } from 'vant';
Vue.use(Button);
import { Rate } from 'vant';
Vue.use(Rate);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
//vant 轮播组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
//vant 弹出层
import { Popup } from 'vant';
Vue.use(Popup);
//vant 省市区组件
import { Area } from 'vant';
Vue.use(Area);
//vant call单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup)
//  搜索
import { Search } from 'vant';
Vue.use(Search);
//main.js
//1:引入mint-ui库中所有组件:完整引入
import MintUI from 'mint-ui'
//2:单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//3:将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);
import './font/iconfont.css'
//4:引入axios.js
import axios from "./axios"





Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
