<template>
  <div>
    <p>{{ stringCounter }}</p>
    <button @click="addOne">+1 (asynchronous)</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stringCounter: 100
    }
  },
  methods: {
    addOne() {
      setTimeout(() => {
        this.stringCounter++
      }, 1000)
    }
  }
}
</script>
