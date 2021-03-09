import Vue from 'vue'
import Vuex from 'vuex'
import report_tables from './report_tables/index'
import to_do from './to_do/index'
import user from './user/index'
import User from "src/store/user/model/User";
import admin_table from "src/store/admin/userTable/index";



Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state:{
      max_total_size: 20971520,
    },
    getters:{
      getMaxSize: state => state.max_total_size
    },
    modules:{
      report_tables,
      to_do,
      user,
      admin_table,
    },
    mutations:{
      init(state){
        if(localStorage.getItem("is_login") && localStorage.getItem("user")){
          let user = JSON.parse(localStorage.getItem("user"))
          if(user !=null && user){
            state.user.user = new User(user)
          }else{
            state.user.user = null
          }
          state.user.is_login = localStorage.getItem("is_login") == "true"
        }
      },

    }
  })

  return Store
}
