<template>
  <div>
    <input
      @click="showing = !showing"
      class="switchShow"
      type="checkbox"
      id="switchShow"
      name="some-switchShow"
    />
    <label class="toggle" for="switchShow"></label>
    <!-- Use V-Show to keep data hidden in the DOM -->
    <p v-show="showing">"See you in the DOM!</span></p>
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
