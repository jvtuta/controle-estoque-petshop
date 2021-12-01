<template>
  <div :class="type">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: [ 'type'],
}
</script>

<style scoped>
    div {
        padding: 10px;
        margin: 10px 0 10px 0;
        display: flex;
        flex-direction: column;
    }
</style>