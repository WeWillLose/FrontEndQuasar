<template>
  <div>
    <progress-exam-table/>
    <progress-table/>
    <comment-table/>
    <creation-table/>
    <proective-table/>
    <div align="right" class="q-ma-md">
      <q-btn class="" color="black" @click="saveToServer">Save</q-btn>
    </div>
  </div>
</template>

<script>
  import ProgressExamTable from "components/1/ProgressExamTable";
  import ProgressTable from "components/1/ProgressTable";
  import CreationTable from "components/2/CreationTable";
  import CommentTable from "components/1/CommentTable";
  import ProectiveTable from "components/2/ProectiveTable";

  export default {
    components: {ProectiveTable, CommentTable, CreationTable, ProgressTable, ProgressExamTable},
    methods: {
      saveToServer(){

      }
    },


  }
</script>

<style scoped>

</style>
