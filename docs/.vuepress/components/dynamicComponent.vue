<template>
  <div>
    <button @click="step = 'step01'">step01</button>
    <button @click="step = 'step02'">step02</button>
    <component :is="step"></component>
  </div>
</template>

<script>
import step01 from '~/components/step01.vue'
import step02 from '~/components/step02.vue'

export default {
  components: {
    step01,
    step02
  },
  data() {
    return {
      step: ''
    }
  }
}
</script>
