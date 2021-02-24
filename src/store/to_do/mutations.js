import {uuid} from "vue-uuid";

export default {

  setEditedItem(state,item){
    state.editedItem = Object.assign({},item)
  },
  setEditedIndex(state,index){
    state.editedIndex = index
  },

  addItem:(state,item) =>{
    state.to_do_list.push(item)
  },
  editItem(state,data){
    Object.assign(state.to_do_list[data.index], data.item);
    state.editedItem = Object.assign({}, data.item);
  },
  deleteItem(state,item){
    const index = state.to_do_list.indexOf(item)
    state.to_do_list.splice(index, 1);
  },
  setToDo(state,toDoes){
    toDoes.forEach(t=> t['expanded'] = false)
    state.to_do_list = toDoes
  }

}

