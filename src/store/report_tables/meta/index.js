import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced:true,
  state: {
    quarter: null,
    options: [
      1, 2, 3, 4
    ],
    year1: null,
    year2: null,
    first_name: "",
    last_name: "",
    patronymic: "",
    id:null,
  },
  getters: {
    getId(state){
      return state.id
    },
    getFIO(state) {
      return state.last_name.trim() + " " + state.first_name.trim() + " " + state.patronymic.trim();
    },
    getFIOShort(state) {
      return state.last_name.trim() + " " + state.first_name.trim().slice(0, 1).toUpperCase() + "." + state.patronymic.trim().slice(0, 1).toUpperCase() + ".";
    },
    getFirstName(state) {
      return state.first_name
    },
    getOptions(state) {
      return state.options
    },
    getLastName(state) {
      return state.last_name
    },
    getPatronymic(state) {
      return state.patronymic
    },
    getQuarter(state) {
      return state.quarter
    },
    getYear1(state) {
      return state.year1
    },
    getYear2(state) {
      return state.year2
    },
    getDefaultFIO(state){
      return "";
    },
    getField

  },
  mutations: {
    setDefault(state) {
      state.quarter = null
        state.options = [1, 2, 3, 4]
        state.year1 = null
        state.year2 = null
        state.first_name = ""
        state.last_name = ""
        state.patronymic = ""
        state.is = null
    },
    updateField
  }
}

