<template>
  <div class="q-pa-md" style="min-width: 400px">
    <h2 class="frame_h2">Login</h2>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="text"
        v-model="username"
        label="Ваш логин"
        lazy-rules
        :rules="[rules.required()]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Ваш пароль"
        lazy-rules
        :rules="[rules.required(),rules.withoutSpaces()]"
      />

      <div>
        <q-btn label="Авторизоваться" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm " />
      </div>
    </q-form>
  </div>
</template>

<script>
    import api from "src/api/api";
    import notifyApi from "src/api/notifyApi";
    import rules from 'src/api/rules'

    export default {
      name:"LoginForm",
      data(){
        return{
          username:"",
          password:"",
        }
      },
      computed:{
        rules: () => rules,
      },
      methods:{
        onReset () {
          this.username = null
          this.password = null
        },
        onSubmit(){
          this.$store.dispatch('user/loginAction',{"username":this.username, "password":this.password})
            .then(t=>this.$router.push("/"))
            .catch(err=> notifyApi.showErrorNotify(err.message))
          }
        },
    }
</script>

<style scoped>

</style>
