<template>
    <div>
        <div class="home">
          <h2>Home</h2>
        </div>
        
        <filiais >
          <menu-filial :filiais="filiais"> </menu-filial>
        </filiais>
  </div>
</template>

<script>

import filiais from '@/components/filiais.vue'
import menuFilial from '@/components/base/filial-menu.vue'
import { mapGetters } from "vuex"
export default {
  components: {    
    filiais,
    menuFilial
  },
  computed: {
        ...mapGetters('estoque', ['filiais'])

  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>