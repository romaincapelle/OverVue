<template>
  <div>
    <li v-for="zoo in zoos" :key="zoo.id">
      A ticket to the {{ zoo.name }} cost ${{ zoo.price }}
    </li>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      zoos: [
        { id: '001', name: 'San Diego Zoo', price: 58 },
        { id: '002', name: 'G.W. Zoo', price: 15 },
        { id: '003', name: 'Big Cat Rescue', price: 29 }
      ]
    }
  }
}
</script>
