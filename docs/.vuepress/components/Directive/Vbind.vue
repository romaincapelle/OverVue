<template>
  <div><img v-bind:src="image" /></div>
</template>
<script>
export default {
  data() {
    return {
      image: 'http://www.fillmurray.com/710/210',
    };
  },
};
</script>
