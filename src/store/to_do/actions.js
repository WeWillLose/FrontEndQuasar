import api from "../../api/api";

export default {
  async addItemAction(context, item) {
    if (!item) {
      console.error("empty item (addItemAction)")
      return
    }
    let index = -1
    const find_item = context.state.to_do_list.filter(t => t.id === item.id)[0]
    if (find_item) {
      index = context.state.to_do_list.indexOf(find_item)
    }
    if (index > -1) {
      try {
        const res = await api.updateToDo(item)
        const data = res.data
        data['expanded'] = false
        context.commit('editItem', {item: data, index: index})
      } catch (e) {
        if (e.response.status == 403) {
          throw "У вас нет доступа или залогинтесь опять"
        }
        throw e.response.data
      }

    } else {
      try {
        const res = await api.createToDo(item)
        const data = res.data
        data['expanded'] = false
        context.commit('addItem', data)
      } catch (e) {
        if (e.response.status == 403) {
          throw "У вас нет доступа или залогинтесь опять"
        }
        throw e.response.data
      }
    }
  },
  async deleteItemAction(context, item) {
    if (!item) {
      console.error("empty item (deleteItemAction)")
      return
    }
    const index = context.state.to_do_list.indexOf(item)
    if (index == -1) {
      console.error("index not found (deleteItemAction)")
      return
    }
    try {
      const res = await api.deleteToDo(item)
      const data = res.data
      context.commit('deleteItem', item)
    } catch (e) {
      if (e.response.status == 403) {
        throw "У вас нет доступа или залогинтесь опять"
      }
      throw e.response.data
    }
  },
  async getToDoFromServer(context) {
    try{
      const result = await api.getToDo()
      const data = result.data
      context.commit('setToDo', data)
    }catch (e) {
      if (e.response.status == 403) {
        throw "У вас нет доступа или залогинтесь опять"
      }
      throw e.response.data
    }

  }

}

