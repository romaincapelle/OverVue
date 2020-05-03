# Computed Properties

Computed properties, convenient for simple operations, allow us to define a property that is used the same way as data, but can also have some custom logic that is cached based on its dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.

- Updating a large amount of information while a user is typing, such as filtering a list
- Gathering information from your Vuex store
- Form validation
- Data visualizations that change depending on what the user needs to see

#### Input:

<<< @/docs/.vuepress/components/VueComputed.vue{5,14-15,20}

#### Output:

<VueComputed />
