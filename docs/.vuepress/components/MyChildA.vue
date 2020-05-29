<template>
  <div class="child">
    <p>Child component - As prop from parent: {{ someText }}</p>
  </div>
</template>

<script>
export default {
  props: ['someText']
}
</script>