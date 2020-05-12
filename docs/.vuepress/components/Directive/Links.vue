<template>
  <div>
    <a :href="link" target="blank">Link to my Twitter</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: 'https://twitter.com/RomainCapelle',
    };
  },
};
</script>
