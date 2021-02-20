export default {
  getToDoList: state => {
    return state.to_do_list
  },
  getDefault: state=>{
    return state.defaultItem
  },
  getEditedIndex: state=>{
    return state.editedIndex
  },
  getEditedItem: state=>{
    return state.editedItem
  }
}
