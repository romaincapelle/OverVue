<template>
    <div>
      <label for="firstName">First Name: </label>
      <input v-model="user.firstName" type="text"></input><br/>
      <label for="lastName">Last Name: </label>
      <input v-model="user.lastName" type="text"></input><br/>
      <p>Your full name is: "{{user.firstName}} {{user.lastName}}".</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
      },
    };
  },
};
</script>
