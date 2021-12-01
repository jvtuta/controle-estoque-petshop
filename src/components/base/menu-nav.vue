<template>
  <ul class="list row">
    <router-link tag="li" to="/home" active-class="active">
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/movimentacoes" active-class="active">
      <a>Movimentações</a>
    </router-link>
    <router-link tag="li" to="/controle" active-class="active">
      <a>Controle</a>
    </router-link>
  </ul>
</template>

<script>
export default {

};
</script>

<style scoped>
li a {
  padding: inherit;
  margin: inherit;
  widows: inherit;
}
</style>