<template>
  <div class="container">
    <h1>Lists:</h1>
    <h2>Using v-for without index</h2>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <h2>Using v-for with index</h2>
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="ingredient">
        {{ i + 1 }}: {{ ingredient }}, with index {{ i }}
      </li>
    </ul>

    <!-- Using v-for on templates 
      <template v-for="(ingredient, index) in ingredients">
        <span :key="ingredients.index"> {{ ingredient }} - </span>
        <span :key="ingredients.index">with index {{ index }}</span>
      </template>-->

    <h2>Using v-for on objects</h2>
    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }} is {{ person.age }} and {{ person.nationality }}
      </li>
    </ul>

    <h2>Using v-for on objects</h2>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <div v-for="(v, k, index) in person" :key="index">
          {{ k }}: {{ v }} with index: {{ index }}
        </div>
      </li>
    </ul>
    <h2>Using v-for to loop though integers</h2>
    <span v-for="n in 6" :key="n">{{ n }} sheep </span>
    <hr />
    <input
      type="text"
      v-model="ingredient"
      @keyup.enter="addIngredient(ingredient)"
    /><span>Presss enter to add</span>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      ingredient: 'Spices',
      ingredients: ['Coffee', 'Water', 'Cheese'],
      persons: [
        { id: '001', name: 'Romain', age: 32, nationality: 'French' },
        { id: '002', name: 'Darcy', age: 32, nationality: 'American' },
      ],
    };
  },
  methods: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    },
  },
};
</script>
