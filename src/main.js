import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入mint-ui的内容
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//引入mui的样式,底部使用的
import "./assets/mui/css/mui.css"
//购物车样式所需
import "./assets/mui/css/icons-extra.css"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
