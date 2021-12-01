<template>
  <div class="controle">
      
      <div class="controle-menu"> 
          <menu-filiais :filiais="filiais" ></menu-filiais>    
      </div>
      
      <div>
          <h3>
              Matriz
          </h3>
          <form action="" class="form">
              <div class="item-form">
                  <input type="text" v-model="lote">
                  <input type="text" v-model="produto_nome">
              </div>
              <div class="item-form">
                  <input type="date" v-model="data_entrada">
                  <input type="date" v-model="data_saida">
              </div>
              <div class="item-form">
                  <input type="text" v-model="qtd">
              </div>
                  <button class="item-form">
                      Salvar
                      <font-awesome-icon icon="plus"></font-awesome-icon>
                  </button>
          </form>
      </div>
      

  </div>
</template>

<script>
import menuFiliais from "@/components/base/filial-menu.vue";
import { mapGetters } from "vuex"
export default {
  components: { menuFiliais },
  computed: {
      ...mapGetters('estoque',['filiais'])
  },
  data:()=>({
      lote: 'N° lote',
      data_entrada: '',
      data_saida: '',
      produto_nome: 'Digite o nome do produto',
      qtd:'Quantidade de produto',

  })
};
</script>

<style scoped>
.controle {
  width: 80%;
  margin: auto;
  display: flex;
}
.controle-menu {
    width: 20%;
}

.form {
   display: flex;
   flex-direction: column;
}

.form input {
    margin: 10px;
    width: 250px;
}
.item-form {
    margin: 5px;
}
h3 {
    margin: 6px;
}
</style>