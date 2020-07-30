---
pageClass: vuejs
---

# Router

Vue Router is the official router for Vue.js. It is used to add routes to SPAs, Single Page Applications.

## Add router to Vue app

#### Input main.js

Add the router to the Vue Instance

```js {3,9}
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

#### Input (router/index.js)

This is how to set up the router itself

Note the `mode: 'history',` on line 22 so that the URL looks "prettier".

[More info on History mode](https://router.vuejs.org/guide/essentials/history-mode.html)

```js {22}
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

#### Input (App.vue)

Adding the links and where the routing lives.

```js {4-5,7}
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>
        Home
      </router-link>{' '}
      |<router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
```

## Router-link

Use the router-link for the Navigation Bar

### Active router-link

The active link will automatically be bound to two css `class="router-link-active"`.

##### Input

```js {4-5}
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>
```

#### In the Dom:

```html {2-3}
<div id="nav">
  <a href="/" class="router-link-active">Home</a>
  <a href="/about" class="router-link-exact-active router-link-active">About</a>
</div>
```

### Exact active router-link

The default active class matching behavior is inclusive match. For example, `<router-link to="/a">` will get this class applied as long as the current path starts with /a/ or is /a.

One consequence of this is that `<router-link to="/">` will be active for every route! To force the link into "exact match mode", use the exact prop:

##### Input

```js {3,6}
<template>
  <div id="nav">
    <a href="/" class="">
      Home
    </a>
    <a href="/about" class="router-link-exact-active router-link-active">
      About
    </a>
  </div>
</template>
```

#### In the Dom:

```html {3}
<div id="nav">
  <a href="/" class=""> Home </a>{' '} |
  <a href="/about" class="router-link-exact-active router-link-active">
    About
  </a>
</div>
```

### Render router-link as "li"

Instead of a `<a>Home</a>` we can render a link as a `<li>Home</li>` for instance using the tag attribute.

##### Input

```js {3,6}
<template>
  <div id="nav">
    <router-link to="/" tag="li">
      Home
    </router-link>
    <router-link to="/about" tag="li">
      About
    </router-link>
  </div>
</template>
```

#### In the Dom:

```html {2-3}
<div id="nav">
  <li href="/">Home</li>
  <li href="/about">About</li>
</div>
```

## Link from within the code

#### Input:

<<< @/docs/.vuepress/components/Router/linkWithinCode.vue {2,8-10}

#### Output:

<Router-linkWithinCode />

::: tip
User $router.replace instead of \$router.push to avoid adding a new entry in the history.
:::

## Setting Up Dynamic Route Parameters

#### Input: (Vue file)

<<< @/docs/.vuepress/components/Router/dynamicLink.vue {3,11,16}

#### Input: (router/index.js file)

```js {4,14-15}
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // dynamic segments start with a colon
  { path: '/user/:id', component: User }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

## Nested route

```js {4-17}
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

## 404 route

Create a component named for instance `NotFoundComponent`

```js {4}
const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '*', component: NotFoundComponent }]
})
```

## Lazy Load Syntax (Code Splitting)

To make sure that not all routes are loaded right when opening the app. Using Vue's Async Components and webpack's code splitting feature

```js
const User = () => import('./components/user/User.vue');
...
export const routes = [
    ...,
    {
        path: '/user', components: {
            default: User,
            ...
        }
    }
];
```

[See the Official Vue Router doc ](https://router.vuejs.org/)
