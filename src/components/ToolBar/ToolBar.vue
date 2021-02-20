<template>
  <q-toolbar class="q-my-sm">
    <!--            <q-toolbar-title><q-icon size="xl" name="description" class="q-mr-sm q-pb-sm"></q-icon>Parser.docx</q-toolbar-title>-->
    <drop-downs/>
  </q-toolbar>
</template>

<script>
    import DropDowns from "./DropDowns";
    export default {
        name: "ToolBar",
      components: {DropDowns}
    }
</script>

<style scoped>

</style>
