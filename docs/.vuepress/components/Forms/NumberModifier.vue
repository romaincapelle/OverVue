<template>
  <div>
    <form>
      <p v-if="age">Your age is a {{ ageType }}, it's {{ age }}.
      <p v-else>Your age won't be a string.</p>
      <label for="age">My age: </label>
      <input v-model.number="age" type="number"></input><br/>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age : ''
    };
  },
  computed: {
    ageType: function() {
      return typeof this.age;
    },
  },
};
</script>