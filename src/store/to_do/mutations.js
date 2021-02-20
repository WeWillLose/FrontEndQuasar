import {uuid} from "vue-uuid";

export default {

  setEditedItem(state,item){
    state.editedItem = Object.assign({},item)
  },
  setEditedIndex(state,index){
    state.editedIndex = index
  },

  addItem:(state,item) =>{
    let index = -1
    const find_item = state.to_do_list.filter(t=>t.id === item.id)[0]
    if(find_item){
      index =  state.to_do_list.indexOf(find_item)
    }
    console.log(index)
    if(index > -1){
      Object.assign(state.to_do_list[index], item);
      state.editedItem = Object.assign({}, item);
    }else{
      item.id = uuid.v4()
      state.to_do_list.push(item)
    }
    },
  deleteItem(state,item){
    const index = state.to_do_list.indexOf(item)
    state.to_do_list.splice(index, 1);
  }

}

