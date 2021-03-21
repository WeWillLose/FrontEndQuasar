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
        console.log(metaKey, tablesData[metaKey],  state[`meta/${metaKey}`])
      } catch (e) {
        console.error(e)
      }
    }
    console.log("------------------------------")
    console.log("comment" in state)
    for (let stateKey in state) {
      try {
        if (tablesData[stateKey] != null ) {
          if(stateKey in state){
            state[`${stateKey}`].rows = tablesData[stateKey]
          }
        }
        // else {
        //   state[`${stateKey}`].rows = []
        // }
        console.log(stateKey, tablesData[stateKey], state[`${stateKey}`].rows)
      } catch (e) {
        console.error(e)
      }
    }
  },
  setDefault(state){
    console.log(Object.assign([],state.comment.defaultItem,state.comment.defaultItem))
  }
}
