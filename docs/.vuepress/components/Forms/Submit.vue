<template>
  <div>
    <form>
      <input type="text" v-model="killer" placeholder="Who killed Jack ?" />
      <button @click.prevent="submitted">Send</button>
    </form>
    <p v-if="isSubmitted">It's {{ killer }}.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      killer: '',
      isSubmitted: false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true
    }
  }
}
</script>
