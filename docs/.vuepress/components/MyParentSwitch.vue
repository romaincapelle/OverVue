<template>
  <div>
    <p>Parent</p>
    <p>
      Switched: <strong>{{ dataSwitch }}</strong>
    </p>
    <p></p>
    <SwitchComponent v-model="dataSwitch" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      dataSwitch: true,
    };
  },
};
</script>
