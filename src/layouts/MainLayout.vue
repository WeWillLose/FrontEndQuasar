<template>
  <q-layout view="lHh Lpr lFf ">
    <div class="text_main bg_gradient">
      <q-header elevated >
        <tool-bar/>
      </q-header>
        <q-page-container>
          <router-view/>
        </q-page-container>
    </div>
  </q-layout>
</template>

<script>
  import ToolBar from "components/ToolBar/ToolBar";
  export default {
    name: 'MainLayout',
    components: {ToolBar},
    data() {
      return {
      }
    }
  }
</script>
