<template>
  <div>
    <form>
        <legend>What is the biggest threat of 2020 ?</legend>
        <select v-model="selected" class="select-css">
          <option disabled value="">Choose</option>
          <option>Murder Hornets</option>
          <option>Covid-19</option>
          <option>Carole Baskin</option>
        </select>
    </form>
    <p v-if="!selected">Not Selected</p>
    <p v-else> My Answer is: {{selected}}</li></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
};
</script>