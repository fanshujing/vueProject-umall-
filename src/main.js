// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 挂到vue的原型链上
import $ from "jquery"
Vue.prototype.$=$

// 1引入
// css/reset
import "./assets/css/reset.css"

// 2引入js/rem
import "./assets/js/rem"


// 3引入store
import store from "./store"

//处理全局过滤器
import "./filters"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
