import Vue from 'vue'
import Vuex from 'vuex'
import report_tables from './report_tables/index'
import to_do from './to_do/index'


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
    }
  })

  return Store
}
