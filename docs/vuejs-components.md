# Passing data though components

First let see how to import a component and pass a string

## Import a component

```Vue {3,8,11-13}
<template>
  <div>
    <HelloWorld msg="I like Aussies"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

## Passing data to Child

Now let's see how to pass data from parent to child component.

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentA.vue{3,14}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildA.vue{3,9}

#### Output:

<MyParentA />

## Passing data to Parent

Now let's see how to pass data from Child to Parent component.

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentB.vue{6,14}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildB.vue{3,9}

#### Output:

<MyParentB />

## Sync data Parent/Child

To pass data parents to Child, you can sync the data.
You cannot pass data from child to sibling component directly, without passing the data though an event but or using [Vuex](/vuejs-vuex)

#### Input Parent:  

<<< @/docs/.vuepress/components/MyParentSync.vue{3-4,12}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildSync.vue{4,10-16,18-21}

#### Output:

<MyParentSync />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/components.html)
