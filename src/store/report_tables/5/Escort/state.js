export default {
  editedIndex: -1,
  editedItem: {
    role: "",
    score: 0,
  },
  defaultItem: {
    role: "",
    score: 0,
  },
  columns: [
    {
      name: "role",
      label: "Роль преподавателя в сопровождении обучающихся в учебном процессе и внеклассной работе",
      align: "center",
      field:"institutions"
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
      role: "",
      score: 0,
    },
  ]
};
