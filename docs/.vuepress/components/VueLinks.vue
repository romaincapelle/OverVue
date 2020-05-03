<template>
  <div><a :href="link" target="blank">Link to google </a></div>
</template>
<script>
export default {
  data() {
    return {
      link: 'https://www.google.com/',
    };
  },
};
</script>
