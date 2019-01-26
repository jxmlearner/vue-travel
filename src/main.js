import Vue from 'vue'
import App from './App.vue'

import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
import './assets/css/stylus/style.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
