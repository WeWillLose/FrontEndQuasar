import api from "src/api/api";
function getIndexInSourceById(source,id){
  for(let i=0;i< source.length;i++){
    if(source[i].id ==id){
      return i;
    }
  }
  return -1;
}
export default {
    async deleteUser(context,user){
      try{
        const res = await api.deleteUser(user)
        const data = res.data
        const ind = getIndexInSourceById(context.state.users,user.id);
        console.log(ind)
        context.commit("deleteUser",ind)
        return true
      }catch (e) {
        if(e.response.status == 403){
          throw {"message":"У вас нет доступа или залогинтесь опять"}
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
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data

    }
  },
  async registrationUser(context,user){
    try{
      const res = await api.registrationUser(user)
      const data = res.data
      context.commit("addUser",data)
      context.commit("setDefaultEditedUser")
      return true
    }catch (e) {
      if(e.response.status == 403){
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data.message

    }
  },
  async editUser(context,user){
    try{
      const res = await api.editUser(user)
      const data = res.data
      context.commit("editUser",{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit("setDefaultEditedUser")
      return true
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data.message

    }
  },
  async resetPassword(context,user){
    try{
      const res = await api.resetPassword(user)
      const data = res.data
      context.commit("editUser",{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit("setDefaultEditedUser")
      return true
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data.message

    }
  },
  async setRoles(context,user){
    try{
      if(!!!user){
        console.error("IN setRoles user is null")
        return;
      }
      if(!!!user.roles){
        console.error("IN setRoles user.roles is null")
        return;
      }
      if(!Array.isArray(user.roles)){
        console.error(`IN setRoles user.roles is ${typeof user.roles} must be array`)
        return;
      }
      if(!!!user.id){
        console.error("IN setRoles user.id is null")
        return;
      }
      const res = await api.setRoles(user.id,user.roles)
      const data = res.data
      context.commit("editUser",{index:getIndexInSourceById(context.state.users, data.id),user:data})
      context.commit("setDefaultEditedUser")
      return true
    }catch (e) {
      console.error(e)
      if(e.response.status == 403){
        throw {"message":"У вас нет доступа или залогинтесь опять"}
      }
      throw e.response.data.message

    }
  },
}

