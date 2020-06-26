<template>
  <div>
    <form>
      <label>Type your message :</label>
      <textarea v-model="msg" name="msg"></textarea>
    </form>
    <h5>Message with css white space "pre":</h5>
    <p style="white-space:pre">{{ msg }}</p>
    <h5>Message without extra css:</h5>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `Watch the
line
break`
    }
  }
}
</script>
