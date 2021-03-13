<template>
  <div>
    <q-form
    @submit="onSubmit">
      <div class="q-ma-md">
        <q-input label="ФИО" v-model="fio"

        ></q-input>
      </div>
      <div class="q-ma-md">
        <q-select

          filled v-model="model" :options="options" label="Квартал"/>
      </div>
      <div class="row">
        <div class="q-ma-md col">
          <q-input type="number" v-model="year1" min="2000" max="3000"

          />
        </div>
        <div class="q-ma-md col">
          <q-input type="number" v-model="year2" min="2000"

                   max="3000"/>
        </div>
      </div>
      <progress-exam-table/>
      <progress-table/>
      <comment-table/>
      <creation-table/>
      <proective-table/>
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
          <q-btn type="submit" color="dark" label="Сохранить"/>
        </div>

      </div>
    </q-form>
  </div>
</template>

<script>
  // :rules="[v=>!!v||'Поле обязательно']"
  // :rules="[v=>!!v||'Поле обязательно']"
  // :rules="[v=> (v > 2000 && v<3000) || 'Год не корректен']"
  // :rules="[v=> (v > 2000 && v<3000) || 'Год не корректен']"
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
  import creation_table from "src/store/report_tables/2/CreationTable";
  import proective_table from "src/store/report_tables/2/ProectiveTable";
  import complex from "src/store/report_tables/3/Complex";
  import class_rooms from "src/store/report_tables/3/ClassRooms";
  import education from "src/store/report_tables/3/Education";
  import working_program from "src/store/report_tables/3/WorkingProgram";
  import reconstruction from "src/store/report_tables/3/Reconstruction";
  import sdo from "src/store/report_tables/3/SDO";
  import programs from "src/store/report_tables/3/Programs";
  import teaching_aids from "src/store/report_tables/3/Teachingaids";
  import circle from "src/store/report_tables/4/Circle";
  import institutions from "src/store/report_tables/4/Institutions";
  import plan from "src/store/report_tables/4/Plan";
  import events from "src/store/report_tables/4/Events";
  import plan_group from "src/store/report_tables/5/PlanGroup";
  import activity from "src/store/report_tables/5/Activity";
  import obz from "src/store/report_tables/5/OBZ";
  import cool_hours from "src/store/report_tables/5/Сoolhours";
  import contest from "src/store/report_tables/6/Contest";
  import participation from "src/store/report_tables/6/Participation";
  import qualification from "src/store/report_tables/6/Qualification";
  import self_education from "src/store/report_tables/6/Selfeducation";
  import technologies from "src/store/report_tables/7/Technologies";
  import experience from "src/store/report_tables/8/Experience";
  import manual from "src/store/report_tables/11/Manual";
  import interaction from "src/store/report_tables/9/Interaction";
  import subject from "src/store/report_tables/10/Subject";
  import seminars from "src/store/report_tables/6/Seminars";

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
        comment: "comment/getData",
        progress: 'progress/getData',
        progress_exam: 'progress_exam/getData',
        creation_table: 'creation_table/getData',
        proective_table: 'proective_table/getData',
        complex: 'complex/getData',
        class_rooms: 'class_rooms/getData',
        education: 'education/getData',
        working_program: 'working_program/getData',
        reconstruction: 'reconstruction/getData',
        sdo: 'sdo/getData',
        programs: 'programs/getData',
        teaching_aids: 'teaching_aids/getData',
        circle: 'circle/getData',
        institutions: 'institutions/getData',
        plan: 'plan/getData',
        events:'events/getData',
        plan_group: 'plan_group/getData',
        activity: 'activity/getData',
        obz: 'obz/getData',
        cool_hours: 'cool_hours/getData',
        contest: 'contest/getData',
        participation: 'participation/getData',
        qualification: 'qualification/getData',
        self_education: 'self_education/getData',
        technologies: 'technologies/getData',
        experience: 'experience/getData',
        manual: 'manual/getData',
        interaction: 'interaction/getData',
        subject: 'subject/getData',
        seminars: 'seminars/getData'

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
        console.log(Object.assign({}, this.comment, this.progress, this.progress_exam))
      },
      onSubmit(){
        let dict=  {}
        dict["data"] = Object.assign({}, this.comment, this.progress, this.progress_exam, this.creation_table,
          this.proective_table, this.class_rooms, this.complex, this.education,
          this.programs, this.reconstruction, this.sdo, this.teaching_aids,
          this.working_program, this.circle, this.events, this.institutions,
          this.plan, this.activity, this.obz, this.plan_group, this.cool_hours,
          this.contest, this.participation, this.qualification, this.self_education,
          this.seminars, this.technologies, this.experience, this.interaction,
          this.subject, this.manual)
        api.sentData(dict)
      }
    },

  }
</script>

<style scoped>

</style>
