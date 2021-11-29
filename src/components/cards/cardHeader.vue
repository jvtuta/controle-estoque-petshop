<template>
  <div>
    <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>