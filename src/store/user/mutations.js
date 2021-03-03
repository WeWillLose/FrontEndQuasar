import User from "src/store/user/model/User";

export default {
  login(state,user){
    try{
      if(user!=null && user)
        state.user = new User(user)
      state.is_login = true
      localStorage.setItem('user',JSON.stringify(state.user))
      localStorage.setItem('is_login',state.is_login)
    }catch (e) {
      throw "Ошибка в setUser"
    }
  },
  logout(state){
    state.user = null
    state.is_login = false
    localStorage.removeItem("user")
    localStorage.setItem('is_login',state.is_login)
    localStorage.removeItem('SESSION')
  }
}

