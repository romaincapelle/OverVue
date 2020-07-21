---
pageClass: js
---

# Arrays

Arrays are list-like objects. You can store strings, numbers, objects. Arrays can be of the same types, mixed types. You can have nested arrays, or multi-dimensional array...

## Creating an arrays

### The "normal way"

```javascript
const dreamTeam = ['Michael', 'Shaquille', 'Kobe']
```

### Using the "new" constructor

```js
const dreamTeam = new Array('Michael', 'Shaquille', 'Kobe')
```

### Create an Array from a string

#### Using "from"

Using the from attribute you can create an array "from" an iterable like

Input

```js
const spellIt = Array.from('Michael')
```

The spellIt is now:

```js
;['M', 'i', 'c', 'h', 'a', 'e', 'l']
```

#### Using "split"

```js
const playerName = 'Michael.Jordan'
const splitedName = playerName.split('.')
```

The splitedName is now:

```js
;['Michael', 'Jordan']
```

## Create a string from an array

#### Using .join()

The contrary of the above method is .join()

```js
const playerName = ['Michael', 'Jordan']
const joinedName = playerName.join(' ')
```

The joinedName is now:

```js
'Michael Jordan'
```

## Accessing data

Arrays are index based. The index starts at 0.

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']

dreamTeam[2]
```

```js
'Kobe Bryant'
```

## Adding an element

### Add an element to the end (.push)

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam.push('Magic Johnson')
// push will return the new length of the array:
//4
```

and the dreamTeam array is now:

```js
;['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant', 'Magic Johnson']
```

