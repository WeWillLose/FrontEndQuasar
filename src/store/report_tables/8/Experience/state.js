export default {
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
      label: "Название мероприятия, издания",
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
      name: "Уровень",
      application: "",
      score: 0,
    },
    {
      name: "Тема выступления, публикации",
      application: "",
      score: 0,
    },
  ]
};
