<template>
  <div>
    <p>Counter: {{ stringCounter }}</p>
    <button @click="stringCounter *= 2">Times 2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stringCounter: 2,
    };
  },
};
</script>
