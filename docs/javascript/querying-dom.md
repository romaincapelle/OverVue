# Working with the Dom

## Querying one DOM element

### querySelector()

```js
querySelector()
```

`querySelector()` takes a valid CSS selector string like in a CSS file like `h1` or a class `.button` or a tag `#logo`. Just like CSS, you can select `ul li:first-of-type`... it also can take sudo selector like `.button:hover`.

### getElementById()

```js
getElementById()
```

`getElementById()` takes an id as a selector. Since their should be only one id, then this method should only return one element. It will gives you the first one otherwise. For instance, you can do `document.getElementById(red);`. Note that you don't use the # for all the getElement... methods.

## Querying Multiple DOM Elements

### querySelectorAll()

querySelectorAll() takes a CSS selector, a tag name a CSS class. It will return an collection of element (array-like object), typically a NodeList.

### getElementsByTagName()

It gives you all the element that have a specific tag. This gives you a live list, so if you add or select element it will be reflected in the variable you store it in. For instance `document.getElementsByTagName('li');`.

### getElementByClassName()

This will search for a class you specified and return a Html Collection. For insance to look for element with the class `.list-item`, you can `document.getElementsByClassName('list-item')`

## Manipulate the DOM properties

Once you selected one or several element, you can read their content, their id, their classes. You can also change their content. Not all property of elements are writable.

### Read content and modifying it.

Once you selected an element and eventually stored that selected content in a variable. You can read its content with `.textContent`. For instance `theH1.textContent`

Before

```html
<h1>Hello World</h1>
```

```js
const h1 = document.querySelector('h1')

h1.textContent = 'Hi Matt'
```

Output

<h1>Hi Matt</h1>

### Read and assign Classes

Once you selected an element and eventually stored that selected content in a variable. You can read its Class names with `.className`. For instance `theH1.className`. In the same fashion as with `.textContent`, you can assign a new class to an element.

```html
<h1>Hello World</h1>
```

```js
const h1 = document.querySelector('h1')

h1.className = 'title'
```

Output

<h1 class="title">Hello World</h1>

### Assign a property

You can directly assign a style property to an element.

```html
<h1>Hello World</h1>
```

```js
const h1 = document.querySelector('h1')

h1.style.color = 'red'
```

Output

<h1 style="color: red;">Hello World</h1>

If the property has a `-` like `background-color`, you should use `backgroundColor` ( delete the space and Capitalize the next word.)

## Create Element

### CreateElement()

innerHTML

appendChild()
append()
inserAdjacentElement()
removeChild()

## Replace element
replaceChild()
ReplaceWith()

## Remove element

list.remove();
list.parentElement.removeChild(List)
