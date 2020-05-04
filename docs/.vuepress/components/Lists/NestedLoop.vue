<template>
  <div>
    <ul v-for="person in persons" :key="person.id">
      <li v-for="(value, key, index) in person" :key="index">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      persons: [
        { id: '001', Name: 'Joe Exotic', Age: 57 },
        { id: '002', Name: 'Carole Baskin', Age: 58 },
      ],
    };
  },
};
</script>
