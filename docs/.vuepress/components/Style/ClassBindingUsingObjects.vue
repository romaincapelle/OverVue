<template>
  <div :class="divClasses">
    <!-- Bind Class with Objects -->
    <button @click="foo = !foo">
      Make another element change
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
  computed: {
    divClasses: function() {
      return {
        cool: this.foo,
        active: this.foo,
      };
    },
  },
};
</script>

<style scoped>
.cool {
  border: Solid 1px #00ff00;
}
.active {
  background-color: #00ff00;
}
</style>
