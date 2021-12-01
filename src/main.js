import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router'
import './registerServiceWorker'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaw, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

library.add(faPaw, faPlus)



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')



