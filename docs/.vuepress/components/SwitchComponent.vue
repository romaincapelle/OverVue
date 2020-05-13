<template>
  <div class="child">
    <div id="on" @click="switched(true)" :class="{ active: value }">On</div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">Off</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    switched(isOn) {
      this.$emit('input', isOn);
    },
  },
};
</script>

<style scoped>
#on,
#off {
  width: 80px;
  height: 17px;
  background-color: #100d23;
  padding: 10px 3px;
  display: inline-block;
  margin: 19px 12px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
  border-left: 4px solid #202020;
  border-bottom: 2px solid #000000;
}

#on:hover,
#on.active {
  color: #00ff00;
  box-shadow: rgba(0, 255, 0, 1) 0px 0px 6px;
  border: 2px solid #00ff00;
}

#on.active {
  color: #202020;
  background-color: #00ff00;
  box-shadow: rgba(0, 255, 0, 1) 0px 0px 6px;
  border: 2px solid #00ff00;
}

#off:hover,
#off.active {
  background-color: #1e1d45;
  color: white;
  box-shadow: #f09 0px 0px 6px;
  border: 2px solid #f09;
}

#off.active {
  color: #f09;
}
</style>
