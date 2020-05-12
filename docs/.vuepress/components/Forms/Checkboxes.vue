<template>
  <div>
    <form>
    <label></label>
        <input v-model="bigCats" type="checkbox" id="tiger" name="tiger" value="a tiger">
        <label for="tiger"> I have a tiger</label><br>
        <input v-model="bigCats" type="checkbox" id="puma" name="puma" value="a puma">
        <label for="puma"> I have a puma</label><br>
        <input v-model="bigCats" type="checkbox" id="jaguar" name="jaguar" value="a jaguar">
        <label for="jaguar"> I have a jaguar</label><br>
    </form>
    <p v-if="bigCats.length == 0">Do you have any big cats ?</p>
    <p v-else>I have: <li v-for="bigCat in bigCats"> {{bigCat}}</li></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigCats: [],
    };
  },
};
</script>
