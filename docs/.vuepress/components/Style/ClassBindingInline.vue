<template>
  <div>
    <button @click="active = !active" :class="{ coolBorder: active }">
      Click for Dotted lines
    </button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.coolBorder {
  border: dotted 1px;
}
</style>
