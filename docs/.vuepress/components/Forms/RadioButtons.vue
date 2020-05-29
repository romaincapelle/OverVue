<template>
  <div>
    <form>
        <legend>What happen to Don Lewis ?</legend><br/>
        <input v-model="answer" type="radio" value="no">
        <label for="no">She didn't killed him</label><br/>
        <input v-model="answer" type="radio" value="notsure">
        <label for="notsure">I don't know</label><br/>
        <input v-model="answer" type="radio" value="yes">
        <label for="yes">She definitely killed him</label>
    </form>
    <p v-if="this.answer === 'no'">Are you sure ?</p>
    <p v-else-if="this.answer === 'notsure'">I mean...</p>
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