### Add an element to the beginning (.unshift)

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam.unshift('Magic Johnson')
// unshift will also return the new length of the array:
//4
```

and the dreamTeam array is now:

```bash
['Magic Johnson', 'Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
```

## Remove an element

### The last element (.pop)

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam.pop()
// pop will return the element that was deleted and delete it:
// 'Kobe Bryant'
```

and the dreamTeam array is now:

```bash
['Michael Jordan', "Shaquille O'Neal"]
```

### The first element(.shift)

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam.shift()
```

shift will also return the element that was deleted and delete it from the array:

```js
'Michael Jordan'
```

and the dreamTeam array is now:

```js
;["Shaquille O'Neal", 'Kobe Bryant']
```

## Replace an element

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam[1] = 'Wilt Chamberlain'
```

This will return the new element of that array:

```js
Wilt Chamberlain
```

and the dreamTeam array is now:

```js
;['Michael Jordan', 'Wilt Chamberlain', 'Kobe Bryant']
```

If you target an element that doesn't exist yet, it will create all the (undefined) missing elements until the new one:

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam[5] = 'Wilt Chamberlain'
```

and the dreamTeam array is now:

```js
;['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant', , , 'Wilt Chamberlain']
```

## Insert an element

### Insert an element without deleting anything

The .splice methods takes:

- The index at which to start changing the array.
- An integer indicating the number of elements in the array to remove from start ( the index above )
- The items to add to the array

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
dreamTeam.splice(1, 0, 'Bill Russell')
```

This method will return an array with the deleted elements. ( Here an empty array)

and the dreamTeam array is now:

```js
;['Michael Jordan', 'Bill Russell', "Shaquille O'Neal", 'Kobe Bryant']
```

### Insert an element and delete some values

```js
const months = ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May')
// replaces 1 element at index 4
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

#### with a negative index

```js
const dreamTeam = [
  'Michael Jordan',
  "Shaquille O'Neal",
  'Kobe Bryant',
  'Magic Johnson',
  'Tim Duncan'
]
dreamTeam.splice(-3, 2, 'Bill Russell', 'Larry Bird')
// Will return ['Kobe Bryant', 'Magic Johnson']
```

and the dreamTeam array is now:

```js
;[
  'Michael Jordan',
  "Shaquille O'Neal",
  'Bill Russell',
  'Larry Bird',
  'Tim Duncan'
]
```

## Duplicate/select data

### Duplicate the entire array with .slice()

There are many ways to clone an array and slice is one of them. (The spread operator is also a fast and easy way to do so)

Do not forget the () after slice

Because Arrays are reference type, then we need a method to duplicate an array.
( Using newArray = oldArray will just both point to the same address in memory, they both always have the same value when we change one or the other )
Using Slice we can actually duplicate an array and the address in memory.

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
const duplicatedDreamTeam = dreamTeam.slice()
```

and, regardless of how you modify the dreamTeam, the duplicatedDreamTeam array is now:

```js
;['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
```

### Duplicate part of an array with .slice(1,3)

To select part of the array, the .slice(start,end) methods takes:

- Zero-based index at which to start extraction.
- Zero-based index **before** which to end extraction

```js
const dreamTeam = [
  'Michael Jordan',
  "Shaquille O'Neal",
  'Bill Russell',
  'Larry Bird',
  'Tim Duncan'
]
const selectedDreamTeam = dreamTeam.slice(1, 3)
```

and the dreamTeam array is now:

```js
;["Shaquille O'Neal", 'Bill Russell']
```

#### Duplicate everything after an index

Using only one index, the slice method will select everything after that index. Even if you use a negative index, it will select everything after (on the right).

```js
const dreamTeam = [
  'Michael Jordan',
  "Shaquille O'Neal",
  'Bill Russell',
  'Larry Bird',
  'Tim Duncan'
]
const selectedDreamTeam = dreamTeam.slice(3)
```

and the dreamTeam array is now:

```js
;['Larry Bird', 'Tim Duncan']
```

#### Using negative indexes

You can negative indexes only if both index are negative.

```js
const dreamTeam = [
  'Michael Jordan',
  "Shaquille O'Neal",
  'Bill Russell',
  'Larry Bird',
  'Tim Duncan'
]
const selectedDreamTeam = dreamTeam.slice(-3, -1)
```

and the dreamTeam array is now:

```js
;['Bill Russell', 'Larry Bird']
```

## Concatenate

Using the contact Method will merge two or more arrays together from left to right **and return a new array**

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal"]
const anotherDreamTeam = ['Bill Russell', 'Larry Bird']
const frenchTeam = ['Rudy Gobert', 'Tony Parker']
const finalDreamTeam = dreamTeam.concat(anotherDreamTeam, frenchTeam)
```

and the finalDreamTeam array is now:

```js
;[
  'Michael Jordan',
  "Shaquille O'Neal",
  'Bill Russell',
  'Larry Bird',
  'Rudy Gobert',
  'Tony Parker'
]
```

## Search Primitive value

You can search in an array using .indexOf().

- If the element you search is in the array in multiple places it will only return the first index
- If the element is not in the array it will return `-1`
- It works for all primitive value ( numbers, strings, undefined, null ) but not for reference value ( Objects and Arrays )

### Find an element

#### The first index

```js
const dreamTeam = ['Magic', 'Wilt', 'Michael', 'Michael', 'Shaquille']
dreamTeam.indexOf('Michael')
```

This will return:

```js
2
```

#### the last index

```js
const dreamTeam = ['Michael', 'Shaquille', 'Michael']
dreamTeam.lastIndexOf('Michael')
```

This will return:

```js
2
```

#### If the element isn't found

It will return -1

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal"]
dreamTeam.indexOf('Anthony Bennett')
```

Because Anthony Bennett is not in the dream team, this will return:

```js
;-1
```

### Another way to know if a primitive value is in an array (return a boolean)

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal"]
dreamTeam.includes('Dennis Schroeder')
```

This will return:

```js
false
```

## Find Reference value

### Use find() to search an object in an array

To search an object in an array, you .find(). You will need to pass an (anonymous) function as an argument.

- If the element you search is in the array in multiple places it will only return the first index
- You can pass the index and the entire array if you need to.

```js
const dreamTeam = [
  { name: 'Michael Jordan', team: 'Chicago Bulls' },
  { name: 'Tony Parker', team: 'Spurs' }
]
bestPlayer = dreamTeam.find((person, index, persons) => {
  return (person.name = 'Michael Jordan')
})
```

bestPlayer will return:

```js
{ name: 'Michael Jordan', team: 'Chicago Bulls' }
```

It is important to notice that this method will not create a copy, but only return the value that you are looking for.

```js
const dreamTeam = [
  { name: 'Michael Jordan', team: 'Chicago Bulls' },
  { name: 'Tony Parker', team: 'Spurs' }
]
bestPlayer = dreamTeam.find((person, index, persons) => {
  return (person.name = 'Michael Jordan')
})
// Changing the name of best player
bestPlayer.name = 'Scottie Pippen'
```

dreamTeam[0] and bestPlayer will both return:

```js
{ name: 'Scottie Pippen', team: 'Chicago Bulls' }
```

## Search the index of an object

```js
const dreamTeam = [
  { name: 'Michael Jordan', team: 'Chicago Bulls' },
  { name: 'Tony Parker', team: 'Spurs' }
]
indexFrenchPlayer = dreamTeam.findIndex(x => x.name === 'Tony Parker')
```

indexFrenchPlayer will return:

```js
1
```

## Iterating with for...of

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal"]

for (const player of dreamTeam) {
  console.log(player)
}
```

```js
'Michael Jordan'
"Shaquille O'Neal"
```

## Iterating and index with forEach()

Here is how to access the data in an array and build an new array of objects with the index and modified datas

```js
const prices = [3, 7, 10]
const tax = 0.45
const taxAdjustedPrices = []

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
  taxAdjustedPrices.push(priceObj)
})
```

and the new taxAdjustedPrices array is:

```js
;[
  { index: 0, taxAdjPrice: 4.35 },
  { index: 1, taxAdjPrice: 10.15 },
  { index: 2, taxAdjPrice: 14.5 }
]
```

## Iterating over and transforming

Contrary to foEach(), .map has to return something. It won't modify the array on which is called on, but will return a new array we can store in a variable.

```js
const dreamTeam = [
  { name: 'Michael Jordan', team: 'Chicago Bulls' },
  { name: 'Tony Parker', team: 'Spurs' },
];
const playerDreamTeam = dreamTeam.map(function (obj) {
  const players = []
  players.push(dreamTeam.name;)
  return players
});
```

### Create an object from an array

```js
const numbers = [2, 5, 44]

const mappedNumbers = numbers.map(val => ({ num: val }))
```

mappedNumbers is now:

```js
;[{ num: 2 }, { num: 5 }, { num: 44 }]
```

### Create an array of object with .map

```js
const dreamTeam = [
  { name: 'Michael Jordan', team: 'Chicago Bulls' },
  { name: 'Tony Parker', team: 'Spurs' }
]
const playerArray = dreamTeam.map(player => player.name)
```

and the playerArray array is now:

```js
;['Michael Jordan', 'Tony Parker']
```

## Iterate and REDUCE to one value

The reduce methods iterate though an array and return one single value. It has the particularity of taking an initial value. here I am using 0 to sum up the points starting at zero. After returning the value, naturally, the original array isn't modified.

```js
const points = [50, 20, 3]
const sumPoints = points.reduce(
  (previousValue, currrentValue, currentIndex, points) => {
    return previousValue + currrentValue
  },
  0
)
```

and the sumPoints is:

```js
73
```

## Sort an array

**Note:** This method changes the original array.

### Sort an array of strings by alphabetical order

```js
const dreamTeam = ['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
const sortedDreamTeam = dreamTeam.sort()
```

and the new sortedPrices array is:

```js
;['Kobe Bryant', 'Michael Jordan', "Shaquille O'Neal"]
```

### Sort an array of numbers by alphabetical order

The .sort() method alone will not sort an array of number in ascending order correctly without a "compare function". It would place '100' before '2' because '1' is before '2' and the numbers are sorted as strings.

```js
const points = [63, 50, 61]
points.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    // a must be equal to b
    return 0
  }
})
```

or

```js
const points = [63, 50, 61]
points.sort(function(a, b) {
  return a - b
})
```

or with ES2015

```js
const points = [63, 50, 61]
points.sort((a, b) => a - b)
```

and the points array is now:

```js
;[50, 61, 63]
```

### Reverse an array

```js
const points = [63, 50, 61]
points.reverse()
```

or reverse the sorting logic (change 1 to -1 and vice versa)

```js
const points = [63, 50, 61]
points.sort((a, b) => {
  if (a < b) {
    return 1
  } else if (a > b) {
    return -1
  } else {
    // a must be equal to b
    return 0
  }
})
```

and the points array is now:

```js
;[61, 50, 63]
```

## Filter an array

**Note:** This method will return a brand new array

This methods takes an function that should return `true` if the value needs to be kept or `false` if it should be dropped.
We don't need to use the index or the original array.

```js
const points = [63, 50, 51, 100, 1]
const filteredPoints = points.filter((point, index, points) => {
  return point < 61
})
```

or even shorter with the arrow function :

```js
const points = [63, 50, 51, 100, 1]
const filteredPoints = points.filter(x => x < 61)
```

and the filteredPoints array is now:

```js
;[50, 51, 1]
```

## Chaining Methods

Don't forget that you can chain methods on array as long as you call methods on methods that return an array.

Since the score of this gamePoints are stored in an object. Let's use .reduce() on a .map() to get the final Score

```js
const gamePoints = [
  { point: 3, player: 'Michael Jordan' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
const sumGamePoints = gamePoints
  .map(obj => obj.point)
  .reduce((sumVal, curVal) => sumVal + curVal, 0)
```

and the sumGamePoints is now:

```js
7
```

## The ...spread operator

### Duplicate an array with the ...spread operator

This has the same syntax but is different from the rest operator (used in function to allows us to represent an indefinite number of arguments as an array.)

You can duplicate an array using loop, slice, Array.from(), concat, map, but the ...spread operator is the fastest way.

```js
const dreamTeam = new Array('Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant')
const copiedDreamTeam = [...dreamTeam]
```

and copiedDreamTeam is now:

```js
;['Michael Jordan', "Shaquille O'Neal", 'Kobe Bryant']
```

#### A common mistake

A common mistake is to duplicate an array of object and think that you duplicated the objects as well. No, you didn't.
You can add new objects to the new array without affecting the original array, but **modifying** any object will still modify it everywhere.

```js
const gamePoints = [
  { point: 3, player: 'Michael Jordan' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
const copiedgamePoints = [...gamePoints]
copiedgamePoints[0].player = 'Kobe Bryant'
```

The gamePoints array is now:

```js
;[
  { point: 3, player: 'Kobe Bryant' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
```

##### Fix that problem with .map

```js
const gamePoints = [
  { point: 3, player: 'Michael Jordan' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
const copiedgamePoints = [...gamePoints].map(gamepoint => ({
  point: gamepoint.point,
  player: gamepoint.player
}))
copiedgamePoints[0].player = 'Kobe Bryant'
```

The gamePoints array is still:

```js
;[
  { point: 3, player: 'Michael Jordan' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
```

and the copiedgamePoints is now:

```js
;[
  { point: 3, player: 'Kobe Bryant' },
  { point: 1, player: "Shaquille O'Neal" },
  { point: 3, player: 'Michael Jordan' }
]
```

### Pull element out of an array to be used as arguments

```js
const points = [63, 50, 51, 100]
const lowestPoint = Math.min(...points)
```

```js
50
```

## Array destructuring

THis is a special syntax to create a firstName and a lastName variable from the player array

```js
const addedScore = ['Michael Jordan', 3]
const [playerName, playerPoint] = addedScore
```

playerName is now

```js
'Michael Jordan'
```

playerPoint is now

```js
3
```

### Collect some the rest of the info with the rest operator

```js
const addedScore = ['Michael Jordan', 3, 'NBA', 'Chicago Bulls']
const [playerName, playerPoint, ...otherInfos] = addedScore
```

otherInfos is now an array with the remaining data:

```js
;['NBA', 'Chicago Bulls']
```
