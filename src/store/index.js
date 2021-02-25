import Vue from 'vue'
import Vuex from 'vuex'
import report_tables from './report_tables/index'
import to_do from './to_do/index'
import class_rooms from './report_tables/3/ClassRooms/index'
import programs from './report_tables/3/Programs/index'

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
      class_rooms,
      programs,
    }
  })

  return Store
}
