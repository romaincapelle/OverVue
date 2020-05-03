<template>
  <div class="container">
    <h2>:Class Binding</h2>
    <!-- Bind Class Basic -->
    <button
      class="square"
      @click="makeRed = !makeRed"
      :class="{ RedClass: makeRed }"
    >
      Click me - Bind Class Basic
    </button>
    <br />
    <!-- Bind Class with Objects -->
    <button @click="makeBlue = !makeBlue" :class="divClasses">
      Click me - Bind Class with Objects
    </button>
    <br />
    <!-- Bind Class using names -->
    <input v-model="ChangeColor" type="text" />
    <button :class="ChangeColor" type="text">try RedClass</button>
    <br />

    <!-- Bind style without class -->
    <h2>:Style Binding</h2>
    <input v-model="loading" type="text" />
    <div class="loadingbars">
      <p>:Style As an Object:</p>
      <div class="loadingbar" :style="{ width: loading + '%' }">
        {{ loading }} %
      </div>
      <!-- Bind style without class using a computed property-->
      <p>:Style As an Computed property:</p>
      <div class="loadingbar" :style="myStyle">{{ loading }} %</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      makeRed: true,
      makeBlue: true,
      ChangeColor: 'GreenClass',
      loading: 40,
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
.container {
  padding: 4% 4%;
}

.RedClass {
  color: red;
}
.BlueClass {
  color: blue;
}
.GreenClass {
  color: green;
}
.loadingbars {
  width: 720px;
  background-color: lightpink;
  padding: 1%;
}

.loadingbar {
  background-color: lightblue;
  text-align: center;
  height: 20px;
}
</style>
