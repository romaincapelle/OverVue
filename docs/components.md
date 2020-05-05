# Vue Components

## Import a component

```Javascript {2,5-7}
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

<<< @/docs/.vuepress/components/MyParentB.vue{4,12}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildB.vue{3,9}

#### Output:

<MyParentB />

## Passing data to Parent

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentE.vue{1}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildE.vue{1}

#### Output:

<MyParentE />

## Sync data Parent/Child

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentSync.vue{4,12}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildSync.vue{10-16,18-21}

#### Output:

<MyParentSync />
