<template>
  <div>
    <p>List of Joe Exotic's Five Husbands</p>
    <li v-for="(husband, i) in husbands" :key="i">
      {{ i + 1 }}: {{ husband }}
    </li>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      husbands: ['Brian', 'J.C.', 'John', 'Travis', 'Dillon']
    }
  }
}
</script>
