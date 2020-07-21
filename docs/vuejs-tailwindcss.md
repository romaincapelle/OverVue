---
pageClass: vuejs
---

# Tailwind CSS

## Intall Tailwind on an existing Vue Project

### Install Tailwind via npm

```shell
npm install tailwindcss
```

### Add a css Tailwind CSS file

Create the file

```shell
touch src/assets/tailwind.css
```

##### Input - Add this content to the file :

```CSS {1-3}
@tailwind base;
@tailwind components;
@tailwind utilities;
```

##### Input - Add the following lines to main.js

```CSS {3-4}
import Vue from "vue"
import App from "./App.vue"
import VueTailwind from "vue-tailwind"
Vue.use(VueTailwind)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
```

### Create your Tailwind config file

Run the following command to create a `tailwind.config.js` file.

```shell
npx tailwindcss init
```

### Process your CSS with Tailwind (coming soon)

[See the official Tailwind CSS doc](https://tailwindcss.com/docs/installation/)
