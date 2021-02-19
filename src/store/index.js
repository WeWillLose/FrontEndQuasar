import Vue from 'vue'
import Vuex from 'vuex'
import progress_exam from './report_tables/ProgressExam/index'
import progress from './report_tables/Progress/index'
import comment from './report_tables/Comment/index'


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
      progress_exam,
      progress,
      comment,
    }
  })

  return Store
}
