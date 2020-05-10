# Vuex

## Using Getters

#### Input: (.vue file)

```Vue {3,11}
<template>
    <div>
        <p>Your username is: {{ username }}</p>
    </div>
</template>

<script>
export default {
  computed: {
    username () {
        return this.$store.state.username
    }
  }
};
</script>
```

#### Input: (store.js)

```js {9,13-15}
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Statesin Vuex follow the same rules as the data in a Vue instance
    username: 'BenAfleckIsAnOkActor',
  },
  getters: {
    // Getters are like computed properties for stores
    username: (state) => {
      return state.username;
    },
  },
});
```

#### Output:

<p>Your username is: BenAfleckIsAnOkActor</p>

# Communication with VUEX

## Using mapGetters

#### Input: (.vue file)

```Vue {3,8,13-15}
<template>
    <div>
        <p>Your username is: {{ username }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'username',
      // ...
    ])
  }
};
</script>
```

#### Input: (store.js)

```js {9, 13-15}
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Statesin Vuex follow the same rules as the data in a Vue instance
    username: 'BenAfleckIsAnOkActor',
  },
  getters: {
    // Getters are like computed properties for stores
    username: (state) => {
      return state.username;
    },
  },
});
```

#### Output:

<p>Your username is: BenAfleckIsAnOkActor</p>

## Using Actions and Mutations

### Grabbing the Whole context

#### Input: (.vue file) {}

```Vue
<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stringCounter']),
  },
  methods: {
    ...mapActions([
      'increment',
    ]),
  },
};
</script>
```

#### Input: (store.js)

```Javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Follows the same rules as the data in a Vue instance
    counter: 1,
  },
  getters: {
    stringCounter: (state) => {
      return state.counter + 'click';
    },
  },
  mutations: {
    // CANNOT be As Asynchronous
    increment: (state) => {
      state.counter++;
    },
  },
  actions: {
    // CAN be Asynchronous
    // Here we grab the whole context
    increment: (context) => {
      context.commit('increment');
    },
  },
});
```

#### Output:

<VuexWholeContect />

### Grabbing only the commit

#### Input: (.vue file)

```Vue
<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stringCounter']),
  },
  methods: {
    ...mapActions([
      'decrement',
    ]),
  },
};
</script>
```

#### Input: (store.js)

```Javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Follows the same rules as the data in a Vue instance
    counter: 100,
  },
  getters: {
    // Computed properties for stores
    stringCounter: (state) => {
      return state.counter + 'click';
    },
  },
  mutations: {
    // CANNOT be As Asynchronous
    //The only way to actually change state in a Vuex store is by committing a mutation.
    decrement: (state) => {
      state.counter--;
    },
  },
  actions: {
    // CAN be Asynchronous
    // Actions are similar to mutations, the differences being that:
    // Actions need to commit to mutation
    //  Action can GRAB the only the commit
    decrement: ({ commit }) => {
      commit('decrement');
    },
  },
  modules: {},
});

```

#### Output:

<VuexWithCommit />

### Grabbing the commit and the payload

#### Input: (.vue file)

```Vue
<template>
  <div>
    <p>{{ stringCounter }}</p>
    <button @click="addOne">+1 (asynchronous)</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['stringCounter']),
  },
  methods: {
    ...mapActions(['addOne']),
  },
};
</script>
```

#### Input: (store.js)

```Javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Follows the same rules as the data in a Vue instance
    counter: 100,
  },
  getters: {
    // Computed properties for stores
    stringCounter: (state) => {
      return state.counter + 'click';
    },
  },
  mutations: {
    // CANNOT be As Asynchronous
    //The only way to actually change state in a Vuex store is by committing a mutation.
    reset: (state) => {
      state.counter += 1;
    },
  },
  actions: {
    // CAN be Asynchronous
    //Actions are similar to mutations, the differences being that:
    //Actions need to commit to mutation
    addOne: ({ commit }) => {
      setTimeout(() => {
        commit('reset');
      }, 1000);
    },
  },
  modules: {},
});
```

#### Output:

<VuexWithAsynch />
