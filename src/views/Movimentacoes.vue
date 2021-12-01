<template>
  <div class="movimentacoes">
      <div>
          <div class="title">
            <h4>Movimentações</h4>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>
                          Filial
                      </th>
                      <th>
                          Data de Entrada
                      </th>
                      <th>
                          Data de Saida
                      </th>
                      <th>
                          Produto
                      </th>
                      <th>
                          Quantidade Atual
                      </th>
                      <th>
                          Quantidade Movimento (entrada / saida)
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Matriz</td>
                      <td>14/06/2021</td>
                      <td>25/07/2021</td>
                      <td>Ração</td>
                      <td>28</td>
                      <td>-50</td>
                  </tr>
                  <tr>
                      <td>Filial 1</td>
                      <td>10/06/2021</td>
                      <td>7/07/2021</td>
                      <td>Ração</td>
                      <td>64</td>
                      <td>-25</td>
                  </tr>
                  <tr>
                      <td>Filial 2</td>
                      <td>1/04/2021</td>
                      <td>4/05/2021</td>
                      <td>Ração</td>
                      <td>75</td>
                      <td>+25</td>
                  </tr>
                  <tr>
                      <td>Filial 3</td>
                      <td>15/06/2021</td>
                      <td>10/07/2021</td>
                      <td>Ração</td>
                      <td>20</td>
                      <td>+75</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
// import filiais from '../components/filiais.vue'
export default {


}
</script>

<style scoped>

div.movimentacoes {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.title {
    margin-bottom: 10px;
    font-size: 30px
}
</style>