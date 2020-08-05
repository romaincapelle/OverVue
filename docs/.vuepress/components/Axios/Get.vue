<template>
  <p>{{ firstName }}</p>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstName: ''
    }
  },
  created() {
    axios
      .get('https://vue-axios-8cb49.firebaseio.com/employees.json')
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.firstName = users[0].firstName
      })
      .catch(error => console.log(error))
  }
}
</script>
