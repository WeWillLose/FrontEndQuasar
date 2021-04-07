<template>
  <div class="">
    <div class="q-pa-md row items-start q-gutter-md">
        <report
          v-for="report in reports" :key="report.id" :report="report">
        </report>
    </div>
  </div>
</template>

<script>
  import Report from "components/report/Report";
  import api from "src/api/api";
    export default {
      components: {Report},
        name: "ReportList",
      data(){
        return{
          reports:[],
        }
      },
      computed:{
        getReportsCurrentUser(){
          return this.getReportsHelper().then(t=>{return t})
        }

      },
      methods:{
        async getReportsHelper(){
          try{
            let response = await api.getReportsCurrentUser()
            let data = response.data
            this.reports = data
          }catch (e) {
            console.log(e.response.data.message)
          }
        }
      },
      mounted(){
        this.getReportsHelper()
      }
    }
</script>

<style scoped>

</style>
