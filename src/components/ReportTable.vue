<template>
  <div>
    <progress-exam-table/>
    <progress-table/>
    <comment-table/>
    <creation-table/>
    <proective-table/>
    <class-rooms-table/>
    <programs-table/>
  </div>
</template>

<script>
  import ProgressExamTable from "components/1/ProgressExamTable";
  import ProgressTable from "components/1/ProgressTable";
  import CreationTable from "components/2/CreationTable";
  import CommentTable from "components/1/CommentTable";
  import ProectiveTable from "components/2/ProectiveTable";
  import ClassRoomsTable from "components/3/ClassRoomsTable";
  import ProgramsTable from "components/3/ProgramsTable";

  export default {
    components: {
      ProectiveTable, CommentTable, CreationTable, ProgressTable, ProgressExamTable, ClassRoomsTable, ProgramsTable},
    methods: {

    },
    created() {
      var tables = document.getElementsByTagName('table');
      for (var i = 0; i < tables.length; i++) {
        this.resizableGrid(tables[i]);
      }

    }
  }
</script>

<style scoped>

</style>
