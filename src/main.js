// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const _importglobal = require('./assets/js/global_' + process.env.NODE_ENV)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.globaldata = _importglobal('Globaldata')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
