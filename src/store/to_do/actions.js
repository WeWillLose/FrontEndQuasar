import {uuid} from "vue-uuid";
import api from "../../api/api";
export default {
  async addItemAction(context,item){
    if (!item){
      console.error("empty item (addItemAction)")
      return
    }
    let index = -1
    const find_item = context.state.to_do_list.filter(t=>t.id === item.id)[0]
    if(find_item){
      index =  context.state.to_do_list.indexOf(find_item)
    }
    if(index > -1){
      const res = await api.updateToDo(item)
      const data = res.data
      data['expanded'] = false

      console.log(data)
      context.commit('editItem',{item:data,index:index})
    }else{
      const res = await api.createToDo(item)
      const data = res.data
      data['expanded'] = false
      context.commit('addItem',data)
    }
  },
  async deleteItemAction(context,item){
    if (!item){
      console.error("empty item (deleteItemAction)")
      return
    }
    const index = context.state.to_do_list.indexOf(item)
    if(index == -1){
      console.error("index not found (deleteItemAction)")
      return
    }
    const res = await api.deleteToDo(item)
    const data = res.data
    context.commit('deleteItem',item)
  },
  async getToDoFromServer(context){
      const result = await api.getToDo()
      const data = result.data
      context.commit('setToDo',data)
  }

}

