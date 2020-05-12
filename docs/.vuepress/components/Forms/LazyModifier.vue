<template>
  <div>
    <form>
      <p v-if="address">Your address is {{ address }}</p>
      <p v-else>The address will only be updated
      when you click outside of the input field.</p>
      <label for="address">Address of the zoo: </label>
      <input v-model.lazy="address" type="address"></input><br/>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address :''
    };
  },
};
</script>
