<template>
  <q-layout view="lHh Lpr lFf">
    <div class="text_main">
      <q-page-container>
        <login/>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
  import Login from "pages/Login";
  export default {
    name: 'LoginLayout',
    components: {Login},
    data() {
      return {
      }
    }
  }
</script>
