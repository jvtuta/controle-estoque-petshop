<template>
  <div class="movimentacoes">
      <filiais />
  </div>
</template>

<script>
import filiais from '../components/filiais.vue'
export default {
  components: { filiais },

}
</script>

<style scoped>

div.movimentacoes {
    border: solid 1px red;
    width: 80%;
    margin: auto;
}
</style>