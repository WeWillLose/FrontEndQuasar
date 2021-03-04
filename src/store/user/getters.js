export default {
  getUser: state=> state.user,
  isLogin: state=> state.is_login,
  getName: state=> {
    if (state.user!=null && state.user.username && state.user.username){
      return state.user.firstName +" " + state.user.lastName
    }
  },
  isAdmin: state=> {

    if (state.user!=null && state.user.roles!=null){
      for (let i=0;i<state.user.roles.length;i++){
        if (state.user.roles[i].name == "ROLE_ADMIN"){
          return true;
        }
      }
    }
    return false;
  }
}
