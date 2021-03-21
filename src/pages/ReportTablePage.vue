<template>
  <q-page class="bg_gradient flex full-height">
    <ReportTable/>
  </q-page>
</template>

<script>
    import ReportTable from "components/ReportTable";
    export default {
        name: "ReportTablePage",
      components: {ReportTable},
      data(){
        return {
      }
    },
      created(){
      }
    }
</script>

<style scoped>

</style>
