<template>
  <div class="frame q-my-lg q-mx-auto text_main absolute-full">
      <login-form/>
  </div>
</template>

<script>
    import LoginForm from "components/login/LoginForm";
    export default {
        name: "Login",
      components: {LoginForm},
      data(){
          return{
          }
      },
      methods:{
      }
    }
</script>

<style scoped>

</style>
