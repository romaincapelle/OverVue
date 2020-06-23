<template>
  <div>
    <h3>Fact</h3>
    <MyChildSlot>
      <h3>{{ title }}</h3>
      <p>Bears, beets, battlestar Galactica</p>
    </MyChildSlot>
  </div>
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
