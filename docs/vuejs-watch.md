---
pageClass: vuejs
---

# Watch

It is tempting to overuse watch, it is often a better idea to use a computed property.
Watch is most useful when you want to perform asynchronous in response to changing data.

"Watchers are incredibly good for executing logic that applies to something else when a change on a property occurs" - [Chris Fritz](https://twitter.com/chrisvfritz)

#### Input:

<<< @/docs/.vuepress/components/Watch/Watch.vue{4,13,17-27}

#### Output:

<Watch-Watch />

[See the official Vue.js doc](https://vuejs.org/v2/guide/computed.html#Watchers)
