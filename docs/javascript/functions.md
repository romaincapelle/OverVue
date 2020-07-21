---
pageClass: js
---

# Functions

Functions are used to segment off section of the code to make it easier to manage, or to run repeated operations, or both. Here I **declare** the function on line 1 to 3, and **call** the function on line 4.

```js
function sayMyName(name) {
  console.log(name)
}
sayMyName('Heisenberg')
```

## Pass data to a function with parameters

You can use 0 or several parameters to pass any kind of data.
The parameters's name are only used inside that function so they can be `first` and `last` or `x` and `y` or anything else.

```js
firstName = 'Dwight'
lastName = 'Schrute'
function logFullName(first, last) {
  console.log(`${first} ${last}`)
}
logFullName(firstName, lastName)
```

## Return statement

The return statement returns a value from the function

```js
let total = 0
function calculateTotal(priceProduct) {
  return (total += priceProduct)
}
calculateTotal(4) // Calling the function
console.log(total) // 4
calculateTotal(5) // Calling the function
console.log(total) // 9
```

But the return statement also stops the execution of that function which can be useful as well:

```js
function sayMyName(name) {
  if (name !== 'Heisenberg') {
    return //  If the name isn't right the function just exit here.
  } else {
    console.log("You're god damn right!")
  }
}
sayMyName('Heisenberg')
```

## Types of functions

### Named functions

Named function are executed when called by name.

### Anonymous functions

Anonymous functions are usually triggered by a specific event.

### Immediately invoked function expressions

Immediately invoked function expressions runs the moment the browser encounter them.

```

```
