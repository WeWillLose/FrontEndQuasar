<template>
  <q-page class="q-ma-md">
    <q-table :data="data" :columns="columns" row-key="id" :filter="filter">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="author" :props="props">
            {{commonUtils.User.extractShortFioByUser(props.row.author)}}
          </q-td>
          <q-td key="name" :props="props">
              {{ props.row.name }}
          </q-td>
          <q-td key="status" :props="props">
              <div :class="commonUtils.Report.getStatusClassByStatus(props.row.status )">
                <q-icon :name="commonUtils.Report.getIconNameByStatus(props.row.status )" size="sm"/>
                {{props.row.status }}
              </div>
          </q-td>
          <q-td key="createdDate" :props="props">
            {{qDate.formatDate(props.row.createdDate,"DD-MM-YYYY")}}
          </q-td>
          <q-td key="actions" :props="props">
            <q-btn label="Редактировать" size="sm" class="q-mr-sm" color="blue" @click="openReportForm(props.row)"></q-btn>
            <q-btn label="Удалить" size="sm" color="red" @click="deleteReport(props.row)"></q-btn>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>

</template>

<script>
  import api from "src/api/api";
  import notifyApi from "src/api/notifyApi";
  import { date as qDate } from 'quasar'
  import commonUtils from "src/api/commonUtils";

  export default {
    name: "FollowersReportsPage",
    data() {
      return {
        filter:'',
        nodes:[],
        data: [],
        columns:[
          {
            name:"author",
            label:"Автор",
            field: "author",
            format: (val, row) => commonUtils.User.extractShortFioByUser(val),
            sortable: true,
          },
          {
            name:"name",
            label:"Название",
            field: "name",
            sortable: true,
          },
          {
            name:"status",
            label:"Статус",
            field: "status",
            sortable: true,
          },
          {
            name:"createdDate",
            label:"Дата создания",
            field: "createdDate",
            sortable: true,
          },
          {
            name:"actions",
            label:"Действия",
            field: "actions",
          }
        ]
      }
    },
    computed: {
      commonUtils:()=>commonUtils,
      qDate:()=>qDate,
    },
    methods: {
      openReportForm(data){
        if(!!data && !!data.id){
          this.$store.dispatch('report_tables/setReportTablesData',data.id)
        }
        this.$router.push({path: '/form'});
      },
      async deleteReport(report) {
        let res = await api.deleteReport(report.id)
        if(res.status == 200){
          const ind = this.data.indexOf(report)
          if(ind!==-1) this.data.splice(ind,1)
        }
      },

       async getFollowersReports() {
        let l = []
        let res = await api.getFollowersReports()
         this.data = [...res.data]
      },
    },
    created() {
      this.getFollowersReports()
    }
  }
</script>

<style scoped>

</style>
