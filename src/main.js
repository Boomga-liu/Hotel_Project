import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VCalendar from 'v-calendar' // 引入日曆插件
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import currencyFilter from './filters/currency'
import './bus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
// import Swiper core and required modules
import swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper'
Vue.use(VueAwesomeSwiper)
// install Swiper modules
swiper.use([Navigation, Pagination, Autoplay, Thumbs])
Vue.use(VCalendar, {
  componentPrefix: 'vc'
})
Vue.component('v-date-picker', DatePicker)
Vue.component('loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
