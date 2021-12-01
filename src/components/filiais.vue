<template>
  <div class="container w-80">
    <div class="flex-item1 w-20">
      <h3>Filiais</h3>
      <hr />
      <ul class="list bg-dark">
        <router-link
          tag="li"
          v-for="filial in filiais"
          :key="filial.id"
          :to="'filial/' + filial.id"
          class="list-item"
        >
          <a>Filial id:{{ filial.id }} | {{ filial.nome }}</a>
        </router-link>
      </ul>
    </div>
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
export default {
  data: () => ({
    filiais: [
      {
        id: 1,
        nome: "Matriz",
        total_p_estoque: 12,
        movimentacoes: 245,
        saidas: 100,
        entradas: 145,
        endereco: "Df Brasilia ... lt 04",
      },
      {
        id: 2,
        nome: "Filial 1",
        total_p_estoque: 12,
        movimentacoes: 140,
        saidas: 70,
        entradas: 70,
        endereco: "Df Brasilia ... lt 05"
      },
      {
        id: 3,
        nome: "Filial 2",
        total_p_estoque: 12,
        movimentacoes: 140,
        saidas: 70,
        entradas: 70,
        endereco: "Df Brasilia ... lt 05"
      },
      {
        id: 4,
        nome: "Filial 3",
        total_p_estoque: 12,
        movimentacoes: 140,
        saidas: 70,
        entradas: 70,
        endereco: "Df Brasilia ... lt 05"
      },
      {
        id: 5,
        nome: "Filial 4",
        total_p_estoque: 12,
        movimentacoes: 140,
        saidas: 70,
        entradas: 70,
        endereco: "Df Brasilia ... lt 05"
      },
    ],
  }),
};
</script>

<style scoped>
.list-item {
  padding: 10px 5px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table tr td,
th {
  border: 1px solid #ddd;
  text-align: center;
}
table tr td {
    padding: 8px;
}

table th {
  padding-top: 15px;
  padding-bottom: 15px;
}

table tbody tr:hover {
  background-color: #ddd;
}

.filiais {
    margin-top: 25px;
}

</style>