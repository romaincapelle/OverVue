<template>
  <div>
    <form>
        <legend>What happen to Don Lewis ?</legend>
        <p><input v-model="answer" type="radio" value="no">
        <label for="no">She didn't killed him</label></p>
        <p><input v-model="answer" type="radio" value="yes">
        <label for="yes">She definitely killed him</label></p>
        <p><input v-model="answer" type="radio" value="notsure">
        <label for="notsure">I don't know</label></p>
    </form>
    <p v-if="answer"></p>
    <p v-else>{{answer}}</li></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ""
    };
  },
};
</script>