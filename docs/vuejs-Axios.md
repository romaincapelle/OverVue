---
pageClass: vuejs
---

# Axios

This section is based on the [Axios package](https://github.com/axios/axios). Axios is a Promise based HTTP client. It's a JavaScript library used to make HTTP requests.
I am using a Realtime Database from [firebase](https://firebase.google.com/).

## Installation via NPM

```
npm install --save axios
```

## POST

To post data with Axios, you just need to import it (line 14), and then use the POST method on Axios which takes two arguments, the url as a string where you send the data Here I am using a firebase url), where I am sending the second parameters the object I created (here 'name').
I am then catching the response or the error.

Of course the exact steps and the url, depend on the backend, on how you organize the data.

#### Input:

<<< @/docs/.vuepress/components/Axios/Post.vue{14,29-32}

#### Output:

<Axios-PostRender />

## GET

To get data with axios, you need to import it. (line 6), and then use the GET method on Axios which take at least one argument, the url as a string where the data is retrieved from. Here I am using a firebase url. Here I am receiving a object as a response which contain a list of users that I am loop though to assign an id and extract the `firstName`.

Of course the exact steps and the url, depend on the backend, on how the data is organized...

#### Input:

<<< @/docs/.vuepress/components/Axios/Get.vue{6,14-28}

#### Output:

<Axios-GetRender />

## Setting a global request configuration

You can set up a **baseURL** for Axios. It is convenient because:
- You can just refer to it in the components where it is used and
- You don't have to change it everywhere whenever you need to use a different one.

In the **main.js** file, you need to import Axios and just set the **baseURL** using the `defaults` method on 'axios'.

<<< @/docs/.vuepress/components/Axios/main.js{3,7}

You can now delete that part of the link from the components. For the [Post](#post) example above, the following line:

`axios.post('https://vue-axios-8cb49.firebaseio.com/employees.json', name)`

is now

`axios.post('/employees.json', name)`

### Adding headers configuration

You can add global header configuration on several specifications or targets.

On `common`, used for any requests, no matter which type it is, you can specify your own header by adding a property. For example, here, I am adding a random Authorization header ( Line )
You can also target the GET request only. For example here, I am forcing all GET request to only accept JSON.

<<< @/docs/.vuepress/components/Axios/main-with-config.js{3,7-9}

Visit the [Axios Github repository](https://github.com/axios/axios), for more info on [the Axios configuration options](https://github.com/axios/axios#request-config)

## Using Axios Interceptors

Interceptors are functions you can define which intercept that get triggered on each request and each response that reaches it, before they are handled by then or catch.

<<< @/docs/.vuepress/components/Axios/main-with-interceptors.js{9-23,25-36}

You can also [remove those interceptors](https://github.com/axios/axios#interceptors) by using `eject`.

## Custom Axios Instances.

In the case where you want several Axios instances. For instance, if you want to use several baseURL or use a specific header somewhere. You can customize those instances. Here I am creating a new file `axios-auth.js` where I will set up a random custom header. You don't need to create a new file but here I will.

Create a file `axios-auth.js` in src folder.

```
touch src/axios-auth.js
```

You can now customize that instance and export it to be used anywhere.

<<< @/docs/.vuepress/components/Axios/axios-auth.js

And in the component, you can now import this instead of axios as followed:

`import axios from '../axios-auth';`

[Axios Docs](https://github.com/axios/axios)