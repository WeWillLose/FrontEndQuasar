<template>

  <div id="q-app">
      <router-view/>
  </div>

</template>
<script>
export default {
  name: 'App',
  created() {
  },
  beforeMount(){
    this.$store.commit("init")
    // console.log(this.$store.state.user.is_login)
    //   if (!this.$store.state.user.is_login) {
    //     this.$router.push("/login")
    //   }
  }
}
</script>
