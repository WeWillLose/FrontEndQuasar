export default {
  editedIndex: -1,
  editedItem: {
    proof: "",
    score: 0,
  },
  defaultItem: {
    proof: "",
    score: 0,
  },
  columns: [
    {
      name: "coment",
      required: true,
      label: "Коментарии",
      align: "left",
      field:"coment"
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
    {
      proof: "",
      score: 0,
    },
  ]
};
