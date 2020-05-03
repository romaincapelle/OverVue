<template>
  <div class="container">
    <!-- Conditional from data -->
    <p v-if="showing">"See me"<span> and its childs</span></p>
    <!-- The other value is NOT in the DOM -->
    <p v-else-if="!showing">if second option</p>
    <p v-else>Can't see me</p>

    <!-- Conditional using a template to refrain from using a div -->
    <template v-if="showing">
      <li>"See me"</li>
      <li>and its siblings</li>
    </template>

    <!-- Conditional from computed value -->
    <p v-if="seenComputed">See me computed ?</p>

    <p v-show="showing">"Using V-Show will show in the DOM"</p>
    <!-- The other value IS DISPLAY:NONE in the DOM -->
    <p v-show="!showing">Can't see me</p>

    <!-- Conditional with JS in template: retired yet? -->
    <p>Am I Retired? {{ age == 60 ? 'Yes' : 'No' }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueConditional',
  data: function() {
    return {
      showing: true,
      age: 32,
    };
  },
  // computed properties (always Synchronously)
  computed: {
    seenComputed: function() {
      //code here
      return true;
    },
  },
};
</script>
