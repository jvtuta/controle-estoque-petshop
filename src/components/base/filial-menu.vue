<template>
  <div class="flex-item1">
    <h3>Filiais</h3>
    <hr />
    <ul class="list bg-dark">
      <router-link
        tag="li"
        v-for="filial in filiais"
        :key="filial.id"
        :to="'estoque/' + filial.id"
        class="list-item"
      >
        <a> {{ filial.nome }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
    props:['filiais']
};
</script>

<style>
</style>