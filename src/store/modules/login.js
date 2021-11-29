export default {
    namespaced: true,
    state: () => ({
        usuarios: [
            {
                login: 'adm',
                password: 1234,
                email: 'adm@root.com'
            }
        ],
        authenticated: false,

    }),
    getters: {  
        isAuthenticated(state) {
            return state.authenticated
        }
    },
    mutations: {
        setAuthenticated(state, payload) {            
            state.authenticated = payload
        }
    },
    actions: {
        authenticates({ commit, state }, payload) {
            state.usuarios.forEach((usuario)=>{
                if(usuario.name === payload.name 
                    && usuario.password == payload.password) {                        
                        commit('setAuthenticated', true)
                        return;
                    }                                        
            })
            
        },
        logout({ commit }) {
            commit('setAuthenticated', false)
        }   
    }
}