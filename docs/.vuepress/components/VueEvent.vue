<template>
  <div>
    <!-- Receive event from template with "@" or "v-on" and then the event name -->
    <button @click="AlertHello">Hello</button><br />
    <p>
      <input v-on:keyup.enter="AlertHello" type="text" value="Type and Enter" />
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    AlertHello: function() {
      alert('Hello');
    },
  },
};
</script>
