import Vue from 'vue'
import App from './App'
import router from './router'
// 导入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 导入mui
import '../lib/mui/css/mui.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
