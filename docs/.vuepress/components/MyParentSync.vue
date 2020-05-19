<template>
  <div>
    <p>First Name: {{ name }}</p>
    <MyChildSync :name.sync="name"></MyChildSync>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: 'Joe'
    }
  }
}
</script>
