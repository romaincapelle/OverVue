<template>
  <div>
    <form>
      <p v-if="age">Your age is a {{ ageType }}
      <p v-else>The age won't be a string.</p>
      <label for="age">age: </label>
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