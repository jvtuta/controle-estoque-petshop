export default {
    namespaced: true,
    state: ()=> ({
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
    getters: {
        filiais(state) {
            return state.filiais
        }
    }
}