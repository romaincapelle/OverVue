---
pageClass: js
---

# Asynchronous code

JavaScript is a synchronous, blocking, single-threaded language. But we can manipulate JavaScript to behave in an asynchronous way. It's especially important for operation that take a long time or operation we are not sure will ever happen ( like a click ).

The browser is your friend when it comes to operation that takes a long time. For instancce, when adding an event listener to a button as follow, we are waiting for the event to happen. So we are already dealing there with code that need to be executed in the future. On 'click', we send a _callback function_, 'trackUserHandler' from the browser back to the JavaScript code to be executed.

```js
const button = document.querySelector('button')
function trackUserHandler() {
  console.log('Clicked!')
}
button.addEventListener('click', trackUserHandler)
```

## Event loop

The event loop is not part of the JavaScript engine, it's part of the browser. It's job is to synchronize the callstack. The event loop runs all the time, and check if the stack is empty. The event loop pushes to the call stack.

In the following example, we use the geolocalistion API is done by the Browser.

```js
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    posData => {
      console.log(posData)
    },
    error => {
      console.log(error)
    }
  )
  console.log('Getting position...')
}
trackUserHandler()
```

Output

```js
'Getting position...'
GeolocationPosition {}
```

Here the 'Getting position...' is always executed **before** showing the position.
Because the geolocalistion will be handed off to the browser. The console.log() then is first in the event loop and is executed right away. The javascript engine hand back the geolocalisation request and add it in second place in the event loop, therefore it will **always** appear second.

## Callbacks function

A callback function is a function passed into another function as an argument.

```js
function whereDoILive() {
  setTimeout(() => {
    console.log('You live in Tokyo')
  }, 0)
  console.log('Getting position...')
}
whereDoILive()
```

Output

```js
'Getting position...'
'You live in Tokyo'
```

Even though we set a timer of 0 ms. We have a callback inside a callback. ( If there are a ton of callback inside callback, it's often call 'Callback Hell') So the "Getting position will be added to the event loop before the "You live in Tokyo".
Note: 0 ms is not how long it will take for the browser to execute the function but the minimum amount of time it has to wait.

Promises are here to avoid Callback Hell.

## Promises (.then)

### Promisifying Legacy Web APIs

SetTimeout(), for instance, does not support promises, they still use callback. But We can wrap into promise supported code:

```js
```

### Newer Functionalities that support Promises

## Async/await
