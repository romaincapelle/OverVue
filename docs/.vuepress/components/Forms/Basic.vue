<template>
  <div>
    <form>
      <label for="email">Email</label>
      <input v-model="userData.email" type="text"></input><br/>
      <label for="password">Password</label>
      <input v-model.lazy="userData.password" type="text"></input><br/>
      <label for="age">Age</label>
      <input v-model.number="userData.age" type="text"></input><br/>
    </form>
    <hr />
    <div>
    <p>{{ userData.email }} - {{ userData.password }} - {{ userData.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 20,
      },
    };
  },
};
</script>
