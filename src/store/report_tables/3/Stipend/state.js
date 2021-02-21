export default {
  editedIndex: -1,
  editedItem: {
    title: "",
    quantity: 0,
    score: 0,
  },
  defaultItem: {
    title: "",
    quantity: 0,
    score: 0,
  },
  columns: [
    {
      name: "title",
      label: "Название",
      align: "center",
      field:"title"
    },
    {
      name: "quantity",
      align: "Количество",
      label: "Характеристика состояния",
      field: "quantity",
    },
    {
      name: "score",
      required: true,
      align: "center",
      label: "Баллы",
      field: "score",
      style: "width:100px"
    },
  ],
  rows: [
    {
      title: "",
      quantity: 0,
      score: 0,
    },
  ]
};
