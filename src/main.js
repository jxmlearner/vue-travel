import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router/routes'
import store from './store/store'

import './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/stylus/style.styl'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
