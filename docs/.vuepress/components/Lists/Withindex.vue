<template>
  <div>
    <li v-for="(ingredient, i) in ingredients" :key="ingredient">
      {{ i + 1 }}: {{ ingredient }}
    </li>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      ingredients: ['Coffee', 'Water', 'Cheese'],
    };
  },
};
</script>
