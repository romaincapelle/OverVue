<template>
  <div>
    <form>
      <label for="name">Your name</label>
      <input v-model="name" type="text" />
      <p>Your name is: {{ name }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Joe Exotic'
    }
  }
}
</script>
