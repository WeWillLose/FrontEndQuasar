import api from "../../api/api";
export default {
    async loginAction(context,user){
      try{
        const res = await api.login(user)
        const data = res.data
        context.commit("login",data)
        return true
      }catch (e) {
        if(e.response.status == 403){
          throw "У вас нет доступа или залогинтесь опять"
        }
        throw e.response.data

      }
    },
  async logoutAction(context,user){
    try{
      context.commit("logout")
      return true
    }catch (e) {
      throw "Ошибка"
    }
  }

}

