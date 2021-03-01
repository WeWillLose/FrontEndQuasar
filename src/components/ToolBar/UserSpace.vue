<template>
  <div class="row text_main">

    <template v-if="isLogin">
      <div class="text_main col-auto q-mx-md">
        {{getName}}
      </div>
      <div class="col-auto">
        <q-btn @click="logout" class="text_main">Выйти</q-btn>
      </div>
    </template>

    <template v-else>
      <div class="col">
        <q-btn to="login" class="text_main">Войти</q-btn>
      </div>
    </template>
    <q-btn @click="show">sout</q-btn>
  </div>
</template>

  <script>
    import {mapGetters} from 'vuex'

    export default {
      name: "UserSpace",
      computed: {
        ...mapGetters('user', ['isLogin', 'getName'])
      },
      methods:{
        logout(){
            this.$store.dispatch('user/logoutAction').then(t=>this.$router.push("/login"))
              .catch(err=>
                this.$q.notify({
                  type:"negative",
                  message: err
                }))

        },
        show(){
          console.log(this.$store.state.user.user)
        }
      }
    }
  </script>

  <style scoped>

  </style>
