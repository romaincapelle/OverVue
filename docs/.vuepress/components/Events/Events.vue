<template>
  <div>
    <p>
      <input
        @keyup.enter="alertTheMessage"
        type="text"
        v-model="myMessage"
        placeholder="Type something and press Enter"
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myMessage: ''
    }
  },
  methods: {
    alertTheMessage: function() {
      alert(this.myMessage)
    }
  }
}
</script>
