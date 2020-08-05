import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-axios-8cb49.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'myCuteAuthorization'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  render: h => h(App)
}).$mount('#app')
