export default {
  name:'technologies',
  editedIndex: -1,
  editedItem: {
    name: "",
    application: "",
    score: 0,
  },
  defaultItem: {
    name: "",
    application: "",
    score: 0,
  },
  columns: [
    {
      name: "name",
      label: "Название технологии",
      align: "left",
      field:"name"
    },
    {
      name: "application",
      label: "",
      align: "center",
      field:"application"
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
      name: "Практическое применение",
      application: "",
      score: 0,
    },

  ]
};
