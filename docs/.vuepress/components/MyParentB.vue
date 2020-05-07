<template>
  <div>
    <p>Parent component - Name: {{ parentValue }}</p>
    <myChildB v-model="parentValue"></myChildB>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      parentValue: '',
    };
  },
};
</script>
