<template>
  <div class="login-container">
      <Card text-header="Login" >
        <template v-slot:body>
          <div>
            <input type="text" v-model="login" placeholder="Login">  
          </div>
          <div>
            <input type="password" v-model="password" placeholder="Password">
          </div>
          <div>
            <button @click="handleButtonAuthenticates({ login, password })">
              Logar
            </button>
          </div>
        </template>  
      </Card>
  </div>
</template>

<script>
import card from "@/components/cards/card.vue"
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Card: card
  },
  data: () =>({
    login: '',
    password: ''
  }),
  watch: {

  },
  computed: {
    ...mapGetters('login',['isAuthenticated'])
  },
  methods: {
    ...mapActions('login',['authenticates']),
    
    handleButtonAuthenticates(login, password) {
      this.authenticates(login, password)
      if(this.isAuthenticated) this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>
  .login-container {
    margin: 5px auto;
    max-width: 400px;
    min-width: 300px;
  }
</style>