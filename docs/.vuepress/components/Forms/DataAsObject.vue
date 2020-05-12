<template>
  <div>
    <form>
      <label for="firstName">First Name: </label>
      <input v-model="userData.firstName" type="text"></input><br/>
      <label for="lastName">Last Name: </label>
      <input v-model="userData.lastName" type="text"></input><br/>
    </form>
    <p>{{ userData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: 'Joe',
        lastName: 'Exotic',
      },
    };
  },
};
</script>
