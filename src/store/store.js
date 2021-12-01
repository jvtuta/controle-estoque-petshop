import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import estoque from './modules/estoque'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        estoque
    }
})