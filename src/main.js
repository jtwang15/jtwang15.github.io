import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css' //bootstrap
import 'font-awesome/css/font-awesome.css';//导入第三方图标库

Vue.use(ElementUi)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
