import {uuid} from "vue-uuid";
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
      // const res = await api
      context.commit('editItem',{item:item,index:index})
    }else{
      item.id = uuid.v4()
      item['expanded'] = false
      context.commit('addItem',item)
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
    // const res = await api
    context.commit('deleteItem',item)
  }

}

