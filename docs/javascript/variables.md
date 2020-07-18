---
pageClass: js
---

# Variables

## Declare a Variables

Using Let and Const, you can declare block scoped Variables

```Js
let age = 57
const name = 'Michael Jordan'
```

Using let, the value CAN change.
Using const the value CANNOT change.

[var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) exist as well.

## Assigning a new value to a variable

Do not re-declare the variable with let

```Js
age = 58
```

## Comments

There are two types of comments in Javascript

```js
/*
Everything in between is a comment.
*/
// This is a comment
```

## Operators

##### Assignment

```Js
let score = 2
```

##### Add

```Js
let score = 0
score = score + 3;
```

is the same as

```Js
let score = 0
score += 3;

```

The score is `3`

##### Substract

```Js
let score = 10
score = score - 3;

```

is the same as

```Js
let score = 0
score -= 3;
```

The score is `7`

##### Multiply

```Js
let score = 10
score = score \* 3;

```

is the same as

```Js
let score = 0
score *= 3;
```

The score is `7`

##### Divide

```Js
let score = 9
score = score - 3;

```

is the same as

```Js
let score = 9
score /= 3;
```

The score is `3`

##### Divide and Yeld

```Js
let score = 10
yieldscore = score % 3;
```

The yieldscore ( yield the remaining of the division ) is `1`

##### Exponentiation

```Js
let score = 2
Score = score \*\* 3;
```

```js
The score is `8`
```

##### Equality == amd ===

```js
3 === 3
true
3 == '3'
true
```

## Data Types

## Numbers

```js
23
;-3
22.548
```

## Strings

```js
let sentence = 'The first “hoops” were actually just peach baskets.';
let news = `All` + {22} + `teams in the NBA restart`
let news = `All ${22} teams in the NBA restart` // Template literals
```

## Conditionals

```js
let player = 'Michael Jordan'
if (player === 'Michael Jordan') {
  alert('Yay, I love Michael Jordan!')
} else {
  alert('Awwww, no...')
}
```
