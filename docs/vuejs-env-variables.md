# Environment Variables

## .env

Create a file named `.env` in the root folder of the project and name the variable `VUE_APP_*` in order to be recognized by VUE CLI.

##### Input (.env)

```
VUE_APP_URL=https://some-dev.api.com
```

#### Input ( anywhere in vue files)

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

## Dev / Prod / Testing .env

Just use those names for development, production and testing and VUE CLI will automatically use the right version.

Name of the files:

`.env.development`

`.env.production`

`.env.testing`

## Custom Build mode and Environment

This is using the vue-cli-service which is automatically included in a Vue project.
You can create a custom build with in development mode for instance. To do so add a script to package.json

### Create build folder but with in development mode

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

### Create custom build with a custom staging mode

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
