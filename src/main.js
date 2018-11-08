import Vue from 'vue'
import App from './App'
import router from './router'
// 导入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入mui
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
//图片缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入vuex
import store from '@/store/index.js'


// 导入axios--已经封装单独api了，所以隐藏
// import axios from 'axios'
// 把 axios 挂载 到 Vue 上b
// axios.defaults.baseURL='http://www.lovegf.cn:8899'
// Vue.prototype.$http = axios

// 导入时间格式moment
import moment from 'moment'
// 全局过滤器
Vue.filter('dtFormat',(dateStr,pattern="YYYY-MM-DD HH:mm:ss")=>{
 return moment(dateStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
