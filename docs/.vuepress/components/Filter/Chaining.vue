<template>
  <p>{{ employee | capitalize | reverseInPlace | lowercase }}</p>
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
    },
    reverseInPlace(str) {
      var words = []
      words = str.match(/\S+/g)
      var result = ''
      for (var i = 0; i < words.length; i++) {
        result +=
          words[i]
            .split('')
            .reverse()
            .join('') + ' '
      }
      return result
    },
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>
