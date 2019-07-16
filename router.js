import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login1 from './components/common/Login1.vue'
import Navlist from './components/common/Navlist.vue'
import Detail from './components/common/Detail.vue'
import Tabbar from './components/common/Tabbar.vue'
import Cart from './components/common/Cart.vue'
import TitileBar from './components/common/TitileBar.vue'
import Titlebar from './components/common/Titlebar.vue'
import User from './components/common/User.vue'
Vue.use(Router)
export default new Router({
  routes: [
  {path:'/Home',component:Home},
  {path: '/Login1',component:Login1},
  {path:'/Navlist',component:Navlist},
  {path:'/Detail',component:Detail},
  {path:'/Tabbar',component:Tabbar},
  {path:'/Cart',component:Cart},
  {path:'/TitileBar',component:TitileBar},
  {path:'/Titlebar',component:Titlebar},
  {path:'/User',component:User}
  ]
})
