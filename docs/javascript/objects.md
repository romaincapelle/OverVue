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

## Add a property

Even if the property doesn't exist yet in an object, you can create it by assigning it a value :

```js
const player = { name: 'Michael Jordan' }
player.number = 23
```

## Modify a property

If the property already exist, then you will overide it by assigning it a new value:

```js
const player = { name: 'Michael Jordan' }
player.name = 'Stephen Curry'
```

## Remove a property

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

## Special Key Names & []

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

### Access property dynamically

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

### Set property dynamically

```js
const teamNumber = 'chicagoBullsNumber'

const player = {
  [teamNumber]: 23
}
```

'player.chicagoBullsNumber' will give you 23.

## Shorthand Property

Whenever you have a variable which is the same name as a property on an object, when constructing the object, you can omit the property name. The value needs to be a variable, not a string.

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

## Shorthand Method names

With ES2015 Shorthand Method Names, you can now omit the function keyword completely.

```js
const player = {
  sayCool: function() {
    console.log('Cool')
  }
}
```

can be written

```js
const player = {
  sayCool() {
    console.log('Cool')
  }
}
```

## Copy an object

::: warning
This creates a shallow copy. If any of the fields of the object are references to an array or an object, then just the reference addresses are copied. The fiels that reference a string or a number will be "actually" cloned.
:::

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const copyPlayer = { ...player }
```

In this example the `age` and the `name` are copied. So we can modify them in copyPlayer without modifying player. But the `teams` array, if modified, will be the same in both player and copyPlayer.

You can make a **shallow** copy of an object with `Object.assign()`

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const copyPlayer = Object.assign({}, player)
```

### Copy an object and change a value.

While copying with the spread operator, you can pass a new value **after** the spread operator and the value will be updated in the copied variable.

```js
const player = { name: 'Michael Jordan', age 57, teams: ['Bulls', 'Wizards' ]}
const copyPlayer = { ...player, age : 58}
```

### How to REALLY copy nested objects as well

You can actually copy the nested arrays or objects manually by using another spead operator.

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const copyPlayer = { ...player, hobbies: [...teams] }
```

## Object Destructuring

Object Destructuring lets you bind variables to different properties of an object. In other words, you can extract a property in a variable.

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const { name } = player
console.log(name)
```

Output:

```js
'Michael Jordan'
```

### Object Destructuring and rename the variable

You can rename the variable you are creating "on the fly".

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const { name: playerName } = player
console.log(playerName)
```

Output:

```js
'Michael Jordan'
```

### Object Destructuring and grab the other values

Like with arrays, you can use a rest parameter to collect all the remaining properties of that object in a new object.

```js
const player = { name: 'Michael Jordan', age: 57, teams: ['Bulls', 'Wizards'] }
const { name, ...playerInfo } = player
console.log(playerInfo)
```

Output:

```js
{age: 57, teams: ['Bulls', 'Wizards']}
```

## Check if a property exists

With the in operator in an if statement you can check if a property exist in that object. This will return a boolean.

```js
const player = { name: 'Karl Malone', age: 56 }
if ('yearWon' in player === false) {
  console.log('This player did not win.')
}
```

It is the same as doing :

```js
const player = { name: 'Karl Malone', age: 56 }
if (player.yearWon === undefined) {
  console.log('This player did not win.')
}
```

Output:

```js
'This player did not win.'
```

## The "This" Keyword in a method

In a method ( a function within an object), 'this' refers to the "owner" of the method.

Here, 'this' refer to `player`:

```js
const player = {
  name: 'Stephen Curry',
  age: 32,
  makeOlder: function() {
    return ++this.age
  }
}
player.makeOlder()
```

Output

```js
33
```

It has different values depending on where it is used:

- As seen above, in a method, 'this' refers to the owner object.
- Alone, 'this' refers to the global object.
- In a function, 'this' refers to the global object.
- Methods like call(), and apply() can refer 'this' to any object. ( see below )
- In an event, 'this' refers to the element that received the event. ( see below )

### Use bind() to prepare a function and pass what 'this' refers to

In two steps, here is how and why we need to bind player to use this on player.

```js
const player = {
  weight: 190,
  makeHeavier: function() {
    return ++this.weight
  }
}
// Step 01
const unboundMakeHeavier = player.makeHeavier
console.log(unboundMakeHeavier()) // The function gets invoked at the global scope

