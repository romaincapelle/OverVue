<template>
  <div>
    <form>
      <p v-if="fullName">Your fullName is {{ fullName }}</p>
      <p v-else>Try typing multiple "space".</p>
      <label for="fullName">FullName: </label>
      <input v-model.trim="fullName" type="fullName"></input><br/>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName : 'Joe       Exotic'
    };
  },
};
</script>
