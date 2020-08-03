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

To post data with Axios, you just need to import it (line 14), and then use the the post method on axios which takes two arguments, the url as a string where you send the data ( Here I am using a firebase url), where I am sending the second parameters the object I created ( here 'name').
I am then catching the response or the error.

#### Input:

<<< @/docs/.vuepress/components/Axios/Post.vue{14,29-32}

#### Output:

<Axios-PostRender />

## GET
