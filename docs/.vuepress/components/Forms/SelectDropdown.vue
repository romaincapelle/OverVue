<template>
  <div>
    <form>
        <legend>What is the biggest threat of 2020 ?</legend>
        <select v-model="selectedOption" class="select-css">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'C',
      options: [
        { text: 'Covid-19', value: 'A' },
        { text: 'Murder Hornets', value: 'B' },
        { text: 'Carole Baskin', value: 'C' }
      ],
    }
  },
}
</script>

