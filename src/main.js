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

// 导入axios
import axios from 'axios'
// 把 axios 挂载 到 Vue 上b
axios.defaults.baseURL='http://www.lovegf.cn:8899'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
