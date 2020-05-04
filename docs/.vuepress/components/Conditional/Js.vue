<template>
  <div>
    <label>Number of states in the USA</label>
    <input type="number" v-model="states" />
    <p>{{ states == 50 ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      states: '49',
    };
  },
};
</script>
