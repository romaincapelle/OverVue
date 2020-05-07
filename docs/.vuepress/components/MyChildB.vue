<template>
  <div class="child">
    <div>Child component</span>
    <input
      type="text"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
      placeholder="Type name"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateValue: function(value) {
      this.$emit('input', value);
    },
  },
};
</script>
