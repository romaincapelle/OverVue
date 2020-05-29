<template>
  <div>
    <input
      @click="showing = !showing"
      class="switch"
      type="checkbox"
      id="switch"
      name="some-switch"
    />
    <label class="toggle" for="switch"></label>
    <!-- The "false" values are NOT rendered in the DOM -->
    <p v-if="showing">"First Option"<span> /and its childs</span></p>
    <p v-else-if="!showing">"Second option"</p>
    <p v-else>Can't see me</p>
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
