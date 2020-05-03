<template>
  <div class="container">
    <input type="text" v-model="firstName" />
    <p>Try Darcy: {{ firstName }}</p>
    <input type="text" v-model="lastName" />
    <p>Try changing your last: {{ lastName }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: 'Romain',
      lastName: 'Capelle',
    };
  },
};
</script>
