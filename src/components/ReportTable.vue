<template>
  <div >
    <q-splitter
      v-model="splitterModel"
      style="height: 900px"
    >

      <template v-slot:before>

        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="progress_exam" label="1.1 Успеваемость по предметам, вынессеным на экзамены"/>
          <q-tab name="progress" label="1.2 Успеваемость по предметам, не вынессеным на экзамены"/>
          <q-tab name="comment" label="1.3 Коментарии"/>
          <q-tab name="creation" label="2.1 Познавательная активность обучающихся"/>
          <q-tab name="proective" label="2.2 Познавательная активность обучающихся"/>
          <q-tab name="working_program" label="3.1 Разработка рабочей программы учебной дисциплины"/>
          <q-tab name="class_rooms" label="3.2.1 Сохранение учебно-материальной базы"/>
          <q-tab name="programs" label="3.2.2 Пополнение учебно-методических и наглядных пособий"/>
          <q-tab name="reconstruction" label="3.2.3 Работа по развитию материальной базы кабинета (лаборатории)"/>
          <q-tab name="complex" label="3.3 Работа по созданию и совершенствованию учебно-методического комплекса "/>
          <q-tab name="teachingaids" label="3.4 Разработка методических пособий"/>
          <q-tab name="education" label="3.5 Создание методических работ по методике обучения"/>
          <q-tab name="sdo" label="3.6 Работа по созданию и внедрению СДО"/>
          <q-tab name="plan" label="4.1 Наличие плана, концепции воспитательной работы"/>
          <q-tab name="circle" label="4.2 Наличие предметного кружка"/>
          <q-tab name="institutions" label="4.3 Наличие плана, концепции воспитательной работы"/>
          <q-tab name="events" label="4.4 Проведение мероприятий (отделение, колледж)"/>
          <q-tab name="plan_group" label="5.1 Деятельность преподавателя в качестве классного руководителя"/>
          <q-tab name="cool_hours" label="5.2 Деятельность преподавателя в качестве классного руководителя"/>
          <q-tab name="activity" label="5.3 Организация и проведение мероприятий (отделение, колледж)"/>
          <q-tab name="obz" label="5.4 Сопровождение обучающихся с ОВЗ"/>
          <q-tab name="selfeducation" label="6.1.1 Непрерывность повышения квалификации"/>
          <q-tab name="qualification" label="6.1.2 "/>
          <q-tab name="seminars" label="6.1.3 Участие в работе конференций, семинаров"/>
          <q-tab name="participation" label="6.1.4 Работа над методической темой"/>
          <q-tab name="contest" label="6.2 Участие преподавателя в профессиональных конкурсах"/>
          <q-tab name="technologies" label="7 Использование современных образовательных технологий"/>
          <q-tab name="experience" label="8 Обобщение и распространение опыта"/>
          <q-tab name="interaction" label="9 Взаимодействие с представителями социума"/>
          <q-tab name="subject" label="10 Исполнительская дисциплина"/>
          <q-tab name="manual" label="11 Руководство региональным МО"/>
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="progress_exam">
            <progress-exam-table></progress-exam-table>
          </q-tab-panel>
          <q-tab-panel name="progress">
            <progress-table></progress-table>
          </q-tab-panel>
          <q-tab-panel name="comment">
            <comment-table></comment-table>
          </q-tab-panel>
          <q-tab-panel name="creation">
            <creation-table></creation-table>
          </q-tab-panel>
          <q-tab-panel name="proective">
            <proective-table></proective-table>
          </q-tab-panel>
          <q-tab-panel name="working_program">
            <working-program-table></working-program-table>
          </q-tab-panel>
          <q-tab-panel name="class_rooms">
            <class-rooms-table></class-rooms-table>
          </q-tab-panel>
          <q-tab-panel name="programs">
            <programs-table></programs-table>
          </q-tab-panel>
          <q-tab-panel name="reconstruction">
            <reconstruction-table></reconstruction-table>
          </q-tab-panel>
          <q-tab-panel name="complex">
            <complex-table></complex-table>
          </q-tab-panel>
          <q-tab-panel name="teachingaids">
            <teachingaids-table></teachingaids-table>
          </q-tab-panel>
          <q-tab-panel name="education">
            <education-table></education-table>
          </q-tab-panel>
          <q-tab-panel name="sdo">
            <s-d-o-table></s-d-o-table>
          </q-tab-panel>
          <q-tab-panel name="plan">
            <plan-table></plan-table>
          </q-tab-panel>
          <q-tab-panel name="circle">
            <circle-table></circle-table>
          </q-tab-panel>
          <q-tab-panel name="institutions">
            <institutions-table></institutions-table>
          </q-tab-panel>
          <q-tab-panel name="events">
            <events-table></events-table>
          </q-tab-panel>
          <q-tab-panel name="plan_group">
            <plan-group-table></plan-group-table>
          </q-tab-panel>
          <q-tab-panel name="cool_hours">
            <coolhours-table></coolhours-table>
          </q-tab-panel>
          <q-tab-panel name="activity">
            <activity-table></activity-table>
          </q-tab-panel>
          <q-tab-panel name="obz">
            <o-b-z-table></o-b-z-table>
          </q-tab-panel>
          <q-tab-panel name="selfeducation">
            <selfeducation-table></selfeducation-table>
          </q-tab-panel>
          <q-tab-panel name="qualification">
            <qualification-table></qualification-table>
          </q-tab-panel>
          <q-tab-panel name="seminars">
            <seminars-table></seminars-table>
          </q-tab-panel>
          <q-tab-panel name="participation">
            <participation-table></participation-table>
          </q-tab-panel>
          <q-tab-panel name="contest">
            <contest-table></contest-table>
          </q-tab-panel>
          <q-tab-panel name="technologies">
            <technologies-table></technologies-table>
          </q-tab-panel>
          <q-tab-panel name="experience">
            <experience-table></experience-table>
          </q-tab-panel>
          <q-tab-panel name="interaction">
            <interaction-table></interaction-table>
          </q-tab-panel>
          <q-tab-panel name="subject">
            <subject-table></subject-table>
          </q-tab-panel>
          <q-tab-panel name="manual">
            <manual-table></manual-table>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
  <!--<div class="q-ma-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="progress_exam" label="1.1 Успеваемость по предметам, вынессеным на экзамены"/>
        <q-tab name="progress" label="1.2 Успеваемость по предметам, не вынессеным на экзамены"/>
        <q-tab name="comment" label="1.3 Коментарии"/>
        <q-tab name="creation" label="2.1 Познавательная активность обучающихся"/>
        <q-tab name="proective" label="2.2 Познавательная активность обучающихся"/>
        <q-tab name="working_program" label="3.1 Разработка рабочей программы учебной дисциплины"/>
        <q-tab name="class_rooms" label="3.2.1 Сохранение учебно-материальной базы"/>
        <q-tab name="programs" label="3.2.2 Пополнение учебно-методических и наглядных пособий"/>
        <q-tab name="reconstruction" label="3.2.3 Работа по развитию материальной базы кабинета (лаборатории)"/>
        <q-tab name="complex" label="3.3 Работа по созданию и совершенствованию учебно-методического комплекса "/>
        <q-tab name="teachingaids" label="3.4 Разработка методических пособий"/>
        <q-tab name="education" label="3.5 Создание методических работ по методике обучения"/>
        <q-tab name="sdo" label="3.6 Работа по созданию и внедрению СДО"/>
        <q-tab name="plan" label="4.1 Наличие плана, концепции воспитательной работы"/>
        <q-tab name="circle" label="4.2 Наличие предметного кружка"/>
        <q-tab name="institutions" label="4.3 Наличие плана, концепции воспитательной работы"/>
        <q-tab name="events" label="4.4 Проведение мероприятий (отделение, колледж)"/>
        <q-tab name="plan_group" label="5.1 Деятельность преподавателя в качестве классного руководителя"/>
        <q-tab name="cool_hours" label="5.2 Деятельность преподавателя в качестве классного руководителя"/>
        <q-tab name="activity" label="5.3 Организация и проведение мероприятий (отделение, колледж)"/>
        <q-tab name="obz" label="5.4 Сопровождение обучающихся с ОВЗ"/>
        <q-tab name="selfeducation" label="6.1.1 Непрерывность повышения квалификации"/>
        <q-tab name="qualification" label="6.1.2 "/>
        <q-tab name="seminars" label="6.1.3 "/>
        <q-tab name="participation" label="6.1.4 Работа над методической темой"/>
        <q-tab name="contest" label="6.2 Участие преподавателя в профессиональных конкурсах"/>
        <q-tab name="technologies" label="7 Использование современных образовательных технологий"/>
        <q-tab name="experience" label="8 Обобщение и распространение опыта"/>
        <q-tab name="interaction" label="9 Взаимодействие с представителями социума"/>
        <q-tab name="subject" label="10 Исполнительская дисциплина"/>
        <q-tab name="manual" label="11 Руководство региональным МО"/>




      </q-tabs>

      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="progress_exam">
          <progress-exam-table></progress-exam-table>
        </q-tab-panel>
        <q-tab-panel name="progress">
          <progress-table></progress-table>
        </q-tab-panel>
        <q-tab-panel name="comment">
          <comment-table></comment-table>
        </q-tab-panel>
        <q-tab-panel name="creation">
          <creation-table></creation-table>
        </q-tab-panel>
        <q-tab-panel name="proective">
          <proective-table></proective-table>
        </q-tab-panel>
        <q-tab-panel name="working_program">
          <working-program-table></working-program-table>
        </q-tab-panel>
        <q-tab-panel name="class_rooms">
          <class-rooms-table></class-rooms-table>
        </q-tab-panel>
        <q-tab-panel name="programs">
          <programs-table></programs-table>
        </q-tab-panel>
        <q-tab-panel name="reconstruction">
          <reconstruction-table></reconstruction-table>
        </q-tab-panel>
        <q-tab-panel name="complex">
          <complex-table></complex-table>
        </q-tab-panel>
        <q-tab-panel name="teachingaids">
          <teachingaids-table></teachingaids-table>
        </q-tab-panel>
        <q-tab-panel name="education">
          <education-table></education-table>
        </q-tab-panel>
        <q-tab-panel name="sdo">
          <s-d-o-table></s-d-o-table>
        </q-tab-panel>
        <q-tab-panel name="plan">
          <plan-table></plan-table>
        </q-tab-panel>
        <q-tab-panel name="circle">
          <circle-table></circle-table>
        </q-tab-panel>
        <q-tab-panel name="institutions">
          <institutions-table></institutions-table>
        </q-tab-panel>
        <q-tab-panel name="events">
         <events-table></events-table>
        </q-tab-panel>
        <q-tab-panel name="plan_group">
          <plan-group-table></plan-group-table>
        </q-tab-panel>
        <q-tab-panel name="cool_hours">
          <coolhours-table></coolhours-table>
        </q-tab-panel>
        <q-tab-panel name="activity">
          <activity-table></activity-table>
        </q-tab-panel>
        <q-tab-panel name="obz">
          <o-b-z-table></o-b-z-table>
        </q-tab-panel>
        <q-tab-panel name="selfeducation">
          <selfeducation-table></selfeducation-table>
        </q-tab-panel>
        <q-tab-panel name="qualification">
          <qualification-table></qualification-table>
        </q-tab-panel>
        <q-tab-panel name="seminars">
          <seminars-table></seminars-table>
        </q-tab-panel>
        <q-tab-panel name="participation">
          <participation-table></participation-table>
        </q-tab-panel>
        <q-tab-panel name="contest">
          <contest-table></contest-table>
        </q-tab-panel>
        <q-tab-panel name="technologies">
          <technologies-table></technologies-table>
        </q-tab-panel>
        <q-tab-panel name="experience">
          <experience-table></experience-table>
        </q-tab-panel>
        <q-tab-panel name="interaction">
          <interaction-table></interaction-table>
        </q-tab-panel>
        <q-tab-panel name="subject">
          <subject-table></subject-table>
        </q-tab-panel>
        <q-tab-panel name="manual">
          <manual-table></manual-table>
        </q-tab-panel>




      </q-tab-panels>
    </q-card>
  </div>-->
