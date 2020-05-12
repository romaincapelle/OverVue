<template>
  <div>
    <form>
    <label></label>
        <input v-model="bigCats" type="checkbox" id="vehicle1" name="vehicle1" value="Tiger">
        <label for="vehicle1"> I have a tiger</label><br>
        <input v-model="bigCats" type="checkbox" id="vehicle2" name="vehicle2" value="Puma">
        <label for="vehicle2"> I have a puma</label><br>
        <input v-model="bigCats" type="checkbox" id="vehicle3" name="vehicle3" value="Jaguar">
        <label for="vehicle3"> I have a jaguar</label><br>
    </form>
    <p v-if="bigCats.length == 0">Do you have any big cats ?</p>
    <p v-else>Yes, I have: <li v-for="bigCat in bigCats"> {{bigCat}}</li></p>
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
