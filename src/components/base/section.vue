<template>
  <div class="section">
     <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .section {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;;
  }
</style>