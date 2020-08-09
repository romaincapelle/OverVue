<template>
  <p>{{ employee | capitalize }}</p>
</template>

<script>
export default {
  data() {
    return {
      employee: 'Creed Bratton'
    }
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase()
    }
  }
}
</script>
