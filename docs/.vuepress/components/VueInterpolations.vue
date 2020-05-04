<template>
  <div>
    <p v-pre>Using v-pre, this is not be interpolated: {{ firstName }}</p>
    <span v-once>Using v-once, this will not be updated: {{ firstName }}</span>
    <p>Normal interpolation: {{ firstName }}</p>
    <button @click="changeFirstName">Change the name</button>
    <button @click="resetFirstName">Reset the name</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: 'Romain',
    };
  },
  methods: {
    changeFirstName: function() {
      this.firstName = 'Robert';
    },
    resetFirstName: function() {
      this.firstName = 'Romain';
    },
  },
};
</script>
