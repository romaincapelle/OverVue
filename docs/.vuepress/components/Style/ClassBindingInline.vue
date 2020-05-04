<template>
  <div>
    <button @click="foo = !foo" :class="{ cool: foo }">
      Click for Dotted lines
    </button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      foo: false,
    };
  },
};
</script>

<style scoped>
.cool {
  border: dotted 1px;
}
</style>
