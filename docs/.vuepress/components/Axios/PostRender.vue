<template>
  <div>
    <form>
      <label for="name">Enter Employee Name: </label>
      <input v-model="firstName" type="text" />
      <input v-model="lastName" type="text" />
      <p>Your name is: {{ firstName }} {{ lastName }}</p>
      <button @click.prevent="submitted">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Pam',
      lastName: 'Beesly'
    }
  },
  methods: {
    submitted() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName
      }
    }
  }
}
</script>
