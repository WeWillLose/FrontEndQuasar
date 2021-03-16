export default {
  setTablesData:(state,data) =>{
    if (data.editedIndex > -1) {
      Object.assign(state.rows[data.editedIndex], data.editedItem);
    } else {
      state.rows.push(data.editedItem);
    }
  },
}
