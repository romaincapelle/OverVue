---
pageClass: vuejs
---

# VsCode

## Extensions

### Vetur

[vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

### ESLint and Prettier

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Configure ESLint

Either in the .eslintrc.js file or package.json (depending on the Vue CLI install options)

```js {8}
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended', // Add this line
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
```

### Configuring Prettier

Create a `.prettierrc.js` file in the root folder of the project.

```bash
touch .prettierrc.js
```

##### Input (.prettierrc.js)

For instance, to force single quote '' instead of double quote "" and automatically add semi columns (a personal preference)

```js
module.exports = {
  singleQuote: true,
  semi: false
}
```

## User Settings (json)

### Vetur

To configure linting rules: [see why](https://vuejs.github.io/vetur/linting-error.html#linting-for-template)

```
"vetur.validation.template": false
```

### ESLint

Search for `eslint.validate` in the settings and add the following:

#### input

```json
"eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "html",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    }
],
```

Also add :

```json
"editor.codeActionsOnSave": { "source.fixAll.eslint": true }
```
