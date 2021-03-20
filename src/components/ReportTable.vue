<template>
  <div>
    <q-form
      @submit="onSubmit">
      <div class="q-ma-md">
        <div class="column">
          <div class="col">
            <h6 class="q-ma-none text-center">Преподаватель</h6>
          </div>
          <div class="col">
            <div class="row q-gutter-md">
              <div class="col">
                <q-input label="Фамилия" v-model="last_name"
                         :rules="[rules.required(),rules.alphaWithRus(),,rules.withoutSpaces()]"
                ></q-input>
              </div>
              <div class="col">
                <q-input label="Имя" v-model="first_name"
                         :rules="[rules.required(),rules.alphaWithRus(),rules.withoutSpaces()]"
                ></q-input>
              </div>
              <div class="col">
                <q-input label="Отчество" v-model="patronymic"
                         :rules="[rules.required(),rules.alphaWithRus(),rules.withoutSpaces()]"
                ></q-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="q-ma-md">
        <q-select
          filled v-model="quarter" :options="options" label="Квартал"
          :rules="[rules.required()]"/>
      </div>
      <div class="row">
        <div class="q-ma-md col">
          <q-input type="number" v-model="year1" label="Год"
                   :rules="[rules.required(),rules.numberBetweenNotStrict(2000,3000)]"
          />
        </div>
        <div class="q-ma-md col">
          <q-input type="number" v-model="year2" label="Год" min="2000" max="3000"
                   :rules="[rules.required(),rules.numberBetweenNotStrict(2000,3000)]"/>
        </div>
      </div>
      <progress-exam-table/>
      <progress-table/>
      <comment-table/>
      <creation-table/>
      <proective-table/>
      <div class="column items-end q-ma-md">
        <div class="col">
          <q-input style="max-width: 200px" v-model="sum1" outlined dense readonly>
          </q-input>
        </div>
      </div>
      <working-program-table/>
      <class-rooms-table/>
      <programs-table/>
      <reconstruction-table/>
      <complex-table/>
      <teachingaids-table/>
      <education-table/>
      <s-d-o-table/>
      <plan-table/>
      <circle-table/>
      <institutions-table/>
      <events-table/>
      <plan-group-table/>
      <coolhours-table/>
      <activity-table/>
      <o-b-z-table/>
      <selfeducation-table/>
      <qualification-table/>
      <seminars-table/>
      <participation-table/>
      <contest-table/>
      <technologies-table/>
      <experience-table/>
      <interaction-table/>
      <subject-table/>
      <manual-table/>
      <div class="column items-end q-ma-md">
        <div class="col">
          <q-input style="max-width: 200px" v-model="sum2" readonly
                   label="Сумма баллов по 1-2 критерию:"></q-input>
        </div>
      </div>
      <div class="column items-end q-ma-md">
        <div class="col">
          <q-btn type="submit" color="dark" label="Сохранить"/>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
  import rules from 'src/api/rules';
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
  import WorkingProgramTable from "components/report_tables/3/WorkingProgramTable";
  import ReconstructionTable from "components/report_tables/3/ReconstructionTable";
  import ComplexTable from "components/report_tables/3/ComplexTable";
  import TeachingaidsTable from "components/report_tables/3/TeachingaidsTable";
  import EducationTable from "components/report_tables/3/EducationTable";
  import SDOTable from "components/report_tables/3/SDOTable";
  import PlanTable from "components/report_tables/4/PlanTable";
  import CircleTable from "components/report_tables/4/CircleTable";
  import InstitutionsTable from "components/report_tables/4/InstitutionsTable";
  import EventsTable from "components/report_tables/4/EventsTable";
  import PlanGroupTable from "components/report_tables/5/PlanGroupTable";
  import CoolhoursTable from "components/report_tables/5/CoolhoursTable";
  import ActivityTable from "components/report_tables/5/ActivityTable";
  import OBZTable from "components/report_tables/5/OBZTable";
  import SelfeducationTable from "components/report_tables/6/SelfeducationTable";
  import QualificationTable from "components/report_tables/6/QualificationTable";
  import SeminarsTable from "components/report_tables/6/SeminarsTable";
  import ParticipationTable from "components/report_tables/6/ParticipationTable";
  import ContestTable from "components/report_tables/6/ContestTable";
  import TechnologiesTable from "components/report_tables/7/TechnologiesTable";
  import ExperienceTable from "components/report_tables/8/ExperienceTable";
  import InteractionTable from "components/report_tables/9/InteractionTable";
  import SubjectTable from "components/report_tables/10/SubjectTable";
  import ManualTable from "components/report_tables/11/ManualTable";


  export default {
    components: {
      ManualTable,
      SubjectTable,
      InteractionTable,
      ExperienceTable,
      TechnologiesTable,
      ContestTable,
      ParticipationTable,
      SeminarsTable,
      QualificationTable,
      SelfeducationTable,
      OBZTable,
      ActivityTable,
      CoolhoursTable,
      PlanGroupTable,
      EventsTable,
      InstitutionsTable,
      CircleTable,
      PlanTable,
      SDOTable,
      EducationTable,
      TeachingaidsTable,
      ComplexTable,
      ReconstructionTable,
      WorkingProgramTable,
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
        getData: "report_tables/getData",
      }),
      rules: () => rules,
      sum1() {
        return this.$store.getters["report_tables/comment/getScore"] + this.$store.getters["report_tables/creation_table/getScore"] +
          this.$store.getters["report_tables/proective_table/getScore"]
      },
      sum2() {
        return this.$store.getters["report_tables/class_rooms/getScore"] + this.$store.getters["report_tables/complex/getScore"] +
          this.$store.getters["report_tables/education/getScore"] + this.$store.getters["report_tables/programs/getScore"] +
          this.$store.getters["report_tables/reconstruction/getScore"] + this.$store.getters["report_tables/sdo/getScore"] +
          this.$store.getters["report_tables/teaching_aids/getScore"] + this.$store.getters["report_tables/working_program/getScore"] +
          this.$store.getters["report_tables/circle/getScore"] + this.$store.getters["report_tables/events/getScore"] +
          this.$store.getters["report_tables/institutions/getScore"] + this.$store.getters["report_tables/plan/getScore"] +
          this.$store.getters["report_tables/activity/getScore"] + this.$store.getters["report_tables/cool_hours/getScore"] +
          this.$store.getters["report_tables/obz/getScore"] + this.$store.getters["report_tables/plan_group/getScore"] +
          this.$store.getters["report_tables/contest/getScore"] + this.$store.getters["report_tables/participation/getScore"] +
          this.$store.getters["report_tables/qualification/getScore"] + this.$store.getters["report_tables/self_education/getScore"] +
          this.$store.getters["report_tables/seminars/getScore"] + this.$store.getters["report_tables/technologies/getScore"] +
          this.$store.getters["report_tables/experience/getScore"] + this.$store.getters["report_tables/interaction/getScore"] +
          this.$store.getters["report_tables/subject/getScore"] + this.$store.getters["report_tables/manual/getScore"]

      },
      fio() {
        return this.last_name.trim()+" "+ this.first_name.trim() + " " + this.patronymic.trim();
      }
    },
    data() {
      return {
        quarter: null,
        options: [
          1, 2, 3, 4
        ],
        year1: null,
        year2: null,
        first_name: "",
        last_name: "",
        patronymic: "",
      }
    },
    methods: {
      saveToServer() {
        console.log(Object.assign({}, this.comment, this.progress, this.progress_exam))
      },
      onSubmit() {
        let dict = {}
        dict["data"] = Object.assign({}, this.getData)
        dict["data"]["sum1"] = this.sum1;
        dict["data"]["sum2"] = this.sum2;
        dict["data"]["fio"] = this.fio;
        dict["data"]["year1"] = this.year1;
        dict["data"]["year2"] = this.year2;
        dict["data"]["quarter"] = this.quarter;
        this.$store.dispatch('report_tables/sentData',dict).then(t =>notifyApi.showPositiveNotify("Отчет сохранен"))
        .catch(err=> notifyApi.showErrorNotify(err.message))
      }
    },
    created(){
    }
  }
</script>

<style scoped>

</style>
