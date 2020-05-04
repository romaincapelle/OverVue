<template>
  <div>
    <!-- Bind Class with Objects -->
    <button @click="makeBlue = !makeBlue" :class="divClasses">
      Click me - Bind Class with Objects
    </button>
    <br />
    <!-- Bind Class using names -->
    <input v-model="ChangeColor" type="text" />
    <button :class="ChangeColor" type="text">try RedClass</button>
    <br />
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      makeRed: false,
      makeBlue: false,
      ChangeColor: 'GreenClass',
    };
  },
  computed: {
    divClasses: function() {
      return {
        BlueClass: this.makeBlue,
        GreenClass: !this.makeBlue,
      };
    },
    myStyle: function() {
      return {
        width: this.loading + '%',
      };
    },
  },
};
</script>

<style scoped>
.RedClass {
  color: red;
}
.BlueClass {
  color: blue;
}
.GreenClass {
  color: #0f0;
}
</style>
