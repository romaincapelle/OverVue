<template>
  <div>
    <form>
    <p>Type your message :</p>
      <textarea v-model="msg" type="msg" placeholder="Type your message here..."></textarea><br/>
    </form>
    <p style="white-space:pre">{{msg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg :`Watch the
line
break`
    };
  },
};
</script>
