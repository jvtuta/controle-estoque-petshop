import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import store from '@/store/store'

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            beforeEnter:(to, from, next)=>{
                const isAuthenticated = store.state.login.authenticated
                if(to.name !== 'login' && !isAuthenticated) next({name: 'login'})
                else next()
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }

    ]
    
})






export default router