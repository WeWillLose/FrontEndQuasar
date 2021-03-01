<template>
  <div class="q-pa-md" style="min-width: 400px">
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
        :rules="[ val => val && val.length > 0 || 'Поле обязательное']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Ваш пароль"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Поле обязательное']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
    import api from "src/api/api";

    export default {
      name:"LoginForm",
      data(){
        return{
          username:"",
          password:"",
        }
      },
      methods:{
        onReset () {
          this.username = null
          this.password = null
        },
        onSubmit(){
          this.$store.dispatch('user/loginAction',{"username":this.username, "password":this.password}).then(t=>this.$router.push("/"))
            .catch(err=>
            this.$q.notify({
            type:"negative",
            message: err
          }))
        }
      }
    }
</script>

<style scoped>

</style>
