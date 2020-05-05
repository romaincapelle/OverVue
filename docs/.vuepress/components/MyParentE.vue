<template>
  <div>
    <p>First Name: {{ name }}</p>
    <MyChildE v-on:my-event="doSomething"></MyChildE>
  </div>
</template>
