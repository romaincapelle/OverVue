# Router

Vue Router is the official router for Vue.js. It is used to add routes to SPAs, Single Page Applications.

## Add router to Vue app

#### Input main.js

Add the router to the Vue Instance

```js {3,9}
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```

#### Input (router/index.js)

This is how to set up the router itself

```js {}
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
```

#### Input (App.vue)

Adding the links and where the routing lives.

```js {4-5,7}
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
```

## Active link

The active link will automatically be binded to the css `class="router-link-active"`.

##### Input

```js {4-5}
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>
```

#### Output

```html {2-3}
<div id="nav">
  <a href="/" class="router-link-active">Home</a> |
  <a href="/about" class="router-link-exact-active router-link-active">About</a>
</div>
```

### Exact active link

To make sure only the current link is active and not it's '/' parent as well, use

##### Input {4-5}

```js
<template>
  <div id="nav">
    <router-link to="/" exact>
      Home
    </router-link>{' '}
    |<router-link to="/about">About</router-link>
  </div>
</template>
```

#### Output

```html {3}
<div id="nav">
  <a href="/" class="">Home</a> |
  <a href="/about" class="router-link-exact-active router-link-active">About</a>
</div>
```
