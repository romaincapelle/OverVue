<template>
  <div><img v-bind:src="image" /></div>
</template>
<script>
export default {
  data() {
    return {
      image: 'https://source.unsplash.com/collection/3336412/710x710',
    };
  },
};
</script>
