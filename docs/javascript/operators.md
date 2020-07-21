---
pageClass: js
---

## Operators

### Assignment

Use "=" to assign a value ( use "==" or "==="for [comparaison](/javascript/operators.html#comparison-operators))

```js
salaryMichaelScott = 80
console.log(salaryMichaelScott) // 80
```

### Addition

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott + 10
console.log(salaryMichaelScott) // 90
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott += 10
console.log(salaryMichaelScott) // 90
```

To add 1 you can do

```js
salaryMichaelScott = 80
salaryMichaelScott++
console.log(salaryMichaelScott) // 81
```

### Subtraction

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott - 10
console.log(salaryMichaelScott) // 70
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott -= 10
console.log(salaryMichaelScott) // 70
```

To subtract 1 you can do

```js
salaryMichaelScott = 80
salaryMichaelScott--
console.log(salaryMichaelScott) // 79
```

### Multiplication

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott * 2
console.log(salaryMichaelScott) // 160
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott *= 2
console.log(salaryMichaelScott) // 160
```

### Division

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott / 2
console.log(salaryMichaelScott) // 40
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott /= 2
console.log(salaryMichaelScott) // 40
```

### Remainder

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott % 11
console.log(salaryMichaelScott) // 2
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott %= 11
console.log(salaryMichaelScott) // 2
```

### Exponentiation

```js
salaryMichaelScott = 80
salaryMichaelScott = salaryMichaelScott ** 2
console.log(salaryMichaelScott) // 6400
```

is the same as

```js
salaryMichaelScott = 80
salaryMichaelScott **= 2
console.log(salaryMichaelScott) // 6400
```

## Comparison operators

### Equality Operators

The strict equality operator (===) checks whether two values are equal and of the same type.

```js
3 === 3
true
3 === '3'
false
3 == '3'
true
```

### Relational Operators

`<` and `>` test if one value is **strictly** less than or greater than another.

```js
salaryMichaelScott = 80
salaryMichaelScott < 80 // false
```

`<=` and `>=` test if one value is less than or equal to, or greater than or equal to, another.

```js
salaryMichaelScott = 80
salaryMichaelScott <= 80 // true
```

## Logical operators

### AND - &&

Using `||` it will return `true` if all values are true.

```js
if (2 > 1 && 10 > 4) {
  console.log('Yes') // yes
}
```

### OR - ||

Using `||` it will return `true` if at least one value is true.

```js
if (2 == 1 || 10 > 4) {
  console.log('Still Yes') // Still yes
}
```

## Combining logical and Comparison

Logical operators have precedence. Which means that Javascript will perform the operation [in a certain order.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

```js
if ((2 == 1 && 10 == 4) || (2 > 1 && 10 > 4)) {
  console.log('It worked') // It worked
}
```

---

[More on expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
