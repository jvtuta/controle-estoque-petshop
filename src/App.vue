<template>
  <div>
    <navbar title="Estoque Petshop">
      <template v-slot:icon>
        <font-awesome-icon icon="paw"></font-awesome-icon>
      </template>
      <menu-nav v-if="isAuthenticated" />
      <template v-slot:actions v-if="isAuthenticated">
        <button @click="handleBlogout">Sair</button>
      </template>
    </navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navbar from "@/components/base/navbar.vue";
import menuNav from "@/components/base/menu-nav.vue";
export default {
  components: {
    navbar,
    menuNav,
  },
  computed: {
    ...mapGetters("login", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("login", ["logout"]),
    handleBlogout() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>