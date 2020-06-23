# Components

## Import a component

This is how to register and import a component.

##### Input Parent

```Vue {3,8,11-13}
<template>
  <div>
    <MyFirstComponent/>
  </div>
</template>

<script>
import MyFirstComponent from './components/MyFirstComponent.vue'

export default {
  components: {
    MyFirstComponent
  }
}
</script>
```

##### Input Child (MyFirstComponent.vue)

```Vue
<template>
  <p>I like tigers.</p>
</template>

<script>
import MyFirstComponent from './components/MyFirstComponent.vue'

export default {
  components: {
    MyFirstComponent
  }
}
</script>
```

##### Output

I like tigers

## Dynamically import components

Using `:is="componentName"` you can switch between components

##### Input

<<< @/docs/.vuepress/components/dynamicComponent.vue{5,10-11,20}

#### Output

<dynamicComponentRender />

### And keep the data alive

Using `<keep-alive>`, inactive components will be cached.

```js {1,3}
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
```

## Passing data to Child

We are passing data, that is not bound.

##### Input

```Vue {3,8,11-13}
<template>
  <div>
    <MyFirstComponent msg="I like tiger print"/>
  </div>
</template>

<script>
import MyFirstComponent from './components/MyFirstComponent.vue'

export default {
  components: {
    MyFirstComponent
  }
}
</script>
```

##### Output

<p>I like tiger prints</p>

## Passing bound data to Child

Now let's see how to pass bound data from parent to child component.

#### Input Parent:

```vue{6,14}
<template>
  <div>
    <p>Parent component - Name: {{ name }}</p>
    <button @click="name = 'Howard'">Change name</button>
    <button @click="name = 'Carole'">Reset</button>
    <MyChildA :someText="name"></MyChildA>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'Carole'
    }
  }
}
</script>
```

#### Input Child:

<<< @/docs/.vuepress/components/MyChildA.vue{3,9}

:::tip
Props can be an array or an object ( in order to add some validation ) - See below
:::

#### Output:

<MyParentA />

## Passing data to Parent

Now let's see how to pass data from Child to Parent component.

#### Input Parent:

<<< @/docs/.vuepress/components/MyParentB.vue{4,12}

#### Input Child:

<<< @/docs/.vuepress/components/MyChildB.vue{6-7,15-19}

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
