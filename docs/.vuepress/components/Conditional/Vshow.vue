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
    <!-- The "false" values are rendered and display:none in the DOM-->
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
