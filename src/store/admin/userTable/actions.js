import api from "src/api/api";

export default {
    async deleteUser(context,user){
      try{
        const res = await api.deleteUser(user)
        const data = res.data
        context.commit("deleteUser",user.id)
        return true
      }catch (e) {
        if(e.response.status == 403){
          throw "У вас нет доступа или залогинтесь опять"
        }
        throw e.response.data

      }
    },
  async getUsers(context){
    try{
      const res = await api.getUsers()
      const data = res.data
      context.commit("setUsers",data)
      return true
    }catch (e) {
      if(e.response.status == 403){
        throw "У вас нет доступа или залогинтесь опять"
      }
      throw e.response.data

    }
  },
}

