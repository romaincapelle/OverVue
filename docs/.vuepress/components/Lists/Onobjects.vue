<template>
  <div>
    <li v-for="person in persons" :key="person.id">
      {{ person.name }} is {{ person.age }}
    </li>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      persons: [
        { id: '001', name: 'Joe Exotic', age: 57 },
        { id: '002', name: 'Carole Baskin', age: 58 }
      ]
    }
  }
}
</script>
