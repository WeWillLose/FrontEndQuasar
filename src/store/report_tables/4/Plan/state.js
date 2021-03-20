export default {
  name:'plan',
  editedIndex: -1,
  editedItem: {
    level: "",
    score: 0,
  },
  defaultItem: {
    level: "",
    score: 0,
  },
  columns: [
    {
      name: "level",
      label: "Уровень проработанности документа, концепции воспитательной работы",
      align: "center",
      field:"level"
    },
    {
      name: "score",
      align: "right",
      label: "Баллы",
      field: "score",
      style: "width:100px"
    },
  ],
  rows: [

  ]
};
