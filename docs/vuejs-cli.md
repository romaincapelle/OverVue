# CLI

## Vue CLI Basic

Create a project

```shell
vue create hello-world
```

or if you prefet a GUI:

```shell
vue ui
```

---

Install dependencies

```shell
npm install
```

---

Compiles and hot-reloads for development

```shell
npm run serve
```

---

Compiles and minifies for production

```shell
npm run build
```

Lints and fixes files

```shell
npm run lint
```

[Customize configuration](https://cli.vuejs.org/config/).

## Vue CLI Advanced

### Environment Variables

#### .env

Create a file named `.env` in the root folder of the project and name the variable `VUE_APP_*` in order to be recognized by VUE CLI.

##### Input (.env)

```
VUE_APP_URL=https://some-dev.api.com
```

##### Input ( anywhere in vue files)

```js {2,8}
<template>
<p>{{ url }}</p>
</template>
<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_URL
    }
  },
}
</script>
```

##### output

<p>https://some-dev.api.com</p>

#### Dev / Prod / Testing .env

Just use those names for development, production and testing and VUE CLI will automatically use the right version.

Name of the files:

`.env.development`

`.env.production`

`.env.testing`

### Custom Build mode and Environment

This is using the vue-cli-service which is automatically included in a Vue project.
You can create a custom build with in development mode for instance. To do so add a script to package.json

#### Create build folder but with in development mode

```json{5}
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  "build:development": "vue-cli-service build --mode development"
},
```

To build then run

```shell
npm run build:development
```

#### Create custom build with a custom staging mode

Staging is NOT one of the three build-in mode that offer the vue-cli-service.

```json{5}
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  "build:development": "vue-cli-service build --mode staging"
},
```

To use custom variable for this custom mode, create a file such as `.env.staging`

To build then run

```shell
npm run build:staging
```

### Instant Prototyping

Or how to "How to inspect a single component". You can rapidly prototype with just a single Vue file with the vue serve.
To install globally a vue-cli-service, run `npm install -g @vue/cli-service-global`

To serve a single file run the command:

```Shell
vue serve MyComponent.vue
```

## VuePress

Since this very website was made using VuePress.vue, I am including those commands.

### Install globally

```shell
yarn global add vuepress # OR npm install -g vuepress
```

### Install as a local dependency

```shell
yarn add -D vuepress # OR npm install -D vuepress
```

### Run Local Server

```shell
yarn docs:dev
```

[localhost:8080](http://localhost:8080/)

### Build for production

```shell
yarn docs:build
```

[See the official VuePress doc](https://v1.vuepress.vuejs.org/guide/getting-started.html)

```

```
