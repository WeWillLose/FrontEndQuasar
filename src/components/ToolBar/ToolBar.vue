<template>
  <q-toolbar class="q-my-sm">
    <!--            <q-toolbar-title><q-icon size="xl" name="description" class="q-mr-sm q-pb-sm"></q-icon>Parser.docx</q-toolbar-title>-->
    <drop-downs/>

    <q-space/>
    <user-space></user-space>
  </q-toolbar>
</template>

<script>
    import DropDowns from "./DropDowns";
    import UserSpace from "components/ToolBar/UserSpace";

    export default {
        name: "ToolBar",
      components: {UserSpace, DropDowns},

    }
</script>

<style scoped>

</style>
