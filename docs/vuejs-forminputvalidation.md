# Form Validation / Vuelidate

## Install Vuelidate

Install the npm package

```bash
npm install vuelidate --save
```

Import and add Vuelidate to the project

```js{3-4}
import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```

## Simple city validation - Coming soon
