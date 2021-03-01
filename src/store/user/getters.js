export default {
  getUser: state=> state.user,
  isLogin: state=> state.is_login,
  getName: state=> {
    if (state.user!=null && state.user.username && state.user.username){
      return state.user.firstName +" " + state.user.lastName
    }
  }
}
