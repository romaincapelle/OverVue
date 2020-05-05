<template>
  <div class="child">
    <p>As prop from parent: {{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Jeff Lowe',
    };
  },
  sendData() {
    this.$emit('myEvent');
  },
};
</script>
