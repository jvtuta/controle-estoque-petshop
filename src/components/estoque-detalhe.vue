<template>
  <div class="w-100">
      <table>
        <thead>
          <tr>
            <th>Lote</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Fornecedor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234</td>
            <td>Ração de cachorro</td>
            <td>1263</td>
            <td>Fornecedor de ração cachorro</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>1246</td>
            <td>Remedio</td>
            <td>12423</td>
            <td>Fornecedor de remedio</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>12344</td>
            <td>Ração de gato</td>
            <td>12323</td>
            <td>Fornecedor de ração de gato</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>12434</td>
            <td>Brinquedo de cachorro</td>
            <td>1231345</td>
            <td>Fornecedor de brinquedo  de cachorro</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>2234</td>
            <td>Brinquedo de gato</td>
            <td>1243</td>
            <td>Fornecedor de briqnuedo de gato</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>5234</td>
            <td>Ração de peixes</td>
            <td>123</td>
            <td>Fornecedor de ração de peixes</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>6234</td>
            <td></td>
            <td>123</td>
            <td>Fornecedor teste</td>
            <td>
              <button class="controle">Controle</button>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
  margin: 0px 5px;
}
.controle {
  background: rgb(42, 42, 114);
  color:white;
}
.editar {
  background: rgb(156, 156, 80);
  color:white;
}
.excluir {
  background: rgb(190, 33, 33);
  color:white;
}
</style>