<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="q-my-lg q-mx-auto text_main">
      <div class="q-pa-md flex flex-center">
        <report-list/>
      </div>
    </div>
  </q-page>

</template>

<script>
    import ReportList from "components/report/ReportList";
    export default {
      name: "MyReportsPage",
      components: {ReportList},
      data(){
          return{
          }
      },
      computed:{

      },
      methods:{

      },
      created(){
      }
    }
</script>

<style scoped>

</style>
