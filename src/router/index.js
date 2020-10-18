import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import login from "../pages/login.vue"
// 懒加载
const login = () => Promise.resolve(import("../pages/login.vue"))
const register = () => Promise.resolve(import("../pages/register.vue"))
const index = () => Promise.resolve(import("../pages/index.vue"))
const home = () => Promise.resolve(import("../pages/home.vue"))
const classify = () => Promise.resolve(import("../pages/classify.vue"))
const car = () => Promise.resolve(import("../pages/car.vue"))
const mine = () => Promise.resolve(import("../pages/mine.vue"))
const detail = () => Promise.resolve(import("../pages/detail.vue"))
const lei = () => Promise.resolve(import("../pages/lei.vue"))
var router = new Router({
  routes: [
    {
      path: "/login",
      component: login,
      name: "登录",
    },
    {
      path:"/index",
      component:index,
      children:[
        {path:"home",component:home},
        {path:"classify",component:classify,name:"分类"},
        {path:"car",component:car,name:"购物车"},
        {path:"mine",component:mine,name:"个人中心"},
        {path:"",redirect:"home"}
      ]
    },
    {
      path:"/detail",
      component:detail,
      name:"商品详情"
    },
    {
      path: "/register",
      component: register,
      name: "注册",

    },
    {
      path:"/lei",
      component:lei,
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
})
export default router