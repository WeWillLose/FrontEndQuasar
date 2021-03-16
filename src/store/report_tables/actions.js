import api from "src/api/api";

export default {
  async sentData(context,data) {
    try{
      await api.sentData(data)
    }catch (e) {
      if (e.response.status === 403) {
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data
    }

  }

}

