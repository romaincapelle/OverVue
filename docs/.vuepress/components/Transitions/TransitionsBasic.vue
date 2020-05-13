<template>
  <div>
    <button @click="showing = !showing">Kill</button>
    <transition name="fadeMe">
      <span v-if="showing"> Hi, this is Don Lewis !</span>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showing: true,
    };
  },
};
</script>

<style scoped>
.fadeMe-enter {
  opacity: 0;
}

.fadeMe-enter-active {
  transition: opacity 1s;
}

.fadeMe-leave {
  /*opacity: 1; no need to set it as it is default  */
}

.fadeMe-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
