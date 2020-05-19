<template>
  <p>My Full name is: {{ fullName }}</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Romain',
      lastName: 'Capelle'
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
