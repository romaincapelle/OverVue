---
pageClass: js
---

# Functions

Functions are used to segment off section of the code to make it easier to manage, or to run repeated operations, or both. Here I **declare** the function on line 1 to 3, and **call** the function on line 4.

```js
function sayMyName() {
  console.log("Heisenberg") 
}
sayMyName() //"Heisenberg"
```

## Passing arguments to a function

You can pass zero, one or several arguments to a function.

- The arguments are the actual value of this variable that gets passed to function. (Here, Heisenberg and 52)

- The parameters are the variables in the declaration of function. ( Here, name and age)


```js
function sayMyNameAndAge(name, age) {
    console.log(`${name}, you are ${ age }`) 
}
sayMyNameAndAge('Heisenberg', 52) //"Heisenberg, you are 52"
```

The parameters's name are only used inside that function so they can be `first` and `last` or `x` and `y` or anything else.

```js
firstName = 'Dwight'
lastName = 'Schrute'
function logFullName(x, y) {
  console.log(`${x} ${y}`)
}
logFullName(firstName, lastName) // Dwight Schrute
```

## Methods

When a function is a property of an object, it is called a "Method" of that Object

```js
const person = {
  sayMyName: function() {
  console.log("Heisenberg") //"Heisenberg"
  }
}
person.sayMyName()
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
```

But the return statement also stops the execution of that function which can be useful as well:

```js
function sayMyName(name) {
  if (name !== 'Heisenberg') {
    return //  If the name isn't Heisenberg the function just exit here.
  } else {
    console.log("You're god damn right!") // Else, This will be executed
  }
}
sayMyName('Heisenberg') // You're god damn right!
```

## Types of functions

### Function Expressions

We can store the function in a variable

```js
const logName = function sayMyName() {
  console.log("Heisenberg")
}

logName() // Heisenberg
```

### Anonymous functions Expression

You can ommit the name of the function when storing in a variable, it's called an "anonymous" function expression.

```js
const logName = function() {
  console.log("Heisenberg")
}

logName() // Heisenberg
```

### Named functions

Named function are executed when called by name.

### Immediately invoked function expressions

Immediately invoked function expressions runs the moment the browser encounter them.

```

```
