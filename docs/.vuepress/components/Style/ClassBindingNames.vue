<template>
  <div :class="BlinkClass">
    <input v-model="BlinkClass" type="text" placeholder="Type 'Blink'" />
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      BlinkClass: ''
    }
  }
}
</script>

<style scoped>
.Blink {
  animation: blinkingBackground 1s infinite;
}
@keyframes blinkingBackground {
  0% {
    background-color: #00ff00;
  }
  100% {
    background-color: #1e1d45;
  }
}
</style>