// Step 02
const boundMakeHeavier = unboundMakeHeavier.bind(player)
console.log(boundMakeHeavier())
// expected output: 191
```

### Common 'this' mistake

```js
this.age = 10 // 'this' refers to global 'window' object here in a browser
const player = {
  age: 35,
  getage: function() {
    return this.age
  }
}

player.getage()
//  returns 35

const retrieveage = player.getage
retrieveage()
//  returns 10; the function gets invoked at the global scope

//  Create a new function with 'this' bound to player
//  New programmers might confuse the
//  global variable 'age' with player's property 'age'
const boundGetage = retrieveage.bind(player)
boundGetage()
//  returns 35
```

### 'this' as a DOM event handler

The browser binds 'this' for you ( on event listeners ) to the DOM element that triggered the event.

In the example, below we add an event listener on all element of the DOM that turns backgrounds to blue.

```js
function makeBlue(something) {
  // Always true
  console.log(this === something.currentTarget)
  this.style.backgroundColor = '#0000FF'
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*')

// Add makeBlue as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', makeBlue, false)
}
```

### Arrow Function don't know 'this'

The following will work

```js
const team = {
  players: ['LeBron James', 'Anthony Davis'],
  team: 'Lakers',
  getNamesAndTeam: function() {
    this.players.forEach(player => {
      console.log(player + ' - ' + this.team)
    })
  }
}
team.getNamesAndTeam()
```

Output:

```js
'LeBron James - Lakers'
'Anthony Davis - Lakers'
```

But if I replace the arrow function with a regular function, it won't work, the team will be undefined. Because 'this' inside the function will refer to the window object.

```js
const team = {
  players: ['LeBron James', 'Anthony Davis'],
  team: 'Lakers',
  getNamesAndTeam: function() {
    this.players.forEach(function(player) {
      console.log(this)
      console.log(player + ' - ' + this.team)
    })
  }
}
team.getNamesAndTeam()
```

Output:

```js
Window{}
'LeBron James - undefined'
'Anthony Davis - undefined'
```

:::tip
Simply use **console.log(this)** to know what 'this' refers to.
:::

## Getters and Setters

### Set

A setter is a method that "sets" the value of a specific property.

```js
let dreamTeam = {
  _listPlayers: [],
  set addPlayer(name) {
    this._listPlayers.push(name)
  }
}
dreamTeam.addPlayer = 'Luka Doncic'
dreamTeam.addPlayer = 'Joel Embiid'
console.log(dreamTeam._listPlayers)
```

Output:

```js
'Luka Doncic', 'Joel Embiid'
```

### Get

A getter is a method that "gets" the value of a specific property.
A property that only has a getter and no setter would be a Read-Only Property.

```js
const dreamTeam = {
  listPlayers: ['Luka Doncic', 'Joel Embiid', 'James Harden'],
  get latestAddedPlayer() {
    return this.listPlayers[this.listPlayers.length - 1]
  }
}
console.log(dreamTeam.latestAddedPlayer)
```

Output:

```js
'James Harden'
```

### Getter and Setter

```js
let dreamTeam = {
  _listPlayers: [],
  set addPlayer(name) {
    this._listPlayers.push(name)
  },
  get listPlayers() {
    return this._listPlayers.join(', ')
  }
}
dreamTeam.addPlayer = 'Luka Doncic'
dreamTeam.addPlayer = 'Joel Embiid'
console.log(dreamTeam._listPlayers) // Ouput the array
console.log(dreamTeam.listPlayers) // Calls the getter
```

Output:

```js
[Luka Doncic,Joel Embiid]
'Luka Doncic, Joel Embiid'
```
