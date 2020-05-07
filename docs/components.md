# Components Communication

## Import a component

```Javascript {3,8,11-13}
<template>
  <div>
    <HelloWorld msg="Hello"/>
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

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentA.vue{3,14}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildA.vue{3,9}

#### Output:

<MyParentA />

## Passing data to Parent

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentB.vue{6,14}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildB.vue{3,9}

#### Output:

<MyParentB />

## Sync data Parent/Child

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentSync.vue{6,12}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildSync.vue{10-16,18-21}

#### Output:

<MyParentSync />

##### [See the official Vue.js doc](https://vuejs.org/v2/guide/components.html)
