<template>
  <div>
    <button @click="active = !active" :class="{ coolBorder: active }">
      Click to change button background color
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
  background-color: white;
  color: black;
}
</style>
