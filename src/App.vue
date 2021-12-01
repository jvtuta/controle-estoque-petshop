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
    <SectionComponent> 
      <router-view></router-view>
    </SectionComponent>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navbar from "@/components/base/navbar.vue";
import menuNav from "@/components/base/menu-nav.vue";
import SectionComponent from "@/components/base/section.vue"
export default {
  components: {
    navbar,
    menuNav,
    SectionComponent
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