import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-axios-8cb49.firebaseio.com'

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log('Sending request')
    console.log(config)
    return config
  },
  function(error) {
    // Do something with request error
    console.log('Error incoming')
    console.log(error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

new Vue({
  render: h => h(App)
}).$mount('#app')
