<template>
  <div>
    <button @click="AlertHello">Hello</button><br />
    <p>
      <input
        v-on:keyup.enter="AlertHello"
        type="text"
        placeholder="Type and Enter"
      />
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    AlertHello: function() {
      alert('Hello')
    }
  }
}
</script>
