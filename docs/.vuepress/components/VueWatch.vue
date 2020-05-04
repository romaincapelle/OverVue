<template>
  <div>
    <button @click="counter++">Increase</button>
    <p>{{ counter }} Dalmatians</p>
    <p>Cruella's Opinion : "{{ opinion }}"</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 101,
      opinion: 'Yes I am ok with that',
    };
  },
  watch: {
    counter: function(counter) {
      var vm = this;
      vm.opinion = 'Loading...';
      // setTimemout to
      setTimeout(function() {
        vm.counter = 101;
        vm.opinion = 'No, 101 is good';
      }, 4000);
    },
  },
};
</script>
