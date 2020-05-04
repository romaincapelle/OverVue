<template>
  <div class="child">
    <p>As prop from parent: {{ name }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'JohnDoe',
    },
  },
  methods: {
    resetName() {
      var newName = 'Joseph';
      this.$emit('update:name', newName);
    },
  },
};
</script>
