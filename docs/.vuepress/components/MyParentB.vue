<template>
  <div>
    <p>First Name: {{ name }}</p>
    <MyChildB :name="name"></MyChildB>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'Carole',
    };
  },
};
</script>
