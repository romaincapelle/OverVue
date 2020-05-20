<template>
  <div>
    <p v-pre>With v-pre, this is not be interpolated: {{ counter }}</p>
    <span v-once>With v-once, this will not be updated: {{ counter }}</span>
    <p>Normal interpolation: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 1
    }
  }
}
</script>
