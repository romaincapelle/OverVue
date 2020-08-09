<template>
  <p>{{ employee | capitalize }}</p>
</template>

<script>
export default {
  data() {
    return {
      employee: 'Creed Bratton'
    }
  }
}
</script>
