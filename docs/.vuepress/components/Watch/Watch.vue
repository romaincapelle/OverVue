<template>
  <div>
    <button @click="counter++">Increase</button>
    <p>{{ counter }} big cats</p>
    <p>Carole's Opinion : "{{ opinion }}"</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 101,
      opinion: 'That is perfect.'
    }
  },
  watch: {
    counter: function(counter) {
      var vm = this
      vm.opinion = 'Loading...'
      // setTimemout to
      setTimeout(function() {
        vm.counter = 101
        vm.opinion = 'No, 101 is better'
      }, 1000)
    }
  }
}
</script>
