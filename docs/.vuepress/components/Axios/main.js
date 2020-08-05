import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-axios-8cb49.firebaseio.com'

new Vue({
  render: h => h(App)
}).$mount('#app')
