<template>
  <div>
    <p>Parent component - Name: {{ name }}</p>
    <button @click="name = 'Howard'">Change name</button>
    <button @click="name = 'Carole'">Reset</button>
    <MyChildA :name="name"></MyChildA>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'Carole'
    }
  }
}
</script>
