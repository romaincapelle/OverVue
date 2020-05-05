<template>
  <div><img v-bind:src="image" /></div>
</template>
<script>
export default {
  data() {
    return {
      image: 'https://source.unsplash.com/collection/1270951/710x410',
    };
  },
};
</script>
