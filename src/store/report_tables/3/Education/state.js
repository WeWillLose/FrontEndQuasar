export default {
  name:'education',
  editedIndex: -1,
  editedItem: {
    name: "",
    score: 0,
  },
  defaultItem: {
    name: "",
    score: 0,
  },
  columns: [
    {
      name: "name",
      label: "Наименование методической работы",
      align: "center",
      field:"name"
    },
    {
      name: "score",
      align: "center",
      label: "Баллы",
      field: "score",
      style: "width:100px"
    },
  ],
  rows: [

  ]
};
