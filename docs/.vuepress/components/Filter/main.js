import Vue from 'vue'
import App from './App.vue'

Vue.filter('capitalize', function(value) {
  return value.toUpperCase()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
