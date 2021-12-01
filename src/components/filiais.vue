<template>
  <div class="container w-80">
    <slot> </slot>
    <div class="filiais flex-item2">
      <div>
        <!-- Filial padrão -->
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Total de Produtos</th>
              <th>Movimentações</th>
              <th>Endereço</th>
              <th>Saídas</th>
              <th>Entradas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="filial in filiais" :key="filial.id">
              <td>{{ filial.nome }}</td>
              <td>{{ filial.total_p_estoque }}</td>
              <td>{{ filial.movimentacoes }}</td>
              <td>{{ filial.endereco }}</td>
              <td>{{ filial.saidas }}</td>
              <td>{{ filial.entradas }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters('estoque', ['filiais'])
  }
};
</script>

<style scoped>
.list-item {
  padding: 10px 5px;
}



.filiais {
    margin-top: 25px;
}

</style>