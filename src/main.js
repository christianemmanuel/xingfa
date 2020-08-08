import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui'

import './assets/styles/reset.css'
import './assets/styles/common.scss'
import './assets/styles/circle.css'
import './assets/styles/element-variables.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
