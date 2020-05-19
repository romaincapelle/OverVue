<template>
  <div>
    <button @click="toUser">go to User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    toUser: function() {
      this.$router.push({ path: '/user/:id', component: User })
    }
  }
}
</script>
