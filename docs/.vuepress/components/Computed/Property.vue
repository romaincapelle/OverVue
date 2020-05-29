<template>
  <p>My Full name is: {{ fullName }}</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Joe',
      lastName: 'Exotic'
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
