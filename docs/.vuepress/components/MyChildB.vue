<template>
  <div class="child">
    <div>Child component</div>
    <input
      type="text"
      v-bind:value="value"
      @input="updateValue($event.target.value)"
      placeholder="Type name"
    />
  </div>
</template>

<script>
export default {
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  }
}
</script>
