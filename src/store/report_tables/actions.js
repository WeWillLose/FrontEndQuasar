import api from "src/api/api";

export default {
  async sentData(context,data) {
    if(!!!data){
      console.warn("IN sentData data is null")
      return null;
    }
    if(!!data.id){
      try{
        console.log("OK1")
        await api.updateReport(data.id,data)
      }catch (e) {
        if (e.response.status === 403) {
          throw {"message":"У вас нет доступа или залогинтесь опять"}
        }
        throw e.response.data
      }
    }
    else {
    try{
      await api.sentData(data)
    }catch (e) {
      if (e.response.status === 403) {
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data
    }
    }
  },
  async setReportTablesData(context,id){
    console.log(id)
    context.commit("setDefaultTablesData")
      api.getReportTableData(id).then(t=>{
        let data = t.data
        context.commit('setTablesData',data)
      })
  }

}

