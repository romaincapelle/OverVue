<template>
  <base-layout>
    <template v-slot:quiz>
      <h1>Question</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Sloth are cute'
    }
  }
}
</script>
