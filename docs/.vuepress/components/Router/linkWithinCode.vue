<template>
  <div>
    <button @click="goHome">Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome: function() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
