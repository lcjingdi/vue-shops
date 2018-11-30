import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import router from "./router.js";
import app from "./App.vue";

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router: router
});