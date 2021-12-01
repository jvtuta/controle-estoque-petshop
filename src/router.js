import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Estoque from "@/views/Estoque.vue"
import store from '@/store/store'
import Movimentacoes from '@/views/Movimentacoes.vue'
import Controle from '@/views/Controle.vue'

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'estoque',
            path: '/estoque/:id',
            component: Estoque,
            props: true
        },
        {
            name: 'movimentacoes',
            path: '/movimentacoes',
            component: Movimentacoes
        },
        {
            name: 'controle',
            path: '/controle',
            component: Controle
        }

    ]
    
})

router.beforeEach((to, from, next)=> {
    const isAuthenticated = store.state.login.authenticated
    if(to.name !== 'login' && !isAuthenticated) next({name: 'login'})
    else next()
})




export default router