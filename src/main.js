import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/stylus/style.styl'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  render: h => h(App),
}).$mount('#app')
