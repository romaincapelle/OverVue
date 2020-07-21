---
pageClass: js
---

# Classes

Classes are blueprints for objects. We can build objects based on classes.The fields in a class will be translated to property of the object. There is no coma at the end of the definition of a field ( it could have a semicolon) and we use '=' to assign a default value if needed. If there is not default value, it will be 'undefined' initially.

```js
class Player {
  name = 'DEFAULT'
  height
  team
}
```

## Create an Object based on a class

We use a Class Method, the constructor method, a special method for creating and initializing an object created with a class. In this example I will create a two new "players" in the 'team' based on the class 'Player'.

```js
class Player {
  // name = 'DEFAULT'
  // age
  // team
  constructor(name, age, team) {
    this.name = name
    this.age = age
    this.team = team
  }
}
const team = {
  players: [
    new Player('Michael Jordan', 57, 'Chicago Bulls'),
    new Player('Scottie Pippen', 54, 'Chicago Bulls')
  ]
}
for (const player of team.players) {
  console.log(
    `${player.name} is ${player.age} years old, he used to play for the ${player.team}`
  )
}
```

Output:

```js
Michael Jordan is 57 years old, he used to play for the Chicago Bulls
Scottie Pippen is 54 years old, he used to play for the Chicago Bulls
```

## Using and Connecting Multiple Classes
