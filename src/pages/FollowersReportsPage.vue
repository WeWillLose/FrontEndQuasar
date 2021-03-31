<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="frame q-my-lg q-mx-auto text_main">
      <div class="">
        <div class="q-pa-md row items-start q-gutter-md">
          <div class="q-pa-md q-gutter-sm">
            <q-tree
              style="font-size: 16px"
              :nodes="nodes"
              node-key="label"
            />
          </div>
        </div>
      </div>

    </div>
  </q-page>

</template>

<script>
  import api from "src/api/api";
  import notifyApi from "src/api/notifyApi";

  export default {
    name: "FollowersReportsPage",
    data() {
      return {
        nodes:[],
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

      getIconAndColorByStatus(status){
        if(!!!status || status=="UNCHECKED"){
          return {icon:"visibility_off",color:"red"}
        }
        if(status=="CHECKED"){
          return {icon:"visibility",color:"gray"}
        }
        if(status=="COMPLETED"){
          return {icon:"check",color:"green"}
        }
        return {icon:"help",color:"black"}
      },
      getFollowersReports() {
        api.getFollowersReports().then(t=>{
          let data =  t.data;
          const map = new Map(Object.entries(data));
          map.forEach((v, k) => {
            let childrenNodes = []
            v.forEach(value=>{
              let iconAndColor = this.getIconAndColorByStatus(value.status)
              childrenNodes.push({id:value.id,label:!!value.name?value.name:"Неназванный отчет",
                icon: iconAndColor.icon,
                handler: data => this.openReportForm(data),
                selectable:true,
                iconColor:iconAndColor.color
              })
            })
            this.nodes.push({label:k,children:childrenNodes})
          })
        })
      }
    },
    created() {
      this.getFollowersReports()
    }
  }
</script>

<style scoped>

</style>
