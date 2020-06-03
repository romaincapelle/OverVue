<template>
  <div>
    <button @click="loading++" type="button">Click Me!</button>
    <div class="loading">
      <div class="loadingbar" :style="{ width: loading + '%' }">
        {{ loading < 100 ? loading : 100 }} %
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      loading: 67
    }
  }
}
</script>

<style scoped>
.loading {
  max-width: 100%;
}
.loadingbar {
  color: #1e1d45;
  max-width: inherit;
  background-color: rgba(0, 255, 0);
  text-align: center;
  height: 20px;
  box-shadow: rgba(0, 255, 0, 0.6) 0px 0px 7px;
}
</style>
