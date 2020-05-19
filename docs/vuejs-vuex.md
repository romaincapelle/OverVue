# Vuex

## State

States in Vuex follow the same rules as the data in a Vue instance.

#### Input

```Vue {2,9}
<template>
  <p>The best ice cream flavor is "{{ flavor }}"</p>
</template>

<script>
export default {
  computed: {
    flavor() {
      return this.$store.state.flavor
    }
  }
}
</script>
```

#### Input: (store.js)

```js {8}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flavor: 'Salted Caramel'
  }
})
```

#### Output

<p>The best ice-cream flavor is "Salted Caramel".</p>

## Getters

#### Input: (.vue file)

```Vue {3,10-12}
<template>
  <div>
    <li v-for="videoGame in videoGames" :key="videoGame">
      {{ videoGame.name }}
    </li>
  </div>
</template>

<script>
export default {
  computed: {
    videoGames() {
      return this.$store.getters.videoGames
    }
  }
}
</script>
```

#### Input: (store.js)

```js {8-12,15-17}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoGames: [
      { id: 1, name: 'Mario Bros', finnished: true },
      { id: 2, name: 'Zelda', finnished: false },
      { id: 2, name: 'Metal Gear Solid', finnished: true }
    ]
  },
  getters: {
    videoGames: state =>
      state.videoGames.filter(videoGames => videoGames.finnished)
  }
})
```

#### Output:

<div><li> Mario Bros </li><li> Metal Gear Solid </li></div>

# Communication with VUEX

### Using mapGetters

#### Input: (.vue file)

```Vue {3,8,12-15}
<template>
  <div>
    <p>Your username is: {{ username }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'username'
      // ...
    ])
  }
}
</script>
```

#### Input: (store.js)

```js {8,10-14}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'BenAfleckIsAnOkActor'
  },
  getters: {
    username: state => {
      return state.username
    }
  }
})
```

#### Output:

<p>Your username is: BenAfleckIsAnOkActor</p>

## Actions and Mutations

The only way to actually change state in a Vuex store is by committing a mutation.

Actions are similar to mutations, the differences being that:
Instead of mutating the state, actions commit mutations.
Actions can contain arbitrary asynchronous operations.

### Grabbing the Whole context

#### Input: (.vue file) {}

```Vue {3-4,14,17-19}
<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['stringCounter'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
```

#### Input: (store.js)

```js {8,11-13,16-18,21-23}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1
  },
  getters: {
    stringCounter: state => {
      return state.counter + 'click'
    }
  },
  mutations: {
    increment: state => {
      state.counter++
    }
  },
  actions: {
    increment: context => {
      context.commit('increment')
    }
  }
})
```

#### Output:

<VuexWholeContect />

### Grabbing only the commit

#### Input: (.vue file)

```Vue {3-4,14,17}
<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['stringCounter'])
  },
  methods: {
    ...mapActions(['decrement'])
  }
}
</script>
```

#### Input: (store.js)

```js {8,11-13,16-18,21-23}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 100
  },
  getters: {
    stringCounter: state => {
      return state.counter + 'click'
    }
  },
  mutations: {
    decrement: state => {
      state.counter--
    }
  },
  actions: {
    decrement: ({ commit }) => {
      commit('decrement')
    }
  }
})
```

#### Output:

<VuexWithCommit />

### Grabbing the commit and the payload

#### Input: (.vue file)

```Vue {3-4,14,17}
<template>
  <div>
    <p>{{ stringCounter }}</p>
    <button @click="addOne">+1 (asynchronous)</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['stringCounter'])
  },
  methods: {
    ...mapActions(['addOne'])
  }
}
</script>
```

#### Input: (store.js)

```js {8,11-13,16-18,21-25}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 100
  },
  getters: {
    stringCounter: state => {
      return state.counter + 'click'
    }
  },
  mutations: {
    reset: state => {
      state.counter += 1
    }
  },
  actions: {
    addOne: ({ commit }) => {
      setTimeout(() => {
        commit('reset')
      }, 1000)
    }
  },
  modules: {}
})
```

#### Output:

<VuexWithAsynch />
