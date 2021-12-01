<template>
  <div>
      <navbar title="Estoque Petshop" >
        <template v-slot:icon>
          <font-awesome-icon icon="paw"></font-awesome-icon>
          
        </template>
        <ul class="list row" v-if="isAuthenticated">
          <router-link tag="li" to="/home">
            <a>Home</a>
          </router-link>
          <router-link tag="li" to="/home">
            <a>Histórico</a>
          </router-link>
          <router-link tag="li" to="/home">
            <a>Controle</a>
          </router-link>
        </ul>
        <template v-slot:actions v-if="isAuthenticated">
          
            <button>Sair</button>
          
        </template>
      </navbar>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import navbar from "@/components/base/navbar.vue"
export default {
  components: {
    navbar
  },
  computed: {
    ...mapGetters('login',['isAuthenticated'])
  }
}
</script>

<style>

</style>