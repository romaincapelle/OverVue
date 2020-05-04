<template>
  <div>
    <a :href="link" target="blank">Link to Vue Doc</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: 'https://vuejs.org/v2/guide/',
    };
  },
};
</script>
