---
pageClass: js
---

# Variables

## Declare a variable

### Let

Using `let` you can declare [block scoped](#block-scoped-vs-function-and-global-scoped) Variables

```Js
let age = 57
```

To assign a new value, do not re-declare the variable using `let`

```Js
age = 58
```

#### Shadow Variables

But you can re-declare a `shadow variable` in different scope. The variables in this local environment are only visible to the code inside of it.

The following variable created inside the [if statement](/javascript/control-structures.html#conditionals) is a `shadow variable` and will NOT throw an error:

```js
let age = 57
if (1 === 1) {
  let age = 58
  console.log(age)
} // This will console.log "58"
```

### Var

You can and probably should use 'const' and 'let' which is a newer ES6 notation. Var is still available. The [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) statement declares a [function-scoped or globally-scoped](<(#block-scoped-vs-function-and-global-scoped)>) variable.

```Js
var age = 57
```

The following will NOT throw an error: ( and it's arguably a problem ).

```Js
var age = 57
var age = 58
```

## Declare a constant

Using Const, you can declare [block scoped](/javascript/variables.html#block-scoped) constant.
The value CANNOT change through reassignment therefor it is not really a _variable_.

```Js
const name = 'Michael Jordan'
```

## Block Scoped VS Function and Global Scoped

The age declared inside an if statement with var will NOT throw an error, but it will if declared with let.

```js
if (true) {
  var age = 58
}
console.log(age) //  This will console.log "58"
```

```js
if (true) {
  let age = 58
}
console.log(age) // ERROR
```

Var only knows global scope and function scope, so a variable created in a function can't be used outside. A variable created globally can be used everywhere.
The same for let and const, but because they care about the curly braces, the block scope. That's why they also care about the scope of variable created inside an if statement.