<!--    <div>
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
                  <q-input label="Фамилия" v-model="lastName"
                           :rules="[rules.required(),rules.alphaWithRus(),rules.withoutSpaces()]"
                  ></q-input>
                </div>
                <div class="col">
                  <q-input label="Имя" v-model="firstName"
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
    </div>-->
</template>

<script>
  import {createHelpers} from 'vuex-map-fields';
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

  const {mapFields} = createHelpers({
    getterType: 'report_tables/meta/getField',
    mutationType: 'report_tables/meta/updateField',
  });
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
      ...mapFields({
        firstName: 'first_name',
        lastName: 'last_name',
        patronymic: 'patronymic',
        quarter: 'quarter',
        options: 'options',
        year1: 'year1',
        year2: 'year2',
        fio: 'fio',
        fioShort: 'fioShort',
      }),
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
    },
    data () {
      return {
        tab: 'mails',
        splitterModel: 30
      }
    },
    methods: {
      onSubmit() {
        let dict = {}
        console.log(this.getData)
        dict["id"] = this.$store.getters["report_tables/meta/getId"];
        dict["data"] = Object.assign({}, this.getData)
        dict["data"]["sum1"] = this.sum1;
        dict["data"]["sum2"] = this.sum2;
        dict["data"]["fio"] = this.$store.getters["report_tables/meta/getFIO"];
        dict["data"]["year1"] = this.year1;
        dict["data"]["year2"] = this.year2;
        dict["data"]["quarter"] = this.quarter;
        dict["data"]["fioShort"] = this.$store.getters["report_tables/meta/getFIOShort"];
        dict["data"]["first_name"] = this.$store.getters["report_tables/meta/getFirstName"];
        dict["data"]["last_name"] = this.$store.getters["report_tables/meta/getLastName"];
        dict["data"]["patronymic"] = this.$store.getters["report_tables/meta/getPatronymic"];
        console.log(this.$store.getters["report_tables/meta/getId"])
        console.log(dict.id)
        this.$store.dispatch('report_tables/sentData', dict).then(t => notifyApi.showPositiveNotify("Отчет сохранен"))
          .catch(err => notifyApi.showErrorNotify(err.message))
      }
    },
    created() {
      this.$store.commit("report_tables/setDefault")
    }
  }
</script>

<style scoped>

</style>
