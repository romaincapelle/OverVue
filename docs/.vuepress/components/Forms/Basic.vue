<template>
  <div>
    <form>
      <label for="name">Your name</label>
      <input v-model="name" type="text"></input><br/>
      <p>Your name is: {{ name }}</p>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name : 'Joe Exotic'
    };
  },
};
</script>
