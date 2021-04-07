export default {
  setTablesData: (state, data) => {
    if(!!!data){
      return;
    }
    if(data.id !=null){
      state.meta.id = data.id;
    }
    let tablesData = data.data
    for (let metaKey in state.meta) {
      try {
        if (tablesData[metaKey] != null) {
          if(metaKey == "year1"){
            state.meta.year1 = tablesData[metaKey];
          }else if(metaKey == "year2"){
            state.meta.year2 = tablesData[metaKey];
          }else if(metaKey == "quarter"){
            state.meta.quarter = tablesData[metaKey];
          }else if(metaKey == "first_name"){
            state.meta.first_name = tablesData[metaKey];
          }else if(metaKey == "last_name"){
            state.meta.last_name = tablesData[metaKey];
          }else if(metaKey == "patronymic"){
            state.meta.patronymic = tablesData[metaKey];
          }
        }
      } catch (e) {
        console.error(e)
      }
    }
    for (let stateKey in state) {
      try {
        if(stateKey == "proective"){console.log(state[`${stateKey}`].rows,tablesData[stateKey])}
        if (tablesData[stateKey] != null ) {
          if(stateKey in state){
            state[`${stateKey}`].rows = tablesData[stateKey]
          }
        }
        // else {
        //   state[`${stateKey}`].rows = []
        // }
      } catch (e) {
        console.error(e)
      }
    }
  },
  setDefaultTablesData(state){
    for (let stateKey in state) {
        state[stateKey].rows = Object.assign([],state[stateKey].defaultRows)
    }
      state.meta.quarter = 1
      state.meta.options = [1, 2, 3, 4]
      state.meta.year1 = null
      state.meta.year2 = null
      state.meta.first_name = ""
      state.meta.last_name = ""
      state.meta.patronymic = ""
      state.meta.id = null
  }
}
