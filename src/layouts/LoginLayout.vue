<template>
  <q-layout view="lHh Lpr lFf">
      <q-page-container class="text_main">
        <q-page>
          <login/>
        </q-page>
      </q-page-container>
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
