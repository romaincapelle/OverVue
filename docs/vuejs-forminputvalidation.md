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

## Simple city validation

#### Input:

```js{1}
<template>
  <div>
    <input type="text" id="name" v-model="name" @input="$v.name.$touch()" />
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      name: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
  },
};
</script>npm
```

<iframe width="100%" height="300" src="//jsfiddle.net/b5v4faqf/embedded/js,html,css,result/dark/?bodyColor=321450&accentColor=00ff00&fontColor=100d23&menuColor=f97e72" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### Output:

<Forms-Basic-Vuelidate /> 
