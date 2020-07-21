---
pageClass: js
---

# Data Types

## Primitives types

### Boolean

`true` and `false`

### Null

`Null` is a ‘no value’ or nonexistence of any value.

### undefined

`Undefined` is a global variable that JavaScript creates at run time when a value is declared but not defined, when an array or object property does not exist, when a function parameters hasn't been defined yet, or when a function had to return a value but didn't have any to return.

### Numbers

```
-3
```

```
23
```

```
22.548
```

### Strings

```js
let sentence = 'The first “hoops” were actually just peach baskets.'
```

### Symbols

Coming soon

## Reference types

### Arrays

Arrays are used to store a list of values in a single variable.

```javascript
const dreamTeam = ['Michael', 'Shaquille', 'Kobe']
```

[A lot more on Arrays here](/javascript/arrays)

### Objects

Objects can contain many values. They are stored in key-value pairs. In the following example `name` is a key. The string 'Michael Jordan' is a value.

```js
const player = {
  name: 'Michael Jordan',
  number: 23,
  sport: 'basketball',
  sayQuote: function() {
    alert("There is no 'i' in team but there is in win.")
  }
}
```

[A lot more on Objects here](/javascript/objects)

## Primitive VS Reference

Numbers, strings, booleans ([and more](http://localhost:8080/javascript/data-types.html#primitives-types)) are primitive data types. Which mean that when we assign a variable from another variable that has a primitive value. We **copy the value** in memory. It exists twice thus if we change one of the value we don't change it everywhere as seen in the following example:

```js
let boss = 'Michael Scott'
let regionalManager = boss // It copies the value of boss
regionalManager = 'Dwight Schrute' // We reassign regionalManager
console.log(regionalManager) // "Dwight Schrute"
console.log(boss) // "Michael Scott"
```

On the other hand, object and arrays are reference data types. Which mean that when we assign a variable from another variable that has a reference value. We **copy the address in memory** ( the pointer to that value if you may ). It exists once thus if we change one of the value we change it everywhere as seen in the following example:

```js
let boss = {
  name: 'Michael Scott',
  branch: 'Scranton'
}
let regionalManager = boss // It copies the address to the object "boss"
boss.name = 'Dwight Schrute' // We change the value of name in "boss"

console.log(regionalManager) // {name: "Dwight Schrute", branch: 'Scranton'}
console.log(boss) // {name: "Dwight Schrute", branch: 'Scranton'}
```

---

[More on data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---
