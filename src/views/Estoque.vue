<template>
  <div class="estoque">
    <h1>{{filial.nome}}</h1>
    <estoque-detalhe> </estoque-detalhe>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex"
import estoqueDetalhe from "@/components/estoque-detalhe.vue"
export default {
  props:['id'],
  components: {
    estoqueDetalhe
  },
  methods: {

  },
  computed: {
    ...mapGetters('estoque', ['filiais']),
    filial(){
      const [filial] = this.filiais.filter(filial=> {
        if(filial.id == this.id) {
          return filial
        }
      })
      return filial   
    }
  },
  created() {
    console.log(this.filial)
  },
}
</script>

<style scoped>
.estoque {
  width: 80%;
  margin: auto;
}
</style>