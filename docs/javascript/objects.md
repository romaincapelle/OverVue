---
pageClass: js
---

# Objects

## What is an Object?

Objects are core data structure in JavaScript. They reflect "real-world" entities in our program. 0bjects are a collection of unordered properties ( see below name, number, sport, sayQuote). Some properties are called methods ( see below sayQuote() ) when containing a function definition. Objects allow us to group related data together and split our code into logical pieces.

Objects are reference values.

```js
const player = {
  name: 'Michael Jordan',
  number: 23,
  sport: 'basketball',
  sayQuote: function() {
    alert("There is no 'i' in team but there is in win.")
  }
}

player.sayQuote()
```

## Add a property to an Object

Even if the property doesn't exist yet in an object, you can create it by assigning it a value :

```js
const player = { name: 'Michael Jordan' }
player.number = 23
```

## Modify a property in an Object

If the property already exist, then you will overide it by assigning it a new value:

```js
const player = { name: 'Michael Jordan' }
player.name = 'Stephen Curry'
```

## Remove a property from an Object

To remove a property you can delete a property by using the 'delete' keyword:

```js
const player = {
  name: 'Michael Jordan',
  number: 23
}

delete player.number
```

The object player is now :

```js
const player = {
  name: 'Michael Jordan'
}
```

## Special Key Names & Square Bracket Property Access

There are two ways to access a property

```js
const player = {
  'first name': 'Michael',
  lastName: 'Jordan',
  2000: 'playing'
}
```

To access the first name, you need to use the same syntax as with arrays:

```js
player['first name']
player[2000]
```

To access the last name you can use either way, the way above and the regular way of accessing properties:

```js
player.lastname
```

### Access property dynamically with Square braket

You can use the same braket notation to access a property stored in a variable:

```js
const player = {
  'first name': 'Michael'
}

const keyName = 'first name'
```

```js
player[keyName]
```

### Set property dynamically with Square braket

```js
const teamNumber = 'chicagoBullsNumber'

const player = {
  [teamNumber]: 23
}
```

'player.chicagoBullsNumber' will give you 23.

## Shorthand Property notation

```js
const newMovie = {
  title: title
}
```

is the same as

```js
const player = {
  name
}
```

When the value is the same as property name, you can use the shorthand notation.
The value needs to be a variable, not a string 'title'.
