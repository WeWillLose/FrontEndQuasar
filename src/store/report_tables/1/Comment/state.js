export default {
  name:'comment',
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
      name: "comment",
      required: true,
      label: "Коментарии",
      align: "left",
      field:"comment"
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
    }
  ]
};
