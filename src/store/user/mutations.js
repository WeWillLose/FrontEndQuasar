import User from "src/store/user/model/User";


function eraseCookieFromAllPaths(name) {
  // This function will attempt to remove a cookie from all paths.
  var pathBits = location.pathname.split('/');
  var pathCurrent = ' path=';

  // do a simple pathless delete first.
  document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

  for (var i = 0; i < pathBits.length; i++) {
    pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
  }
}
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
    try {
      eraseCookieFromAllPaths("SESSION")
    }catch (e) {
      console.error(e)
    }

  }
}

