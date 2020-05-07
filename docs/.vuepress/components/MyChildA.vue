<template>
  <div class="child">
    <p>Child component - As prop from parent: {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>
