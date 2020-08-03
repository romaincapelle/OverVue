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
import axios from 'axios'

export default {
  data() {
    return {
      firstName: 'Pam',
      lastName: 'Beesly'
    }
  },
  methods: {
    submitted() {
      const name = {
        firstName: this.firstName,
        lastName: this.lastName
      }
      axios
        .post('https://vue-axios-8cb49.firebaseio.com/employees.json', name)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }
}
</script>
