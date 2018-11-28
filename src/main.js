//在webpack 中尝试使用Vue
//
import Vue from 'vue'
import store from './store/index.js'

// import Vue from '../node_modules/vue/dist/vue.js'
// 在node_modules 中根据包名，找到对应的vue文件夹
// 在vue文件夹中，找到一个pack.json的配置文件

import app from './app.vue'
import router from './router.js'
Vue.use(VueRouter)



//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//引入媒体查询css

import './css/index.css'

//导入所有的MintUI 组件
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
//导入mui
import './lib/mui/css/mui.min.css'
// import  './lib/mui/js/mui.min'

//导入bootstrap
//
import 'bootstrap/dist/css/bootstrap.css'

//导入滑动条插件
// import LyTab from 'ly-tab'
// Vue.use(LyTab)



//把所有的组件，注册为全局组件

Vue.use(MintUI)


// 1.导入vue-router包
import VueRouter from 'vue-router'

//1.导入login组件
// import login from './login.vue'
//默认，webpack无法打包.vue文件 需要安装相关loader
// npm i vue-loader vue-template-compiler -D
//配置文件中，新增loader { test:/\.vue$/,use:'vue-loader'}

// const VM = new Vue({
// 	el: "#app",
// 	data: {
// 		msg: '1'
// 	},
// 	render: c => c(login)


// });
//
//

const vm = new Vue({
	el: "#app",
	store,
	render: c => c(app), // render 会把el指定容器中所有的内容都清空，覆盖
	router // 将路由挂在view上
})



// import m1, {
// 	title
// } from './test.js'
// console.log(m1);
// console.log(title)
