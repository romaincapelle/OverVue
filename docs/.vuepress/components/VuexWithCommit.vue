<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="stringCounter--">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stringCounter: 100
    }
  },
  computed: {
    doubleCounter: function() {
      return this.stringCounter * 2
    }
  }
}
</script>
