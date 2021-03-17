export default {
  getData: state =>{
    let dict = {}
    for (let t in state) {
      try{
        dict[t] = state[t].rows
      }catch (e) {
        console.error(e)
      }
    }
    return dict
  },
  getScore: state =>{
  }
}
