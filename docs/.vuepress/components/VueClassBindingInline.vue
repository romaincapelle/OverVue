<template>
  <button @click="makeRed = !makeRed" :class="{ RedClass: makeRed }">
    Toggle the Class
  </button>
</template>
<script>
export default {
  data: function() {
    return {
      makeRed: false,
    };
  },
};
</script>

<style scoped>
.RedClass {
  color: red;
}
</style>
