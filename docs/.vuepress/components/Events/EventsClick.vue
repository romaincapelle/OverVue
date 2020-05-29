<template>
  <div><button @click="alertMe">Click me</button><br /></div>
</template>

<script>
export default {
  methods: {
    alertMe: function() {
      alert('Hey All You Cool Cats And Kittens.')
    }
  }
}
</script>
