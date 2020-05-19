<template>
  <div>
    <li v-for="ingredient in ingredients" :key="ingredient">
      {{ ingredient }}
    </li>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      ingredients: ['Coffee', 'Cheese', 'Water']
    }
  }
}
</script>
