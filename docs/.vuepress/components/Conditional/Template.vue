<template>
  <div>
    <input
      @click="showing = !showing"
      class="switch-template"
      type="checkbox"
      id="switch-template"
      name="some-switch-template"
    />
    <label class="toggle" for="switch-template"></label>
    <!-- Use v-if on template, not to add useless div  -->
    <template v-if="showing">
      <h3>Title</h3>
      <h6>SubTitle</h6>
    </template>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showing: true
    }
  }
}
</script>
