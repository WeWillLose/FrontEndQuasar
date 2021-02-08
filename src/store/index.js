import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state:{
      max_total_size: 20971520,
    },
    getters:{
      getMaxSize: state => state.max_total_size
    }
  })

  return Store
}
