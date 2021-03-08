<template>
  <div>
    <q-form
    @submit="onSubmit">
      <div class="q-ma-md">
        <q-input label="ФИО" v-model="fio" :rules="[v=>!!v||'Поле обязательно']"></q-input>
      </div>
      <div class="q-ma-md">
        <q-select :rules="[v=>!!v||'Поле обязательно']" filled v-model="model" :options="options" label="Квартал"/>
      </div>
      <div class="row">
        <div class="q-ma-md col">
          <q-input type="number" v-model="year1" min="2000" max="3000"
                   :rules="[v=> (v > 2000 && v<3000) || 'Год не корректен']"/>
        </div>
        <div class="q-ma-md col">
          <q-input type="number" v-model="year2" min="2000" :rules="[v=> (v > 2000 && v<3000) || 'Год не корректен']"
                   max="3000"/>
        </div>
      </div>

      <progress-exam-table/>
      <progress-table/>
      <comment-table/>
      <creation-table/>
      <proective-table/>
      <class-rooms-table/>
      <programs-table/>
      <div class="column items-end q-ma-md">
        <div class="col">
          <q-btn type="submit" color="dark" label="Сохранить"/>
        </div>

      </div>
    </q-form>
  </div>
</template>

<script>
  import ProgressExamTable from "components/report_tables/1/ProgressExamTable";
  import ProgressTable from "components/report_tables/1/ProgressTable";
  import CreationTable from "components/report_tables/2/CreationTable";
  import CommentTable from "components/report_tables/1/CommentTable";
  import ProectiveTable from "components/report_tables/2/ProectiveTable";
  import ClassRoomsTable from "components/report_tables/3/ClassRoomsTable";
  import ProgramsTable from "components/report_tables/3/ProgramsTable";
  import {mapGetters} from "vuex";
  import api from "src/api/api";
  import notifyApi from "src/api/notifyApi";

  export default {
    components: {
      ProectiveTable,
      CommentTable,
      CreationTable,
      ProgressTable,
      ProgressExamTable,
      ClassRoomsTable,
      ProgramsTable
    },
    computed: {
      ...mapGetters({
        comment: "comment/getData",
        progress: 'progress/getData',
        progress_exam: 'progress_exam/getData',
      })
    },
    data() {
      return {
        model: null,
        options: [
          1, 2, 3, 4
        ],
        year1: null,
        year2: null,
        fio:"",
      }
    },
    methods: {
      saveToServer() {
        api.sendDocxFiles(Object.assign({}, this.comment, this.progress, this.progress_exam))
      },
      onSubmit(){
        console.log(this.comment)
      }
    },

  }
</script>

<style scoped>

</style>
