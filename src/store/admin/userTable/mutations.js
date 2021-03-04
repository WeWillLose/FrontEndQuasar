export default {
  deleteUser(state,id){
    try{
      const index = state.users.indexOf({id:id})
      state.users.splice(index, 1);
    }catch (e) {
      console.error(e)
    }
  },
  setUsers(state,users){
    try{
      state.users = users
    }catch (e) {
      console.error(e)
    }
  }
}

