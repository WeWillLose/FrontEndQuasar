<template>
  <q-page class="">
    <q-table :data="data" :columns="columns" row-key="id">

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
        nodes:[],
        data: [],
        columns:[
          {
            name:"author",
            label:"Автор",
            field: "author",
            format: val =>commonUtils.extractShortFio(val)
          },
          {
            name:"name",
            label:"Название",
            field: "name",
          },
          {
            name:"status",
            label:"Статус",
            field: "status",
          },
          {
            name:"createdDate",
            label:"Дата создания",
            field: "createdDate",
            format: val => qDate.formatDate(val,"DD-MM-YYYY")
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
    },
    methods: {
      openReportForm(data){
        if(!!data && !!data.id){
          this.$store.dispatch('report_tables/setReportTablesData',data.id)
        }
        this.$router.push({path: '/form'});
      },

       async getFollowersReports() {
        let l = []
        let res = await api.getFollowersReports()
         this.data = [...res.data]
         console.log(this.data)

      }
    },
    created() {
      this.getFollowersReports()
    }
  }
</script>

<style scoped>

</style>
