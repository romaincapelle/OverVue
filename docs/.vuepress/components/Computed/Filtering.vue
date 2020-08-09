<template>
  <div>
    <input v-model="filterText" />
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="fruit">
        {{ index }}: {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText)
      })
    }
  }
}
</script>
