<template>
  <div>
    <p v-if="showing">"See me"<span> and its childs</span></p>
    <!-- The other value are NOT in the DOM -->
    <p v-else-if="!showing">Second option</p>
    <p v-else>Can't see me</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showing: true,
    };
  },
};
</script>
