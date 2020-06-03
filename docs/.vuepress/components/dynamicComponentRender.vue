<template>
  <div>
    <button @click="step = 'step01'">step01</button>
    <button @click="step = 'step02'">step02</button>
    <p>{{ step }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: ''
    }
  }
}
</script>
