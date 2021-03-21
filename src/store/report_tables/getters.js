export default {
  getRows1: state => {
    return state.rows
  },
  getColumns1: state => {
    return state.columns
  },
  getDefaultItem1: state=>{
    return state.defaultItem
  },
  getEditedIndex1: state=>{
    return state.editedIndex
  },
  getEditedItem1: state=>{
    return state.editedItem
  },
  getData: state =>{
    let dict = {}
    dict[state.name] = state.rows
    return dict
  },
  getScore: state =>{
    let scoreRate = 0;
    try{
      if(!!!state.rows){
        return scoreRate;
      }
      state.rows.forEach(t=>{
        if(!!t.score){
          try{
            scoreRate+= Number.parseFloat(t.score);
          }catch (e) {

          }

        }
      })
    }catch (e) {
      console.error(e)
    }

    return scoreRate
  }
}
