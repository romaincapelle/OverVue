# Vue-resource

This section is based on the [vue-resource package](https://github.com/pagekit/vue-resource).

## Installation via NPM

(`--save` to install it as a production dependency.)

```shell
npm install --save vue-resource
```

### Use vue-ressource in an app

#### Input: (main.js)

<<< @/docs/.vuepress/components/vue-resource/main.js{4,6}

## Example

```js
{
  // GET /someUrl
  this.$http.get('/someUrl').then(
    (response) => {
      // get body data
      this.someData = response.body;
    },
    (response) => {
      // error callback
    }
  );
}
```
